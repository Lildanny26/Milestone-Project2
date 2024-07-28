import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from './routes/users.js'

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

const uri = "mongodb+srv://danieltech:Lola1998@recipes.rmbi32g.mongodb.net/recipes?retryWrites=true&w=majority&appName=recipes";
mongoose.connect(uri)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });

app.listen(3001, () => console.log("SERVER START"));