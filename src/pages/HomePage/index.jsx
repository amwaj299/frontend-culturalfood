import "./styles.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import * as usersAPI from "../../utilities/users-api";


export default function HomePage({ user, setUser }) {
  const navigate = useNavigate();
  const initialState = { username: "", password: "" };
  const [formData, setFormData] = useState(initialState);

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  }

  async function handleLogin(evt) {
    try {
      evt.preventDefault();
      const loggedInUser = await usersAPI.login(formData);
      setUser(loggedInUser);
      navigate("/dishes"); 
    } catch (err) {
      setUser(null);
    }
  }

  return (
    <>
      {user && (
        <section className="home-hero">
          <div className="home-hero-card">
            <h1>Welcome{user?.first_name ? `, ${user.first_name}` : "!"}</h1>
            <p>Discover dishes, explore tags, and add your favorites.</p>
            <div className="hero-actions">
              <button className="hero-btn primary" onClick={() => navigate("/dishes")}>Browse Dishes</button>
              <button className="hero-btn" onClick={() => navigate("/dishes/new")}>Create New Dish</button>
            </div>
        </div>
      </section>
      )}

      {!user && (
        <section>
          <form onSubmit={handleLogin} className="form-container login">
            <h1>Login</h1>
            <p>
              <label htmlFor="id_username">Username:</label>
              <input
                value={formData.username}
                type="text"
                name="username"
                maxLength="150"
                required
                id="id_username"
                onChange={handleChange}
              />
            </p>
            <p>
              <label htmlFor="id_password">Password:</label>
              <input
                value={formData.password}
                type="password"
                name="password"
                required
                id="id_password"
                onChange={handleChange}
              />
            </p>
            <button type="submit" className="btn submit">
              Login
            </button>
          </form>
        </section>
      )}
    </>
  );
}
