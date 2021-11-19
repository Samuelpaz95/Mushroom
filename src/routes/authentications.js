const router = require('express').Router();
const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('../lib/auth')

loginController = require("../controllers/loginController");

const options = {
    successRedirect: '/classes',
    failureRedirect: '/login',
    failureFlash: true
}

router.get("/", loginController.getLogin);
router.post("/signup", isNotLoggedIn, passport.authenticate('local.signup', options));
router.post("/signin", isNotLoggedIn, passport.authenticate('local.signin', options));
router.get('/logout', isLoggedIn, (request, response) => {
    request.logOut();
    response.redirect('/');
});

module.exports = router;