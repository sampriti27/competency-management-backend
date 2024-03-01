'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Project.init({
    position: DataTypes.STRING,
    title: DataTypes.STRING,
    techStack: DataTypes.STRING,
    status: DataTypes.ENUM('pending','completed'),
    type: DataTypes.ENUM('full-time','part-time','remote','internship')
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};