var express = require('express');
var router = express.Router();
const {User} = require("../models/Users");


/* GET users listing. */
router.get('/:username', async function(req, res, next) {
  console.log(req.params.username.toLowerCase())
  try { 
    const user = await User.findOne({username: req.params.username});
    const publicdata = {
      user: user.username,
      bio: user.bio,
      profileImg: user.profileImg,
    }
    console.log(publicdata)
   res.status(200).json(publicdata);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
