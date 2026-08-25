import { Request, Response } from "express";
import { menu } from "../models/cocktail.model";

export function viewMenu(req: Request, res: Response) {
    res.json(menu);
}
