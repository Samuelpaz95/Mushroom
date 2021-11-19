const router = require('express').Router();
const { isLoggedIn, isNotLoggedIn } = require('../lib/auth')

const classesController = require('../controllers/classesController');

router.get('/', isLoggedIn, classesController.getClasses);
router.get('/add', isLoggedIn, classesController.addClass);
router.post('/', isLoggedIn, classesController.postClass);
router.get('/edit/:id', isLoggedIn, classesController.editClass);
router.post('/edit/:id', isLoggedIn, classesController.updateClass);
router.get('/delete/:id', isLoggedIn, classesController.deleteClass);

module.exports = router;