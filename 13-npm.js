// npm - global command, comes with node

// local dependency - use it only in this particular project
// npm i <packageName>
 
// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName>


const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);