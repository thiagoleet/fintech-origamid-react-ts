import React from "react";
import "./Style.css";
import Brief from "@pages/Brief/Brief";
import Header from "@components/UI/Header";
import Sidenav from "@components/UI/Sidenav";

function App() {
  return (
    <div>
      <Sidenav />
      <main>
        <Header />
        <Brief />
      </main>
    </div>
  );
}

export default App;
