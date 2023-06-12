import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
export default function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Snapp Food</h1>

        <HeaderCartButton OnClick={props.OnClick} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table for delicuse food"></img>
      </div>
    </Fragment>
  );
}
