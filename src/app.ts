import express from "express";
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 8080;
const path = require("node:path");

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) =>{
    res.send("I am TO VIET HUNG");
});

app.listen(PORT, () => {
    console.log(`Hung To is running on port:${PORT}`);
})