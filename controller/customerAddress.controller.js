const { CustomerAddress } = require("../models")
const { Customer } = require("../models")
const { Car } = require("../models")

exports.createCustomerAddress = async (req, res) => {
    try {
        const { customer_id, car_id, street, house, flat, location, info } = req.body
        const newCustomerAddress = await CustomerAddress.create({
            customer_id,
            car_id,
            street,
            house,
            flat,
            location,
            info
        })
        res.status(201).json(newCustomerAddress)
    } catch (error) {
        res.status(500).json({ error: "Failed create customer address" })
    }
}

exports.getCustomerAddresses = async (req, res) => {
    try {
        const customerAddresses = await CustomerAddress.findAll({
            include: [
                { model: Customer, as: "customer" },
                { model: Car, as: "car" }
            ]
        })
        res.status(200).json(customerAddresses)
    } catch (error) {
        console.error(error);

        res.status(500).json({ error: "Failed get customer addresses" })
    }
}

exports.getCustomerAddressById = async (req, res) => {
    try {
        const customerAddress = await CustomerAddress.findByPk(req.params.id, {
            include: [
                { model: Customer, as: "customer" },
                { model: Car, as: "car" }
            ]
        })
        if (!customerAddress) {
            return res.status(404).json({ error: "Customer address not found" })
        }
        res.status(200).json(customerAddress)
    } catch (error) {
        res.status(500).json({ error: "Failed get customer address" })
    }
}

exports.updateCustomerAddress = async (req, res) => {
    try {
        const { customer_id, car_id, street, house, flat, location, info } = req.body
        const customerAddress = await CustomerAddress.findByPk(req.params.id)
        if (!customerAddress) {
            return res.status(404).json({ error: "Customer address not found" })
        }
        await customerAddress.update({
            customer_id,
            car_id,
            street,
            house,
            flat,
            location,
            info
        })
        res.status(200).json(customerAddress)
    } catch (error) {
        res.status(500).json({ error: "Failed update customer address" })
    }
}

exports.deleteCustomerAddress = async (req, res) => {
    try {
        const { id } = req.params
        const customerAddress = await CustomerAddress.findByPk(id)
        if (!customerAddress) {
            return res.status(404).json({ error: "Customer address not found" })
        }
        await customerAddress.destroy()
        res.status(200).json({ message: "Customer address deleted" })
    } catch (error) {
        res.status(500).json({ error: "Failed delete customer address" })
    }
}