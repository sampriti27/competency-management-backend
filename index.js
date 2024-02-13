//pacakage imports
import express from "express";
import cors from "cors";

//function imports
import { connection } from "./postgresql.js";

//route imports
import authRoutes from "./routes/authRoutes.js"; 

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/v1/auth", authRoutes);



connection();

app.listen (8800, ()=>{
    console.log ("Connected to Backend");
})