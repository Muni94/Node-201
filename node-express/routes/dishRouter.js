const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req, res, next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/plain');
    next();
})
.get((req, res, next) =>{
    res.end('Will send all dishes to you!');
})

.post((req, res, next) =>{
    res.end('will add the dish: '+req.body.name+' with details: '+req.body.description);
})
.put((req, res, next) =>{
    res.statusCode = 403;
    res.end('PUT operation will not support on /dishes');
})
.delete((req, res, next) =>{
    res.end('Deleting all the dishes');
});
dishRouter.route('/:dishId')
.all((req, res, next) =>
{
    res.statusCode = 200 ;
    res.setHeader('Content-Type' , 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('we will send you the dish: '+ req.params.dishId);
})
.post((req, res, next) => {
    res.end('POST will not support on dish: '+ req.params.dishId);
})
.put((req, res, next) => {
    res.header('Updating the dish: ' +req.params.dishId);
    res.end('will add the dish: '+ req.body.name+ ' with details: '+req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting the dish: '+ req.params.dishId);
});

module.exports = dishRouter;