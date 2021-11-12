const path = require('path');

exports.getTask = (request, response, next) => {
    response.sendFile(path.dirname(__dirname) + "/views/task.html");
};