import express from "express"
import dotenv from "dotenv"
import authRoutes from "./route/auth.route.js"
import messageRoutes from "./route/message.route.js"


dotenv.config()


const PORT = process.env.PORT

const app = express()

app.use('/api/auth',authRoutes)
app.use('/api/message',messageRoutes)


app.listen(PORT,()=>{
    console.log("The server is running on the port : "+PORT)
})