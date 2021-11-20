const pool = require('./db');

module.exports = class Class {

    static tableName = "MRDB_class";

    constructor(class_name, descrip) {
        this.class_name = class_name;
        this.descrip = descrip;
    }

    save() {
        return pool.query('INSERT INTO MRDB_class SET ?', [this]);
    }

    update() {
        if (this.code != undefined) {
            return pool.query(`UPDATE ${Class.tableName} SET ? WHERE `, [this, { code: this.code }]);
        } else {
            return null;
        }
    }

    static delete(obj) {
        const { code, owner_user_id } = obj;
        return pool.query(`DELETE FROM ${Class.tableName} WHERE ? AND ?`, [{ code }, { owner_user_id }]);
    }

    static getClassBy(obj) {
        return pool.query(`SELECT * FROM ${Class.tableName} WHERE ?`, [obj]);
    }

    static createClass(obj) {
        const user = new Class();
        return Object.assign(user, obj);
    }
}