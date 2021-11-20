const path = require('path');
const User = require("../models/User");

exports.getLogin = (request, response, next) => {
    response.render("login");
};

exports.postLogin = (request, response) => {
    const { username, email, password } = request.body
    console.log(request.body);
    response.redirect("login");
};