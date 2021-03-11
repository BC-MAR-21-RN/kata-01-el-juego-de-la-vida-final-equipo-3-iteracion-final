const RecalculateTable = require('../js/RecalculateTable')
const CreateBoard = require('../js/CreateBoard')
const AddNeighbors = require('../js/AddNeighbor')
const { neighbor,fullObject } = require('./const/testConst')
describe("Create board", () => {
    test("it should generate a board of the rows and columns defined", () => {
        const values = {
            value: expect.any(Number),
            neighbors: expect.arrayContaining([{ x: expect.any(Number), y: expect.any(Number) }])
        }
        const rows = 2
        const columns = 2
        let board = CreateBoard(rows, columns);
        board = AddNeighbors(board);
   
        expect(RecalculateTable(board)).toMatchObject(fullObject(neighbor));

    });


});