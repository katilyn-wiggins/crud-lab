const {Router} = require('express');
const Tree = require('../models/Tree');

module.exports = Router()
    .post('/', async (req, res, next) => {
        try {
            const tree = await Promise.all([
                Tree.insert(req.body),
            ]);
            res.send(tree);
        } catch (err) {
            next(err);
        }
    })