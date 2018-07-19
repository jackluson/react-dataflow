import React from "react";
export default function Switcher({ value, onChange }) {
  return (
    <button onClick={e => onChange(!value)}>
      {value ? "lights on" : "lights off"}
    </button>
  );
}

{/* <Switcher value={Store.get()} onChange={Store.set.bind(Store)} />; */}
