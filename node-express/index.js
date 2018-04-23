const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(bodyParser.json());
app.use('/dishes', dishRouter);
app.use('/:dishId' , dishRouter);

app.use('/promotions', promoRouter);
app.use('/:promoId', promoRouter);

app.use('/leaders', leaderRouter);
app.use('/:leaderId', leaderRouter);

// app.all('/dishes' , (req, res, next) =>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type' , 'text/plain');
//     next();
// });
// app.get('/dishes' , (req, res, next) =>{
//     res.end('Will send all dishes to you!');
// });

// app.post('/dishes', (req, res, next) =>{
//     res.end('will add the dish: '+req.body.name+' with details: '+req.body.description);
// });
// app.put('/dishes' , (req, res, next) =>{
//     res.statusCode = 403;
//     res.end('PUT operation will not support on /dishes');
// });
// app.delete('/dishes', (req, res, next) =>{
//     res.end('Deleting all the dishes');
// });

// app.get('/dishes/:dishId' , (req, res, next) =>{
//     res.end('Will send the details of dish '+req.params.dishId);
// });

// app.post('/dishes/:dishId', (req, res, next) =>{
//     res.statusCode = 403;
//     res.end('POST peration will not support on: '+req.params.dishId);
// });
// app.put('/dishes/:dishId' , (req, res, next) =>{
//    res.write('Updating the dish:' +req.params.dishId + '\n');
//    res.end('will update the dish: '+req.body.name+' with details: ' + req.body.description);
// });
// app.delete('/dishes/:dishId', (req, res, next) =>{
//     res.end('Deleting dish: ' +req.params.dishId);
// });

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use((req,res, next) =>{
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express server</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () =>{
    console.log(`Server is running at http://${hostname}:${port}`);
})
