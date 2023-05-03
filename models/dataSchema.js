var mongoose = require('mongoose');
const dataSchema = new mongoose.Schema(
    {
        
        name:{
            type:String,
            required:["true","Please provide a valid name"],
            trim:true,
            maxLength:[30,"Name should not be more than 30 characters"]
        },
        email:{
            type:String,
            required:["true","Please provide a valid email"],
            trim:true,
            maxLength:[50,"Email should not be more than 50 characters"]
        },
        phone:{
            type:Number,
            required:["true","Please provide a valid number"],
            trim:true,
            maxLength:[10,"Number should not be more than 10 digits"]
        }
    },{timestamps:true}
);
module.exports = mongoose.model("contact",dataSchema);