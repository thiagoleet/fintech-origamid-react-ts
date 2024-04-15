import React from "react";
import { useDataContext } from "@/context/DataContext";
import formatDate from "@/util/formatDate";

function monthName(n: number) {
  const date = new Date();
  date.setMonth(date.getMonth() - n);
  const name = new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
  return name;
}

const style: React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  backgroundColor: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: "bold",
  textTransform: "capitalize",
};

const MonthButton: React.FC<{ n: number }> = ({ n }) => {
  const { setInicio, setFinal } = useDataContext();

  function setMonth(n: number) {
    const date = new Date();
    date.setMonth(date.getMonth() - n);

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    setInicio(formatDate(firstDay));
    setFinal(formatDate(lastDay));
  }

  return (
    <button
      style={style}
      onClick={() => {
        setMonth(n);
      }}
    >
      {monthName(n)}
    </button>
  );
};

export default MonthButton;
