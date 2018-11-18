const express = require('express');
const bodyParser = require('body-parser');
const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('We will send all promotions');
})
.post((req,res,next) => {
    res.end('we will add the promotion ' + req.body.name + 'with description ' + req.body.description);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('put operation is not supported');
})
.delete((req,res,next) => {
    res.end('the delete operation ');
})

promoRouter.route('/:promoId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('We will send' + req.params.promoId);
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end('Post operation is not supported for ' + req.params.promoId)
})
.put((req,res,next) => {
    res.end('we are updating' + req.params.promoId);
})
.delete((req,res,next) => {
    res.end('the delete operation ');

})

module.exports = promoRouter;