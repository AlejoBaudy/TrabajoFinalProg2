var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session= require('express-session')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const profileRouter = require("./routes/profile");
const productRouter = require("./routes/product");
const comentarioRouter = require("./routes/comentario");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session( { secret: "Nuestro mensaje secreto",
  resave: false,
  saveUninitialized: true }));
app.use(function(req, res, next) {
    if (req.session.datosUsuario != undefined) {
      res.locals.user = req.session.datosUsuario	
       }
  return next();
  });

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/profile', profileRouter);
app.use('/product', productRouter);
app.use("/comentario", comentarioRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
