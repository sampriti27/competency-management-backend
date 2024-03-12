'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Skills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      skill_name: {
        type: Sequelize.STRING
      },
      is_cert: {
        type: Sequelize.BOOLEAN
      },
      up_certificate: {
        type: Sequelize.STRING
      },
      prj_name: {
        type: Sequelize.STRING
      },
      prj_desc: {
        type: Sequelize.STRING
      },
      skill_level: {
        type: Sequelize.ENUM('Beginner', 'Intermediate', 'Advanced'),
        defaultValue: 'Beginner'
      },
      approval_status: {
        type: Sequelize.ENUM('Pending', 'Approved', 'Rejected'),
        defaultValue: 'Pending'
      },
      employee_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Skills');
  }
};
