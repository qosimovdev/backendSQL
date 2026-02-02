const express = require("express")
const router = express.Router()
const { createUser } = require("../controller/user.controller")

router.post("/users", createUser)

module.exports = router