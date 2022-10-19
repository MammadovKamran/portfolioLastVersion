import React from "react";
import Dashboard from "./Dashboard";
import Navigation from "../components/navigation/Navigation";
import AnimatedCursor from "react-animated-cursor";
import Bg_wave from "../components/wave/Bg_wave";
const App = () => {
  return (
    <div className="appContainer">
      <Navigation />
      <div className="animation_container">
        <Bg_wave />
      </div>
      <Dashboard className="main_container" />
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        color="98,225,233"
        outerAlpha={0.5}
        innerScale={0.7}
        outerScale={2.5}
        outerStyle={{ border: "1px solid #0652E9" }}
        innerStyle={{ backgroundColor: "#0652E9", PointerEvent: "" }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </div>
  );
};

export default App;
