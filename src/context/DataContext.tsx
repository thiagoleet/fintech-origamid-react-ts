import useFetch from "@/hooks/useFetch";
import formatDate from "@/util/formatDate";
import React from "react";

const SALES_URL = "https://data.origamid.dev/vendas";

type TStatus = "pago" | "processando" | "falha";

type TPagamento = "boleto" | "cartao" | "pix";

interface IDataContext {
  data: IVenda[] | null;
  error: string | null;
  loading: boolean;
  inicio: string;
  final: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
}

export interface IVenda {
  id: string;
  nome: string;
  preco: number;
  status: TStatus;
  pagamento: TPagamento;
  data: string;
  parcelas: number | null;
}

const DataContext = React.createContext<IDataContext | null>(null);

export const useDataContext = () => {
  const context = React.useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataContextProvider");
  }
  return context;
};

function getDate(n: number) {
  const date = new Date();
  date.setDate(date.getDate() - n);

  return formatDate(date);
}

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [inicio, setInicio] = React.useState(getDate(0));
  const [final, setFinal] = React.useState(getDate(14));

  const { data, loading, error } = useFetch<IVenda[]>(
    `${SALES_URL}/?inicio=${inicio}&final=${final}`,
    {
      method: "GET",
    }
  );

  return (
    <DataContext.Provider
      value={{ data, loading, error, inicio, setInicio, final, setFinal }}
    >
      {children}
    </DataContext.Provider>
  );
};
