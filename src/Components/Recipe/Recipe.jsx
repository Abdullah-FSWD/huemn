import { useState, useEffect } from "react";
import styles from "./Recipe.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addRecipes, recipeDetail } from "../../features/recipeSlice";
import RecipeCard from "../RecipeCard/RecipeCard";
import RecipeDetail from "../RecipeDetail/RecipeDetail";

const Recipe = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState({});
  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const options = {
        method: "GET",
        url: "https://tasty.p.rapidapi.com/recipes/list",
        headers: {
          "X-RapidAPI-Key":
            "812b86b172msh01f7107bc07609dp1379b8jsn8aacd616462b",
          "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        dispatch(addRecipes(response.data.results));
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.container}>
          <div className={styles.recipe_card_container}>
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
          <div className={styles.recipe_detail_container}>
            <RecipeDetail />
          </div>
        </div>
      )}
    </>
  );
};

export default Recipe;
