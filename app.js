const path = require('path');

const homeRoutes = require('./routes/home');

const port = 3000 || process.argv[0];

const express = require('express');
const expressHbs = require('express-handlebars');
const bodyParser = require('body-parser'); 

const app = express(); // express object
app.use(bodyParser.urlencoded({extended: false})); // parse response

// Static files middlware. Serve public folder (static files etc)
app.use(express.static(path.join(__dirname, 'public')));

// template engine
app.engine('hbs', expressHbs(
    { extname: "hbs",
        defaultLayout: "",
        layoutsDir: "",
    }
));
app.set('view engine', 'hbs');
app.set('views', 'views');

// Routes middleware
app.use(homeRoutes); // frontend side.

// Page not Found.
app.use((req, res, next) => {
    res.render('404', { pageTitle: 'Page Not Found!' });
})
app.listen(port);