const GenerateRandom = require("./GenerateRandom")

 function CreateBoard(rows, cols) {
    this.rows = rows
    this.cols = cols
    function board() {

        return Array.from({ length: this.rows }, () => {
            return Array.from({
                length: this.cols
            }, () => {
                return {
                    value: GenerateRandom(2)
                }
            })
        })

    }
    return board()


}
module.exports=CreateBoard