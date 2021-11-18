const db = require("./db");

exports.User = class User extends db.Model {

    static tableName = "MRDB_User";
    
    constructor(username, email, firstName, lastName) {
        super();
        this.username = username;
        this.email = email;
        this.first_name = firstName;
        this.last_name = lastName;
    }

    static query(fields, filters, callback) {
        super.query(fields, filters, this.tableName, callback);
    }

    static createUser(obj){
        const user = new User();
        return Object.assign(user, obj);
    }
}