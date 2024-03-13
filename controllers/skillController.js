const express = require('express');
const db = require("../models/index");
const {Sequelize} = require("sequelize");
const Skill = require('../models/skill')(db.sequelize, Sequelize.DataTypes);

// Get all skills
const getSkills = async (req, res) => {
    try {
        const skills = await Skill.findAll();
        res.json(skills);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get one skill
const employeeSkill = async (req, res) => {
    try {
        // const skill = await Skill.findByPk(req.params.id);
        const employeeId = req.params.id;
        const skill = await Skill.findAll({
            where: {
                employee_id: employeeId
            }})
        if (skill === null) {
            return res.status(404).json({ message: 'Skill not found' });
        }
        res.json(skill);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create skill
const addSkill = async (req, res) => {
    const { id,skill_name, skill_level, is_cert, up_certificate, prj_name, prj_desc,employee_id } = req.body;
    try {
        const newSkill = await Skill.create({ id,skill_name, skill_level, is_cert, up_certificate, prj_name, prj_desc, employee_id  });
        res.status(201).json(newSkill);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update skill
const updateSkill = async (req, res) => {
    const { skill_name, skill_level, is_cert, up_certificate, prj_name, prj_desc, employee_id  } = req.body;
    try {
        const skill = await Skill.findByPk(req.params.id);
        if (skill === null) {
            return res.status(404).json({ message: 'Skill not found' });
        }
        await skill.update({ skill_name, skill_level, is_cert, up_certificate, prj_name, prj_desc, employee_id  });
        res.json(skill);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete skill
const deleteSkill = async (req, res) => {
    try {
        const skill = await Skill.findByPk(req.params.id);
        if (skill === null) {
            return res.status(404).json({ message: 'Skill not found' });
        }
        await skill.destroy();
        res.json({ message: 'Skill deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {getSkills, employeeSkill, addSkill, updateSkill, deleteSkill };

