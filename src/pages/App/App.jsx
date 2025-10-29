import "./styles.css";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "../HomePage";
import AboutPage from "../AboutPage";
import DishIndexPage from "../DishIndexPage";

export default function App() {
  return (
    <>
      <header>
        <div className="header-logo-container">
          <a href="/">
            {/* <img src="/src/assets/images/header-logo.svg" alt="Cultural Food Passport Logo" /> */}
          </a>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/dishes">All Dishes</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dishes" element={<DishIndexPage />} />
        </Routes>
      </main>
    </>
  );
}
