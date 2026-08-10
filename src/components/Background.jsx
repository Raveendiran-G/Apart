import { useLocation } from "react-router-dom";

function Background({ darkMode }) {
  const location = useLocation();

  const isProductsPage = location.pathname === "/products";

  return (
    <div
      className={`background-container ${
        darkMode ? "background-dark" : "background-light"
      } ${isProductsPage ? "products-background" : "home-background"}`}
    >

      {/* Video ONLY on Products page */}
      {isProductsPage && (
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source
            src="/backgrounds/video.mp4"
            type="video/mp4"
          />
        </video>
      )}

      {/* Background overlay */}
      <div className="background-overlay"></div>

      {/* Gradient glows */}
      <div className="background-glow glow-one"></div>
      <div className="background-glow glow-two"></div>
      <div className="background-glow glow-three"></div>

    </div>
  );
}

export default Background;