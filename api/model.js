import db from "./../../data/db-config.js";

const checkRecipeId = async (recipe_id) => {
  const recipe = await db("recipe as r")
    .where("r.recipe_id", recipe_id);
  if (recipe) {
    return true;
  } else {
    return false;
  }
};

const getStepIngredientsById = async (step_id) => {
  const stepIngredients = await db("step as s")
    .leftJoin("step_ingredient as si",
      "s.step_id", "si.step_id")
    .leftJoin("ingredient as i",
      "si.ingredient_id", "i.ingredient_id")
    .select("s.step_id",
      "i.ingredient_name",
      "si.ingredient_quantity",
      "i.unit_of_measurement")
    .where("s.step_id", step_id);
  if (stepIngredients[0].ingredient_id) {
    return stepIngredients.map(i => {
      return {
        ingredient_id: i.ingredient_id,
        ingredient_name: i.ingredient_name,
        quantity: i.ingredient_quantity,
        unit: i.unit_of_measurement
      };
    });
  } else {
    return [];
  }
};

const getRecipeById = async (recipe_id) => {
  const records = await db("recipe as r")
    .leftJoin("step as s",
      "r.recipe_id", "s.recipe_id")
    .select("r.recipe_id",
      "r.recipe_name",
      "s.step_id",
      "s.step_number",
      "s.step_instruction")
    .where("r.recipe_id", recipe_id)
    .orderBy("s.step_number", "asc");

  if (records[0].recipe_id) {
    return {
      recipe_id: records[0].recipe_id,
      recipe_name: records[0].recipe_name,
      steps: records.map(async (step) => {
        return {
          step_id: step.step_id,
          step_number: step.step_number,
          step_instructions: step.step_instruction,
          ingredients: await getStepIngredientsById(step.step_id)
        };
      })
    };
  } else {
    return records;
  }
};

export default {
  checkRecipeId,
  getRecipeById,
};