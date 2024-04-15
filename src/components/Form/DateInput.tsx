import React from "react";

type IDateInput = React.ComponentProps<"input"> & {
  label: string;
};

const generalStyle: React.CSSProperties = {
  color: "var(--color-2)",
  padding: "var(--gap-s) 0.75rem",
  backgroundColor: "var(--color-4)",
  borderRadius: "var(--gap)",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-s)",
  fontWeight: "bold",
  ...generalStyle,
};

const inputStyle: React.CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  ...generalStyle,
};

const DateInput: React.FC<IDateInput> = ({ label, ...props }) => {
  return (
    <div>
      <label htmlFor={props.id} style={labelStyle}>
        {" "}
        {label}
      </label>
      <input
        type="date"
        id={props.id}
        name={props.id}
        {...props}
        style={inputStyle}
      />
    </div>
  );
};

export default DateInput;
