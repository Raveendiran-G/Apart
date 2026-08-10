import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import SoundToggle from "./SoundToggle";

function Navbar({
  darkMode,
  setDarkMode,
  soundEnabled,
  setSoundEnabled,
}) {
  return (
    <nav className="navbar">

     <Link to="/" className="brand logo-entrance">
    Apart
</Link>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/products">
          Products
        </Link>

      </div>

      <div className="nav-actions">

        <ThemeToggle
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <SoundToggle
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
        />

      </div>

    </nav>
  );
}

export default Navbar;