import { Casa } from "../../game/models/Casa";
import PedraComponent from "../PedraComponent/PedraComponent";
import styles from "./CasaComponent.module.scss";
type Props = {
  casa: Casa;
  onClick: (casa: Casa) => void;
};

export default function CasaComponent(props: Props) {
  const { casa, onClick } = props;
  const isDark = (casa.x + casa.y) % 2 === 1;

  return (
    <>
      <div
        className={`${styles.casa} ${isDark ? styles.dark : styles.light}`}
        onClick={() => onClick(casa)}
      >
        {casa.getOcupadaPor() && (
          <PedraComponent 
          key={`${casa.x}-${casa.y}`}
          pedra={casa.getOcupadaPor()!} />
        )}
      </div>
    </>
  );
}
