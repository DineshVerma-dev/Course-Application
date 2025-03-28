import express from "express"
import userRouter from "./routes/userRoute.js"
import courseRouter  from "./routes/courseRoute.js"
import adminRouter from "./routes/adminRoute.js"
import connectDB from "./db.js"

const app = express()
app.use(express.json())
const PORT = 3000;
connectDB();

app.use("/api/v1/user",userRouter)
app.use("/api/v1/courses",courseRouter)
app.use("/api/v1/admin",adminRouter)



app.listen(PORT,() => {
    console.log(`app is listing at http://localhost:${PORT}`)
})