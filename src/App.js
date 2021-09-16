import "./styles.css";
import React from "react";
import Calci from "./components/Calci";
import FontSize from "./components/FontSize";
import Heading from "./components/Heading";
import TextColor from "./components/TextColor";
import Loaded from "./components/Loaded";
import Password from "./components/Password";

export default function App() {
  return (
    <div className="App">
      {/* <Calci/> */}
      {/* <FontSize /> */}
      {/* <Heading /> */}
      {/* <TextColor /> */}
      {/* <Loaded /> */}
      <Password />
    </div>
  );
}
