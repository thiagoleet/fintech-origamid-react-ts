import { IVenda } from "@/context/DataContext";
import React from "react";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const dadosGrafico = [
  {
    data: "2023-05-03",
    pago: 30000,
    processando: 1000,
    falha: 50,
  },
  {
    data: "2023-05-04",
    pago: 40000,
    processando: 5000,
    falha: 80,
  },
  {
    data: "2023-05-05",
    pago: 1000,
    processando: 10,
    falha: 80,
  },
];

type VendaDia = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

function transformData(data: IVenda[]): VendaDia[] {
  const dias = data.reduce((acc: { [key: string]: VendaDia }, item) => {
    const dia = item.data.split(" ")[0];

    if (!acc[dia]) {
      acc[dia] = { data: dia, pago: 0, falha: 0, processando: 0 };
    }
    acc[dia][item.status] += item.preco;
    return acc;
  }, {});

  return Object.values(dias).map((dia) => ({
    ...dia,
    data: dia.data.substring(5),
  }));
}

const SalesChart: React.FC<{ data: IVenda[] }> = ({ data }) => {
  const transformedData = transformData(data);
  return (
    <ResponsiveContainer height={400}>
      <LineChart
        data={transformedData}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="data" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#A36af9" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#fbcb21"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="falha"
          stroke="#ff0000"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;
