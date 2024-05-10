const connection = require("../config/database");

const getAllUsers = () => {
    connection.query(`Select * from Users `, (err, rows, fields) => {
        return rows;
    });
};

module.exports = getAllUsers;
