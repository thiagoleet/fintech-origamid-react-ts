import React from "react";
import "./Style.css";
import Brief from "@pages/Brief/Brief";
import Header from "@components/UI/Header";
import Sidenav from "@components/UI/Sidenav";
import { DataContextProvider } from "@/context/DataContext";

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Brief />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
