import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products";

const Products = () => {
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
        <source src="/backgrounds/video.mp4" type="video/mp4" />
      </video>

      {/* VIDEO OVERLAY */}
      <div className="products-video-overlay"></div>

      {/* YOUR EXISTING CONTENT */}
      <header className="products-navbar">
        ...
      </header>

      <main className="products-content">
        ...
      </main>


      {/* HEADER */}
      <header className="products-navbar">

        <Link to="/" className="products-brand">
          <img src="/apart-logo.png" alt="aPart" />
        </Link>

        <nav className="products-nav">
          <Link to="/">Home</Link>

          <Link to="/products" className="products-active">
            Products
          </Link>
        </nav>

      </header>


      {/* PRODUCTS CONTENT */}
      <main className="products-content">

        <div className="products-heading">
          <span>APART COLLECTION</span>

          <h1>Our Products</h1>

          <p>
            Explore our collection of simple, modern and useful products.
          </p>
        </div>


        <div className="products-grid">

          {products.map((product) => (
            <div className="product-card" key={product.id}>

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

                <h2>{product.name}</h2>

                <p>{product.description}</p>

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

      </main>

    </div>
  );
};

export default Products;