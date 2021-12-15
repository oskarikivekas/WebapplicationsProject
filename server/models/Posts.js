const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
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
        },
        
        comments:[{
            type: Object,
            required: false
        }],
        /* Likes are unique usernames for easy implementation, could be changed later */
        likes: {
            type: Array
        }
    },
    {timestamps: true}       
);

const Post = mongoose.model('posts', postsSchema);

module.exports = {Post};