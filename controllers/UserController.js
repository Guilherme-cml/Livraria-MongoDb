const {json} = require('express');
const User = require('../db/model/User');

const UserController = {

    getAll: async (req, res) => {
    res.json(await User.find())
    },
    get: async (req, res) => {
        try{
           res.json(await User.findById(req.params.id)) 
        }catch(error){
            res.status(404).json({message: 'Not found'})
        }
    },
    create: async (req, res) => {
        try{
            res.json(await User.create(req.body))
        }catch(error){
            res.status(400).json({message: error})
        }
    },
    update: async (req, res) => {
        try{
            res.json(await User.findByIdAndUpdate(req.params.id, req.body))
        }catch{
            res.status(400).json({message: 'Not found'})
        }
    },
    delete: async (req, res) => {
        try{
            res.json(await User.findByIdAndDelete(req.params.id))
        }catch{
            res.status(400).json({message: 'Not found'})
        }
    }
}

module.exports = UserController