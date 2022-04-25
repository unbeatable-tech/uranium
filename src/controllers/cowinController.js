let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

const getSession=async function(req,res){


    try{

        let district=req.query.districtId
        let date=req.query.date
        console.log(`the value is : ${district} ${date}`)

        let options={
            method:"get",
            url:`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date} `
        }
        let result=await axios(options)
        console.log(result.data)
        res.status(200).send({msg:result.data})
    }

    catch(error){
        console.log(error)
        res.status(500).send({msg:error.message})
    }
}






const getWeatherdata = async (req, res) => {
    try{
        let cities =  req.body.cities || ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        if(req.query.city){
            let fetch = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=${req.query.appId}`
            }
            let result = await axios(fetch)
            return res.status(200).send({Tempeature: result.data.main.temp})
        }
        let result = []
        for(let i in cities){
            let fetch = `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${req.query.appId}`
            let val = (await axios.get(fetch)).data.main
            result.push({city: cities[i], temp: val.temp})
        }
        result.sort((a,b) => {return a.temp - b.temp})
        res.status(200).send({msg: result})
    }catch(err){
        res.status(500).send({msg: err.message})
    }
}

const getMemes = async (req, res) => {
    try{
        let id = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let user = req.query.username 
        let pass = req.query.password
        let fetch = {
            method: 'post',
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=${text1}&username=${user}&password=${pass}`
        }
        let result = await axios(fetch)
        res.status(200).send({msg: result.data})
    }catch(err){
        res.status(500).send({msg: err.message})
    }
}

module.exports.getWeatherdata=getWeatherdata
module.exports.getMemes=getMemes
module.exports.getSession=getSession
module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp