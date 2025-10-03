const express = require("express");
const userMiddleware = require("../middleware/userMiddleware");
const { getUser, createUser, updateUser, deleteUser } = require("../controllers/userControllers");
const router = express.Router();

router.get("/", getUser);
router.post("/", userMiddleware, createUser);
router.patch("/:id", userMiddleware, updateUser);
router.delete("/:id", deleteUser);

module.exports = router