import { Coordinates } from "../Coordinates";

export class Cell {

    pos: Coordinates;
    cellState: CellState;
    
    constructor(){ } 
}

export enum CellState {
    free = 0,
    busy = 1,
    miss = 2,
    hit = 3,
}