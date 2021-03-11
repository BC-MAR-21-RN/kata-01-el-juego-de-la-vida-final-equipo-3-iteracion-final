const GenerateRandom = require("../js/GenerateRandom")
describe("Generate a random number", () => {
    test("it should generate a random number", () => {

        const number = 8
        const output = expect.any(Number)
        expect(GenerateRandom(number)).toEqual(output)

    })
    
})