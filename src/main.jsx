import React from "react";
import ReactDOM from "react-dom";
import "../dist/output.css";
import Header from "./Headers";
import { Formulario } from "./Formulario";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Formulario />
  </React.StrictMode>,
  document.getElementById("root")
);
