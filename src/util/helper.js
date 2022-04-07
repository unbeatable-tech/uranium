function printDate()
{
    let b = new Date()
    return b

}console.log(printDate())
module.exports.DATE = printDate()

function printmonth(){
    let month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    let c =  new Date()
    let d = month[c.getMonth()]
    return d

}
console.log(printmonth())
module.exports.MONTH = printmonth()


function batchinfo(){
    let e = "URANIUM W3D3 topic for today is node js"
    return e
}
console.log(batchinfo())
module.exports.BATCH = batchinfo()