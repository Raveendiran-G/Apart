import { Sun, Moon } from "lucide-react";

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      className="icon-button"
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle theme"
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export default ThemeToggle;