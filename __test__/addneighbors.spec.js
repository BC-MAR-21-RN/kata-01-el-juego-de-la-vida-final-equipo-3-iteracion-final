const AddNeighbors = require('../js/AddNeighbor');
const CreateBoard=require('../js/CreateBoard')
describe("Add neighbors at board", () => {
    test("it should generate neighbors on board", () => {
        const rows = 2
        const columns = 2
        const board = CreateBoard(rows, columns)
        const neighbor = [{ x: expect.any(Number), y: expect.any(Number) },
        { x: expect.any(Number), y: expect.any(Number) },
        { x: expect.any(Number), y: expect.any(Number) }]

        const output = [[{ value: expect.any(Number), neighbors: neighbor }, { value: expect.any(Number), neighbors: neighbor }]
            , [{ value: expect.any(Number), neighbors: neighbor }, { value: expect.any(Number), neighbors: neighbor }]]

        expect(AddNeighbors(board)).toMatchObject(output);

    });


});