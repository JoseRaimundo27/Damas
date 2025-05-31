import { Casa } from "./Casa";

export class Tabuleiro {
    casas: Casa[][] = [];

    constructor() {
        this.inicializarTabuleiro();
    }

    inicializarTabuleiro() : void {
        // Cria um tabuleiro 8x8
        for (let i = 0; i < 8; i++) {
            this.casas[i] = [];
            for (let j = 0; j < 8; j++) {
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