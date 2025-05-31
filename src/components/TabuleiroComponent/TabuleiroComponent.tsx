import type { Tabuleiro } from "../../game/models/Tabuleiro"
import CasaComponent from "../CasaComponent/CasaComponent";
import styles from "./TabuleiroComponent.module.scss";
type Props = {
  tabuleiro: Tabuleiro;
  onClick: (linha: number, coluna: number) => void;
}
export default function TabuleiroComponent(props: Props) {
  const { tabuleiro, onClick } = props;
  return (
     <div className={styles.tabuleiro}>
      {tabuleiro.casas.map((linha, i) =>
        linha.map((casa, j) => (
          <CasaComponent
            key={`${i}-${j}`}
            casa={casa}
            onClick={() => onClick(i, j)}
          />
        ))
      )}
    </div>
  )
}
