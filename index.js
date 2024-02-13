//pacakage imports
import express from "express";
import cors from "cors";

//function imports
import { connection } from "./postgresql.js";

const app = express();

//middlewares
app.use(cors());
app.use(express.json());



connection();

app.listen (8800, ()=>{
    console.log ("Connected to Backend");
})