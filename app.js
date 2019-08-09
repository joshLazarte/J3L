require('dotenv').config();
const express          = require("express"),
      app              = express(), 
      bodyParser       = require("body-parser"),
      session          = require('express-session');
      
      

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");   
app.use(express.static(__dirname + "/public"));

// Express Session Middleware
app.use(session({
  secret: process.env.SESSIONSECRET,
  resave: true,
  saveUninitialized: true
}));

const mainPages      = require('./routes/mainPages'),
      redirectRoutes = require('./routes/redirectRoutes'),
      inquiries      = require('./routes/sendEmail');
app.use(mainPages);
app.use('/redirect', redirectRoutes);
app.use('/inquiries', inquiries);




app.listen(process.env.PORT, process.env.IP, () => console.log('Server now running'));