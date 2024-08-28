import { readFile } from 'node:fs/promises'

console.log('Reading the first file')

/* fs.readFile(
    './native-modules/file.txt',
    'utf-8',
    (err, text) => { // <--- execute this callback
        console.log('--- first text ---', text)
    }
) */
/**
 * Change the classic callback with a promises js feature
 */
const text = await readFile('./native-modules/file.txt', 'utf-8')
console.log('--- first text ---', text)

console.log('Do something meanwhile reading the file...')

console.log('Reading the second file')

const secondText = await readFile('./native-modules/file-2.txt', 'utf-8')
console.log('--- second text ---', secondText)
