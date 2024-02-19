const db = require("../models/index");
const {Sequelize} = require("sequelize");
const User = require("../models/user")(db.sequelize, Sequelize.DataTypes);
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async(req, res) => {

    const {firstName, lastName, phone, email, password} = req.body;
        
    //validate
    if(!firstName || !lastName || !phone || !email || !password){
        return res.status(400).json({auth: false, message: "Bad Request! Please provide all the details"});
    }

    //validate email 
    const validEmail = validator.isEmail(email);

    if(!validEmail){
        return res.status(400).json({auth : false, message: "Please provide valid emailId. e.g: abc@example.com"});
    }
    

    //check existing email
    try {
        const existingEmail = await User.findOne({where: {email : email}});

        if(existingEmail){
            return res.status(400).json({auth: false, message: "This email already exist!"});
        }
    } catch (error) {
        console.log(error);
        
    }

    //hash password
    const hashedPassword =  await bcrypt.hash(password, 10);
    console.log(hashedPassword);


    //create new user
    try {
        const role = "employee";
        const newUser = await User.create({firstName,lastName,email,phone,password:hashedPassword, role}, { validate: true });

        newUser.password = undefined;
        res.status(201).json({auth: true, newUser});
    } catch (error) {
       
        res.status(400).json({ error: error.message });
    }


}

const loginUser = async(req, res) => {

    const {email, password} = req.body;

    //validate

    if(!email || !password){
        return res.status(400).json({auth: false, message: "Please fill all the credentials"});
    }

    //verify email
    const existingUser = await User.findOne({where: {email: email}});

    if(!existingUser){
        return res.status(401).json({auth: false, message: "Invalid Credentials!"});
    }

    //verify password
    const isMatch = await bcrypt.compare(password, existingUser.password);

    if(!isMatch){
        return res.status(401).json({auth: false, message: "Invalid Credentials!"});
    }


    //generate token

    //set token in cookie

    //login successful
}

module.exports = {registerUser, loginUser};