import { useState } from "react";
import api from "./services/api";

import Header from "./components/Header";
import GenerateButton from "./components/GenerationButton";
import HeadlineCard from "./components/HeadlineCard";

function App() {
  const [headline, setHeadline] = useState("");

  async function generateHeadline() {
    try {
      const response = await api.get("/headline");
      setHeadline(response.data.headline);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-center items-center gap-10 px-6">
      <Header />

      <GenerateButton onClick={generateHeadline} />

      <HeadlineCard headline={headline} />
    </div>
  );
}

export default App;