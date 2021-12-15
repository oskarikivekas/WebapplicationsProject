const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
        title:{
        type: String,
        required: true,
        }, 
        creator:{
            type: String,
            required: true
        },
        desc:{
            type: String,
            required: true
        }
        
    },
    {timestamps: true}       
);

const Comment = mongoose.model('comments', commentsSchema);

module.exports = {Comment};