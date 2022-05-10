const multer = require('multer');
const fs = require('fs').promises;

const dir = './public';
fs.stat(dir).catch(async (err) => {
    if (err.message.includes('no such file or directory')) {
        await fs.mkdir(dir);
    }
});

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