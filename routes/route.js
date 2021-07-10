const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const Hodlinginfo = require('../modals/schema')

router.get('/',(req,res)=>{
    const result= Hodlinginfo.find();
    res.json(result);    
})
module.exports=router;


