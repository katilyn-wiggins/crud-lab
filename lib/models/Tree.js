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
        const {rows} = await pool
            .query("INSERT INTO trees (tree_name, tree_type, tree_quantity) values ($1, $2, $3) RETURNING *",
                [
                    treeName, treeType, treeQuantity
                ]
            );
        return new Tree(rows[0]);
    }
    static async receive() {
        const {rows} = await pool
            .query("SELECT * from trees");
        return rows.map((row) => new Tree(row));
    }

}