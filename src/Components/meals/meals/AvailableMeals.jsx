import React from "react";
import classes from "./AvailableMeals.module.css";
import classUi from "../../Ui/Card.module.css";
import MealsItem from "../MealsItem/MealsItem";
const Dummy_meals = [
  {
    id: "e1",
    name: "sushi",
    discrption: "Finest Fish whit Vege",
    price: "$55",
  },
  {
    id: "e2",
    name: "Bergur",
    discrption: "its best bergur U eat in Your life ",
    price: "$54",
  },
  {
    id: "e3",
    name: "Kebab",
    discrption: "Rost Bif ",
    price: "$33",
  },
];
export default function AvailableMeals(props) {
  const Mealss = Dummy_meals.map((meals) => (
    <MealsItem
      name={meals.name}
      id={meals.id}
      discrption={meals.discrption}
      price={meals.price}
      key={meals.id}
    />
  ));
  return (
    <section className={classes.meals}>
      <div className={classUi.card}>
        <ul>{Mealss}</ul>
      </div>
    </section>
  );
}
