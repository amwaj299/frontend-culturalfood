import "./styles.css";
import { useState, useEffect } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import HomePage from "../HomePage";
import AboutPage from "../AboutPage";
import DishIndexPage from "../DishIndexPage";
import DishDetailPage from "../DishDetailPage";
import DishFormPage from "../DishFormPage";
import FilteredDishesPage from "../DishFilteredPage/FilteredDishesPage";
import { getUser } from "../../utilities/users-api";
import Navbar from "../../components/Navbar/Navbar";
import SignupPage from "../SignupPage/SignupPage";

function App() {
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function checkUser() {
      const foundUser = await getUser();
      setUser(foundUser);
    }
    checkUser();
  }, []);

  const routes = ["about", "dishes", "home"];
  const mainCSS = routes
    .filter((r) => (location.pathname.includes(r) ? r : ""))
    .join(" ");

  return (
    <>
      <header>
        <div className={`${mainCSS} header-logo-container`}>
          <a href="/">
            {/* <img src="/src/assets/images/header-logo.svg" alt="Cultural Food Passport Logo" /> */}
          </a>
        </div>

        <Navbar user={user} setUser={setUser} />
      </header>

      <main className={mainCSS}>
        <Routes>
          <Route path="/home" element={<HomePage user={user} setUser={setUser} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signup" element={<SignupPage setUser={setUser} />} />
          <Route path="/dishes" element={<DishIndexPage />} />
          <Route path="/dishes/new" element={<DishFormPage createDish={true} />} />
          <Route path="/dishes/edit/:id" element={<DishFormPage editDish={true} />} />
          <Route path="/dishes/delete/:id" element={<DishFormPage deleteDish={true} />} />
          <Route path="/dishes/filter/:tag" element={<FilteredDishesPage />} />
          <Route path="/dishes/:id" element={<DishDetailPage />} />
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

