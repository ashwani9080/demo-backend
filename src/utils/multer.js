const multer = require('multer');
const { createDirectory } = require('../utils/directory');

createDirectory('public');
createDirectory('public/uploads');
//configure multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const upload = multer({ storage: storage });

module.exports = { upload };