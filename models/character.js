mongoose = require('mongoose')
const Schema = mongoose.Schema

const characterSchema = new Schema({
    name: "String",
    movie: "String"
})

module.exports = mongoose.model('Character', characterSchema)