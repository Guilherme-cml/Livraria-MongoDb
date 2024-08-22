const {json} = require('express');
const Book = require('../db/model/Book');

const BookController = {

    getAll: async (req, res) => {
    res.json(await Book.find())
    },
    get: async (req, res) => {
        try{
           res.json(await Book.findById(req.params.id)) 
        }catch(error){
            res.status(404).json({message: 'Not found'})
        }
    },
    create: async (req, res) => {
        try{
            res.json(await Book.create(req.body))
        }catch(error){
            res.status(400).json({message: error})
        }
    },
    update: async (req, res) => {
        try{
            res.json(await Book.findByIdAndUpdate(req.params.id, req.body))
        }catch{
            res.status(400).json({message: 'Not found'})
        }
    },
    delete: async (req, res) => {
        try{
            res.json(await Book.findByIdAndDelete(req.params.id))
        }catch{
            res.status(400).json({message: 'Not found'})
        }
    }
}

module.exports = BookController