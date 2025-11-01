import "./styles.css";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import dishPlaceholder from "../../assets/images/dish.svg";
import * as dishAPI from "../../utilities/dish-api";
import AddPhotoForm from "../../components/Forms/AddPhotoForm";

export default function DishDetailPage() {
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

  async function addPhoto(dishId, formData) {
    try {
      const updatedDish = await dishAPI.addPhoto(dishId, formData);
      setDishDetail(updatedDish);
    } catch (err) {
      console.log(err);
      setDishDetail({ ...dishDetail });
    }
  }

  if (!dishDetail) return <h3>Your dish details will display soon...</h3>;

  return (
    <section className="detail-dish-container">
      <div className="detail-dish-img">
        {dishDetail.photo ? (
          <img
            src={dishDetail.photo}
            alt={`A photo of ${dishDetail.name}`}
            className="usr-img"
          />
        ) : (
          <img src={dishPlaceholder} alt="Dish placeholder" />
        )}
      </div>

      <div className="dish-details">
        <h1>{dishDetail.name}</h1>
        <p>
          <strong>Description:</strong> {dishDetail.description}
        </p>

        {dishDetail.origin && (
          <>
            <p>
              <strong>Origin:</strong> {dishDetail.origin.name}
            </p>

            {dishDetail.tags && dishDetail.tags.length > 0 && (
              <div className="tags-container">
                <strong>Tags:</strong>
                <div className="tags-list">
                  {dishDetail.tags.map((tag) => (
                    <Link
                      key={tag.id}
                      to={`/dishes/filter/${tag.name}`}
                      className="tag-bubble"
                    >
                      {tag.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className="dish-actions">
        <Link to={`/dishes/edit/${dishDetail.id}`} className="btn warn">
          Edit
        </Link>
        <Link to={`/dishes/delete/${dishDetail.id}`} className="btn danger">
          Delete
        </Link>
      </div>

      <Link to="/dishes" className="btn back">
        ← Back
      </Link>

      <section className="add-photo-section">
        <AddPhotoForm dish={dishDetail} addPhoto={addPhoto} />
      </section>
    </section>
  );
}
