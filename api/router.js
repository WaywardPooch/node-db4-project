const express = require("express");
const Recipe = require("./model");
const {
  validateRecipeId,
  handleError
} = require("./middleware");

const RecipeRouter = express.Router();

RecipeRouter.get(
  "/:id",
  validateRecipeId,
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const recipe = await Recipe.getRecipeById(id);
      res.status(200).json(recipe);
    } catch (err) {
      next(err);
    }
  }
);

RecipeRouter.use(handleError);

module.exports = RecipeRouter;
