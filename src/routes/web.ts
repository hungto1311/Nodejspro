import express, { Express } from "express";
import { getHomePage, getUserPage } from "../controllers/users.controllers";

const router = express.Router();

const WebRoute = (app: Express) => {
    router.get("/", getHomePage);
    router.get("/create-user", getUserPage);
    router.post("/create-user", getUserPage);
    app.use("/", router);
};

export default WebRoute;