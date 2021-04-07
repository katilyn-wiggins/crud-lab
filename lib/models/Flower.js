const pool = require('../utils/pool');

module.exports = class Flower {
    id;
    flower_name;
    flower_type;
    flower_quantity;


    constructor(row) {
        this.id = row.id;
        this.flowerName = row.flower_name;
        this.flowerType = row.flower_type;
        this.flowerQuantity = row.flower_quantity;
    }

    static async insert({id, flowerName, flowerType, flowerQuantity}) {
        const {rows} = await pool.query(
            "INSERT INTO flowers (flower_name, flower_type, flower_quantity) values ($1, $2, $3) RETURNING *",
            [flowerName, flowerType, flowerQuantity]
        );
        return new Flower(rows[0]);
    }
    static async allFlowers() {
        const {rows} = await pool.query("SELECT * from flowers",);
        return rows.map((row) => new Flower(row));
    }
    static async updateAFlower(flowerQuantity, id) {
        const {rows} = await pool.query("UPDATE flowers SET flower_quantity=$1 WHERE id=$2 RETURNING *", [
            flowerQuantity,
            id
        ]);
        return new Flower(rows[0]);
    }
}; 