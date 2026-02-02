const { Op } = require("sequelize")
const { User } = require("../models")
const { validateUser } = require("../validation/userValidation")

exports.createUser = async (req, res) => {
    try {
        const { error } = validateUser(req.body)
        if (error) {
            return res.status(400).json({
                success: false,
                message: "Validatsiya xatosi",
                error: error.details.map((err) => err.message)
            })
        }

        const user = await User.create(req.body)
        res.status(201).json({
            success: true,
            message: "Foydalanuvchi muvaffaqiyatli yaratildi",
            data: user
        })
    } catch (err) {
        console.error("Server error: ", err);

        if (err.name === "SequelizeUniqueConstraintError") {
            return res.status(400).json({
                success: false,
                message: "Bu email allaqachon mavjud"
            })
        }

        if (err.name === "SequelizeValidationError") {
            return res.status(400).json({
                success: false,
                message: "Malumotlar validatsiyadan o'tmadi",
                errors: err.errors.map((e) => e.message)
            })
        }

        res.status(500).json({
            success: false,
            message: "Server error",
            error: err.message
        })
    }
}