var combine = require("../lib/combine.js")

const props = [
    ['red', 'blue'],
    ['first', 'second'],
    ['omg', 'lol']
]

const result = combine(props)
console.log('\033[0;31mCombined props\033[0m');
console.log(JSON.stringify(result, null, 2))