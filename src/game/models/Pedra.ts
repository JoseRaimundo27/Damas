import type { Casa } from "./Casa";

export class Pedra {
    id: string;
    casa: Casa | null;

    constructor(id: string, casa: Casa | null) {
        this.id = id;
        this.casa = casa;
        this.casa?.setOcupadaPor(this);

    }

    getPosition(): { x: number; y: number } {
        return this.casa ? this.casa.getPosition() : { x: -1, y: -1 };
    }
    
}