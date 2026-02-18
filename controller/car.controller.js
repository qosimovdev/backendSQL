const { Car } = require("../models")

exports.addCar = async (req, res) => {
    try {
        const car = await Car.create(req.body)
        res.status(201).json({
            success: true,
            message: "Car created",
            car
        })
    } catch (error) {
        console.error("Car create error: ", error);
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        })
    }
}