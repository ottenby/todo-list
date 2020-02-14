const express = require('express');
const mongoose = require('mongoose');
const toDoRouter = require('./routes/toDoRoutes')
const config = require('./config/config')
const bodyParser = require('body-parser');
const sassMiddlewear = require('node-sass-middleware')
const path = require('path')
const app = express();

 
app.use(express.urlencoded({extended:true}));
app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(toDoRouter);

app.use(sassMiddlewear({
    src:path.join(__dirname,'css'),
    dest:path.join(__dirname, 'scss')
}))

// using app.use to serve up static CSS files in public/assets/ folder when /public link is called in ejs files
// app.use("/route", express.static("foldername"));
app.use('/public', express.static('public'));



const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}


const port = process.env.PORT || 9250;

mongoose.connect(config.databaseURL,options).then(()=>{
console.log('bra!')
app.listen(port);
})


module.exports = {app}
