import type { TipoCasa } from "../../types/TipoCasa";
import type { Pedra } from "./Pedra";

export class Casa {
    x: number;
    y: number;
    ocupadaPor: Pedra | null;
    tipo: TipoCasa = "vazia"; // Inicialmente, a casa é do tipo "vazia"

    constructor(x: number, y: number, ocupadaPor: Pedra | null) {
        this.x = x;
        this.y = y;
        this.ocupadaPor = ocupadaPor;

        if (this.x + this.y % 2 === 0) {
            this.tipo = "vazia"; 
        }else {
            this.tipo = "jogavel"; 
        }
    }

    getOcupadaPor(): Pedra | null {
        return this.ocupadaPor;
    }

    getTipo(): TipoCasa {
        return this.tipo;
    }

    getX(): number {
        return this.x;
    }

    getY(): number {
        return this.y;
    }
  

 
}