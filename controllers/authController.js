import { User } from '../model/user.js'
import bcrypt from "bcrypt";

export const registerController = async(req, res) => {
   
    const { firstName, lastName, phone, email, password, manager, role } = req.body;

     //validate
     if(!firstName || !lastName || !phone || !email || !password || !manager || !role){
        return res.status(400).json({error: 'Please provide all the fileds!'});
     }

    try {
        // Check for existing user
        const existingUser = await User.findOne({ where: { email: email } });

        if (existingUser) {
            return res.status(400).json({ error: 'User with this email already exists.' });
        }

        //hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = await userModel.create({
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
            password: hashedPassword,
            manager: manager,
            role: role
        });

        //Return user details
        return res.status(201).json(newUser);
    } catch (error) {
        console.error('Error registering user:', error);
        return res.status(500).json({ error: 'Internal server error.' });
    }

}

export const loginController = async(req, res) => {
   
    const {email, password} = req.body;

    //validate 
    if(!email || !password){
        res.status(400).json({message: "Please provide all the fields!"});
    }

    //check existing user
    try {
        // Find user by email
        const user = await User.findOne({ where: { email: email } });

        // Check if user exists
        if (!user) {

            return res.status(404).json({ error: 'User not found.' });
        }
    }
    catch(error){
        console.log(error);
    }



}

export const logoutController = async (req, res) => {
    res.json("this is logout route!");
}