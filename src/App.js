import { useState, useEffect } from "react";
import ControlBox from "./Control-box.js";

function App() {
  const [shadows, setShadows] = useState([]);
  const [controls, setControls] = useState([
    {
      index: 0,
    },
  ]);

  const updateShadow = (s, id) => {
    const t = [...shadows];
    // t[id] = `${s.x}px ${s.y}px ${s.blur}px ${s.spread}px ${s.color}`;
    t[id] = s.inset
      ? `inset ${s.x}px ${s.y}px ${s.blur}px ${s.spread}px ${s.color}`
      : `${s.x}px ${s.y}px ${s.blur}px ${s.spread}px ${s.color}`;

    setShadows(t);
  };

  function addShadow() {
    setControls([
      ...controls,
      {
        index: controls.length,
      },
    ]);
  }

  return (
    <div className="container">
      <div className="preview">
        <div
          className="preview-box"
          style={{ boxShadow: shadows.join(",") }}
        ></div>
      </div>
      <div className="controls">
        {controls.map((c) => (
          <ControlBox key={c.index} id={c.index} updateShadow={updateShadow} />
        ))}
        <p className="text-right">
          <button onClick={addShadow}>Add Layer</button>
        </p>
        <div className="codes controls-box">
          <span className="prop-name">box-shadow: </span>
          <span className="code">{shadows.join(", ")};</span>
        </div>
      </div>
    </div>
  );
}

export default App;
