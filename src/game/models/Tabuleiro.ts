import { Casa } from "./Casa";
import { Pedra } from "./Pedra";

export class Tabuleiro {
  casas: Casa[][] = [];

  constructor() {
    this.inicializarTabuleiro();
  }

  inicializarTabuleiro(): void {
    // Cria um tabuleiro 8x8
    for (let i = 0; i < 8; i++) {
      this.casas[i] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 1) {
          if (!(i == 3 || i == 4)) {
            const pedra = new Pedra(
              `pedra-${i}-${j}`,
                i < 3 ? "verde" : "vermelha"
            );
            this.casas[i][j] = new Casa(i, j, pedra);
            continue;
          }
        }

        this.casas[i][j] = new Casa(i, j, null);
      }
    }
  }

  getCasa(x: number, y: number): Casa | null {
    if (x < 0 || x >= 8 || y < 0 || y >= 8) {
      return null; // Retorna null se a posição estiver fora dos limites
    }
    return this.casas[x][y];
  }
}
