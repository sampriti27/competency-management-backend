//pacakage imports
const express = require('express');
const db = require("./models/index");
const cors = require("cors");



//route imports
const authRoutes = require("./routes/authRoutes");

const app = express();

//connect to db
db.isConnected();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/v1/auth", authRoutes);



app.listen (8800, ()=>{
    console.log ("Connected to Backend");
})