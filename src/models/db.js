const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "4ktf1iua1fa8w",
    database: "MRDB"
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
});

class Model {
    static insert(object) {

    }
    /**
     * 
     * @param {Array<String>} fields 
     * @param {JSON} filters 
     * @param {String} tableName 
     * @param {Function} callback 
     */
    static query(fields, filters, tableName, callback) {
        let queryStatement;
        let conditionStatement = "";
        let value = "";
        for (const key in filters) {
            value = `${filters[key]}`;
            if (!Number.isInteger(filters[key])) {
                value = `"${filters[key]}"`;
            }
            conditionStatement += `${key} = ${value} and`;
        }
        conditionStatement = conditionStatement.substr(0, conditionStatement.length - 4);
        queryStatement = `SELECT ${fields} FROM ${tableName} WHERE ${conditionStatement};`;
        connection.query(queryStatement, callback);
    }
}


exports.conn = connection
exports.Model = Model