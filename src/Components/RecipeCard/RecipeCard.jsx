import { recipeDetail } from "../../features/recipeSlice";
import styles from "./RecipeCard.module.css";
import { useDispatch } from "react-redux";

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();

  const handleDetailClick = () => {
    dispatch(recipeDetail({ id: recipe.id }));
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.product_img}>
          <img
            src={recipe.thumbnail_url}
            height="420"
            width="327"
            alt={recipe.name}
          />
        </div>
        <div className={styles.product_info}>
          <div className={styles.product_text}>
            <h1>{recipe.name}</h1>
            <h2>by Studio</h2>
            <p>{recipe.description.substring(0, 100) + "..."}</p>
          </div>
          <div className={styles.product_price_btn}>
            <p>
              <span className={styles.price_tag}>{recipe.price.total}</span>$
            </p>
            <button type="button">fav❣️</button>
            <button
              onClick={handleDetailClick}
              className={styles.details_btn}
              type="button">
              Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
