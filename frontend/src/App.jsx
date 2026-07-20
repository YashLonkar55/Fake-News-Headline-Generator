import { useState } from "react";
import api from "./services/api";
import "./App.css";

import Header from "./components/Header";
import GenerateButton from "./components/GenerationButton";
import HeadlineCard from "./components/HeadlineCard";

function App() {
  const [headline, setHeadline] = useState("");
  const [source, setSource] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateHeadline() {
    setLoading(true);
    try {
      const response = await api.get("/headline");
      setHeadline(response.data.headline);
      setSource(response.data.source);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Animated background layers */}
      <div className="app-bg" aria-hidden="true" />
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />
      <div className="app-noise" aria-hidden="true" />

      <main className="app">
        <div className="app-content">
          <Header />
          <GenerateButton onClick={generateHeadline} loading={loading} />
          <HeadlineCard headline={headline} source={source} />
        </div>

        <footer className="app-footer">
          Made for laughs · {" "}
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </footer>
      </main>
    </>
  );
}

export default App;