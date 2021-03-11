function GetValidNeigbors(indRow,indCol,boardLenght,arrayLenght){
this.validNeighbors=[]
    for (let i = -1; i < 2; i++) {
        if (indRow + i >= 0 && indRow + i < boardLenght) {
            for (let j = -1; j < 2; j++) {

                if (indCol + j >= 0 && indCol + j < arrayLenght) {
                    if (i != 0 || j != 0) {

                        this.validNeighbors.push({ x: indCol + j, y: indRow + i })
                    }
                }

            }
        }

    }


return this.validNeighbors


}

module.exports=GetValidNeigbors