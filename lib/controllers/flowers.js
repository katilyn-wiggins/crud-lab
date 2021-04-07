const {Router} = require('express');
const Flower = require('../models/Flower');

module.exports = Router()
    .post('/', (req, res, next) => {
        Flower.insert(req.body)
            .then((flower) => res.send(flower))
            .catch(next);
    });

