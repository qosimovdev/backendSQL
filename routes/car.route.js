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

/**
 * @swagger
 * /api/car:
 *   get:
 *     tags: [Car]
 *     summary: Get all cars
 *     responses:
 *       200:
 *         description: Cars get successfully
 *       500:
 *         description: Server error
 */
router.get("/", carController.getCars)

/**
 * @swagger
 * /api/car/{id}:
 *   get:
 *     tags: [Car]
 *     summary: Get car by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Car get by ID
 *       404:
 *         description: Car not found
 *       500:
 *         description: Server error
 */
router.get("/:id", carController.getCarById)

/**
 * @swagger
 * /api/car/{id}:
 *   patch:
 *     tags: [Car]
 *     summary: Update car by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
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
 *       200:    
 *         description: Car updated
 *       404:
 *         description: Car not found
 *       500:
 *         description: Server error
 */
router.patch("/:id", carController.updateCar)

/**
 * @swagger
 * /api/car/{id}:
 *  delete: 
 *    tags: [Car]
 *    summary: Delete car by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: number
 *    responses:
 *      200:
 *        description: Car deleted successfully
 *      404:
 *        description: Car not found
 *      500:
 *        description: Server error
 */
router.delete("/:id", carController.deleteCar)

module.exports = router