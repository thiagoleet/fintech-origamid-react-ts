import React from "react";

type IDateInput = React.ComponentProps<"input"> & {
  label: string;
};

const DateInput: React.FC<IDateInput> = ({ label, ...props }) => {
  return (
    <div>
      <label htmlFor={props.id}>{label}</label>
      <input type="date" id={props.id} name={props.id} {...props} />
    </div>
  );
};

export default DateInput;
