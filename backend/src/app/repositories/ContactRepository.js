const db = require('../../database');

class ContactRepository {
  async findAll(orderBy = 'ASC') {
    const order = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`
      SELECT contacts.*, categories.name as category_name
      FROM CONTACTS
      LEFT JOIN categories on categories.id = contacts.category_id
      ORDER BY contacts.name ${order}
    `);

    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`
      SELECT contacts.*, categories.name as category_name
      FROM CONTACTS
      LEFT JOIN categories on categories.id = contacts.category_id
      WHERE contacts.id = $1
    `, [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM CONTACTS WHERE email = $1', [email]);
    return row;
  }

  async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
      INSERT INTO contacts(name, email, phone, category_id)
      VALUES($1, $2, $3, $4)
      RETURNING *;
    `, [name, email, phone, category_id]);

    return row;
  }

  async update(id, {
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
      UPDATE contacts
      SET NAME = $1,
          EMAIL = $2,
          PHONE = $3,
          CATEGORY_ID = $4
      WHERE id = $5
      RETURNING *
    `, [name, email, phone, category_id, id]);

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(`
      DELETE FROM contacts
      WHERE id = $1
    `, [id]);

    return deleteOp;
  }
}

module.exports = new ContactRepository();
