const express = require('express')
const app=express();
const Hodlinginfo = require('./modals/schema')
 const connectDB=require('./database/db')
 const route=require('./routes/route')
 const bodyParser = require('body-parser')
 connectDB();
 const fetch = require('node-fetch');
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/',(req,res)=>{
    res.send("Hello World");
})
app.use('/getdata',route)// route for showing data from database in api
let data ;
fetch('https://api.wazirx.com/api/v2/tickers',{
})   
         .then( data= res => res.json())
         .then(data=>{JSON.stringify(data)
            console.log(data)

         }) 
app.listen(process.env.PORT||4000,console.log('connectd to server...'));
