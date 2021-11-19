const router = require('express').Router();
taskController = require("../controllers/taskController");


router.get('/', taskController.getTask);

module.exports = router;