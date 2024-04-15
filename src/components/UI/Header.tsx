import React from "react";
import { useDataContext } from "@/context/DataContext";
import DateRange from "../Form/DateRange";

const Header = () => {
  const { data } = useDataContext();
  return (
    <>
      <header>Header</header>
      <div>
        <DateRange />
      </div>
    </>
  );
};

export default Header;
