const cookiesSession = require('cookie-session');
const cors = require("cors");
const { urlencoded, json } = require('express');

const middlewareConfig = (app, express) => {
    app.use(json());
    app.use(urlencoded({ extended: true }));
    app.use(cors())
    app.use(express.static(__dirname + '/public'));
    app.use(express.static(__dirname));
    // app.use(cookiesSession({
    //     maxAge: 20 * 60 * 60 * 1000,
    //     keys: [keys.session.cookiesSession]
    // }));
}

module.exports = { middlewareConfig };