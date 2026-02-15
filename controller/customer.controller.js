const { Op, where } = require("sequelize")
const { Customer } = require("../models")

exports.createCustomer = async (req, res) => {
    try {
        const existedEmail = await Customer.findOne({
            where: { email: req.body.email }
        })
        if (existedEmail) return res.status(400).json({ success: false, message: "Existed email" })

        const customer = await Customer.create(req.body)
        res.status(201).json({ success: true, message: "Customer yaratildi", customer })
    } catch (error) {
        console.error("Server error: ", error);

        res.status(500).json({ success: false, message: "Server xatosi" })
    }
}