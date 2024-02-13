import { Sequelize, DataTypes } from "sequelize";

export const userModel = (sequelize) => {
    return sequelize.define("Users", {
        firstName : {
            type: DataTypes.STRING
        },
        secondName : {
            type: DataTypes.STRING
        },
        phone : {
            type :  DataTypes.STRING
        },
        email : {
            type :  DataTypes.STRING
        }, 
        password : {
            type:  DataTypes.STRING
        }
    });
}