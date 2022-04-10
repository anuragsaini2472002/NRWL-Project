const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    dob:{type:Number, required:true},
    nhsNumber:{type:Number, required:true},
    drPlusIdNo:{type:Number, required:true},
    gender:{type:String, required:true},
    address:{type:String, required:true}
})

const user = new mongoose.model("nrwlProject", userSchema);
module.exports = user;