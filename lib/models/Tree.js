const pool = require('../utils/pool');

module.exports = class Tree {
    tree_id;
    tree_name;
    tree_type;
    tree_quantity;

    constructor(row) {
        this.treeId = row.tree_id;
        this.treeName = row.tree_name;
        this.treeType = row.tree_type;
        this.treeQuantity = row.tree_quantity;
    }

    static async insert({id, treeName, treeType, treeQuantity}) {
        const {rows} = await pool.query("INSERT INTO trees (tree_name, tree_type, tree_quantity) values ($1, $2, $3) RETURNING *",
            [
                treeName, treeType, treeQuantity
            ]
        );
        return new Tree(rows[0]);
    }
    static async receive() {
        const {rows} = await pool.query("SELECT * from trees");
        return rows.map((row) => new Tree(row));
    }
    static async receiveWithId(treeId) {
        const {rows} = await pool.query("SELECT * from trees WHERE tree_id=$1", [treeId]);
        return rows.map((row) => new Tree(row));
    }
    static async update(treeQuantity, treeId) {
        const {rows} = await pool.query("UPDATE trees SET tree_quantity=$1 WHERE tree_id=$2 RETURNING *",
            [
                treeQuantity,
                treeId
            ]
        );
        return new Tree(rows[0]);
    }
    static async remove(treeId) {
        const {rows} = await pool.query("DELETE from trees WHERE tree_id=$1 RETURNING *",
            [
                treeId
            ]
        );
        return new Tree(rows[0]);
    }


}