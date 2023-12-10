const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user:Bananakokkini246@todo-app.gfjn8vb.mongodb.net/todoAppDB')
    .then(() => {
        console.log('Connected to Database...');
    }).catch((err) => {
        console.error('Error connecting to Database: ', err.message);
    })


module.exports = { mongoose }  