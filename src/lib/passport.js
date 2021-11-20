const passport = require("passport");
const { Strategy } = require("passport-local");
const { encryptPassword, matchPassword } = require("./helpers");
const User = require('../models/User');
const pool = require("../models/db");

passport.use('local.signin', new Strategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (request, username, password, done) => {
    User.getUserBy({ username: username }).then(users => {
        if (users.length > 0) {
            const user = users[0];
            matchPassword(password, user.passwrd).then(validPassword => {
                if (validPassword) {
                    done(null, user, request.flash('success', `Welcome ${user.fullname}.`));
                } else {
                    done(null, false, request.flash('message', 'The username or password does not exist.'));
                }
            });
        } else {
            return done(null, false, request.flash('message', 'The username or password does not exist.'));
        }
    });
}));

passport.use('local.signup', new Strategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (request, username, passwrd, done) => {
    const { email } = request.body;
    pool.query(`SELECT * FROM ${User.tableName} WHERE ? OR ?`, [
        { username: username }, { email: email }
    ]).then(users => {
        if (users.length > 0) {
            done(null, false, request.flash('message', 'The username or email already exists.'))
        } else {
            const user = User.createUser({ username, passwrd, email })
            encryptPassword(passwrd).then(passhash => {
                user.passwrd = passhash;
                user.save().then(result => {
                    user.id = result.insertId;
                    return done(null, user);
                });
            });
        }
    });
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    User.getUserBy({ id: id }).then(users => {
        done(null, users[0])
    });
})