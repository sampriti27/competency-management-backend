'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Skill.init({
    skill_name: DataTypes.STRING,
    is_cert: DataTypes.BOOLEAN,
    up_certificate: DataTypes.STRING,
    prj_name: DataTypes.STRING,
    prj_desc: DataTypes.STRING,
    skill_level: DataTypes.STRING,
    approval_status: DataTypes.STRING,
    employee_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Skill',
  });
  return Skill;
};