const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req, res, next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/plain');
    next();
})
.get((req, res, next) =>{
    res.end('Will send all promotions list to you!');
})

.post((req, res, next) =>{
    res.end('will add the promotion: '+req.body.name+' with details: '+req.body.description);
})
.put((req, res, next) =>{
    res.statusCode = 403;
    res.end('PUT operation will not support on /promotions');
})
.delete((req, res, next) =>{
    res.end('Deleting all the promotions');
});
promoRouter.route('/:promoId')
.all((req, res, next) =>
{
    res.statusCode = 200 ;
    res.setHeader('Content-Type' , 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('we will send you the promotion: '+ req.params.promoId);
})
.post((req, res, next) => {
    res.end('POST will not support on promotion: '+ req.params.promoId);
})
.put((req, res, next) => {
    res.write('Updating the promotion: ' +req.params.promoId +'\n');
    res.end('Adding the promotion: '+ req.body.name+ ' with details: '+req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting the promotion: '+ req.params.promoId);
});

module.exports = promoRouter;