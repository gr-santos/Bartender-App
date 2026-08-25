import { Router } from "express";
import { viewMenu } from "../controllers/cocktail.controller";

const router = Router();

router.get("/", viewMenu);

export default router;
