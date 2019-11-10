import React from "react";

function InputRange({ description, value, min, max, step, eventValueChange }) {
  return (
    <div className="input-group mb-3">
      <label for="formControlRange">{description}</label>
      <input
        type="range"
        min={min || 0}
        max={max || 100}
        step={step || 1}
        value={value || 0}
        class="form-control-range"
        id="formControlRange"
        onChange={eventValueChange}
      ></input>
    </div>
  );
}

export default InputRange;
