var bunyan = require('bunyan');
const defaultConfig = require('./defaultConfig');

let logger;

module.exports = class Logger {
    constructor(config = null) {

        this._config = config || defaultConfig.logger;
        if (!logger) {
            logger = bunyan.createLogger(this._config);
        }

        return logger;
    }
}

