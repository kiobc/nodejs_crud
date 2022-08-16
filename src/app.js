const express= require('express');
const {engine}=require('express-handlebars');
const myconnection=require('express-myconnection');
const bodyParser=require('body-parser');
const mysql= require('mysql');
const app=express();
const troutes= require('./routes/tasks');

app.set('port',3000);
app.use(bodyParser.urlencoded({
extended:true
}));
app.use(bodyParser.json())

app.set('views',__dirname+ '/views');
app.engine('.hbs', engine({
    extname:'.hbs',
}));
app.set('view engine','hbs');

app.use(myconnection(mysql,{
    host:'localhost',
    user:'root',
    password:'',
    port: 3306,
    database: 'crud_node'

}, 'single'));

app.listen(app.get('port'),()=>{
console.log('Escuchando en el puerto',app.get('port'));
});

app.use('/',troutes);

app.get('/',(req,res)=>{
    res.render('home');
});