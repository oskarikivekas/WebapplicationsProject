var express = require('express');
var router = express.Router();
const {User} = require('../models/Users');
const {Comment} = require('../models/Comments');
const { Post } = require('../models/Posts');
const passport = require('passport');

/* GET single post. */
router.get('/single/:id', async function(req, res, next) {
  console.log(req.params.id);
  try {
    if(req.params.id == "new") {
      const test = {
        id: "",
        title: "",
        creator: "",
        code: "" ,
      }

      res.status(200).json(test);
    } else{
      const post = await Post.findById(req.params.id);

      if(post == null) {
          res.status(400).json({msg: "not found"});
        } 
      else {
          res.status(200).json(post);
        }
    }

  } catch (err) {
        res.status(500).json(err);
    }
 
}); 
/* GET profile posts */
router.get('/:username', async function(req, res, next) {


  const posts = await Post.find({creator: req.params.username});
  if (posts == null) {
    res.json({msg: "empty"});
  }else {
    res.send(posts);
  }
}) 

/* GET all posts */
router.get('/', async function(req, res, next) {

  console.log(req.body);
  const posts = await Post.find();
  if (posts == null) {
    res.json({msg: "empty"});
  }else {
    res.send(posts);
  }
  
})


/* CREATE post */
router.post('/', passport.authenticate('jwt', {session: false}), async (req, res) => {
  
  const newPost = new Post(req.body);

  try {
     const post = await newPost.save();
     res.status(201).json(post);

  } catch (err) {
    res.status(400).json(err);
  }
});

/* UPDATE post */
 router.put('/:id', passport.authenticate('jwt', {session: false}), async (req, res) => {
  
  try {
    const post = await Post.findById(req.params.id);
    if (post.creator == req.user.username) {
      console.log(post)
      try {
        const updated = await Post.findByIdAndUpdate( 
          req.params.id,
          {
            $set: {code: req.body.code,}
          },
          {new: true}
        );
        res.status(201).json(updated);

      } catch (err) {
        console.log(err)
        res.status(500).json(err);
      }
    }
  } catch (err) {
    res.status(400).json(err);
  }
}); 

/* DELETE post */
router.delete('/:id', passport.authenticate('jwt', {session: false}), async (req, res) => {

  try {
     const post = await Post.findById(req.params.id);
     if (post.creator == req.user.username) {
       try {
         await post.delete();
         res.json("Post deleted");
       } catch (err) {}
        res.status(500).json(err)
     }

  } catch (err) {
    res.status(400).json(err);
  }
});


/* GET comments */
router.get('/comments/:id', async function(req, res, next) {
  try {
     const comments = await Comment.find({postid: req.params.id});
  if (comments == null) {
    res.json({msg: "empty"});
  }else {
    res.send(comments);
  }
  } catch (err) {
  }
 
  
});

/* POST comment */
router.post('/comment', passport.authenticate('jwt', {session: false}), async (req, res) => {
  
  const newComment = new Comment(req.body);
  /* ADD: if (req.body.user == req.user -> then ok, so impersonating another user doesnt work by modifying the request) */

  try {
     const comment = await newComment.save();
     res.status(201).json(comment);

  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
