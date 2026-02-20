const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const { sequelize } = require("./models")

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5577

app.use(express.json())
app.use(cors({ origin: "*" }))

sequelize
    .sync()
    .then(() => {
        console.log("DB ulandi");
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);

        })
    })
    .catch((err) => console.error("DB error: ", err))

const userRoutes = require("./routes/user.route")
const customerRoutes = require("./routes/customer.route")
const carRoutes = require("./routes/car.route")
const customerAddressRoutes = require("./routes/customerAddress.route")

app.use("/api/users", userRoutes)
app.use("/api/customer", customerRoutes)
app.use("/api/car", carRoutes)
app.use("/api/customer-address", customerAddressRoutes)


const { swaggerSpec, swaggerUi } = require("./swagger/swagger")

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
