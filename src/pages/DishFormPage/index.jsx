import "./styles.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import dishIcon from "../../assets/images/dish.svg";
import * as dishAPI from "../../utilities/dish-api";
import sendRequest from "../../utilities/sendRequest";
import * as tagAPI from "../../utilities/tag-api";

export default function DishFormPage({ createDish, editDish, deleteDish }) {
  const initialState = { name: "", origin: "", description: "", photo: "" };
  const [formData, setFormData] = useState(initialState);
  const [currDish, setCurrDish] = useState(null);
  const [locations, setLocations] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchLocations() {
      try {
        const data = await sendRequest("/locations/");
        setLocations(data);
      } catch (err) {
        console.log("Error loading locations:", err);
      }
    }
    fetchLocations();
  }, []);
  useEffect(() => {
    async function fetchTags() {
      try {
        const tags = await tagAPI.getAllTags();
        setAllTags(tags);
      } catch (err) {
        console.log("Error loading tags:", err);
      }
    }
    fetchTags();
  }, []);

  useEffect(() => {
    async function getDish() {
      try {
        const dish = await dishAPI.show(id);
        setCurrDish(dish);
        setFormData(dish);
      } catch (err) {
        console.log("Error loading dish:", err);
      }
    }
    if ((editDish || deleteDish) && id) getDish();
  }, [id, editDish, deleteDish]);

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  }

  function handleTagToggle(tag) {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  }

  async function handleAddTag() {
    if (!newTag.trim()) return;
    const created = await tagAPI.createTag({ name: newTag });
    setAllTags([...allTags, created]);
    setNewTag("");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      let newDish;
      const payload = {
        ...formData,
        origin_id: Number(formData.origin),
        tag_ids: allTags
          .filter((tag) => selectedTags.includes(tag.name))
          .map((tag) => tag.id),
      };

      if (editDish) {
        newDish = await dishAPI.update(payload, currDish.id);
      } else {
        newDish = await dishAPI.create(payload);
      }

      if (newDish && newDish.id) {
        navigate(`/dishes/${newDish.id}`);
      } else {
        console.log("Dish not created or updated properly:", newDish);
      }

      setFormData(initialState);
      setSelectedTags([]);
    } catch (err) {
      console.log("Error saving dish:", err);
    }
  }

  async function handleDelete(evt) {
    evt.preventDefault();
    try {
      const res = await dishAPI.deleteDish(currDish.id);
      if (res && res.success) {
        navigate("/dishes");
      } else {
        console.log("Dish not deleted properly:", res);
      }
    } catch (err) {
      console.log("Error deleting dish:", err);
    }
  }

  if (deleteDish && !currDish) return <h1>Loading...</h1>;

  if (deleteDish && currDish)
    return (
      <div className="delete-page">
        <div className="delete-card">
          <div className="delete-icon">🗑️</div>
          <h1>Delete Dish?</h1>
          <p className="delete-warning">
            Are you sure you want to delete <strong>{currDish.name}</strong>?
          </p>

          <div className="delete-buttons">
            <Link to={`/dishes/${currDish.id}`} className="cancel-btn">
              Cancel
            </Link>
            <button onClick={handleDelete} className="delete-btn">
              Yes - Delete!
            </button>
          </div>
        </div>
      </div>
    );

  if (editDish && !currDish) return <h1>Loading...</h1>;

  if (createDish || editDish)
    return (
      <>
        <form className="form-container" onSubmit={handleSubmit}>
          <table>
            <tbody>
              {!editDish && (
                <tr>
                  <th>
                    <label htmlFor="id_name">Name:</label>
                  </th>
                  <td>
                    <input
                      value={formData.name}
                      type="text"
                      name="name"
                      id="id_name"
                      required
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              )}

              <tr>
                <th>
                  <label htmlFor="id_origin">Origin:</label>
                </th>
                <td>
                  <select
                    name="origin"
                    id="id_origin"
                    value={formData.origin}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Select Location --</option>
                    {locations.map((loc) => (
                      <option key={loc.id} value={loc.id}>
                        {loc.name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>

              <tr>
                <th>
                  <label htmlFor="id_description">Description:</label>
                </th>
                <td>
                  <textarea
                    value={formData.description}
                    name="description"
                    id="id_description"
                    rows="4"
                    maxLength="250"
                    required
                    onChange={handleChange}
                  ></textarea>
                </td>
              </tr>

              <tr>
                <th>
                  <label htmlFor="id_photo">Photo URL:</label>
                </th>
                <td>
                  <input
                    value={formData.photo}
                    type="text"
                    name="photo"
                    id="id_photo"
                    onChange={handleChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="tags-section">
            <label>Tags * (select at least one)</label>
            <div className="tag-list">
              {allTags.map((tag) => (
                <button
                  type="button"
                  key={tag.id}
                  onClick={() => handleTagToggle(tag.name)}
                  className={`tag-btn ${
                    selectedTags.includes(tag.name) ? "active" : ""
                  }`}
                >
                  {tag.name}
                </button>
              ))}
            </div>

            <div className="add-tag-container">
              <input
                type="text"
                placeholder="Add custom tag..."
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
              />
              <button type="button" onClick={handleAddTag}>
                Add
              </button>
            </div>
          </div>

          <button type="submit" className="btn end submit">
            Submit!
          </button>
          <button
            type="button"
            className="btn secondary"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>
        </form>
      </>
    );

  return null;
}
