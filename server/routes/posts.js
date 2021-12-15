var express = require('express');
var router = express.Router();
const {User} = require('../models/Users');
const {Comment} = require('../models/Comments');
const { Post } = require('../models/Posts');


/* GET single post. */
router.get('/:id', async function(req, res, next) {
    const post = await Post.findOne(req.body.postId).exec();
    if(post == null) {
      res.status(400).json({msg: "not found"});
    } else {
      res.status(200).json(post);
    }
});
/* GET all posts */
router.get('/', async function(req, res, next) {
  const posts = await Post.find('');
  if (posts == null) {
    res.json({msg: "empty"});
  }else {
    res.send(posts);
  }
  
})


/* CREATE post */
router.post('')

module.exports = router;
