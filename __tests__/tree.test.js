const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Tree = require('../lib/models/Tree');

describe('Tree CRUD routes', () => {
    beforeEach(() => {
        return setup(pool);
    });
    //post 
    it('adds a new tree', () => {
        return request(app)
            .post('/api/v1/trees')
            .send({"treeName": "spruce", "treeType": "evergreen", "treeQuantity": "2"})
            .then((res) => {
                expect(res.body).toEqual([{
                    treeId: '1',
                    treeName: 'spruce',
                    treeType: 'evergreen',
                    treeQuantity: 2
                }]);
            });
    });
    //get 
    it('returns all trees', () => {
        Tree.insert({"treeName": "birch", "treeType": "dedeciduous hardwood", "treeQuantity": "1"})
        return request(app)
            .get('/api/v1/trees')
            .then((res) => {
                expect(res.body).toEqual([{
                    treeId: '1',
                    treeName: 'birch',
                    treeType: 'dedeciduous hardwood',
                    treeQuantity: 1
                }]);
            });
    });
    //update
    it('updates a tree given an id', () => {
        Tree.insert({"treeName": "birch", "treeType": "dedeciduous hardwood", "treeQuantity": "1"})
        return request(app)
            .put('/api/v1/trees/1')
            .send({"treeQuantity": "15"})
            .then((res) => {
                expect(res.body).toEqual({
                    treeId: '1',
                    treeName: 'birch',
                    treeType: 'dedeciduous hardwood',
                    treeQuantity: 15
                });
            });
    });

    //delete
    it('deletes a tree given an id', () => {
        Tree.insert({"treeName": "birch", "treeType": "dedeciduous hardwood", "treeQuantity": "1"})
        return request(app)
            .delete('/api/v1/trees/1')
            .then((res) => {
                expect(res.body).toEqual({
                    treeId: '1',
                    treeName: 'birch',
                    treeType: 'dedeciduous hardwood',
                    treeQuantity: 1
                });
            });
    });
}); 