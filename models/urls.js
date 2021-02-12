const mongoose =require('mongoose');
const Schema=mongoose.Schema;
const nanoid=require('nanoid')

const urlSchema=new Schema({
    full:{
        type:String,
        required:true
    },
    short:{
        type:String,
        required:true,
        default:nanoid.nanoid(10)
    },
    clicks:{
        type:Number,
        default:0
    }
},{timestamps:true})

module.exports=mongoose.model('url',urlSchema);