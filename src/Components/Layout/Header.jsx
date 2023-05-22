import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
export default function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Snapp Food</h1>

        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table for delicuse food"></img>
      </div>
    </Fragment>
  );
}
