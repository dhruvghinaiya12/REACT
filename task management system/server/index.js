const express=require("express");
const cors=require("cors");
const db = require("./config/db");

require("dotenv").config();

const port=process.env.PORT || 5050
const app=express()

app.use(cors({
    origin: "http://localhost:5173", 
}));
app.use(express.json())
app.get("/",(req, res) =>{
    res.send("Hello World!")
})

// app.use("/api/v1",AppRoutes)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
   db()
})