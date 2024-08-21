const fs = require('node:fs/promises')

/**
 * Reading the files into a specific path, using callback
 * the error is the first argument in the callback to force the
 * error handling
 */
fs.readdir('./native-modules')
    .then(files => {
        files.forEach(file => console.log(file))
    })
    .catch(err => {
        if (err) {
            console.log('Error when reading files',err)
            return
        }
    })

console.log('Reading files from path')