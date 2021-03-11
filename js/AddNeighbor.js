
function AddNeighbors(board) {

    this.board = board
    this.board.map((array, indRow) => {
        array.map((item, indCol) => {
            this.neighbors = [];
            for (let i = -1; i < 2; i++) {
                if (indRow + i >= 0 && indRow + i < this.board.length) {
                    for (let j = -1; j < 2; j++) {

                        if (indCol + j >= 0 && indCol + j < array.length) {
                            if (i != 0 || j != 0) {

                                this.neighbors.push({ x: indCol + j, y: indRow + i })
                            }
                        }

                    }
                }

            }
            item.neighbors = this.neighbors

        })
    })


    return this.board

}
module.exports = AddNeighbors