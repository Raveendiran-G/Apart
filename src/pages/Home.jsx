import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">

      <div className="hero-content">

        <p className="hero-label">
          WELCOME TO
        </p>

        <h1 className="home-logo">
          Apart
        </h1>

        <p className="hero-description">
          A modern collection designed around simplicity,
          individuality and beautiful experiences.
        </p>

        <Link
          to="/products"
          className="explore-button"
        >
          Explore Products
        </Link>

      </div>

      <div className="scroll-indicator">
        <span></span>
        Scroll to explore
      </div>

    </main>
  );
}

export default Home;