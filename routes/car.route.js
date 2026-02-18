const router = require("express").Router()
const carController = require("../controller/car.controller")

/**
 * @swagger
 * tags:
 *   name: Car
 *   description: Car managment
 */

/**
 * @swagger
 * /api/car:
 *   post:
 *     tags: [Car]
 *     summary: Create car
 *     requestBody: 
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               brand:
 *                 type: string
 *               model:
 *                 type: string
 *               year: 
 *                 type: number
 *               price:     
 *                 type: number
 *     responses:
 *       201:
 *         description: Created successfully
 *       400:  
 *         description: Validation error
 *       500:
 *         description: Server error
 */
router.post("/", carController.addCar)

module.exports = router