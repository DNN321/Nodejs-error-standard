const customError = require ('./custom-error')
const StatusCodes = require ('http-status-codes')
class Badrequest extends Error {
    constructor(message){
        super(message)
        this.statusCodes = StatusCodes.BAD_REQUEST
    }
}

module.exports = Badrequest

