import db from "./../../data/db-config.js";

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
      steps: recipe.map(step => {
        return {
          step_id: step.step_id,
          step_number: step.step_number,
          step_instruction: step.step_instruction,
        };
      })
    };
  } else {
    return recipe;
  }
};

export default {
  getRecipeById
};