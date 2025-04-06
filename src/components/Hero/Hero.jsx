import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Hero.module.scss";
import patternImage from "../../assets/right-side.png"; 
import curvesSvg from "../../assets/hero-curves.svg";

const Hero = () => {
  const [headline, setHeadline] = useState("");

  useEffect(() => {
    // Fetch headline from Spring Boot API
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}`)

      .then((response) => setHeadline(response.data.headline))
      .catch((error) => console.error("Error fetching headline:", error));
  }, []);

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
              {headline.split(" ").slice(0, 2).join(" ")}{" "}
              <span className={styles.highlight}>
                {headline.split(" ").slice(2).join(" ")}
              </span>
            </>
          ) : (
            "Hyper boost your Revenue Management, Marketing and Commercial Functions with Business Ready AI"
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
