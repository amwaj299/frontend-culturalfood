import "./styles.css";
import dishPlaceholder from "../../assets/images/dish.svg";
import { Link } from "react-router-dom";

function DishIndexCard({ dish }) {
  return (
    <div className="dish-index-card">
      <Link to={`/dishes/${dish.id}`} className="card-link">
        <img
          src={dish.photo || dishPlaceholder}
          alt={dish.name}
          className="dish-img"
        />
        <div className="dish-info">
          <h2>{dish.name}</h2>
          <p>{dish.origin ? `A dish from ${dish.origin}` : "Origin unknown"}</p>
          <small>{dish.description}</small>
        </div>
      </Link>
    </div>
  );
}

export default DishIndexCard;


