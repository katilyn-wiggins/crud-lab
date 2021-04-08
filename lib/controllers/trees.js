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
    .get('/', async (req, res, next) => {
        try {
            const getTrees = await Tree.receive();
            res.send(getTrees);
        } catch (err) {
            next(err);
        }
    })
    .get('/:id', async (req, res, next) => {
        try {
            const getTreesById = await Tree.receive(
                req.params.treeId
            );
            res.send(getTreesById);
        } catch (err) {
            next(err);
        }
    })


    .put('/:treeId', async (req, res, next) => {
        try {
            const updateTree = await Tree.update(
                req.body.treeQuantity,
                req.params.treeId
            );
            res.send(updateTree);
        } catch (err) {
            next(err);
        }
    })
    .delete('/:treeId', async (req, res, next) => {
        try {
            const deleteTree = await Tree.remove(
                req.params.treeId
            );
            res.send(deleteTree);
        } catch (err) {
            next(err);
        }
    })