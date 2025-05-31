import React, { useState } from "react";
import { Tabuleiro } from "./game/models/Tabuleiro";
import TabuleiroComponent from "./components/TabuleiroComponent/TabuleiroComponent";
import styles from "./App.module.scss";

function App() {
  const [tabuleiro, setTabuleiro] = useState(new Tabuleiro());

  const handleCasaClick = (linha: number, coluna: number) => {
    const casa = tabuleiro.getCasa(linha, coluna);
    console.log("Casa clicada:", casa);
  };

  return (
    <div className={styles.app}>
      <h1>Jogo de Damas</h1>
      <TabuleiroComponent tabuleiro={tabuleiro} onClick={handleCasaClick} />
    </div>
  );
}

export default App;
