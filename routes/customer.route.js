const router = require("express").Router()
const customerController = require("../controller/customer.controller")

/**
 * @swagger
 * tags:
 *   name: Customer
 *   description: Customer managment
 */

/**
 * @swagger
 * /api/customer:
 *   post: 
 *     tags: [Customer]
 *     summary: Create new customer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties: 
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               address: 
 *                 type: string
 *     responses:
 *       201:
 *         description: Customer created
 *       400: 
 *         description: Invalide input data
 *       500:
 *         description: Server error 
 */
router.post("/", customerController.createCustomer)


module.exports = router