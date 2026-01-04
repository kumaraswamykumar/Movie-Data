import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setMenuOpen(false);
    }
  };

  return (
    <nav className="nav-container">
      <h1 className="logo" onClick={() => navigateTo("/popular")}>
        movieDB
      </h1>

      {/* Hamburger icon (mobile) */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <div className={`nav-right ${menuOpen ? "open" : ""}`}>
        <div className="nav-buttons">
          <button className="nav-btn2" onClick={() => navigateTo("/popular")}>
            Popular
          </button>
          <button className="nav-btn2" onClick={() => navigateTo("/top-rated")}>
            Top Rated
          </button>
          <button className="nav-btn2" onClick={() => navigateTo("/upcoming")}>
            Upcoming
          </button>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search movies..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="button"
            onClick={handleSearch}
            className="nav-btn1  nav-btn2"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
