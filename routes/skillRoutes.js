const express = require("express");
const userAuth = require("../middlewares/authMiddleware");
const userRole = require("../middlewares/roleMiddleware");

const {getSkills, employeeSkill, addSkill, updateSkill, deleteSkill} = require("../controllers/skillController");

//router object
const router = express.Router();

//ADD SKILL || POST
router.post("/", addSkill);

//GET ALL SKILLS || GET
router.get("/", getSkills);

//GET A EMPLOYEE'S SKILL || GET
router.get("/:id", employeeSkill);

//UPDATE SKILL || PUT
router.put("/:id", updateSkill);

//DELETE SKILL || DELETE
router.delete("/:id", deleteSkill);

module.exports = router;