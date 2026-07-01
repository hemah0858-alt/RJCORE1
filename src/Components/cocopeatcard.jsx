import React, { useState } from "react";
import "./CocopeatCard.css";

import blockImg from "../assets/product-block.jpg";
import lowEcImg from "../assets/Low ec.jpg";
import highEcImg from "../assets/High-EC-Cocopeat.jpg";

const variants = {
  low: {
    title: "Low EC (Washed & Buffered)",
    image: lowEcImg,
    description: "Washed & buffered for sensitive crops. EC < 0.5 mS/cm."
  },

  high: {
    title: "High EC (Unwashed)",
    image: highEcImg,
    description:
      "Unwashed cocopeat for industrial mulching & soil conditioning."
  }
};

export default function CocopeatCard() {
  const [selected, setSelected] = useState("low");

  return (
    <div className="product-wrapper">

      {/* Left Card */}

      <div className="left-card">

        <img
          src={blockImg}
          alt="5kg Cocopeat"
          className="main-image"
        />

        <h2>product-block</h2>

        <p>
          Compressed blocks expanding to ~75 L.
          Easy to ship, store and rehydrate.
        </p>

        <label>Select Type</label>

        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="low">
            Low EC (Washed & Buffered)
          </option>

          <option value="high">
            High EC (Unwashed)
          </option>
        </select>

      </div>

      {/* Right Preview */}

      <div className="preview-card">

        <h2>{variants[selected].title}</h2>

        <img
          src={variants[selected].image}
          alt={variants[selected].title}
        />

        <p>{variants[selected].description}</p>

      </div>

    </div>
  );
}