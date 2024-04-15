import { useDataContext } from "@/context/DataContext";
import React from "react";

const Header = () => {
  const { data } = useDataContext();
  return <header>Header</header>;
};

export default Header;
