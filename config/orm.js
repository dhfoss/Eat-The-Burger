const connection = require('./connection');

// Helper Functions??


// Object Relational Mapper
const orm = {
    selectAll: function(tableInput, cb) {
        let queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },





    // updateOne: function(){}
}

module.exports = orm;