//pacakage imports
const express = require('express');
const db = require("./models/index");
const cors = require("cors");
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');


//config dotenv
dotenv.config();

//route imports
const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const skillRoutes = require("./routes/skillRoutes");

const app = express();

//connect to db
db.isConnected();

//middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//main api end-point
app.get('/', (req, res) => {
    res.json({message: "this is the main api end-point!"});
})

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/project", projectRoutes);
app.use("/api/v1/skills", skillRoutes);


app.listen (8800, ()=>{
    console.log ("Connected to Backend");
})