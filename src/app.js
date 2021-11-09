const express = require('express');
const path = require("path");
const routes = require("./routes/root");


const app = express();
const port = 3000;
const router = express.Router();

app.use(router);
app.use(express.static(path.join(__dirname, 'static')));

routes.index(router);
routes.login(router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
