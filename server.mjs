import express from "express";
import "dotenv/config";
import cors from "cors";

// routers
import authRouter from "./routes/auth.mjs";

const app = express()

const PORT = process.env.PORT || 8000

// Configuring the server to accept and parse JSON data.
app.use(cors());
app.use(express.json())

// Connecting the router to the server
app.use("/api", authRouter)

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})