import { Router } from "express";
import { getRecipes } from "../controllers/recipesController.js";

const recipesRouter = Router();

recipesRouter.get("/", getRecipes);

export { recipesRouter };
