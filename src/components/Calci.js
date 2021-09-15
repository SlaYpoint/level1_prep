import React, { useState } from "react";

const Cacli = () => {
  let [result, setResult] = useState("");
  let [num1, setNum1] = useState(0);
  let [num2, setNum2] = useState(0);

  const computeResult = (symbol) => {
    if (num1 !== 0 && num2 !== 0) {
      switch (symbol) {
        case "+":
          setResult(num1 + num2);
          break;
        case "-":
          setResult(Math.abs(num1 - num2));
          break;
        case "*":
          setResult(num1 * num2);
          break;
        case "/":
          if (num2 !== 0) {
            setResult(num1 / num2);
          }
          break;
        default:
          setResult("Please select the operation");
      }
    } else {
      setResult("Invalid inputs");
    }
  };

  return (
    <div className="container">
      <h2>Calculator</h2>
      <label for="num1">
        <input
          id="num1"
          type="number"
          onChange={(e) => setNum1(Number(e.target.value))}
        />
      </label>
      <label for="num2">
        <input
          id="num2"
          type="number"
          onChange={(e) => setNum2(Number(e.target.value))}
        />
      </label>
      <div>
        <button className="btn" onClick={() => computeResult("+")}>
          +
        </button>
        <button className="btn" onClick={() => computeResult("-")}>
          -
        </button>
        <button className="btn" onClick={() => computeResult("*")}>
          *
        </button>
        <button className="btn" onClick={() => computeResult("/")}>
          /
        </button>
      </div>
      <p>{result}</p>
    </div>
  );
};

export default Cacli;
