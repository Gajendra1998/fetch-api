const mongoose = require('mongoose')
const db = require('../config/keys').MongoURI; 
const Hodlinginfo = require('../modals/schema')
const connectDB = async ()=>{
    try {
        await mongoose.connect(db,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("Mongodb connected");
    }catch(err){
        console.error("could not connected to mongodb")
        process.exit(1);
    }
    } 
    // async function createInfo(){
    //     let newinfo = new Hodlinginfo({
    //     name:'Gajendra',
    //     last:46,
    //     buy:89,
    //     Sell:75,
    //     volume:'Thestorm',
    //     base_unit:'man on the rocks'
    //     });
    //   const result =  await newinfo.save();
    //   console.log(result);
    //     }
    //     createInfo()
    module.exports=connectDB;