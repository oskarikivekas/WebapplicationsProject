const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
        creator:{
            type: String,
            required: true
        },
        code:{
            type: String,
            required: true
        },
        likes: {
            type: Array,
            required: false
        },
        
    },
    {timestamps: true}       
);

const Post = mongoose.model('posts', postsSchema);

module.exports = {Post};

