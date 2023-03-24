const { kMaxLength } = require('buffer')
const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema ({
    name:{
        type:String,
        required:[true,'please insert name'],
        minlength:3,
        MaxLength:20
    },
    email:{
        type:String,
        enum:[]

    },
    password:{
        type:String,
        required:[true,'please insert password'],
        minlength:5,
        MaxLength:20
    }
})

module.exports = mongoose.model ('User',userSchema)