const path = require("path");
const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require("morgan");
const db = require("./models/db")
const routes = require("./routes/root");


const app = express();
const router = express.Router();
const port = 3000;
// app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(router);
app.use(express.static(path.join(__dirname, 'static')));

routes.index(router);
routes.login(router);
routes.task(router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
