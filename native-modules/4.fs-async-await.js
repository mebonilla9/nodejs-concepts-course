const { readFile } = require('node:fs/promises');

/**
 * Use self-invoked function
 */

(
  async () => {
    console.log('Reading the first file')
    const text = await readFile('./native-modules/file.txt', 'utf-8')
    console.log('--- first text ---', text)

    console.log('Do something meanwhile reading the file...')

    console.log('Reading the second file')

    const secondText = await readFile('./native-modules/file-2.txt', 'utf-8')
    console.log('--- second text ---', secondText)
  }
)()
