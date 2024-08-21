const fs = require('node:fs/promises')
const path = require('node:path')
const pico = require('picocolors')

/**
 * Get the folder with argument on the script execution
 */
const folder = process.argv[2] ?? './native-modules'

async function ls (folder) {
  let files
  try {
    // To get all the info of the folders and file into a seleced directory
    // we need to wait the response of file system
    files = await fs.readdir(folder)
  } catch {
    console.error(pico.red(`❌ The directory ${folder} cannot be read`))
    process.exit(1)
  }

  const filePromises = files.map(async file => {
    // concat the file and the folder that contains
    const filePath = path.join(folder, file)
    let stats
    try {
      // Retrive info of the file based on the folder url
      stats = await fs.stat(filePath)
    } catch {
      console.error(`The file ${filePath} cannot be read`)
      process.exit(1)
    }

    // Stats stored in constants
    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size.toString()
    const fileModified = stats.mtime.toLocaleString()

    // return string template with the file info
    return `${pico.bgMagenta(fileType)} ${pico.blue(file.padEnd(30))} ${pico.green(fileSize.padStart(20))} ${pico.yellow(fileModified)}`
  })

  const filesInfo = await Promise.all(filePromises)

  filesInfo.forEach(fileInfo => console.log(fileInfo))
  return pico.inverse('All info loaded')
}

ls(folder).then(result => console.log(result))
