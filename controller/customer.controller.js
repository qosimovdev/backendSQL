const { Op } = require("sequelize")
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

exports.getCustomers = async (req, res) => {
    try {
        const customers = await Customer.findAll({})
        res.status(200).json({ success: true, message: "Customer list olindi", customers })
    } catch (error) {
        console.error("get customers da error: ", error);
        res.status(500).json({ success: false, message: "Server error" })
    }
}

exports.getCustomer = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id)
        if (!customer) return res.status(404).json({ success: false, message: "Customer topilmadi" })
        res.status(200).json({ success: true, message: "Olindi", customer })
    } catch (error) {
        console.error("Get by id error: ", error);
        res.status(500).json({ success: false, message: "Server error" })
    }
}

exports.updateCustomer = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id)
        if (!customer) return res.status(404).json({ success: false, message: "Customer not found" })
        const updatedCustomer = await customer.update(req.body)
        res.status(200).json({ success: true, message: "Updated", updatedCustomer })
    } catch (error) {
        console.error("Customer update error: ", error);
        res.status(500).json({ success: false, message: "Server error" })
    }
}

exports.deleteCutomer = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id)
        if (!customer) return res.status(404).json({ message: "Customer topilmadi" })
        await customer.destroy()
        res.status(200).json({ message: "Customer deleted" })
    } catch (error) {
        console.error("Customer delete error: ", error);
        res.status(500).json({ message: "Server error" })
    }
}