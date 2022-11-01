const fs = require('fs')

let a = Number(fs.readFileSync('a.txt'))
let b = Number(fs.readFileSync('b.txt'))
let sum = a + b

console.log(sum)

