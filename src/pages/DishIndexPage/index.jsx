import "./styles.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as dishAPI from "../../utilities/dish-api";
import * as tagsAPI from "../../utilities/tag-api";
import DishIndexCard from "../../components/DishIndexCard";
// import dishIcon1 from "../../assets/images/dish.svg";
// import dishIcon2 from "../../assets/images/dish2.svg";
// import dishIcon3 from "../../assets/images/dish3.svg";
// import dishIcon4 from "../../assets/images/dish4.jpeg";


function DishIndexPage() {
  const [allDishes, setAllDishes] = useState([]);
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllDishes() {
      try {
        const dishData = await dishAPI.index();
        setAllDishes(dishData);
        const tagList = await tagsAPI.getAllTags();
        setTags(tagList);
      } catch (err) {
        console.log("Error fetching dishes or tags:", err);
      }
    }
    getAllDishes();
  }, []);

  function handleFilterChange(evt) {
    const tagName = evt.target.value;
    if (tagName !== "") {
      navigate(`/dishes/filter/${tagName}`);
    }
  }

  const displayAllDishes = allDishes.map((d, i) => (
    <DishIndexCard key={i} dish={d} />
  ));

  return (
    <>
      {/* <section className="page-header">
        <h1>Dish List</h1>
        <img src={dishIcon1} alt="Dish 1" />
        <img src={dishIcon2} alt="Dish 2" />
        <img src={dishIcon3} alt="Dish 3" />
        <img src={dishIcon4} alt="Dish 4" />
      </section> */}

      <section className="filter-container">
        <label htmlFor="tagFilter">Filter by Tag:</label>
        <select id="tagFilter" onChange={handleFilterChange}>
          <option value="">-- Select a Tag --</option>
          {tags.map((tag) => (
            <option key={tag.id} value={tag.name}>
              {tag.name}
            </option>
          ))}
        </select>
      </section>

      <section className="index-card-container">
        {allDishes.length > 0 ? (
          displayAllDishes
        ) : (
          <p className="loading-message">Loading dishes...</p>
        )}
      </section>
    </>
  );
}

export default DishIndexPage;
