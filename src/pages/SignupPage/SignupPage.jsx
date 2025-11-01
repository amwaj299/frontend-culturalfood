import { useState } from "react";
import { useNavigate } from "react-router";
import * as usersAPI from "../../utilities/users-api.js";
import "./styles.css";


export default function SignupPage({ setUser }) {
  const navigate = useNavigate();
  const initialState = { username: "", email: "", password: "", confirmPassword: "" };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
    validate(evt);
  };

  const validate = ({ target }) => {
    const e = { ...errors };
    if (target.name === "email" && !target.value.includes("@")) e.email = "Invalid email";
    if (target.name === "password" && target.value.length < 3) e.password = "Too short";
    if (target.name === "confirmPassword" && target.value !== formData.password) e.confirmPassword = "Passwords don't match";
    setErrors(e);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const user = await usersAPI.signup(formData);
    if (user) {
      setUser(user);
      navigate("/home");
    } else {
      alert("Signup failed");
    }
  };

  return (
    <div className="page-header">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className="form-container signup">
        <input name="username" onChange={handleChange} placeholder="Username" required />
        <input name="email" onChange={handleChange} placeholder="Email" required />
        <input type="password" name="password" onChange={handleChange} placeholder="Password" required />
        <input type="password" name="confirmPassword" onChange={handleChange} placeholder="Confirm Password" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
