"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../app/meals/style.module.css";

export default function SearchMeals() {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState("");
  const [error, setError] = useState("");
  const loadData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      setMeals(data.meals);
      setError("");
    } catch (error) {
      setError("No Data Found!!!");
    }
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    loadData();
  }, [search]);

  return (
    <div className="min-h-screen">
      <input
        onChange={handleChange}
        type="text"
        placeholder="search meals..."
        className="bg-teal-200 p-2 rounded-l-lg my-5 outline-none"
      />
      <button className="bg-teal-300 text-black p-2 rounded-r-lg">
        Search
      </button>
      <div
        className={styles.meal_grid}
        // className="mt-12 grid grid-cols-3 gap-5"
      >
        {meals?.length > 0 &&
          !error &&
          meals?.map((meal) => (
            <div
              key={meal.idMeal}
              // className="border border-red-400 p-4 grid grid-cols-2 gap-4"
            >
              <Image
                src={meal.strMealThumb}
                alt={meal.strMeal}
                width={500}
                height={500}
              />
              <h6>{meal.strMeal}</h6>
              <p>{meal.strInstructions}</p>
            </div>
          ))}
        {error && <h5 className="text-3xl">No Data Found!</h5>}
      </div>
    </div>
  );
}
