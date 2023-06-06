const mongoose = require('mongoose')

const Basic = new mongoose.Schema({
    name: { type: String },
    number: { type: Number },
    email: {type: String},
    designation: { type:String },
    address: { type:String },
    skills: [{ type:String }],
    description: { type:String }
})

module.exports = mongoose.model('Basic', Basic)