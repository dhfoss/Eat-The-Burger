const orm = require('../config/orm');

const burger = {
    // Code that will call the ORM functions using burger specific input for the ORM
    all: function(cb) {
        orm.selectAll('burgers', res => {
            cb(res);
        })
    }
}

module.exports = burger;

// burger.all(res => {
//     console.log(res);
// });