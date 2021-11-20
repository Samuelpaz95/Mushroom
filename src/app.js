const path = require("path");
const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require("morgan");
const flash = require('connect-flash');
const session = require('express-session');
const MySQLStore = require('express-mysql-session');
const { database } = require('./models/keys');
const passport = require('passport');

// initializations
const app = express();
require('./lib/passport');

// setting
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

// midelwares
app.use(session({
    secret: "ThisIsMySecretKey",
    resave: false,
    saveUninitialized: false,
    store: MySQLStore(database)
}));
app.use(flash())
app.use(morgan("dev"));
app.use(express.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session())

// global variables
app.use((request, response, next) => {
    app.locals.success = request.flash('success');
    app.locals.message = request.flash('message');
    app.locals.user = request.user;
    next();
});

// routes
app.use(require('./routes/index'));
app.use('/login', require('./routes/authentications'));
app.use('/classes', require('./routes/classes'));
app.use('/tasks', require('./routes/tasks'));

// static
app.use(express.static(path.join(__dirname, 'static')));

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
