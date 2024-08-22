const {json} = require('express');
const Employee = require('../db/model/Employee');

const EmployeeController = {

    getAll: async (req, res) => {
    res.json(await Employee.find())
    },
    get: async (req, res) => {
        try{
           res.json(await Employee.findById(req.params.id)) 
        }catch(error){
            res.status(404).json({message: 'Not found'})
        }
    },
    create: async (req, res) => {
        try{
            res.json(await Employee.create(req.body))
        }catch(error){
            res.status(400).json({message: error})
        }
    },
    update: async (req, res) => {
        try{
            res.json(await Employee.findByIdAndUpdate(req.params.id, req.body))
        }catch{
            res.status(400).json({message: 'Not found'})
        }
    },
    delete: async (req, res) => {
        try{
            res.json(await Employee.findByIdAndDelete(req.params.id))
        }catch{
            res.status(400).json({message: 'Not found'})
        }
    }
}

module.exports = EmployeeController