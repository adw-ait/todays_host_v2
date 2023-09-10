import React, { useState } from "react";
import names from "./Names.json";
import { useUpdateEffect } from "@react-hookz/web";
import "animate.css";

const App = () => {
  // console.log(names[Math.floor(Math.random() * names.length)]);
  const [isRendering, setisRendering] = useState(false);
  const [name, setname] = useState(() => {
    return names[Math.floor(Math.random() * names.length)];
  });

  const INTERVAL = 80;

  const startRendering = () => {
    setisRendering(true);
    setTimeout(() => {
      setisRendering(false);
    }, 2000);
  };

  useUpdateEffect(() => {
    console.log(`Clicked`);
    if (isRendering) {
      const nameInterval = setInterval(() => {
        setname(names[Math.floor(Math.random() * names.length)]);
      }, INTERVAL);

      return () => clearInterval(nameInterval);
    }
  }, [isRendering]);

  return (
    <div className="App">
      <h1 className="title animated">Host for The Standup</h1>
      <div className="nameContainer animated">
        <h1 onClick={() => startRendering()} className="names">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default App;
