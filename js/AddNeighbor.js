function AddNeighbors(board) {

    this.board = board
    this.board.map((array, indRow) => {
        array.map((item, indCol) => {
            this.validNeighbors = []
            for (let i = -1; i < 2; i++) {

                for (let j = -1; j < 2; j++) {
                    try {

                        if ((i != 0 || j != 0) && board[indRow + i][indCol + j].value !== undefined) {

                            this.validNeighbors.push({ x: indCol + j, y: indRow + i })
                        }
                    } catch (error) {
                        return
                    }
                }

            }
            item.neighbors = this.validNeighbors
        })
    })


    return this.board

}
module.exports = AddNeighbors