import React from "react";
import { useDataContext } from "@/context/DataContext";
import DateRange from "../Form/DateRange";
import Months from "../Form/Months";

const Header = () => {
  const { data } = useDataContext();
  return (
    <header className="mb">
      <div className="mb">
        <DateRange />
      </div>
      <Months />
    </header>
  );
};

export default Header;
