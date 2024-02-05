const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema(
    {
        name : 
        {
            type : String,
            required : [true, "Must Provide a Value"],
            trim : true,
            maxlength : [20, "Characters must be under size 20"] 
        },
        completed :
        {
            type : Boolean,
            default : false
        }
    }
)

module.exports = mongoose.model('Tasks', taskSchema)