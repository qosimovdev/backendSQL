const express = require("express")
const router = express.Router()
const userController = require("../controller/user.controller")
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User managment
 */
/**
 * @swagger
 * /api/users:
 *   post:
 *    tags: [Users]
 *    summary: Create a new user
 *    requestBody: 
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
 *               password:
 *                 type: string
 *    responses: 
 *      201:
 *        description: User created successfully
 *      400:
 *        description: Invalid input data
 *      500:
 *        description: Server error
 */
router.post("/", userController.createUser)

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *    tags: [Users]
 *    summary: Delete user ID
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: User ID
 *    responses: 
 *      200:
 *        description: User deleted successfully
 *      400:
 *        description: User not found
 *      500: 
 *        description: Server error
 */
router.delete("/api/users/:id", userController.deleteUser)

/**
 * @swagger
 * /api/users/{id}:
 *   put:   
 *     tags: [Users]
 *     summary: Update user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: 
 *           type: integer
 *         description: Foydalanuvchi ID raqami
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
 *               password: 
 *                 type: string
 *     responses:
 *       200:
 *         description: User update successfully
 *       404: 
 *         description: User not found
 *       500: 
 *         description: Server error
 */
module.exports = router