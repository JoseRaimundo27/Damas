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

    getOcupadaPor(): Pedra | null {
        return this.ocupadaPor;
    }
  

 
}