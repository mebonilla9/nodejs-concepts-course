const fs = require('node:fs')

/**
 * Get the sync stat to consume a file
 */
const stats = fs.statSync('./native-modules/file.txt')

/**
 * properties
 */
console.log(
  stats.isFile(), // <-- check if is a file
  stats.isDirectory(), // <-- check if is a folder/directory
  stats.isSymbolicLink(), // <-- is a symbolic link
  stats.size // <-- size of file in bytes
)
