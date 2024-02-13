import { Sequelize } from 'sequelize';
import { userModel } from './model/user.js';

const database = "cms";
const username = "cms";
const password = "1234";

export const connection = async () => {
    const sequelize = new Sequelize(database, username, password, {
        host: 'localhost',
        dialect: 'postgres',
    });

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        const User = userModel(sequelize);
        await sequelize.sync({force: true});
        console.log ("Table creation success");

      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    
}

