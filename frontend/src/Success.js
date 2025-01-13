import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  const celebrateSuccess = () => {
    // Fun animation or action to celebrate success
    alert("Congratulations on logging in successfully! 🎉");

    // Play short success sound
    const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'); // Replace with a short sound URL
    audio.volume = 0.1; // Set the volume to a low level to make it less noisy
    audio.play()
      .then(() => {
        console.log("Success sound started!");
        
        // Stop the audio after 10 seconds
        setTimeout(() => {
          audio.pause();  // Stop the sound
          audio.currentTime = 0;  // Reset the sound to start from the beginning if needed again
          console.log("Audio stopped after 10 seconds");
        }, 10000);  // 10000 milliseconds = 10 seconds
      })
      .catch((error) => {
        console.error("Error playing sound:", error);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#4CAF50", // Green background for success
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>
        Login Successful! 🎉
      </h1>
      <button
        onClick={celebrateSuccess}
        style={{
          marginTop: "20px",
          padding: "12px 30px",
          backgroundColor: "#FFEB3B", // Bright Yellow Background for attraction
          color: "#fff",
          fontSize: "1.2rem",
          border: "none",
          borderRadius: "50px", // Rounded corners for a modern look
          cursor: "pointer",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          transition: "transform 0.3s ease, background-color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        Celebrate Success 🎉
      </button>
    </div>
  );
}

export default Success;
