import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim()) {
      navigate(`/products?search=${encodeURIComponent(search)}`);
    }
  };

  return (
    <header className="navbar">

      <div className="nav-left">
        <Link to="/" className="brand">
          <img
            src="/apart-logo.png"
            alt="Apart"
            className="brand-logo"
          />
        </Link>
      </div>

      <form className="nav-search" onSubmit={handleSearch}>
        <span className="search-icon">
          <svg width="20" height="20" viewBox="0 0 24 24">
            <circle
              cx="11"
              cy="11"
              r="7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M16 16L21 21"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </span>

        <input
          type="text"
          placeholder="Search for products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="submit">
          Search
        </button>
      </form>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>

        <button className="cart-button">
          🛒
          <span>Cart</span>
        </button>
      </nav>

    </header>
  );
}

export default Navbar;