import express from "express"
import usersRoutes from "./routes/users.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", usersRoutes)

app.listen(8800)