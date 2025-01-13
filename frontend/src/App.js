import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [showPassword, setShowPassword] = useState(false); // For toggling password visibility
  const [isPasswordFocused, setIsPasswordFocused] = useState(false); // To track password focus state

  function handleUser(evt) {
    setUser(evt.target.value);
  }

  function handlePass(evt) {
    setPass(evt.target.value);
  }

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  function check() {
    var logindetails = axios.post("http://localhost:5000/login", {
      username: user,
      password: pass,
    });
    logindetails.then(function (data) {
      if (data.data === true) {
        navigate("/success");
      } else {
        navigate("/fail");
      }
    });
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #6a11cb, #2575fc)",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        animation: "fadeIn 1.5s ease-in-out",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "20px", animation: "slideIn 1s ease-in-out" }}>
        Login Form
      </h1>
      <div
        style={{
          width: "350px",
          textAlign: "left",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          animation: "popIn 1s ease-in-out",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              fontSize: "1.5rem",
              marginRight: "10px",
              color: "#6a11cb",
            }}
          >
            👤
          </span>
          <input
            onChange={handleUser}
            name="username"
            placeholder="Enter your username"
            style={{
              flex: 1,
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
            position: "relative",
          }}
        >
          <span
            style={{
              fontSize: "1.5rem",
              marginRight: "10px",
              color: "#6a11cb",
            }}
          >
            🔒
          </span>
          <input
            onChange={handlePass}
            name="password"
            placeholder="Enter your password"
            type={showPassword ? "text" : "password"}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
            style={{
              flex: 1,
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          />
          <span
            onClick={togglePasswordVisibility}
            style={{
              position: "absolute",
              right: "10px",
              cursor: "pointer",
              color: isPasswordFocused ? "#ff6347" : "#6a11cb", // Color change when focused
              transform: isPasswordFocused ? "scale(1.2)" : "scale(1)", // Scale effect when focused
              transition: "transform 0.2s ease, color 0.3s ease",
            }}
          >
            {showPassword ? "🙈" : "👁"}
          </span>
        </div>
        <button
          onClick={check}
          style={{
            width: "100%",
            padding: "10px",
            background: "#6a11cb",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontSize: "1rem",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            transition: "background-color 0.3s ease, transform 0.2s ease",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          Login
        </button>
      </div>

      {/* Inline CSS for Animations and Media Queries */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes slideIn {
            0% { opacity: 0; transform: translateX(-100px); }
            100% { opacity: 1; transform: translateX(0); }
          }

          @keyframes popIn {
            0% { opacity: 0; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1); }
          }

          @media (max-width: 768px) {
            div {
              width: 90%;
              padding: 15px;
            }

            h1 {
              font-size: 1.5rem;
            }
          }

          @media (max-width: 480px) {
            div {
              width: 100%;
              box-shadow: none;
            }

            input, button {
              font-size: 0.9rem;
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;