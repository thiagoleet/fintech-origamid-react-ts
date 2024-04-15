import React from "react";
import DateRange from "../Form/DateRange";
import Months from "../Form/Months";

const Header = () => {
  const [title, setTitle] = React.useState("Resumo");

  return (
    <header className="mb">
      <div className="dateRange mb">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Months />
    </header>
  );
};

export default Header;
