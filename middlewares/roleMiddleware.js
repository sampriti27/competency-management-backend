const db = require("../models/index");
const { Sequelize } = require("sequelize");
const User = require("../models/user")(db.sequelize, Sequelize.DataTypes);

// Middleware function to check if the user has admin role

const userRole = async (req, res, next) => {
    try {
        // Find the user by their ID
        const user = await User.findByPk(req.user.id);

        // Check if the user role is not admin, throw an error
        if (user.role !== 'admin') {
            throw new Error();
        }

        // If the user is an admin, proceed to the next middleware or route handler
        next();
    } catch (error) {
        console.log(error);
        res.status(403).json({ message: "Denied Access! You are not authorized to perform this action!" });
    }
}

module.exports = userRole;
