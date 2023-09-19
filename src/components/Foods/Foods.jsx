import React from "react";
import { useLoaderData } from "react-router-dom";
import Food from "../Food/Food";

const Foods = () => {
  const foodsAPI = useLoaderData();
  const foods = foodsAPI.meals;
  console.log(foods);
  return (
    <div>
      <h1 className="text-white text-3xl md:text-6xl lg:text-8xl  text-center py-10">
        Wow, Yammi!!!!!!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-3 lg:px-0 mb-20">
        {foods.map((food) => (
          <Food key={food.idMeal} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Foods;
