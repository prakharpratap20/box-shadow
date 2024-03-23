import { useState } from "react";
import { useEffect } from "react";

export default function ControlBox({ updateShadow, id }) {
  const [shadowModel, setShadowModel] = useState({
    x: 0,
    y: 0,
    blur: 0,
    spread: 0,
    color: "#000",
    inset: false,
  });

  const updateShadowModel = (prop, val) => {
    setShadowModel({
      ...shadowModel,
      [prop]: val,
    });
  };

  useEffect(() => {
    updateShadow(shadowModel, id);
  }, [shadowModel]);

  return (
    <div className="controls-box">
      <label>Offset X</label>
      <input
        type="range"
        min="-100"
        max="100"
        defaultValue="0"
        onChange={(e) => updateShadowModel("x", e.target.value)}
      />
      <label>Offset Y</label>
      <input
        type="range"
        min="-100"
        max="100"
        defaultValue="0"
        onChange={(e) => updateShadowModel("y", e.target.value)}
      />
      <label>Blur</label>
      <input
        type="range"
        min="0"
        max="100"
        defaultValue="0"
        onChange={(e) => updateShadowModel("blur", e.target.value)}
      />
      <label>Spread</label>
      <input
        type="range"
        min="0"
        max="100"
        defaultValue="0"
        onChange={(e) => updateShadowModel("spread", e.target.value)}
      />
      <label>Color</label>
      <input
        type="color"
        onChange={(e) => updateShadowModel("color", e.target.value)}
      />
      <p>
        <span style={{ marginRight: ".5em" }}>Inset:</span>
        <input
          type="checkbox"
          onChange={(e) => updateShadowModel("inset", !shadowModel.inset)}
        />
      </p>
    </div>
  );
}
