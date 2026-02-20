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

exports.getCars = async (req, res) => {
    try {
        const cars = await Car.findAll()
        res.status(200).json({
            success: true,
            message: "Cars get successfully",
            cars
        })
    } catch (error) {
        console.error("Get cars error: ", error);
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        })
    }
}

exports.getCarById = async (req, res) => {
    try {
        const car = await Car.findByPk(req.params.id)
        if (!car) {
            return res.status(404).json({
                success: false,
                message: "Car not found"
            })
        }
        res.status(200).json({
            success: true,
            message: "car get by ID",
            car
        })
    } catch (error) {
        console.error("Get car by ID error: ", error);
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        })
    }
}

exports.updateCar = async (req, res) => {
    try {
        const car = await Car.findByPk(req.params.id)
        if (!car) {
            return res.status(404).json({
                success: false,
                message: "Car not found"
            })
        }
        await car.update(req.body)
        res.status(200).json({
            success: true,
            message: "Car updated",
            car
        })
    } catch (error) {
        console.error("Update car error: ", error);
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        })
    }
}

exports.deleteCar = async (req, res) => {
    try {
        const car = await Car.findByPk(req.params.id)
        if (!car) {
            return res.status(404).json({
                success: false,
                message: "Car not found"
            })
        }
        await car.destroy()
        res.status(200).json({
            success: true,
            message: "Car deleted"
        })
    } catch (error) {
        console.error("Delete car error: ", error);
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        })
    }
}   