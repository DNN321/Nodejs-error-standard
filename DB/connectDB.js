const mongoose = require ('mongoose')


const createDB = async (url)=>{
    return mongoose.connect(url)
}

module.exports = createDB