import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="details-page">
        <h1>Product Not Found</h1>

        <Link to="/products" className="back-button">
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="details-page">

      {/* HEADER */}
      <header className="details-navbar">

        <Link to="/" className="details-brand">
          <img
            src="/apart-logo.png"
            alt="aPart"
          />
        </Link>

        <nav>
          <Link to="/">Home</Link>

          <Link
            to="/products"
            className="details-products-link"
          >
            Products
          </Link>
        </nav>

      </header>


      {/* DETAILS */}
      <main className="details-container">

        <Link
          to="/products"
          className="back-link"
        >
          ← Back to Products
        </Link>


        <div className="details-card">

          {/* IMAGE */}
          <div className="details-image">

            <img
              src={product.image}
              alt={product.name}
            />

          </div>


          {/* INFORMATION */}
          <div className="details-info">

            <span className="details-label">
              APART COLLECTION
            </span>

            <h1>{product.name}</h1>

            <p className="details-description">
              {product.description}
            </p>

            <p className="details-text">
              Designed with simplicity, quality and
              everyday usability in mind. This product
              represents the aPart approach to creating
              useful products with clean and modern
              design.
            </p>

            <button className="details-action">
              Explore Product
              <span>→</span>
            </button>

          </div>

        </div>

      </main>

    </div>
  );
};

export default ProductDetails;