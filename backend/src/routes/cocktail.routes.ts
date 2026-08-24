import { Router } from "express";
import { CocktailController } from "../controllers/cocktail.controller";

const router = Router();

// GET /api/cocktails - view the cocktail menu
router.get("/", CocktailController.viewMenu);

export default router;
