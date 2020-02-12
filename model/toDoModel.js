const mongoose = require('mongoose');
const toDoSchema = new mongoose.Schema(
    {
        text: String,
        date: {type: Date, default: Date.now}
    }
)



const ToDo = mongoose.model('ToDo', 
toDoSchema);

module.exports = ToDo;