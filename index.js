const express = require('express');
const mongoose = require('mongoose');
const toDoRouter = require('./routes/toDoRoutes')
const config = require('./config/config')
const bodyParser = require('body-parser');

const app = express();


app.use(express.urlencoded({extended:true}));
app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(toDoRouter);

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}


const port = process.env.PORT || 7500;

mongoose.connect(config.databaseURL,options).then(()=>{
console.log('bra!')
app.listen(port);
})

