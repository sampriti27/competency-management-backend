const db = require("../models/index");
const {Sequelize} = require("sequelize");
const Project = require("../models/project")(db.sequelize, Sequelize.DataTypes);

//***************** ADD PROJECT CONTROLLER **************************

const addProject = async (req, res) => {
    const { position, title, techStack, status, type } = req.body;

    // Validate if all required fields are provided
    if (!position || !title || !techStack || !status || !type) {
        return res.status(400).json({ success: false, message: "Please provide all the fields!" });
    }

    // Check for existing project with the same title
    try {
        const existingProject = await Project.findOne({ where: { title: title } });

        // If project with the same title exists, return error
        if (existingProject) {
            return res.status(400).json({ success: false, message: "This project already exists!" });
        }
    } catch (error) {
        console.log(error);
    }

    // Create new project
    try {
        const newProject = await Project.create({ position, title, techStack, status, type });
        
        // Send success response with the newly created project
        res.status(201).json({ success: true, newProject });
    } catch (error) {
        // If there's an error during project creation, return error message
        res.status(400).json({ success: false, error: error.message });
    }
}


//******************** GET ALL PROJECTS ***********************

const getAllProjects = async (req, res) => {
    try {
        const allProjects = await Project.findAll(); 
        
        // Map projects and convert techStack string to array for each project
        const projectsWithTechStackArray = allProjects.map(project => ({
            ...project.dataValues,
            techStack: project.techStack.split(',')
        }));

        // Send the response
        res.status(200).json({ success: true, allProjects: projectsWithTechStackArray });
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: error.message});
    }
}

//******************** GET A PROJECT***********************

const getProject = async (req, res) => {
    const { id } = req.params;

    try {
        // Find the project with the given id
        const project = await Project.findByPk(id);

        // If project does not exist, throw an error
        if (!project) {
            return res.status(400).json({ success: false, message: "Project does not exist!" });
        }

        // Split the techStack string into techStack array
        const techStackArray = project.techStack.split(',');

        // Send the project response
        res.status(200).json({ success: true, project: { ...project.dataValues, techStack: techStackArray } });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}


//******************** UPDATE A PROJECT***********************
const updateProject = async (req, res) => {
    const { id } = req.params;

    const { position, title, techStack, status, type } = req.body;

    try {
        // Find the project with the given id
        let project = await Project.findByPk(id);

        // If project does not exist, throw an error
        if (!project) {
            return res.status(400).json({ success: false, message: "Project does not exist!" });
        }

        // Update project attributes if they are provided in the request body
        if (position) project.position = position;
        if (title) project.title = title;
        if (techStack) project.techStack = techStack;
        if (status) project.status = status;
        if (type) project.type = type;

        // Save the updated project
        await project.save();

        // Split the techStack string into techStack array
        const techStackArray = project.techStack.split(',');

        // Send the updated project details along with techStack array in the response
        res.status(200).json({ success: true, project: { ...project.dataValues, techStack: techStackArray } });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

//******************** DELETE A PROJECT***********************

const deleteProject = async (req, res) => {
    const { id } = req.params;

    try {
        // Find the project with the given id
        const project = await Project.findByPk(id);

        // If project does not exist, throw an error
        if (!project) {
            return res.status(400).json({ success: false, message: "Project does not exist!" });
        }

        // Delete the project
        await project.destroy();

        res.status(200).json({ success: true, message: "Project deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}




module.exports = {addProject, getAllProjects, getProject, updateProject, deleteProject};