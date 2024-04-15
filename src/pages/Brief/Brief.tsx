import { useDataContext } from "@/context/DataContext";
import React from "react";

const Brief = () => {
  const { data } = useDataContext();
  return <div>Resumo</div>;
};

export default Brief;
