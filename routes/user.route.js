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
 * /api/users:
 *   get:
 *     tags: [Users]
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: Olindi
 *       500:
 *         description: Server error
 */
router.get("/", userController.getUsers)

/**
* @swagger
* /api/users/search:
*   get:
*     tags: [Users]
*     summary: Name yoki email orqali qidirish
*     parameters:
*       - in: query
*         name: query
*         required: true
*         schema:
*           type: string
*         description: Qidiruv so'zi
*     responses:
*       200:
*         description: Topilgan foydalanuvchilar
*       400:
*         description: Qidiruv kaliti bo'sh bo'lishi mumkin emas
*       500:
*         description: Serverda muammo
*/
router.get("/search", userController.searchUsers);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     tags: [Users]
 *     summary: Get one user by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: 
 *           type: integer
 *         description: Get user by id
 *     responses:
 *       200:
 *         description: User found
 *       404:
 *         description: Not found
 *       500: 
 *         description: Server error
 */
router.get("/:id", userController.getUserById)

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
router.get("/:id", userController.updateUser)

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
 *      404:
 *        description: User not found
 *      500: 
 *        description: Server error
 */
router.delete("/:id", userController.deleteUser)


module.exports = router