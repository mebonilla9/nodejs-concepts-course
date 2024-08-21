/**
 * Basic Instruction to print in the js console
 *
 * To run the script -> node index.js
 */
console.log('Hola, Mundo 👏🏻')
console.info('Hola, Mundo!')
console.error('Hola, Mundo!')

/**
 * Global objects in node
 * window object not exist in node.js
 * Use globalThis
 */

console.log(globalThis)
globalThis.console.log('Hello')
