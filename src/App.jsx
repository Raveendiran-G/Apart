import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <BrowserRouter>

      {showIntro && (
        <div className="intro-screen">

          <video
            className="intro-video"
            autoPlay
            muted
            playsInline
            onEnded={() => setShowIntro(false)}
          >
            <source
              src="/backgrounds/intro-video.mp4"
              type="video/mp4"
            />
          </video>

        </div>
      )}

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;