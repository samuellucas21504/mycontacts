const db = require('../../database');

class ContactRepository {
  async findAll(orderBy = 'ASC') {
    const order = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`SELECT * FROM CATEGORIES ORDER BY name ${order}`);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM CATEGORIES WHERE ID = $1', [id]);
    return row;
  }

  async create({
    name,
  }) {
    const [row] = await db.query(`
      INSERT INTO categories(name)
      VALUES($1)
      RETURNING *;
    `, [name]);

    return row;
  }

  async update(id, {
    name,
  }) {
    const [row] = await db.query(`
      UPDATE categories
      SET NAME = $1
      WHERE id = $2
      RETURNING *
    `, [name, id]);

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(`
      DELETE FROM categories
      WHERE id = $1
    `, [id]);

    return deleteOp;
  }
}

module.exports = new ContactRepository();
