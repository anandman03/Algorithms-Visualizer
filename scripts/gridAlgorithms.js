"use strict";

class gridAlgorithms {
    constructor(grid) {
        this.grid = grid;
        this.ROW = 20;
        this.COL = 18;
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

    if((row == 0 && col == 0) || (row == 19 && col == 17)) {
        alert("This action can't be performed");
        return;
    }
    
    const mainAlgo = new gridAlgorithms();
    mainAlgo._Block(row, col);

    cell.target.setAttribute("class", "gcell blocked");
}