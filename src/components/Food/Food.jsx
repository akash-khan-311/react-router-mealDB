import React from "react";
import { Link } from "react-router-dom";

const Food = ({ food }) => {
  const { strMeal, idMeal, strInstructions, strCategory, strMealThumb } = food;
  return (
    <div className="relative flex flex-col rounded-xl text-white backdrop-blur-md border shadow-md">
      <div className="relative h-56  overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img src={strMealThumb} alt="img-blur-shadow" layout="fill" />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {strMeal}
        </h5>
        <h3 className=" my-3 font-semibold">Category: {strCategory}</h3>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased my-3">
          {strInstructions.slice(0, 100)}
        </p>
      </div>
      <div className="p-6 pt-0 ">
        <button
          className="select-none absolute bottom-3  rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-light="true"
        >
          <Link to={`/food/${idMeal}`}>Read More</Link>
        </button>
      </div>
    </div>
  );
};

export default Food;
