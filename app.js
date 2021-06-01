const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;

const jsPath = path.join(__dirname, "public/js");
const cssPath = path.join(__dirname, "public/css");
const imgPath = path.join(__dirname, "public/img");
const registerPartials = path.join(__dirname,"views/partials");

app.use(express.urlencoded({extended:false}));
app.use('/css',express.static(cssPath));
app.use('/js',express.static(jsPath));
app.use('/img',express.static(imgPath));

app.set("view engine", "hbs"); // set template engine
hbs.registerPartials(registerPartials);

app.get('/', (req, res) => {
    res.status(200).render('index')
})
app.get('/camera', (req, res) => {
    res.status(200).render('camera')
})

app.listen(port, () => {
    console.log(`listening at http://localhost:$port`)
})