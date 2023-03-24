const customError = require ('./custom-error')
const StatusCodes = require ('http-status-codes')
const { STATUS_CODES } = require('http')
class unauthorized extends Error {
    constructor(message){
        super(message)
        this.statusCodes = StatusCodes.UNAUTHORIZED
    }
}

module.exports = unauthorized