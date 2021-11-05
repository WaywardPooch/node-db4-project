import Recipe from "./model";

const validateRecipeId = async (req, res, next) => {
  const { id } = req.params;
  const recipe = await Recipe.checkRecipeId(id);
  if (!recipe) {
    next({
      status: 404,
      message: `recipe with ID ${id} not found!`
    });
  } else {
    next();
  }
};

// eslint-disable-next-line
const handleError = (err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "oh d-d-d-dear!"
  });
};

export default {
  validateRecipeId,
  handleError
};