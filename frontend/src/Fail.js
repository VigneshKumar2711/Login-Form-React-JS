import React from "react";  // Ensure React is imported
import { useNavigate } from "react-router-dom";

function Fail() {
  const navigate = useNavigate(); // Hook to navigate to another page

  const playFailSound = () => {
    // Create a new audio element for the failure sound
    const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'); // Replace with your fail sound URL
    audio.volume = 0.1; // Set the volume to a low level to make it less noisy
    audio.play()
      .then(() => {
        console.log("Failure sound started!");

        // Stop the sound after 10 seconds
        setTimeout(() => {
          audio.pause();  // Stop the sound
          audio.currentTime = 0;  // Reset the sound to start from the beginning if needed again
          console.log("Audio stopped after 10 seconds");
        }, 10000);  // 10000 milliseconds = 10 seconds
      })
      .catch((error) => {
        console.error("Error playing sound:", error);
        alert("Failed to play failure sound. Please check your audio settings.");
      });
  };

  // Play the fail sound when the component is loaded
  React.useEffect(() => {
    playFailSound();
  }, []);

  const tryAgain = () => {
    // Navigate to the login page to try again
    navigate("/login");
  };

  const quitApplication = () => {
    // Display an alert and close the app (or simulate quitting by navigating to a blank page)
    alert("You have quit the application.");
    window.location.href = "about:blank"; // This will stop the app by navigating to a blank page
  };

  return (
    <div
      style={{
        minHeight: "100vh", // Ensures the background covers the full height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #f44336, #e91e63)", // Gradient background
        color: "#fff", // White text for contrast
        fontFamily: "Arial, sans-serif",
        flexDirection: "column", // Stack content vertically
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          animation: "fadeIn 1.5s ease-in-out",
          background: "rgba(0, 0, 0, 0.3)", // Semi-transparent background for text
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Shadow effect
        }}
      >
        Login Failed
      </h1>
      <button
        onClick={tryAgain} // Trigger navigation to try again
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#fff",
          color: "#f44336",
          fontSize: "1rem",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          transition: "background-color 0.3s ease, transform 0.2s ease",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        Try Again
      </button>
      <button
        onClick={quitApplication} // Trigger quitting the app
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#fff",
          color: "#e91e63",
          fontSize: "1rem",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          transition: "background-color 0.3s ease, transform 0.2s ease",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        Quit
      </button>
    </div>
  );
}

export default Fail;
