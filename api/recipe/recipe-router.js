import express from "express";
import Recipe from "./recipe-model.js";

const RecipeRouter = express.Router();

RecipeRouter.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.getRecipeById(id);
    res.status(200).json(recipe);
  } catch (err) {
    next(err);
  }
});

// Error Handler
// eslint-disable-next-line
RecipeRouter.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

export default RecipeRouter;