const fs = require('fs').promises;

const createDirectory = (dir) => {
    fs.stat(dir).catch(async (err) => {
        if (err.message.includes('no such file or directory')) {
            await fs.mkdir(dir);
        }
    });
}

module.exports = {
    createDirectory
}