import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <Link to="/">
            <img
              src="/apart-logo.png"
              alt="aPart"
            />
          </Link>

          <p>
            Simple products. Better everyday choices.
          </p>
        </div>


        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">
            Home
          </Link>

          <Link to="/products">
            Products
          </Link>
        </div>


        {/* ABOUT */}
        <div className="footer-column">
          <h3>About aPart</h3>

          <p>
            We create simple, modern and useful
            products designed for everyday life.
          </p>
        </div>


        {/* CONTACT */}
        <div className="footer-column">
          <h3>Contact</h3>

          <a href="mailto:support@apart.com">
            support@apart.com
          </a>

          <p>
            Chennai, India
          </p>
        </div>

      </div>


      {/* BOTTOM */}
      <div className="footer-bottom">

        <p>
          © 2026 Apart. All rights reserved.
        </p>

        <p>
          Designed with simplicity.
        </p>

      </div>

    </footer>
  );
};

export default Footer;