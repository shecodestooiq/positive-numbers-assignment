const { test } = require('node:test')
let sum=require('.')

test("positive sum numbers",()=>{
    expect(sum).toBe(18)
})