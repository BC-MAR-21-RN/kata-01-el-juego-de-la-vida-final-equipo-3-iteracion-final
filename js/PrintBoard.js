function PrintBoard(board) {
    this.board = board
    this.boardToShow = this.board.map(arr => {
        return arr.map(item => {
            return item.value == 1 ? '*' : '.'
        })
    })
    console.table(this.boardToShow)
    

}
module.exports = PrintBoard