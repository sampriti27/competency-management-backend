const express = require("express");
const userAuth = require("../middlewares/authMiddleware");
const userRole = require("../middlewares/roleMiddleware");

const {addProject, getAllProjects, getProject, updateProject, deleteProject} = require("../controllers/projectController");

//router object
const router = express.Router();

//ADD PROJECT || POST
router.post("/", userAuth, userRole, addProject);

//GET ALL PROJECTS || GET
router.get("/", userAuth, getAllProjects);

//GET A SINGLE PROJECT || GET
router.get("/:id", userAuth, getProject);

//UPDATE PROJECT || PUT
router.put("/:id", userAuth, userRole, updateProject);

//DELETE PROJECT || DELETE
router.delete("/:id", userAuth, userRole, deleteProject);

module.exports = router;