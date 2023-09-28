import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Decouvrez from "./Decouvrez";
import InfoClient from "./InfoClient";
import "./style2.css";

const RendezVous = () => {
  return (
    <main>
      <div class="row">
        <Decouvrez />
        <InfoClient />
      </div>
    </main>
  );
};

export default RendezVous;
