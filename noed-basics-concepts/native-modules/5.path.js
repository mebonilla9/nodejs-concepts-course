const path = require('node:path')

// Path separator by OS
console.log(path.sep)

// Join path with path.join

const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

// Get filename into a directory
const base = path.basename('/tmp/secret-files/password.txt')
console.log(base)

// Get filename without extension
const fileName = path.basename('/tmp/secret-files/password.txt', '.txt')
console.log(fileName)

// Get the extension of a file
const extension = path.extname('my-incredible.image.jpeg')
console.log(extension)
