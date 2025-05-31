import { Casa } from "../../game/models/Casa";
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
        {casa.ocupadaPor ? (
          <div
            className="peca"
            style={{ width: "100%", height: "100%", backgroundColor: "red" }}
          >
            {casa.ocupadaPor.id}
          </div>
        ) : null}
      </div>
    </>
  );
}
