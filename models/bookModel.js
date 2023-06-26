const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema(
    {
        bookName:{
            type:String,
            required:true
        },
        authorName : {
            type:String,
            required:true
        },
        ISBN : {
            type:Number,
            required:true,
            unique:true,
            index:true
        },
        genre:{
            type:String,
            required:true
        },
        availablity:{
            type:String,
            default:"Available"
        },
    },
    {
        collation:'books'
    }
)

module.exports = mongoose.model('books',bookSchema)