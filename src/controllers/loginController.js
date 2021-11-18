const path = require('path');
const User = require("../models/User").User;

exports.getLogin = (request, response, next) => {
    response.sendFile(path.dirname(__dirname) + "/views/login.html");
};

exports.postLogin = (request, response) => {
    let username = request.body.username
    let email = request.body.email
    let password = request.body.password
    if (username != undefined && email != undefined && password != undefined) {
        console.log("ERROR: fields values are invalid!")
    }
    User.query([
        "username", 
        "email", 
        "first_name",
        "last_name"], { username: username }, (error, result, fields) => {
            user = User.createUser(result[0]);
            console.log(user);
        });
    response.redirect("login");
};