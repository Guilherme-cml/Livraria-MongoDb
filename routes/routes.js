const express = require('express');
const UserController = require('../controllers/UserController');
const BookController = require('../controllers/BookController');
const EmployeeController = require('../controllers/EmployeeController');
const router = express.Router();


router.get('/', (req, res) => {
    res.json({})
})  

//User Routes

router.get('/users', (req, res) => UserController.getAll(req, res))
router.get('/users/:id', (req, res) => UserController.get(req, res))
router.post('/users', (req, res) => UserController.create(req, res))
router.put('/users/:id', (req, res) => UserController.update(req, res))
router.delete('/users/:id', (req, res) => UserController.delete(req, res))

//Book Routes

router.get('/books', (req, res) => BookController.getAll(req, res))
router.get('/books/:id', (req, res) => BookController.get(req, res))
router.post('/books', (req, res) => BookController.create(req, res))
router.put('/books/:id', (req, res) => BookController.update(req, res))
router.delete('/books/:id', (req, res) => BookController.delete(req, res))

//Employee Routes

router.get('/employees', (req, res) => EmployeeController.getAll(req, res))
router.get('/employees/:id', (req, res) => EmployeeController.get(req, res))
router.post('/employees', (req, res) => EmployeeController.create(req, res))
router.put('/employees/:id', (req, res) => EmployeeController.update(req, res))
router.delete('/employees/:id', (req, res) => EmployeeController.delete(req, res))



module.exports = router