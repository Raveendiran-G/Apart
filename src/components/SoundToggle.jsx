import { Volume2, VolumeX } from "lucide-react";

function SoundToggle({
  soundEnabled,
  setSoundEnabled,
}) {
  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  return (
    <button
      className={`icon-button ${
        soundEnabled ? "sound-active" : ""
      }`}
      onClick={toggleSound}
      title={
        soundEnabled
          ? "Mute sound"
          : "Play sound"
      }
      aria-label={
        soundEnabled
          ? "Mute sound"
          : "Play sound"
      }
    >
      {soundEnabled ? (
        <Volume2 size={18} />
      ) : (
        <VolumeX size={18} />
      )}
    </button>
  );
}

export default SoundToggle;