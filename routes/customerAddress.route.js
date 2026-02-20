const router = require("express").Router()
const customerAddressController = require("../controller/customerAddress.controller")

/**
 * @swagger
 * tags:
 *   name: CustomerAddress
 *   description: Customer address management
 */

/**
 * @swagger
 * /api/customer-address:
 *   post:
 *     tags: [CustomerAddress]
 *     summary: Create a new customer address
 *     requestBody:
 *       required: true
 *       content:   
 *         application/json:  
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:    
 *                 type: number
 *               car_id:
 *                 type: number
 *               street:
 *                 type: string
 *               house:
 *                 type: string
 *               flat:
 *                 type: string
 *               location:
 *                 type: string
 *               info:
 *                 type: string
 *     responses:
 *       201:
 *         description: Customer address created successfully
 *       500:
 *         description: Server error
 */
router.post("/", customerAddressController.createCustomerAddress)

/**
 * @swagger
 * /api/customer-address:
 *   get:
 *     tags: [CustomerAddress]
 *     summary: Get all customer addresses
 *     responses:
 *       200:
 *         description: List of customer addresses
 *       500:
 *         description: Server error
 */
router.get("/", customerAddressController.getCustomerAddresses)

/**
 * @swagger
 * /api/customer-address/{id}:
 *   get:
 *     tags: [CustomerAddress]
 *     summary: Get a customer address by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Customer address details
 *       404:
 *         description: Customer address not found
 *       500:
 *         description: Server error
 */
router.get("/:id", customerAddressController.getCustomerAddressById)

module.exports = router