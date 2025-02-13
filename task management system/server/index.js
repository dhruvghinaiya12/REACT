const express=require("express");
const cors=require("cors");
const db = require("./config/db");
const AppRoute=require("./routes/index");
const decodeToken = require("./middleware/CheckToken");

require("dotenv").config();

const port=process.env.PORT || 5050
const app=express()

app.use(cors({
    origin: "http://localhost:5173", 
}));

app.use(express.json())


app.use("/api/v1",decodeToken,AppRoute)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
   db()
})