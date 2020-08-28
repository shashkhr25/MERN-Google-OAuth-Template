 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const userSchema= new Schema({
    googleId: String,
    role: String,
    name: String
 });

 mongoose.model('users',userSchema);