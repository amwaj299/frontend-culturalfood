import "./styles.css";
import dishPlaceholder from "../../assets/images/dish.svg";
import { Link } from "react-router-dom";


function DishIndexCard({ dish }) {
  return (
    <div className="dish-index-card">
      <Link to={`/dishes/${dish.id}`}>
        <div className="dish-index-card-content">
          <img src={dishPlaceholder} alt="Dish placeholder" />
          <h2>{dish.name}</h2>
          <p>
            {dish.origin
              ? `A traditional dish from ${dish.origin.name}`
              : "Origin unknown"}
          </p>
          <p><small>{dish.description}</small></p>
        </div>
      </Link>
    </div>
  );
}

export default DishIndexCard;

