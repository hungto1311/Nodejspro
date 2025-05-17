import express from "express";
import 'dotenv/config';
import WebRoute from "./routes/web";
import exp from "constants";
const app = express();
const PORT = process.env.PORT || 8080;
const path = require("node:path");

//config view engine
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");

//config routes
WebRoute(app);

//config static files:images/css/js
app.use(express.static(path.join(__dirname, '../public')));


app.listen(PORT, () => {
    console.log(`Hung To is running on port:${PORT}`);
})