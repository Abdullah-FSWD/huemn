import React from "react";
import styles from "./RecipeDetail.module.css";
import { useSelector } from "react-redux";

const RecipeDetail = () => {
  const singleRecipe = useSelector((state) => state.singleRecipe);

  if (!singleRecipe) {
    return <div>Select a recipe to see details</div>;
  }

  return (
    <div className={styles.recipe_detail}>
      <h2 className={styles.recipe_detail_heading}>{singleRecipe.name}</h2>
      <p className={styles.recipe_detail_description}>
        {singleRecipe.description}
      </p>
      <div className={styles.recipe_detail_image_container}>
        <img
          className={styles.recipe_detail_image}
          src={singleRecipe.thumbnail_url}
          alt={singleRecipe.name}
        />
      </div>

      <p>Price: {singleRecipe.price.total}$</p>
    </div>
  );
};

export default RecipeDetail;
