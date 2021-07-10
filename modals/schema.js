const mongoose= require('mongoose')
const HodlinfoSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    last:{
        type:Number,
        required:true
    },
    buy:{
        type:Number,
        required:true
    },
    sell:{
        type:Number,
        required:true
    },
    volume:{
        type:String,
        required:true
    },
    base_unit :{
        type:String,
        required:true
    }
})
const Hodlinginfo =mongoose.model('hodlinginfo',HodlinfoSchema);

module.exports=Hodlinginfo;