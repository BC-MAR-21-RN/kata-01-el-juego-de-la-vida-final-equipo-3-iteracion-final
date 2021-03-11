const RecalculateTable = require('../js/RecalculateTable')
const CreateBoard = require('../js/CreateBoard')
const AddNeighbors = require('../js/AddNeighbor')

describe("Create board", () => {
    test("it should generate a board of the rows and columns defined", () => {
        const values = {
            value: expect.any(Number),
            neighbors: expect.arrayContaining([{x: expect.any(Number), y: expect.any(Number)}])
        }
        const rows = 2
        const columns = 2
        let board = CreateBoard(rows, columns);
        board = AddNeighbors(board);

        const neighbor = [{x: expect.any(Number), y:expect.any(Number)}, {x: expect.any(Number), y:expect.any(Number)}, {x: expect.any(Number), y:expect.any(Number)} ]

        const output = [[{ value: expect.any(Number), neighbors: neighbor}, { value: expect.any(Number), neighbors: neighbor }]
            , [{ value: expect.any(Number),neighbors: neighbor}, { value: expect.any(Number), neighbors: neighbor }]]

        expect(RecalculateTable(board)).toMatchObject(output);

    });


});