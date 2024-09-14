const express = require("express");
const router = express.Router();
const authenticateToken = require("../middlewares/authMiddleware");

router.get("/protected-route", authenticateToken, (req, res) => {
  // Handle the protected route
  res.json({ message: "This is a protected route" });
});

module.exports = router;
