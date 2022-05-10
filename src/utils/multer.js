const multer = require('multer');
const { createDirectory } = require('../utils/directory');

createDirectory('public');
//configure multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const upload = multer({ storage: storage });

module.exports = { upload };