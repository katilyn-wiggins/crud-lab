const {Router} = require('express');
const Flower = require('../models/Flower');

module.exports = Router()
    .post('/', async (req, res, next) => {
        try {
            const flower = await Promise.all([
                Flower.insert(req.body),
            ]);
            res.send(flower);
        } catch (err) {
            next(err);
        }
    })

    .get('/', async (req, res, next) => {
        try {
            const getAllFlowers = await Flower.allFlowers();
            res.send(getAllFlowers);
        } catch (err) {
            next(err);
        }
    })

    .put('/:id', async (req, res, next) => {

        try {
            const updateFlower = await Flower.updateAFlower(
                req.body.flowerQuantity,
                req.params.id
            );
            res.send(updateFlower);
        } catch (err) {
            next(err);
        }
    })

    .delete('/:id', async (req, res, next) => {

        try {
            const deleteFlower = await Flower.deleteAFlower(
                req.params.id
            );
            res.send(deleteFlower);
        } catch (err) {
            next(err);
        }
    });


