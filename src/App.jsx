import { useEffect, useRef, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {

  /* =========================
     THEME
  ========================= */

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme =
      localStorage.getItem("apart-theme");

    return savedTheme !== "light";
  });


  /* =========================
     SOUND
  ========================= */

  const [soundEnabled, setSoundEnabled] =
    useState(false);

  const audioRef = useRef(null);


  /* =========================
     APPLY THEME
  ========================= */

  useEffect(() => {

    document.body.className =
      darkMode
        ? "dark-mode"
        : "light-mode";

    localStorage.setItem(
      "apart-theme",
      darkMode
        ? "dark"
        : "light"
    );

  }, [darkMode]);


  /* =========================
     SOUND CONTROL
  ========================= */

  useEffect(() => {

    const audio =
      audioRef.current;

    if (!audio) return;


    if (soundEnabled) {

      audio.volume = 0.4;

      audio
        .play()
        .catch((error) => {

          console.error(
            "Audio playback failed:",
            error
          );

          setSoundEnabled(false);

        });

    } else {

      audio.pause();

    }

  }, [soundEnabled]);


  return (
    <BrowserRouter>

      {/* =====================
          BACKGROUND MUSIC
      ===================== */}

      <audio
        ref={audioRef}
        src="/sounds/background.mp3"
        loop
        preload="auto"
      />


      {/* =====================
          BACKGROUND
      ===================== */}

      <Background
        darkMode={darkMode}
      />


      {/* =====================
          NAVBAR
      ===================== */}

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
      />


      {/* =====================
          PAGE CONTENT
      ===================== */}

      <div className="page-content">

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

      </div>
      <Footer />
    </BrowserRouter>

  );
}

export default App;