const mongoose = require('mongoose');

async function conn() {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}@livros.8hoew.mongodb.net/?retryWrites=true&w=majority&appName=Livros`)
        console.log('Conectado')        
    } catch (error) {
        console.log(error)
    }};

module.exports = conn