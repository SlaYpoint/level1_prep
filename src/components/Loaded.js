import React, { useState } from "react";

const Loader = () => <h1>Loading...</h1>;

const Loaded = () => {
  let [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <div className="container">
        <Loader />
        <button className="btn" onClick={() => setLoading(false)}>
          Load
        </button>
      </div>
    );
  }
  return (
    <div className="container">
      <h1>Loaded !</h1>
      <button className="btn" onClick={() => setLoading(true)}>
        Load
      </button>
    </div>
  );
};

export default Loaded;
