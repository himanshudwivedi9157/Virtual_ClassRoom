// routes/userRoutes.js
const express = require("express");
const { getUserProfile } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.use(authMiddleware);
router.get("/profile", getUserProfile);

module.exports = router;
