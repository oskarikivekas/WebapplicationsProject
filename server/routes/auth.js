var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var { body, validationResult } = require('express-validator');
var jwt = require("jsonwebtoken");
var passwordValidator = require('password-validator');
const multer = require('multer');
const passport = require('passport');
const storage = multer.memoryStorage();
const upload = multer({storage});




var schema = new passwordValidator();
schema
.is().min(8)
.has().uppercase()
.has().lowercase()
.has().digits()
.has().symbols()


const {User} = require("../models/Users");
const Comment = require('../models/Comments');
const Post = require('../models/Posts');


/* REGISTER POST */
router.post('/register',
  //form validation
  body("email").trim().escape().isEmail(),
  body("password").trim(), upload.none()
  , async (req, res, next) => {
      
  try {
    /*check for unique email && username*/
    if(await User.findOne({email: req.body.email}) == null) {
      if(schema.validate(req.body.password)){
        bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, async (err, hash) => {
          var newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            profileImg: req.body.imgName
          });
          await newUser.save();
          
          res.status(201).send('registered!');
        }) 
      })
      } else {
        return res.status(400).json({msg: "Password is not strong enough"});
      }

    }
    else{
      return res.status(403).json({msg:'Email or username already taken. Try again'});
    }

} catch (err) {
    res.status(400).json({msg: err.message});
}

});

/* LOGIN POST */
router.post('/login', body("username").trim().escape(), body("password").trim(), upload.none(), async (req, res, next) => {

    var user = await User.findOne({username: req.body.username}).exec();
    if (user == null) {
      return res.status(403).json({msg: "Invalid credentials"})
    }
    try {
      //success
      if (await bcrypt.compare(req.body.password, user.password)) {
        
        var jwtuser = {
          id: user._id,
          username: user.username
        }
        var token = jwt.sign(jwtuser, process.env.SECRET, {expiresIn: 1000});
       
        res.json({success: true, token});
  
      } else{
        
        return res.status(403).json({msg: "Invalid credentials"});
      }
    }catch (err){
      res.status(500).send({msg: err});
    }
  })

  /* Validate token */
  router.post('/verify', passport.authenticate('jwt', { session: false}), (req, res, next) => {
    res.json(req.user);
  })



  module.exports = router;