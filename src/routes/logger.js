
let endpoint = 'https://www.google.com'

let log = function() {
    console.log(module)
    console.log('I am inside log function')
}

let obj = {
    "name":"Amit"
}

module.exports.endpoint = endpoint
module.exports.logging = log


