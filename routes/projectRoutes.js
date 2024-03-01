const express = require("express");
const userAuth = require("../middlewares/authMiddleware");
const userRole = require("../middlewares/roleMiddleware");

//router object
const router = express.Router();

//ADD PROJECT || POST
router.post("/", userAuth, userRole, (req, res) => {
    res.json("This is add project route!");
})

//GET ALL PROJECTS || GET
router.get("/", userAuth, (req, res) => {
    res.json("This is get all projects route!");
})
//GET A SINGLE PROJECT || GET
router.get("/:id", userAuth, (req, res) => {
    res.json("This is get a single project route!");
})
//UPDATE PROJECT || PUT
router.put("/:id", userAuth, userRole, (req, res) => {
    res.json("This is update project route!");
})
//DELETE PROJECT || DELETE
router.delete("/:id", userAuth, userRole, (req, res) => {
    res.json("This is delete project route!");
})

module.exports = router;