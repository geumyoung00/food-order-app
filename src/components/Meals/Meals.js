import React from "react";
import classes from "./AvailableMeals.module.css";
import Counter from "./Counter/Counter";

const Meals = ({ meals }) => {
  return (
    <div className={classes.meals}>
      <ul>
        {meals.map((el, id) => (
          <li className={classes.meal_list} key={id}>
            <div className={classes.info}>
              <p className={classes.name}>{el.name}</p>
              <p className={classes.desc}>{el.description}</p>
              <p className={classes.price}>{`$ ${el.price}`}</p>
            </div>
            <Counter item={el} />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Meals;
