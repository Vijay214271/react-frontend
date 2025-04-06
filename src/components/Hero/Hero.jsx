import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Hero.module.scss";
import patternImage from "../../assets/right-side.png";
import curvesSvg from "../../assets/hero-curves.svg";

const Hero = () => {
  const [headline, setHeadline] = useState("");
  const [start, setStart] = useState("");
  const [highlight, setHighlight] = useState("");
  const [end, setEnd] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}`)
      .then((response) => setHeadline(response.data.headline))
      .catch((error) => console.error("Error fetching headline:", error));
  }, []);

  useEffect(() => {
    const words = headline.split(" ");
    const total = words.length;

    const highlightStartIndex = 3; // Start from 4th word
    const highlightLength = 3; // Highlight 3 words

    if (total <= highlightStartIndex) {
      setStart(words.join(" "));
      setHighlight("");
      setEnd("");
    } else {
      setStart(words.slice(0, highlightStartIndex).join(" "));
      setHighlight(
        words
          .slice(highlightStartIndex, highlightStartIndex + highlightLength)
          .join(" ")
      );
      setEnd(words.slice(highlightStartIndex + highlightLength).join(" "));
    }
  }, [headline]);

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.leftBackground}>
          <img src={curvesSvg} alt="" className={styles.curvesSvg} />
        </div>
        <div className={styles.rightBackground}>
          <img src={patternImage} alt="" className={styles.patternImage} />
        </div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.headline}>
          {headline ? (
            <>
              {start}{" "}
              <span className={styles.highlight}>{highlight}</span>{" "}
              {end}
            </>
          ) : (
            <>
              Hyper boost your{" "}
              <span className={styles.highlight}>
                Revenue Management Marketing
              </span>{" "}
              and Commercial Functions with Business Ready AI
            </>
          )}
        </h1>
        <p className={styles.subheadline}>
          Powerful AI solutions that go beyond mere data sorting and exploration. Use our array of AI-enabled solutions that understand your business and recommend the optimal way forward.
        </p>
        <button className={styles.ctaButton}>Get started</button>
      </div>
    </section>
  );
};

export default Hero;
