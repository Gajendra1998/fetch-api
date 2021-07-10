const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const Hodlinginfo = require('../modals/schema')
router.get('/',async(req,res)=>{
    const result=await Hodlinginfo.find();
     JSON.stringify(result)
    res.json(result);    
})
module.exports=router;


