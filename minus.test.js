const minus = require('./minus')

test('1 - 1 = 0', ()=>{
    expect(minus(1,1)).toBe(0)
})

test('100 - 99 = 1',()=>{
    expect(minus(100,99)).toBe(1)
})

test('5 - 20 = -15',()=>{
    expect(minus(5,20)).toBe(-15)
})

test('9-(-9) = 18',()=>{
    expect(minus(9,-9)).toBe(18)
})

test('125.24567 - 7789.2551 = -7664.0095 ',()=>{
expect(minus(125.2456,7789.2551)).toBe(-7664.0095)
})