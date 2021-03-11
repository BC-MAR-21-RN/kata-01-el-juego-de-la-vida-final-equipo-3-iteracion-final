function RecalculateTable(board) {
    this.board = board
    this.board.map((array) => {
        array.map((items) => {
            this.sum = 0;
            items.neighbors.map(elem => {
                this.sum += this.board[elem.y][elem.x].value

            })
            if (this.sum < 2 || this.sum > 3) {
                items.value = 0
            }
            if (this.sum === 3) {
                items.value = 1
            }

            return items
        })
    })

    return this.board

}
module.exports = RecalculateTable