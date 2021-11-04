const mongoose = require('mongoose')
const config = require('../config')

const connect = async()=>{
    try{
        const con = await mongoose.connect(config.MONGO_URI)

        console.log(`MongoDB Connected: ${con.connection.host}`)
    }
    catch(e){
        console.log(e)
        process.exit(1)
    }
}

module.exports = connect