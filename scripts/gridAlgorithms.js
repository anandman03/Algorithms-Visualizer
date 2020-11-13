"use strict";

class gridAlgorithms {
    constructor(grid) {
        this.grid = grid;
        this.ROW = 20;
        this.COL = 30;
        this.list = new Array(this.ROW);
        for(let counter = 0 ; counter < this.ROW ; ++counter) {
            this.list[counter] = new Array(this.COL);
        }
    }

    _BFS = async () => {
        console.log("BFS");
    }

    _Block = (row, col) => {
        this.list[row][col] = -1;
        console.log(this.list);
    }
};

const markBlock = (cell) => {
    const index = cell.target.getAttribute("value").split(",");
    const row = Number(index[0]);
    const col = Number(index[1]);
    
    const mainAlgo = new gridAlgorithms();
    mainAlgo._Block(row, col);

    cell.target.setAttribute("class", "gcell blocked");
}