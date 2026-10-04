import express from "express";
import { db } from "./config/db.js";
import { usersTable } from "./db/schema.js";
// import router from "./routes/userRoutes.js";
import userRouter from "./routes/userRoutes.js";
import errorHandling from "./middlewares/errorHandler.js";
const app = express();
const port = process.env.PORT || 3000;


// Middleware
app.use(errorHandling);
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


// Routes
app.get("/", async (req, res) => {
    res.send("Expr - Home Page...!");
});


// Routes
app.use('/api', userRouter);


// Server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

