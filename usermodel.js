const mongoose = require('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/stammer`);

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    age : Number,
    email: String
})

module.exports = mongoose.model("user" , userSchema) // Its model name is usersmodel