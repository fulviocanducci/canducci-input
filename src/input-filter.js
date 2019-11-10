import React from "react";

function InputFilter({ value, eventChange }) {
  return (
    <>
      <input type="text" value={value} onChange={eventChange} />
    </>
  );
}
