import React from "react";
import { useDataContext } from "@context/DataContext";
import SalesItem from "@components/SalesItem";

const Sales: React.FC = () => {
  const { data } = useDataContext();

  if (data === null) return null;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <SalesItem venda={item} />
        </li>
      ))}
    </ul>
  );
};

export default Sales;
