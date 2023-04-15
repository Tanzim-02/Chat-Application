const createError = require('http-errors');

//404 not found handling

function notFoundHandler(req, res, next) {
    next(createError(404, 'Your requested page is not found.!'));
  }
  

// default error handler
function errorHandler(err, req, res, next) {
    res.locals.error = process.env.NODE_ENV === 'development' ? err : {message: err.message};
    
    res.status(err.status || 500);
    res.locals.title = 'Error Page';
    

    if (res.locals.html) {
        res.render('error', {title: res.locals.title});
    }else {
        res.json(res.locals.error);
    }
}

module.exports = {
    notFoundHandler,
    errorHandler
}