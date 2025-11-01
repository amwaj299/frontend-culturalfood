import "./styles.css";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import * as dishAPI from "../../utilities/dish-api";
import DishIndexCard from "../../components/DishIndexCard";

export default function FilteredDishesPage() {
  const { tag } = useParams();
  const [filteredDishes, setFilteredDishes] = useState([]);

  useEffect(() => {
    async function fetchFiltered() {
      try {
        const data = await dishAPI.getFiltered(tag);
        setFilteredDishes(data);
      } catch (err) {
        console.log("Error fetching filtered dishes:", err);
      }
    }
    fetchFiltered();
  }, [tag]);

  const displayDishes = filteredDishes.map((d, i) => (
    <DishIndexCard key={i} dish={d} />
  ));

  return (
    <section className="filtered-dishes-container">
      <h1>Filtered by: {tag}</h1>
      <div className="dishes-list">{displayDishes}</div>

      <Link to="/dishes" className="btn back">
        ← Back to all dishes
      </Link>
    </section>
  );
}
