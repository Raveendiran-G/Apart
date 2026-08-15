import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="products-page">

      {/* BACKGROUND VIDEO */}
      <video
        className="products-background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="/backgrounds/video.mp4"
          type="video/mp4"
        />
      </video>

      <div className="products-video-overlay"></div>


      {/* HEADER */}
      <header className="products-navbar">

        <Link to="/" className="products-brand">
          <img
            src="/apart-logo.png"
            alt="aPart"
          />
        </Link>

        <nav className="nav-links">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Products
          </NavLink>

        </nav>

      </header>




      {/* PRODUCTS */}
      <main className="products-content">

        <div className="products-heading">

          <span>APART COLLECTION</span>

          <h1>Our Products</h1>

          <p>
            Explore our collection of simple,
            modern and useful products.
          </p>

        </div>


        {/* SEARCH BAR */}
        <div className="products-search">

          <span className="search-icon">
            🔍
          </span>

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button
              className="clear-search"
              onClick={() => setSearch("")}
            >
              ×
            </button>
          )}

        </div>


        {/* RESULT COUNT */}
        <div className="search-result-count">
          {filteredProducts.length}{" "}
          {filteredProducts.length === 1
            ? "product"
            : "products"}{" "}
          found
        </div>


        {/* PRODUCT GRID */}
        {filteredProducts.length > 0 ? (

          <div className="products-grid">

            {filteredProducts.map((product) => (

              <div
                className="product-card"
                key={product.id}
              >

                <div className="product-image-box">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                </div>


                <div className="product-info">

                  <span className="product-label">
                    Apart Collection
                  </span>

                  <h2>
                    {product.name}
                  </h2>

                  <p>
                    {product.description}
                  </p>

                  <Link
                    to={`/products/${product.id}`}
                    className="view-details"
                  >
                    View Details
                    <span>→</span>
                  </Link>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="no-products">

            <div className="no-products-icon">
              🔍
            </div>

            <h2>
              No products found
            </h2>

            <p>
              Try searching with a different
              product name.
            </p>

            <button
              onClick={() => setSearch("")}
            >
              Show All Products
            </button>

          </div>

        )}

      </main>

      <Footer />

    </div>
  );
};

export default Products;