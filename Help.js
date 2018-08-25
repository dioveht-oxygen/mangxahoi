let mysql = require('mysql');
let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'maychu'
});

module.exports = {
    sql: function (query) {
        console.log(query);
        return new Promise((resolve, reject) => {
            conn.query(query, function (err, rows, fields) {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                else resolve(rows);
            });
        });
    },
};