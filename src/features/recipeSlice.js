import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
  singleRecipe: null,
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    addRecipes: (state, action) => {
      state.recipes = action.payload;
    },
    recipeDetail: (state, action) => {
      const { id } = action.payload;
      const recipe = state.recipes.find((recipe) => recipe.id === id);
      state.singleRecipe = recipe || null;
    },
  },
});

export const { addRecipes, recipeDetail } = recipeSlice.actions;

export default recipeSlice.reducer;
