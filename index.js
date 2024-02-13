import express from "express";
import { connection } from "./postgresql.js";

const app = express();

connection();

app.listen (8800, ()=>{
    console.log ("Connected to Backend");
})