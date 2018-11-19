var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var courseFourRouter = require('./routes/courseFour_api');
var courseThreeRouter = require('./routes/courseThree_api');
var courseSixRouter = require('./routes/courseSix_api');
var courseSevenRouter = require('./routes/courseSeven_api');
var courseRouter = require('./routes/course_api');

var app = express();

//app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

app.use('/users', usersRouter);
app.use('/courseFour_api', courseFourRouter);
app.use('/courseThree_api', courseThreeRouter);
app.use('/courseSix_api', courseSixRouter);
app.use('/courseSeven_api', courseSevenRouter);
app.use('/course_api', courseRouter);
app.use('*', indexRouter);
// app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
