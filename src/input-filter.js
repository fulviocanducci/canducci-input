import React from "react";

function InputFilter({
  value,
  eventValueChange,
  eventButtonClick,
  labelButton
}) {
  return (
    <div className="input-group mb-3">
      <input
        className="form-control"
        type="text"
        value={value}
        onChange={eventValueChange}
      />
      <div class="input-group-append">
        <button
          onClick={eventButtonClick}
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          {labelButton || "..."}
        </button>
      </div>
    </div>
  );
}

export default InputFilter;
