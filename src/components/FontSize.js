import React, { useState } from "react";

const FontSize = () => {
  let [text, setText] = useState("");
  let [size, setSize] = useState(16);

  return (
    <div className="container">
      <h2>Font Size</h2>
      <button className="btn" onClick={() => setSize(size - 2)}>
        -
      </button>
      <label for="text">
        <input
          type="text"
          id="text"
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <button className="btn" onClick={() => setSize(size + 2)}>
        +
      </button>
      <p style={{ fontSize: `${size}px` }}>{text}</p>
    </div>
  );
};

export default FontSize;
