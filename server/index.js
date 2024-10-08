import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

// create product
export async function createProduct(name, description, categories, supplier, price) {
    const result = await pool.query(`
    INSERT INTO PRODUCT(name, description, categories, supplier, price)
    VALUES (?, ?, ?, ?, ?)
    `, [productID, name, description, categories, supplier, price])
    const id = result.insertId
    return getProduct(id)
}

// Get product
export async function getProducts() {
    const [rows] = await pool.query("SELECT * FROM PRODUCT")
    return rows
}

// Get product By ID
export async function getProduct(id) {
    const [rows] = await pool.query(`
    SELECT *
    FROM PRODUCT
    WHERE productID = ?
    `, [id])
    return rows[0]
}

// update product

// delete product