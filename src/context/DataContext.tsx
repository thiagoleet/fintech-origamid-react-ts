import useFetch from "@/hooks/useFetch";
import React from "react";

const SALES_URL = "https://data.origamid.dev/vendas/";

type TStatus = "pago" | "procesando" | "falha";

type TPagamento = "boleto" | "cartao" | "pix";

interface IDataContext {
  data: IVenda[] | null;
  error: string | null;
  loading: boolean;
}

interface IVenda {
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

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const { data, loading, error } = useFetch<IVenda[]>(SALES_URL, {
    method: "GET",
  });

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
