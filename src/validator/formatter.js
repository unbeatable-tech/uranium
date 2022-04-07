let str="functionup"

 const trim= function(){
     
     console.log("This is trimed string :",str.trim())
 }
  const changetoLowerCase=function(){
      console.log("Converted to lowercase",str.toLowerCase())

  }

  const changetoUpperCase=function(){
      console.log("converted to uppercase",str.toUpperCase())

  }

  module.exports.trim=trim
  module.exports.lower=changetoLowerCase
  module.exports.upper=changetoUpperCase