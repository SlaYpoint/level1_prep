import React, { useState } from "react";

const Password = () => {
  let [disable, setDisable] = useState(true);
  let [pswd, setPswd] = useState("");
  let [msg, setMsg] = useState("");
  let [statusColor, setStatusColor] = useState("");

  const checkPassword = (pswd) => {
    if (pswd.length >= 10) {
      setPswd(pswd);
      setStatusColor("#10B981");
      setMsg("Success!");
      setDisable(false);
    } else {
      setMsg("Minimum 10 characters");
      setStatusColor("#DC2626");
      setPswd("");
      setDisable(true);
    }
  };

  return (
    <div className="container">
      <h1>Password Check</h1>
      <label for="password">
        <input
          id="password"
          type="password"
          style={{ border: `1px solid ${statusColor}`, outline: "none" }}
          onChange={(e) => checkPassword(e.target.value)}
        />
      </label>
      <button
        className="btn"
        disabled={disable}
        onClick={() => console.log(pswd)}
      >
        Login
      </button>
      <p>{msg}</p>
    </div>
  );
};

export default Password;
