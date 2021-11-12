indexController = require("../controllers/indexController");
loginController = require("../controllers/loginController");
taskController = require("../controllers/taskController");

exports.index = (router) => {
    router.get("/", indexController.getIndex);
};

exports.login = (router) => {
    router.get("/login", loginController.getLogin)
}
exports.task = (router) => {
    router.get("/task", taskController.getTask)
}