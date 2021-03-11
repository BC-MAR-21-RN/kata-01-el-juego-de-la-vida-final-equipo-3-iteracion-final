const GetValidNeigbors = require("./CheckValidNeighbor");

function AddNeighbors(board) {

    this.board = board
    this.board.map((array, indRow) => {
        array.map((item, indCol) => {
            item.neighbors = GetValidNeigbors(indRow,indCol,this.board.length,array.length)

        })
    })


    return this.board

}
module.exports = AddNeighbors