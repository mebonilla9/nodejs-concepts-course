// process

console.log(process.argv)

//process.exit(1)

// Manage event on process object

process.on('exit', () => {
    // clear resources
})

// Current working directory
console.log(process.cwd())

// Platforom
console.log(process.env.PETER)
