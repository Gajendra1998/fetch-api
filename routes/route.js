const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const Hodlinginfo = require('../modals/schema')

router.get('/',(req,res)=>{
    const result= Hodlinginfo.find();
    JSON.stringify(result)
    res.json(result);    
})
module.exports=router;


