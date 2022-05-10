const { createLogger, transports } = require('winston');

//logger configuration
const logger = createLogger({
    level: 'info',
    transports: [
        new transports.Console(),
        new transports.File({
            filename: `./logs/${new Date().toISOString().slice(0, 10)}/error.log`,
            level: 'error',
        }),
        new transports.File({
            filename: `./logs/${new Date().toISOString().slice(0, 10)}/combined.log`,
        },
        )
    ]
});



module.exports = { logger };