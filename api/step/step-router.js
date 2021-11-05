import express from "express";
import Recipe from "../recipe/recipe-model.js";

const StepRouter = express.Router();

StepRouter.get("/:step_id/ingredients", async (req, res, next) => {
  try {
    const { step_id } = req.params;
    const ingredients = await Recipe.getStepIngredientsById(step_id);
    res.status(200).json(ingredients);
  } catch (err) {
    next(err);
  }
});

// Error Handler
// eslint-disable-next-line
StepRouter.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

export default StepRouter;