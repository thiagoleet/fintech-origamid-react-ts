import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Style.css";
import { DataContextProvider } from "@context/DataContext";
import Brief from "@pages/Brief/Brief";
import Sales from "@pages/Sales/Sales";
import Sale from "@pages/Sales/Sale";
import Header from "@components/UI/Header";
import Sidenav from "@components/UI/Sidenav";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Brief />} />
              <Route path="/vendas" element={<Sales />} />
              <Route path="/vendas/:id" element={<Sale />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
};

export default App;
