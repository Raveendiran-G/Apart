import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Home = () => {
  return (
    <div className="home-page">

      {/* Background decorative circles */}
      <div className="bg-circle circle-one"></div>
      <div className="bg-circle circle-two"></div>

      {/* Header */}
      <header className="navbar">

        <Link to="/" className="brand-logo">
          <img src="/apart-logo.png" alt="aPart" />
        </Link>

        <nav className="nav-links">
          <Link to="/" className="nav-link active">
            Home
          </Link>

          <Link to="/products" className="nav-link">
            Products
          </Link>
        </nav>

      </header>

      {/* Hero Section */}
      <main className="hero">

        {/* LEFT SIDE */}
        <section className="hero-logo-section">

          <div className="logo-orbit orbit-one"></div>
          <div className="logo-orbit orbit-two"></div>
          <div className="logo-orbit orbit-three"></div>

          {/* Glowing particles */}
          <span className="particle particle-one"></span>
          <span className="particle particle-two"></span>
          <span className="particle particle-three"></span>
          <span className="particle particle-four"></span>

          <div className="hero-logo-wrapper">
            <img
              src="/apart-logo.png"
              alt="aPart"
              className="hero-logo"
            />
          </div>

        </section>

        {/* RIGHT SIDE */}
        <section className="hero-content">

          <div className="welcome-text">
            WELCOME TO APART
          </div>

          <h1>
            Simple products.
            <br />
            Better everyday
            <br />
            choices.
          </h1>

          <p>
            Discover products designed with simplicity,
            quality and style in mind.
          </p>

          <Link to="/products" className="explore-button">
            Explore Products
            <span>→</span>
          </Link>

        </section>

      </main>

    </div>
  );
};

export default Home;