const responseMiddleware = (req, res, next) => {
   // TODO: Implement middleware that returns result of the query

   if (!req) {
    res.status(200).json({
        status: "success",
        message: 'Done'
    });
    next();}
    else {
        res.status(404).json({
            error: true,
            message: 'Not found'
      });}
   
      
    
}

exports.responseMiddleware = responseMiddleware;