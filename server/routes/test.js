var express = require('express');
var router = express.Router();
const User = require('../models/Users');
const Comment = require('../models/Comments');
const Post = require('../models/Posts');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({msg: "hello"});
});


/* router.post('/newpost', async (req, res) =>  {
    const newPost = new Post({
        title: "Otsikko",
        creator: "Tekijä",
        desc: "Biography",
    })
    await newPost.save();
    res.json({msg: "ok"});
});


router.post('/newuser', async (req, res) =>  {
    const newUser = new User ({
        username: "Otsikko",
        email: "Tekijä",
        password: "Biography"
    })
    await newUser.save();
    res.json({msg: "ok"});
});

router.post('/newcomment', async (req, res) =>  {
    const newcomment = new Comment ({
        title: "Otsikko",
        creator: "Tekijä",
        desc: "Kommentti"
    })
    await newUser.save();
    res.json({msg: "ok"});
}); */


module.exports = router;