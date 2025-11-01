import { useState } from "react";

export default function AddPhotoForm({ dish, addPhoto }) {
  const initialState = { photo: "" };
  const [formData, setFormData] = useState(initialState);

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      
      const updatedDish = { ...dish, photo: formData.photo };
      await addPhoto(dish.id, updatedDish);
      setFormData(initialState);
    } catch (err) {
      console.log("Error updating photo:", err);
    }
  }

  return (
    <>
      <h3>Change {dish.name}'s photo</h3>
      <form onSubmit={handleSubmit} autoComplete="off">
        <p>
          <label htmlFor="photo">Photo URL:</label>
          <input
            value={formData.photo}
            type="text"
            name="photo"
            id="photo"
            required
            onChange={handleChange}
          />
        </p>
        <button type="submit" className="btn submit">
          Update Photo
        </button>
      </form>
    </>
  );
}
