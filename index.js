import express from "express";
const app = express();
const port = process.env.PORT || 3000;


// Routes
app.get("/", (req, res) => {
    res.send("Hello World!");
});


// Server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

