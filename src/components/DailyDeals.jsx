import React, { useEffect, useState } from "react";

function DailyDeals() {
  // Set initial countdown (e.g., 51 minutes, 1 second)
  const initialSeconds = 51 * 60 + 1;
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const timer = setInterval(() => {
      setSecondsLeft((s) => s - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsLeft]);

  const hours = String(Math.floor(secondsLeft / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, "0");
  const seconds = String(secondsLeft % 60).padStart(2, "0");

  return (
    <section className="daily-deals">
      <div className="deals-header" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ fontWeight: 600, color: "#555", fontSize: "1rem" }}>Meesho Daily Deals</span>
        <span className="deals-bolt" style={{ fontSize: "1.3rem", color: "#ff3c00" }}>⚡</span>
        <span
          className="deals-timer"
          style={{
            display: "flex",
            alignItems: "center",
            background: "#fff0f0",
            border: "1.5px solid #ffb3b3",
            borderRadius: "10px",
            padding: "2px 10px",
            fontWeight: 500,
            fontSize: "1rem",
            marginLeft: "8px"
          }}
        >
          <span style={{ fontSize: "1.1em", marginRight: "4px" }}>🕒</span>
          <span style={{ color: "#8e44ad" }}>{hours}h</span>
          <span style={{ color: "#e17055" }}>:{minutes}m</span>
          <span style={{ color: "#d63031" }}>:{seconds}s</span>
        </span>
      </div>
    </section>
  );
}

export default DailyDeals; 