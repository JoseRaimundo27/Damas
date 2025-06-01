import type { Cor } from "../../types/Cor";

export class Pedra {
    id: string;
    cor: Cor;
    dama: boolean;

    constructor(id: string, cor: Cor) {
        this.id = id;
        this.cor = cor;
        this.dama = false; // Inicialmente, a pedra não é uma dama
    }

    public getCor(): Cor {
        return this.cor;
    }
    
    public setDama(isDama: boolean): void {
        this.dama = isDama;
    }
    
}