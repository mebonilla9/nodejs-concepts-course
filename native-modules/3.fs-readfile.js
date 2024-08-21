const fs = require('node:fs')

console.log('Reading the first file')

/**
 * Removing sync work with file reader to async
 * Adding callback to retrive the result of reading task
 */
// const text = fs.readFileSync('./native-modules/file.txt', 'utf-8')
fs.readFile(
  './native-modules/file.txt',
  'utf-8',
  (_err, text) => { // <--- execute this callback
    console.log('--- first text ---', text)
  }
)

console.log('Do something meanwhile reading the file...')

console.log('Reading the second file')
fs.readFile(
  './native-modules/file-2.txt',
  'utf-8',
  (_err, text) => {
    console.log('--- second text ---', text)
  }
)
