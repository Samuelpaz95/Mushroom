const router = require('express').Router();
indexController = require("../controllers/indexController");


router.get('/', indexController.getIndex);

module.exports = router;