import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const getMessage = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/message");
      const data = await response.json();
      setMessage(data.message);
    } catch (err) {
      console.error(err);
      setMessage("Failed to connect to backend");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>AWS Full Stack Demo</h1>

      <button onClick={getMessage}>
        Get Message
      </button>

      <h2>{message}</h2>
    </div>
  );
}

export default App;
