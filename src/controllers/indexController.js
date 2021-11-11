const path = require('path');

exports.getIndex = (request, response, next) => {
    response.sendFile(path.dirname(__dirname) + "/views/index.html");
};