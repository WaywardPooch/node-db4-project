const db = require("./../data/db-config");

const checkRecipeId = async (recipe_id) => {
  const recipe = await db("recipe as r")
    .where("r.recipe_id", recipe_id)
    .first();
  if (recipe) {
    return true;
  } else {
    return false;
  }
};

const getRecipeById = async (recipe_id) => {
  const recipe = await db("recipe as r")
    .leftJoin("step as s",
      "r.recipe_id", "s.recipe_id")
    .leftJoin("step_ingredient as si",
      "s.step_id", "si.step_id")
    .leftJoin("ingredient as i",
      "si.ingredient_id", "i.ingredient_id")
    .select("r.recipe_id",
      "r.recipe_name",
      "s.step_id",
      "s.step_number",
      "s.step_instruction",
      "si.ingredient_id",
      "i.ingredient_name",
      "si.ingredient_quantity",
      "i.unit_of_measurement")
    .where("r.recipe_id", recipe_id)
    .orderBy("s.step_number", "asc");


  if (recipe[0].recipe_id) {
    return {
      recipe_id: recipe[0].recipe_id,
      recipe_name: recipe[0].recipe_name,
      steps: recipe.map(step_ingredient => {
        const ingredients = recipe
          .filter(step => {
            return step_ingredient.step_number === step.step_number;
          })
          .map(ingredient => {
            return ingredient.ingredient_id
              ? {
                ingredient_id: ingredient.ingredient_id,
                ingredient_name: ingredient.ingredient_name,
                quantity: ingredient.ingredient_quantity,
                unit: ingredient.unit_of_measurement
              }
              : null;
          });
        return {
          step_id: step_ingredient.step_id,
          step_number: step_ingredient.step_number,
          step_instructions: step_ingredient.step_instruction,
          ingredients: ingredients[0] !== null
            ? ingredients
            : []
        };
      })
    };
  } else {
    return recipe;
  }
};

module.exports = {
  checkRecipeId,
  getRecipeById,
};
