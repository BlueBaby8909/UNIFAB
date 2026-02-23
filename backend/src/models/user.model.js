import pool from "../db/db.js";

async function createUser(firstName, lastName, email, password, role) {
    let sql = 'INSERT INTO users (first_name, last_name, email, password, role) VALUES (?, ?, ?, ?, ?)';

    const [result] = await pool.query(sql, [firstName, lastName, email, password, role]);
    return result;
}

async function findUserByEmail(email) {
    let sql = 'SELECT * FROM users WHERE email = ?';
    const [row] = await pool.query(sql, [email]);
    return row[0]; 
}

export { createUser, findUserByEmail };