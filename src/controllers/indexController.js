const path = require('path');

exports.getIndex = (request, response) => {
    response.sendFile(path.dirname(__dirname) + "/views/index.html");
};