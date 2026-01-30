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