function RecalculateTable(board) {
    this.borad = board
    this.board.map((array) => {
        array.map((items) => {
            this.sum = 0;
            items.neighbors.map(elem => {
                this.sum += board[elem.y][elem.x].value
            })
            items.newValue = items.value
            if (this.sum < 2 || this.sum > 3) {
                items.newValue = 0

            }
            if (this.sum === 3) {
                items.newValue = 1
            }
            return items
        })

    })

    this.newBorad = this.borad.map(array => array.map(item => {
        item = {
            value: item.newValue,
            neighbors: item.neighbors
        }
        return item
    }))
    return this.newBorad

}
module.exports = RecalculateTable