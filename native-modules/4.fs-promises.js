const fs = require('node:fs/promises')

console.log('Reading the first file')

/*fs.readFile(
    './native-modules/file.txt',
    'utf-8',
    (err, text) => { // <--- execute this callback
        console.log('--- first text ---', text)
    }
)*/
/**
 * Change the classic callback with a promises js feature
 */
fs.readFile('./native-modules/file.txt', 'utf-8')
    .then(text => {
        console.log('--- first text ---', text)
    })

console.log('Do something meanwhile reading the file...')

console.log('Reading the second file')

fs.readFile('./native-modules/file-2.txt', 'utf-8')
    .then(text => {
        console.log('--- second text ---', text)
    })