function Footer() {

  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">

          <img
            src="/apart-logo.png"
            alt="Apart"
          />

          <p>
            Designed around simplicity,
            individuality and beautiful experiences.
          </p>

        </div>


        <div className="footer-column">

          <h4>Shop</h4>

          <a href="/products">All Products</a>
          <a href="/products">Electronics</a>
          <a href="/products">Fashion</a>
          <a href="/products">Accessories</a>

        </div>


        <div className="footer-column">

          <h4>Company</h4>

          <a href="/">About Apart</a>
          <a href="/">Contact</a>
          <a href="/">Careers</a>
          <a href="/">Support</a>

        </div>


        <div className="footer-column">

          <h4>Follow</h4>

          <a href="/">Instagram</a>
          <a href="/">LinkedIn</a>
          <a href="/">Twitter</a>

        </div>

      </div>


      <div className="footer-bottom">

        <span>
          © 2026 Apart. All rights reserved.
        </span>

        <span>
          Made with simplicity.
        </span>

      </div>

    </footer>
  );
}

export default Footer;