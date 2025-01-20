const express=require("express")
const cors=require("cors")
const db = require("./config/db")
const UserRoutes = require("./routes/UserRoute")
const app = express()

const port = process.env.PORT || 5050

app.use(express.json())

app.use(cors({
    origin: "http://localhost:5173",
    
}))



app.use("/api/v1/user",UserRoutes)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
    db()
})