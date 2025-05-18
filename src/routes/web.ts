import express, { Express } from "express";
import { getHomePage, getUserPage, postCreateUser } from "../controllers/users.controllers";

const router = express.Router();

const WebRoute = (app: Express) => {
    router.get("/", getHomePage);
    router.get("/create-user", getUserPage);
    router.post("/handle-create-user", postCreateUser);
    app.use("/", router);
};

export default WebRoute;