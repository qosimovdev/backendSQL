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

/**
 * @swagger
 * /api/customer:
 *   get:
 *     tags: [Customer]
 *     summary: Get all cutomers
 *     responses:
 *       200:
 *         description: Olindi
 *       500:
 *         description: Server error
 */
router.get("/", customerController.getCustomers)

/**
 * @swagger
 * /api/customer/{id}:
 *   get:
 *     tags: [Customer]
 *     summary: Get one customer
 *     parameters: 
 *       - in: path
 *         name: id
 *         required: true
 *         schema: 
 *           type: integer
 *         description: Get customer by id
 *     responses:
 *       200:
 *         description: Customer found
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
router.get("/:id", customerController.getCustomer)

/**
 * @swagger
 * /api/customer/{id}:
 *   patch:
 *     tags: [Customer]
 *     summary: Update cutomer by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Customer id
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
 *       200:
 *         description: Updated
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
router.patch("/:id", customerController.updateCustomer)

/**
 * @swagger
 * /api/customer/{id}:
 *   delete:
 *     tags: [Customer]
 *     summary: Customer delete
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Customer id
 *     responses:
 *       200:
 *         description: Customer deletes successfully
 *       404:
 *         description: Not found
 *       500:
 *         description: Server error
 */
router.delete("/:id", customerController.deleteCutomer)
module.exports = router