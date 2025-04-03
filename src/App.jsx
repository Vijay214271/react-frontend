import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import "./App.css"; // Keep existing App specific styles if any

function App() {
  const [headline, setHeadline] = useState("Loading...");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/headline")
      .then((response) => setHeadline(response.data))
      .catch((error) => console.error("Error fetching headline:", error));
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero
        headline={headline.split(" ").slice(0, 2).join(" ")}
        highlightedText={headline.split(" ").slice(2).join(" ")}
        regularText="and Commercial Functions with Business Ready AI"
        description="Powerful AI solutions that go beyond mere data sorting and exploration. Use our array of AI-enabled solutions that understand your business and recommend the optimal way forward."
        buttonText="Get started"
      />
      <Features />
    </div>
  );
}

export default App;
