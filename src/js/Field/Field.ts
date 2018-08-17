import { Cell, CellState } from "./Cell";
import { Coordinates } from "../Coordinates";

export class Field {

    fieldSize: number = 10;
    pos: Coordinates;
    cell: Array<Cell>;
    status: CellState;
    
    constructor(){ }
   
    getFired(pos: Coordinates){ }
}
