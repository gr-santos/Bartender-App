import { Request, Response } from "express";
import { CocktailModel } from "../models/cocktail.model";

/**
 * Handles GET requests for the cocktail menu.
 * Corresponds to steps 2-5 of the assignment flow:
 * controller receives request -> asks model for menu -> returns view data.
 */
export class CocktailController {
  static viewMenu(_req: Request, res: Response): void {
    const menu = CocktailModel.getMenu();
    res.status(200).json({ menu });
  }
}
