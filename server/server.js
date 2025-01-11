import express from "express"
import dotenv from "dotenv"
import connectDB from "./utils/db.js"
import chalk from "chalk"
import userRouter from "./routes/user.routes.js"
import cookieParser from "cookie-parser"
import cors from "cors"
// import bodyParser from "body-parser"

dotenv.config()
connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(cors({
   origin:"https://auth-frontend-6qma.onrender.com",
   credentials: true
}))
// app.use(bodyParser.urlencoded({extended:true}))

app.use("/api/v1/user" , userRouter)
const PORT = process.env.PORT || 3000
app.listen(PORT , () => {
   console.log(chalk.yellow(`Server is Listening at the port : ${PORT}`))
})
