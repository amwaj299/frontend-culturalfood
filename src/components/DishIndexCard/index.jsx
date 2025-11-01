import { Link } from "react-router-dom";
import "./styles.css";

export default function DishIndexCard({ dish }) {
  return (
    <div className="dish-card">
      <Link to={`/dishes/${dish.id}`}>
        <img
          src={dish.photo}
          alt={dish.name}
          onError={(e) => (e.target.src = "/fallback.jpg")}
        />
      </Link>
      <div className="dish-info">
        <h2>{dish.name}</h2>
        {dish.origin && (
          <p className="dish-location">{dish.origin.name}</p>
        )}
        <p className="dish-description">{dish.description}</p>

        {dish.tags && dish.tags.length > 0 && (
          <div className="tags-container">
            {dish.tags.map((tag) => (
              <span key={tag.id} className="tag">
                {tag.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


