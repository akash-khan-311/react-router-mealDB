import React from "react";
import { useLoaderData } from "react-router-dom";

const FoodDetails = () => {
  const foodDetails = useLoaderData();
  const details = foodDetails.meals[0];
  const { strMeal, strInstructions, strCategory, strMealThumb } = details;
  return (
    <div className="pb-10">
      <div className="lg:w-2/6 md:w-2/4 w-4/6  mx-auto my-5 ">
        <img className="w-full rounded-full " src={strMealThumb} alt="" />
      </div>
      <div className="backdrop-blur-sm border rounded-md">
        <h1 className="text-center text-3xl lg:text-7xl text-white">
          {strMeal}
        </h1>
        <h2 className="text-xl lg:text-2xl text-white text-center ">
          Category: {strCategory}
        </h2>
        <hr className="my-5" />
        <p className="text-xl px-3 lg:px-3 text-white text-center p-6">
          {strInstructions}
        </p>
      </div>
    </div>
  );
};

export default FoodDetails;
