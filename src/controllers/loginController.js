const path = require('path');

exports.getLogin = (request, response, next) => {
    response.sendFile(path.dirname(__dirname) + "/views/login.html");
};