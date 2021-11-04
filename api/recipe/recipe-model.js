import db from "../../data/db-config";

const getRecipeById = async (recipe_id) => {
  const recipe = await db("recipe as r");
  return recipe;
};

export {
  getRecipeById
};