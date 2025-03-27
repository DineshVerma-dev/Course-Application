import express from "express"
import userRouter from "./routes/userRoute.js"
import courseRouter  from "./routes/courseRoute.js"

const app = express()
app.use(express.json())
const PORT = 3000;

app.use("/api/v1/user",userRouter)
app.use("/api/v1/courses",courseRouter)




app.listen(PORT,() => {
    console.log(`app is listing at http://localhost:${PORT}`)
})