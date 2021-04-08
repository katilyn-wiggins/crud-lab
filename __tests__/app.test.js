const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Flower = require('../lib/models/Flower');

describe('flower CRUD routes', () => {
    beforeEach(() => {
        return setup(pool);
    });
    //post
    it('adds a new flower', () => {
        return request(app)
            .post('/api/v1/flowers')
            .send({"flowerName": "sunflower", "flowerType": "perrenial", "flowerQuantity": "3"})
            .then((res) => {
                expect(res.body).toEqual([{
                    id: '1',
                    flowerName: 'sunflower',
                    flowerType: 'perrenial',
                    flowerQuantity: 3
                }]);
            });
    });
    //get
    it('shows all flowers', () => {
        Flower.insert({"flowerName": "sunflower", "flowerType": "perrenial", "flowerQuantity": "3"});
        return request(app)
            .get('/api/v1/flowers')
            .then((res) => {
                expect(res.body).toEqual([{
                    id: '1',
                    flowerName: 'sunflower',
                    flowerType: 'perrenial',
                    flowerQuantity: 3
                }]);
            });
    });

    //getById
    it('shows all flowers with corresponding id', () => {
        Flower.insert({"flowerName": "sunflower", "flowerType": "perrenial", "flowerQuantity": "3"});
        return request(app)
            .get('/api/v1/flowers/1')
            .then((res) => {
                expect(res.body).toEqual([{
                    id: '1',
                    flowerName: 'sunflower',
                    flowerType: 'perrenial',
                    flowerQuantity: 3
                }]);
            });
    });
    //updates a flower
    it('updates a flower quantity when given an id and new quantity', () => {
        Flower.insert({"flowerName": "sunflower", "flowerType": "perrenial", "flowerQuantity": "3"});
        return request(app)
            .put('/api/v1/flowers/1')
            .send({"flowerQuantity": "6"})
            .then((res) => {
                expect(res.body).toEqual({
                    id: '1',
                    flowerName: 'sunflower',
                    flowerType: 'perrenial',
                    flowerQuantity: 6
                });
            });
    });
    //deletes a flower
    it('deletes a flower quantity when given an id', () => {
        Flower.insert({"flowerName": "sunflower", "flowerType": "perrenial", "flowerQuantity": "3"});
        return request(app)
            .delete('/api/v1/flowers/1')
            .then((res) => {
                expect(res.body).toEqual({
                    id: '1',
                    flowerName: 'sunflower',
                    flowerType: 'perrenial',
                    flowerQuantity: 3
                });
            });
    });

});