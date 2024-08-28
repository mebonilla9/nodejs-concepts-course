/**
 * Import native module get info of the OS
 * not use os module after node v16 replace with node:os
 */
// const os = require('os')
const os = require('node:os')

console.log('Operative System information:')
console.log('-----------------------------')
console.log('OS Name: ', os.platform())
console.log('OS Version: ', os.version())
console.log('OS Architecture: ', os.arch())
console.log('OS CPUs: ', os.cpus()) // <---- used to scale process
console.log('OS Free memory: ', os.freemem() / 1024 / 1024)
console.log('OS Total memory: ', os.totalmem() / 1024 / 1024)
console.log('OS uptime', os.uptime() / 60 / 60)
