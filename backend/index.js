import express from "express"
import getUsers from "./routes/users.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", getUsers)

app.listen(8800)