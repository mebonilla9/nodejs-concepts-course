import { readFile } from 'node:fs/promises'

/**
 * Define the promises to work in parallel
 */
Promise.all([
	readFile('./native-modules/file.txt', 'utf-8'),
	readFile('./native-modules/file-2.txt', 'utf-8')
]).then(([text, secondText]) => {
	console.log('--- first text ---', text)
	console.log('--- second text ---', secondText)
})

