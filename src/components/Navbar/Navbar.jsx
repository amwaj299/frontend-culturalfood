import { Link, useNavigate } from "react-router-dom";
// import signupIcon from "../../assets/images/signup.png"; 
// import loginIcon from "../../assets/images/login.png";  
import "./styles.css";
import locationIcon from "../../assets/images/loction.png"; 
import logoutIcon from "../../assets/images/logout.png";


export default function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/home");
  }

  return (
    <nav>
      <div className="nav-container">
      
        <div className="logo">
          <img src={locationIcon} alt="logo" className="logo-icon" />
          <span className="logo-text">Food Passport</span>
        </div>

        <ul>
          {user ? (
            <>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/dishes">All Dishes</Link></li>
              <li><Link to="/dishes/new">Create New Dish</Link></li>
             <li>
              <button onClick={handleLogout} className="logout-btn">
                  Logout
                 </button>
                   </li>
            </>
          ) : (
            <>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li>
                <Link to="/login" className="login-btn">Login</Link>
              </li>
              <li>
                <Link to="/signup" className="signup-btn">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
