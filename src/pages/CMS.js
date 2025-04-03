import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./CMS.module.scss";

const CMS = () => {
  const [headline, setHeadline] = useState("");
  const [newHeadline, setNewHeadline] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/headline")
      .then((response) => setHeadline(response.data))
      .catch((error) => console.error("Error fetching headline:", error));
  }, []);

  const updateHeadline = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/headline", newHeadline, {
        headers: { "Content-Type": "text/plain" },
      })
      .then(() => {
        setHeadline(newHeadline);
        setNewHeadline("");
      })
      .catch((error) => console.error("Error updating headline:", error));
  };

  return (
    <div className={styles.cms}>
      <h2>CMS - Edit Headline</h2>
      <form onSubmit={updateHeadline}>
        <input
          type="text"
          value={newHeadline}
          onChange={(e) => setNewHeadline(e.target.value)}
          placeholder="Enter new headline"
          required
        />
        <button type="submit">Save</button>
      </form>
      <p>Current Headline: <strong>{headline}</strong></p>
      <a href="/">Go to Landing Page</a>
    </div>
  );
};

export default CMS;
