import  { useState } from "react";
import TabuleiroComponent from "./components/TabuleiroComponent/TabuleiroComponent";
import styles from "./App.module.scss";
import { Jogo } from "./game/logic/Jogo";

function App() {
  const [jogo, setJogo] = useState(new Jogo());

  const handleCasaClick = (linha: number, coluna: number) => {
    jogo.handleCasaClick(linha, coluna);
    
    
  };

  return (
    <div className={styles.app}>
      <TabuleiroComponent tabuleiro={jogo.tabuleiro} onClick={handleCasaClick} />
    </div>
  );
}

export default App;
