const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");

//router object
const router = express.Router();

//REGISTER || POST
router.post("/register", registerUser)

//LOGIN || POST
router.post("/login", loginUser)

//LOGOUT || GET
// router.get("/logout", logoutController)

module.exports = router;