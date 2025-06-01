import styles from './PedraComponent.module.scss'
import type { Pedra } from '../../game/models/Pedra';

type Props = {
    pedra: Pedra;
}

export default function PedraComponent(props: Props) {
    const { pedra } = props;
  return (
    <div className={`${styles.pedra} ${pedra.cor === 'verde' ? styles.verde : styles.vermelha}`}>
    </div>
  )
}
