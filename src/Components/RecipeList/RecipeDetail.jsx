import { useSelector } from "react-redux";

const RecipeDetail = () => {
  const singleRecipe = useSelector((state) => state.singleRecipe);
  return <div>{console.log(singleRecipe)}</div>;
};

export default RecipeDetail;
