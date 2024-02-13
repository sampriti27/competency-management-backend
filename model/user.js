import { Sequelize, DataTypes } from "sequelize";

export const userModel = (sequelize) => {
    return sequelize.define("Users", {
        firstName : {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName : {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone : {
            type :  DataTypes.STRING,
            allowNull: false
        },
        email : {
            type :  DataTypes.STRING,
            allowNull: false
        }, 
        password : {
            type:  DataTypes.STRING,
            allowNull: false
        },
        manager:{
            type: DataTypes.STRING,
            
        },
        role:{
            type: DataTypes.ENUM('manager', 'employee'),
            allowNull: false
        }
    });
}

export const User = userModel;