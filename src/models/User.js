const pool = require('./db');

module.exports = class User {

    static tableName = "MRDB_User";

    constructor(username, email, passwrd) {
        this.username = username;
        this.email = email;
        this.passwrd = passwrd;
    }

    save() {
        return pool.query('INSERT INTO MRDB_User SET ?', [this]);
    }

    static getUserBy(obj){
        return pool.query(`SELECT * FROM ${User.tableName} WHERE ?`, [obj]);
    }

    static createUser(obj) {
        const user = new User();
        return Object.assign(user, obj);
    }
}