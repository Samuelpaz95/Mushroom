indexController = require("../controllers/indexController");
loginController = require("../controllers/loginController")

exports.index = (router) => {
    router.get("/", indexController.getIndex);
};

exports.login = (router) => {
    router.get("/login", loginController.getLogin)
}