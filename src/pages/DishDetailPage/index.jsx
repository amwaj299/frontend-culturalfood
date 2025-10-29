import "./styles.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import dishPlaceholder from "../../assets/images/dish.svg"; 
import * as dishAPI from "../../utilities/dish-api";

 function DishDetailPage() {
  const [dishDetail, setDishDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getAndSetDetail() {
      try {
        const dish = await dishAPI.show(id);
        setDishDetail(dish);
      } catch (err) {
        console.log(err);
        setDishDetail(null);
      }
    }
    if (id) getAndSetDetail();
  }, [id]);

  if (!dishDetail) return <h3>Your dish details will display soon...</h3>;

  return (
    <section className="detail-dish-container">
      <div className="detail-dish-img">
        <img src={dishPlaceholder} alt="Dish placeholder" />
      </div>
      <div className="dish-details">
        <h1>{dishDetail.name}</h1>
        <p><strong>Description:</strong> {dishDetail.description}</p>
        {dishDetail.origin && (
          <p><strong>Origin:</strong> {dishDetail.origin.name}</p>
        )}
      </div>
    </section>
  );
}

export default DishDetailPage;
