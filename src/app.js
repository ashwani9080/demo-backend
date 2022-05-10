const express = require('express');
require('./config');
require('./utils/multer');
const app = express();
const { router } = require('./routes');
const port = process.env.PORT || 8086;
const { middlewareConfig } = require('./utils/middlewares');
const { connectDb } = require('./utils/db');


middlewareConfig(app, express);
app.use("/", router);

app.listen(port,'127.0.0.1',async (req, res) => {
    await connectDb();
});
