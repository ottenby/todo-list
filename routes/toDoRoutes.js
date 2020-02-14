const express = require('express');

const ToDo = require('../model/toDoModel')

const router = express.Router();

const item = 8





router.get('/toDo', async (req, res) => {
    
    const sort = req.query.sort;
    const page = req.query.page;
    
    
    const tasks = await ToDo
    .find()
    .skip((page-1) * item)
    .limit(8)
    .sort({text:sort});
   

    
    
    res.render('toDo.ejs', {tasks})
})




router.route('/editTodo/:id')
    .get(async (req, res) => {
        const taskToEdit = await ToDo.findById({
            _id: req.params.id
        })

        res.render('editTodo', {
            taskToEdit
        });
    })
    .post(async (req, res) => {
        const response = await ToDo.updateOne({
            _id: req.body._id
        }, {
            $set: {
                text: req.body.text
            }
        })

        res.redirect('/toDo')
    })

router.get('/delete/:id', async (req, res) => {
   const deleteData = await ToDo.deleteOne({
        _id: req.params.id
    })

    
  
    res.redirect('/toDo')
    
})
const completedTasksArray = [];
router.get('/complete/:id', async (req, res) => {
    const completedData = await ToDo.findOneAndDelete({
         _id: req.params.id
     })
 
  
     console.log(completedData)
    completedTasksArray.push(completedData)
    
     if (completedTasksArray) {res.render('toDoPartial', { completedTasksArray})};
     
 })

router.post('/toDo', async (req, res) => {
    const task = new ToDo({
            text: req.body.text,
            col:'style= background-color:'+ req.body.favcolor + ';"'
                // `style= background-color:'+ ${req.body.favcolor};"`
        }
    )
    
    const response = await task.save();
    res.redirect("/toDo");
    console.log(task)
})

router.get('/about', (req, res)=>{
    res.send('This todo app was created by Love')
})

module.exports = router;