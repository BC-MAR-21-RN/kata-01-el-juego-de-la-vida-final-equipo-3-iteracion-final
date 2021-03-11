const CreateBoard = require('../js/CreateBoard')

describe("Create board", () => {
    test("it should generate a board of the rows and columns defined", () => {
        const rows = 2
        const columns = 2

        const output = [[{ value: expect.any(Number) }, { value: expect.any(Number) }]
            , [{ value: expect.any(Number) }, { value: expect.any(Number) }]]

        expect(CreateBoard(rows, columns)).toMatchObject(output);

    });


});