indexController = require("../controllers/indexController");
loginController = require("../controllers/loginController");
taskController = require("../controllers/taskController");

exports.index = (router) => {
    router.get("/", indexController.getIndex);
    
};

exports.login = (router) => {
    router.get("/login", loginController.getLogin);
    router.post("/login", loginController.postLogin);
}