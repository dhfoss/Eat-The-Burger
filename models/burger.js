const orm = require('../config/orm');

const burger = {
    // Code that will call the ORM functions using burger specific input for the ORM
    all: cb => {
        orm.selectAll('burgers', res => {
            cb(res);
        })
    },

    create: (colName, val, cb) => {
        orm.create('burgers', colName, val, result => {
            cb(result);
        })
    },
    update: (colName, id, cb) => {
        orm.updateOne('burgers', colName, true, id, result => {
            cb(result);
        })
    }
}

module.exports = burger;

// burger.all(res => {
//     console.log(res);
// });