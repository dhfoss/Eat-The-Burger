const connection = require('./connection');

// Helper Functions??


// Object Relational Mapper
const orm = {
    selectAll: (table, cb) => {
        let queryString = `SELECT * FROM ${table};`
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },

    create: (table, colName, val, cb) => {
        let queryString = `INSERT INTO ${table}(${colName}) VALUES (?)`
        console.log(queryString);
        connection.query(queryString, val, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: (table, colName, condition, id, cb) => {
        let queryString = `UPDATE ${table} SET ${colName}=${condition} WHERE id=?`;
        connection.query(queryString, id, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;