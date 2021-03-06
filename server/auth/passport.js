var {User} = require("../models/Users"); 
var passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromExtractors([ExtractJwt.fromAuthHeaderAsBearerToken(), ExtractJwt.fromUrlQueryParameter("auth_token")]);
opts.secretOrKey = process.env.SECRET;
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    
    User.findOne({_id: jwt_payload.id}, function(err, user) {
        if (err) {
            
            return done(err, false);
        }
        if (user) {
            
            return done(null, user);
            
        } else {
            
            return done(null, false);
            
        }
    });
}));