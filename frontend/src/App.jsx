import { useState } from "react";
import api from "./services/api";

function App() {
  const [headline, setHeadline] = useState("");

  const generateHeadline = async () => {
    try {
      const response = await api.get("/headline");
      setHeadline(response.data.headline);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>📰 Fake News Headline Generator</h1>

      <button onClick={generateHeadline}>
        Generate Headline
      </button>

      <h2>{headline}</h2>
    </div>
  );
}

export default App;