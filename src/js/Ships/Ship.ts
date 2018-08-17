import { Coordinates } from "../Coordinates";

export class Ship {

    pos: Coordinates[];
    hitCells: Coordinates[];
    size:number =  this.pos.length;

    constructor(){ }

       isDead():boolean{
        return this.size == this.hitCells.length;
    }

    isHit(pos):boolean {

        if(this.pos.indexOf(pos) != -1){  
            this.hitCells.push(pos);
            return true;
        }

        return false
    };

    isLive():boolean{
        return this.hitCells.length < this.size;
    }
}
