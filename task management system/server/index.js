const express=require("express");
const cors=require("cors");
const db = require("./config/db");
const AppRoute=require("./routes/index");
const decodeToken = require("./middleware/CheckToken");

require("dotenv").config();

const port=process.env.PORT || 5050
const app=express()

app.use(cors({
    origin: "*", 
}));

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json({ message: "Server is live and reachable!" });
  });

app.use("/",decodeToken,AppRoute)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
   db()
})