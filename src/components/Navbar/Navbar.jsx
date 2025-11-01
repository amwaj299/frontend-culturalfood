import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/home");
  }

  return (
    <nav>
      <ul>
        {user ? (
          <>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/dishes">All Dishes</Link></li>
            <li><Link to="/dishes/new">Create New Dish</Link></li>
            <li>
              <button
                onClick={handleLogout}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--text-color)",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/signup">Sign Up</Link></li> 
          </>
        )}
      </ul>
    </nav>
  );
}
