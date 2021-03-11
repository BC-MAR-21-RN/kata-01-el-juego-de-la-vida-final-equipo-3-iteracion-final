const AddNeighbors = require('../js/AddNeighbor');
const CreateBoard=require('../js/CreateBoard')
const {neighbor,fullObject}= require('./const/testConst')


describe("Add neighbors at board", () => {
    test("it should generate neighbors on board", () => {
        const rows = 2
        const columns = 2
        const board = CreateBoard(rows, columns)
    
        expect(AddNeighbors(board)).toMatchObject(fullObject(neighbor));

    });


});