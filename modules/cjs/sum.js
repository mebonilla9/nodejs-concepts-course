function sum (a, b) {
  return a + b
}

/**
 * Classic way of export modules with CommonJS
 *
 */
// module.exports = sum

/**
 * export module as a key to force to use the name of function
 */
module.exports = {
  sum
}
