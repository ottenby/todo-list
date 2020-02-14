const mongoose = require('mongoose');
const toDoSchema = new mongoose.Schema(
    {
        text: String,
        date: {type: Date, default: Date.now},  
        col: String
    }
)



const ToDo = mongoose.model('ToDo', 
toDoSchema);

module.exports = ToDo;