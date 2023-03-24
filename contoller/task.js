const express = require ('express')
const User = require ('../model/user')
const StatusCodes = require ('http-status-codes')
const customError = require ('../error')


const getAll = async (req,res)=>{
    const getAllUsers = await User.find({})
   
    res.status(200).json({getAllUsers})
}

const getOne = async (req,res)=>{
    res.send('getOne')
}

const createOne = async (req,res)=>{
    const createOneUser = await User.create(req.body)
    if (!createOneUser){
        throw new customError ('nothing in req.body')
    }
    res.status(StatusCodes.CREATED).json({createOneUser})
}

const updateOne = async (req,res)=>{
    res.send('updateOne')
}

const deleteOne = async (req,res)=>{
    const userId = req.params.id
    const deleteOneUser = await User.findByIdAndDelete({_id:userId})
    res.status(StatusCodes.OK).json({msg:'user deleted'})
}

module.exports = {getAll,getOne,createOne,updateOne,deleteOne}