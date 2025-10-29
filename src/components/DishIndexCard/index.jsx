import "./styles.css";
import dishPlaceholder from "../../assets/images/dish.svg";

function DishIndexCard({ dish }) {
  return (
    <div className="dish-index-card">
      <div className="dish-index-card-content">
        <img src={dishPlaceholder} alt="dish placeholder" />
        <h2>{dish.name}</h2>
        <p>
          {dish.origin
            ? `A ${dish.origin} traditional dish`
            : "Origin unknown"}
        </p>
        <p><small>{dish.description}</small></p>
      </div>
    </div>
  );
}

export default DishIndexCard;

