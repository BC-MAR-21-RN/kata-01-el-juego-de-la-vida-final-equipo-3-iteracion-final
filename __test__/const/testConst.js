const neighbor = [
    { x: expect.any(Number), y: expect.any(Number) },
    { x: expect.any(Number), y: expect.any(Number) },
    { x: expect.any(Number), y: expect.any(Number) }
]
const fullObject = (neighbor) => [
    [
        { value: expect.any(Number), neighbors: neighbor },
        { value: expect.any(Number), neighbors: neighbor }
    ]
    ,
    [
        { value: expect.any(Number), neighbors: neighbor },
        { value: expect.any(Number), neighbors: neighbor }
    ]
]




module.exports = {
    neighbor,
    fullObject
}