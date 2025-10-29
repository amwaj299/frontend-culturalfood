import "./styles.css";
import { useState, useEffect } from "react";
import * as dishAPI from "../../utilities/dish-api";
import DishIndexCard from "../../components/DishIndexCard";
import dishIcon1 from "../../assets/images/dish.svg";
import dishIcon2 from "../../assets/images/dish2.svg";
import dishIcon3 from "../../assets/images/dish3.svg";
import dishIcon4 from "../../assets/images/dish4.svg";

 function DishIndexPage() {
  const [allDishes, setAllDishes] = useState([]);

  useEffect(() => {
    async function getAllDishes() {
      try {
        const dishData = await dishAPI.index();
        setAllDishes(dishData); 
      } catch (err) {
        console.log("Error fetching dishes:", err);
      }
    }
    getAllDishes();
  }, []);

  const displayAllDishes = allDishes.map((d, i) => (
    <DishIndexCard key={i} dish={d} />
  ));

  return (
    <>
      <section className="page-header">
        <h1>Dish List</h1>
        <img src={dishIcon1} alt="Dish 1" />
        <img src={dishIcon2} alt="Dish 2" />
        <img src={dishIcon3} alt="Dish 3" />
        <img src={dishIcon4} alt="Dish 4" />
      </section>
      <section className="index-card-container">
        {allDishes.length ? displayAllDishes : <p>Loading dishes...</p>}
      </section>
    </>
  );
}

export default DishIndexPage;