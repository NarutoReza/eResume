const mongoose = require('mongoose')

const Education = new mongoose.Schema({
    course: { type: String },
    school: { type: String },
    year_start: { type: Number },
    year_end: { type: Number },
    description: { type: String },
    basic_id: { type: String }

})

module.exports = mongoose.model('Education', Education)