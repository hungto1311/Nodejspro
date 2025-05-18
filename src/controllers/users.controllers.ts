import { Request, Response } from "express";
import { handleCreateUser } from "../services/user.servie";
const getHomePage = (req: Request, res: Response) => {
    return res.render("home");
};

const getUserPage = (req: Request, res: Response) => {
    return res.render("create-users");
};

const postCreateUser = (req: Request, res: Response) => {
    //object destructuring
    const { fullname, email, address } = req.body;

    handleCreateUser(fullname, email, address);
    return res.redirect('/');
};

export { getHomePage, getUserPage, postCreateUser };