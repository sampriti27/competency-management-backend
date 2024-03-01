const db = require("../models/index");
const {Sequelize} = require("sequelize");
const Project = require("../models/project")(db.sequelize, Sequelize.DataTypes);

