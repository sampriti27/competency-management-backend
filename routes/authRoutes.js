import express from "express";
import { loginController, logoutController, registerController} from "../controllers/authController.js";

//router object
const router = express.Router();

//REGISTER || POST
router.post("/register", registerController)

//LOGIN || POST
router.post("/login", loginController)

//LOGOUT || GET
router.get("/logout", logoutController)
export default router;