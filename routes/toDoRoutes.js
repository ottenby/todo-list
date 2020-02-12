const express = require('express');

const ToDo = require('../model/toDoModel')

const router = express.Router();







router.get('/toDo', async (req, res) => {
    const toDo = await ToDo.find();
    console.log(toDo);
    
    res.render('toDo.ejs', {
        toDo
    })
})
// router.post('/editTodo/:id', async (req, res)=> {
//     const response = await ToDo.updateOne({
//         _id: req.params._id}, {$set: {text: req.body.text}})

//     res.redirect('/toDo')
// })



router.route('/editTodo/:id')
    .get(async (req, res) => {
        const taskToEdit = await ToDo.findById({
            _id: req.params.id
        })
        // console.log(response);

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
    await ToDo.deleteOne({
        _id: req.params.id
    })
    res.redirect("/toDo")
})

router.post('/toDo', async (req, res) => {
    const toDo = new ToDo({
            text: req.body.text,
            author: req.body.author
        }
    )
    const response = await toDo.save();
    res.redirect('/toDo');
    
})

module.exports = router;