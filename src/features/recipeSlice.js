import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
  singleRecipe: {},
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    addRecipes: (state, action) => {
      state.recipes = action.payload;
    },
    recipeDetail: (state, action) => {
      state.singleRecipe = state.recipes.filter(
        (recipe) => recipe.id === action.payload
      );
    },
  },
});

export const { addRecipes, recipeDetail } = recipeSlice.actions;

export default recipeSlice.reducer;
