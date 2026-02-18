const { Op } = require("sequelize")
const { User } = require("../models")
const { Customer } = require("../models")
const { Car } = require("../models")
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

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            include: [
                { model: Customer, as: "customer" },
                { model: Car, as: "car" }
            ]

        })
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: `Server error: ${error.message}` })
    }
}

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, {
            include: [
                { model: Customer, as: 'customer' }
            ]
        })
        if (!user) return res.status(404).json({ message: "User not found" })
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: `Server error: ${error.message}` })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        if (!user) return res.status(404).json({ message: "User not found" })
        const { error } = validateUser(req.body)
        if (error) {
            return res.status(400).json({
                success: false,
                message: "Validatsiya xatosi",
                errors: error.details.map((err) => err.message)
            })
        }
        await user.update(req.body)
        res.status(200).json({ message: "User update succesfull" })
    } catch (error) {
        res.status(500).json({ message: `Server error: ${error.message}` })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        if (!user) return res.status(404).json({ message: 'User not foun' })
        await user.destroy()
        res.status(200).json({ message: "User delete successfully" })
    } catch (error) {
        res.status(500).json({ message: `Server error: ${error.message}` })
    }
}

exports.searchUsers = async (req, res) => {
    try {
        const { query } = req.query

        if (!query)
            return res.status(400).json({ message: "Search query is required" })
        const users = await User.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.iLike]: `%${query}%` } },
                    { email: { [Op.iLike]: `%${query}%` } }
                ]
            }
        })
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}