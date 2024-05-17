import React from "react";
import styles from "./Navbar.module.css";
// import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className="brand">
        <a className={styles.brand_logo} to="/">
          Recipe Website
        </a>{" "}
        {/* Update with your brand name */}
      </div>
      <ul className={styles.nav_links}>
        <li className={styles.nav_links_list}>
          <a className={styles.nav_links_link} to="/favorites">
            Favorites
          </a>{" "}
          {/* Link to Favorites page */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
