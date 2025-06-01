import type { Cor } from "../../types/Cor";
import type { Casa } from "../models/Casa";
import { Tabuleiro } from "../models/Tabuleiro";
import {
  casaDoJogadorDoTurno,
  casaOcupada,
  casaTemJogadaPossivel,
} from "./verificaCasa";

export class Jogo {
  tabuleiro: Tabuleiro;
  corJogadorAtual: Cor;

  constructor() {
    this.tabuleiro = new Tabuleiro();
    this.corJogadorAtual = "vermelha"; // Inicia com o primeiro jogador
  }

  public iniciarJogo(): void {
    this.tabuleiro.inicializarTabuleiro();
  }

  public reiniciarJogo(): void {
    // Lógica para reiniciar o jogo
  }

  public handleCasaClick(x: number, y: number): void {
    const casa = this.tabuleiro.getCasa(x, y);
    // Verifica se a casa está ocupada ou se é a pedra do jogador atual:
    if (
      !casaOcupada(casa, this.corJogadorAtual) ||
      !casaDoJogadorDoTurno(casa, this.corJogadorAtual) ||
      !casaTemJogadaPossivel(casa, this.corJogadorAtual, this.tabuleiro)
    ) {
        return;
    }else {
        console.log(`Jogada válida ${this.corJogadorAtual} clicou na casa (${x}, ${y})`);
        this.alternarJogador();
    }

  }

  private alternarJogador(): void {
    this.corJogadorAtual = this.corJogadorAtual === "vermelha" ? "verde" : "vermelha";
  }

  public getCasa(x: number, y: number) {
    return this.tabuleiro.getCasa(x, y);
  }
}
