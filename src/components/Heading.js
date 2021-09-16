import React, { useState } from "react";

const Heading = () => {
  let [inputText, setInputText] = useState("");
  let [outputText, setOutputText] = useState(<h1>{inputText}</h1>);

  const setHeading = (type) => {
    switch (type) {
      case "h1":
        setOutputText(<h1>{inputText}</h1>);
        break;
      case "h2":
        setOutputText(<h2>{inputText}</h2>);
        break;
      case "h3":
        setOutputText(<h3>{inputText}</h3>);
        break;
      default:
        setOutputText(<h1>{inputText}</h1>);
    }
  };

  return (
    <div className="container">
      <h1>Heading</h1>
      <label for="text">
        <input id="text" onChange={(e) => setInputText(e.target.value)} />
      </label>
      <div>
        <button className="btn" onClick={() => setHeading("h1")}>
          h1
        </button>
        <button className="btn" onClick={() => setHeading("h2")}>
          h2
        </button>
        <button className="btn" onClick={() => setHeading("h3")}>
          h3
        </button>
      </div>
      {outputText}
    </div>
  );
};

export default Heading;
