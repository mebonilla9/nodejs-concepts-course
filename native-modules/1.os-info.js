/** 
 * Import native module get info of the OS
 * not use os module after node v16 replace with node:os
 */
//const os = require('os')
import { platform, version, arch, cpus, freemem, totalmem, uptime } from 'node:os'

console.log('Operative System information:')
console.log('-----------------------------')
console.log('OS Name: ', platform())
console.log('OS Version: ', version())
console.log('OS Architecture: ', arch())
console.log('OS CPUs: ', cpus()) // <---- used to scale process
console.log('OS Free memory: ', freemem() / 1024 / 1024)
console.log('OS Total memory: ', totalmem() / 1024 / 1024)
console.log('OS uptime', uptime() / 60 / 60)