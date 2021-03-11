const CheckValidNeighbor = require('../js/CheckValidNeighbor')
const { neighbor } = require('./const/testConst')


describe("Create board", () => {
    test("it should generate a board of the rows and columns defined", () => {
        const indRow = 0
        const indCol = 0
        const boardLenght = 2
        const arrayLenght = 2
        expect(CheckValidNeighbor(indRow, indCol, boardLenght, arrayLenght)).toMatchObject(neighbor);

    });


});