//! Products Controller

const db = require('../config/connection')

exports.getProducts = async()=> {
    return await db.query('SELECT * FROM products')
}

exports.createProduct = async(data)=> {
    const query =  await db.query('insert into products set ?',[data])
    if(!query.affectedRows) return false
    return "product successfuly created"
}