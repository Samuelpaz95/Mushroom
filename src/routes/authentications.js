const router = require('express').Router();
const passport = require('passport');

loginController = require("../controllers/loginController");

const options = {
    successRedirect: '/classes',
    failureRedirect: '/login',
    failureFlash: true
}

router.get("/", loginController.getLogin);
router.post("/signup", passport.authenticate('local.signup', options));
router.post("/signin", passport.authenticate('local.signin', options));
router.get('/logout', (request, response) => {
    request.logOut();
    response.redirect('/');
});

module.exports = router;