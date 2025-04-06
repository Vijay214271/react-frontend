import React from "react";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import styles from "./LandingPage.module.scss";

const LandingPage = ({ heading }) => {
  return (
    <div className={styles.container}>
      <Header />
      <Hero
        headline={heading.split(" ").slice(0, 2).join(" ")}
        highlightedText={heading.split(" ").slice(2).join(" ")}
        regularText="and Commercial Functions with Business Ready AI"
        description="Powerful AI solutions that go beyond mere data sorting and exploration. Use our array of AI-enabled solutions that understand your business and recommend the optimal way forward."
        buttonText="Get started"
      />
      <Features />
    </div>
  );
};

export default LandingPage;
