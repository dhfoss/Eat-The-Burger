const connection = require('./connection');

// Helper Functions??


// Object Relational Mapper
const orm = {
    selectAll: (tableInput, cb) => {
        let queryString = 'SELECT * FROM ' + tableInput + ';';
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

    }


    // updateOne: function(){}
}

module.exports = orm;