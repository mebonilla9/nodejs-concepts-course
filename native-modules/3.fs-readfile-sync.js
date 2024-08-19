const fs = require('node:fs')

console.log('Reading the first file')
const text = fs.readFileSync('./native-modules/file.txt', 'utf-8')
console.log(text)

console.log('Do something meanwhile reading the file...')

console.log('Reading the second file')

const secondText = fs.readFileSync('./native-modules/file.txt', 'utf-8')
console.log(secondText)

