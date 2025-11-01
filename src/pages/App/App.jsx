import "./styles.css";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "../HomePage";
import AboutPage from "../AboutPage";
import DishIndexPage from "../DishIndexPage";
import { useLocation, Navigate } from 'react-router';
import DishDetailPage from "../DishDetailPage";
import DishFormPage from "../DishFormPage";
import FilteredDishesPage from "../DishFilteredPage/FilteredDishesPage";


function App() {

    
  const location = useLocation();

 
  const routes = ["about", "dishes", "home"];
  const mainCSS = routes
    .filter((r) => location.pathname.includes(r) ? r : "")
    .join(" ");

 return (
    <>
      <header>
        <div className={`${mainCSS} header-logo-container`}>
          <a href="/">
            {/* <img src="/src/assets/images/header-logo.svg" alt="Cultural Food Passport Logo" /> */}
          </a>
        </div>

        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/dishes">All Dishes</Link></li>
            <li><Link to="/dishes/new">Create New Dish</Link></li>
          </ul>
        </nav>
      </header>

      <main className={mainCSS}>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dishes" element={<DishIndexPage />} />
          <Route path="/*" element={<Navigate to="/home" />} />
          <Route path="/dishes/:id" element={<DishDetailPage />} />
          <Route path="/dishes/new" element={<DishFormPage createDish={true} />} />
          <Route path="/dishes/edit/:id" element={<DishFormPage editDish={true} />} />
          <Route path="/dishes/delete/:id" element={<DishFormPage deleteDish={true} />} />
          <Route path="/dishes/filter/:tag" element={<FilteredDishesPage />} />

        </Routes>
      </main>
    </>
  );
}


export default App;




 
