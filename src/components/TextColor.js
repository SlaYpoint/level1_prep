import React, { useState } from "react";

const TextColor = () => {
  let [inputText, setInputText] = useState("");
  let [textColor, setTextColor] = useState("#000");
  return (
    <div className="container">
      <h1>Text Color</h1>
      <label htmlFor="text">
        <input id="text" onChange={(e) => setInputText(e.target.value)} />
      </label>
      <div>
        <button className="btn" onClick={() => setTextColor("#DC2626")}>
          Red
        </button>
        <button className="btn" onClick={() => setTextColor("#10B981")}>
          Green
        </button>
        <button className="btn" onClick={() => setTextColor("#2563EB")}>
          Blue
        </button>
      </div>
      <h2 style={{ color: `${textColor}` }}>{inputText}</h2>
    </div>
  );
};

export default TextColor;
