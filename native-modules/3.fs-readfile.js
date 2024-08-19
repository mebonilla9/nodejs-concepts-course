const fs = require('node:fs')

console.log('Reading the first file')
const text = fs.readFileSync('./native-modules/file.txt', 'utf-8')
console.log(text)

console.log('Reading the second file')
const textSecond = fs.readFileSync('./native-modules/file-2.txt', 'utf-8')
console.log(textSecond)