mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: "string",
    password: "string",
    role: "string"
})

module.exports = mongoose.model("User", userSchema)