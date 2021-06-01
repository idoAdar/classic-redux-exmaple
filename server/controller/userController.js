const db = require('../utills/database');

exports.getAll = async (req, res, next) => {
    const sql = `SELECT * FROM users`;
    try {
        const [ users ] = await db.query(sql);
        return res.status(200).json(users);
    } catch (error) {
        error.code = 500;
        next(error);
    }
    return res.status(200).json({ user: 'Ido ADar' });
}