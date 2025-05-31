import type { Pedra } from "./Pedra";

export class Casa {
    x: number;
    y: number;
    ocupadaPor: Pedra | null;

    constructor(x: number, y: number, ocupadaPor: Pedra | null) {
        this.x = x;
        this.y = y;
        this.ocupadaPor = ocupadaPor;
    }

    setOcupadaPor(peca: Pedra | null) {
        this.ocupadaPor = peca;
    }

    setPosition(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getOcupadaPor(): Pedra | null {
        return this.ocupadaPor;
    }

    getPosition(): { x: number; y: number } {
        return { x: this.x, y: this.y };
    }

    toString(): string {
        return `Casa(${this.x}, ${this.y}) - Ocupada por: ${this.ocupadaPor ? this.ocupadaPor.id : 'Nenhuma'}`;
    }
 
}