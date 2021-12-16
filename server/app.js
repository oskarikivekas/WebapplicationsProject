const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const indexRouter = require('./routes/posts');
const usersRouter = require('./routes/users');
const testRouter = require('./routes/test');
const authRouter = require('./routes/auth');
const cors = require('cors');
require('./auth/passport');
const multer = require('multer');


mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to database'));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use(passport.initialize());


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    }, 
    filename: (req, file, cb) => {
        cb(null, "selfie lol.jpg");
    },

});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    console.log("hello");
  res.status(200).json("File has been uploaded");
});



app.use('/api/posts', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/test', testRouter)
app.use('/api/auth', authRouter);




// enable cors
 if (process.env.NODE_ENV === "development") {
    const corsOptions = {
        origin: "http://localhost:3000",
        optionsSuccessStatus: 200,
    };
    app.use(cors(corsOptions));
} 




/* 
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    console.log(err.message);
    // render the error page
    res.status(err.status || 500).json({msg: "perse"});
  });
   */

module.exports = app;
