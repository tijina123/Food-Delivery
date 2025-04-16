import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

// app config
const app = express();
app.use(cors());
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB();  // Call the function here

// API endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))  // To view image in the frontend

app.get("/", (req, res) => {
    res.send("API working");
});

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});

// mongodb+srv://tijinamariam:<db_password>@cluster0.x8jch.mongodb.net/?