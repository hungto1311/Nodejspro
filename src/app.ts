import express from "express";

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
    res.send("Hello Hung To");
});

app.get("/about", (req, res) =>{
    res.send("I am TO VIET HUNG");
});

app.listen(PORT, () => {
    console.log(`Hung To is running on port:${PORT}`);
})