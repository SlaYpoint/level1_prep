import React, { useState } from "react";

const FontSize = () => {
  let [text, setText] = useState("");

  return (
    <div className="container">
      <h2>Font Size</h2>
      <button className="btn">-</button>
      <label for="text">
        <input
          type="text"
          id="text"
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <button className="btn">+</button>
      <p>{text}</p>
    </div>
  );
};

export default FontSize;
