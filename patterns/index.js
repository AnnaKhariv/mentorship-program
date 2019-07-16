const Logger = require('./singleton');

const params = {
    name: "mentorship-program-patterns",
    level: "trace"
};

const logger_1 = new Logger();
const logger_2 = new Logger(params);

logger_1.info(`Check singleton pattern, instance_1 === instance_2: ${logger_1 === logger_2}`)
logger_1.trace(`Logger_1 ${logger_1.fields.name}`);
logger_1.trace(`Logger_2 ${logger_2.fields.name}`);