import type { Cor } from "../../types/Cor";
import { Casa } from "../models/Casa";
import type { Tabuleiro } from "../models/Tabuleiro";

export function casaOcupada(casa: Casa | null, corJogadorAtual: Cor): boolean {
  if (casa === null) {
    return false;
  }
  return casa.getOcupadaPor()?.getCor() == corJogadorAtual;
}

export function casaDoJogadorDoTurno(
  casa: Casa | null,
  corJogadorAtual: Cor
): boolean {
  if (casa === null) {
    return false;
  }
  return casa.getOcupadaPor()?.getCor() === corJogadorAtual;
}

export function casaTemJogadaPossivel(
  casa: Casa | null,
  corJogadorAtual: Cor,
  tabuleiro: Tabuleiro
): boolean {
  if (casa === null) {
    return false;
  }

  const x = casa.getX();
  const y = casa.getY();

  if (corJogadorAtual === "vermelha") {
    const podeMoverEsquerda =
      x - 1 >= 0 && y - 1 >= 0 && !tabuleiro.casaTemPedra(x - 1, y - 1);

    const podeMoverDireita =
      x - 1 >= 0 && y + 1 < 8 && !tabuleiro.casaTemPedra(x - 1, y + 1);

    if (!podeMoverEsquerda && !podeMoverDireita) {
      return false;
    }else {
        return true;
    }
  }

  if (corJogadorAtual === "verde") {
    const podeMoverEsquerda =
      x + 1 < 8 && y - 1 >= 0 && !tabuleiro.casaTemPedra(x + 1, y - 1);

    const podeMoverDireita =
      x + 1 < 8 && y + 1 < 8 && !tabuleiro.casaTemPedra(x + 1, y + 1);

    if (!podeMoverEsquerda && !podeMoverDireita) {
      return false;
    }else {
        return true;
    }
  }

  return true;
}
