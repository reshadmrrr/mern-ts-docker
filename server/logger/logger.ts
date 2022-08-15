const pine = require('pine');
const p = pine();

class Logger {
    
    public info(logText: string, data?: any): void {
        p.info(`${logText}  ${data != undefined ? JSON.stringify(data) : ""}`);
    }

    public debug(logText: string): void {
        p.debug(logText);
    }

    public error(logText: string): void {
        p.error(logText);
    }
    
    constructor() {}

}
module.exports = new Logger();

// type loggerObject = {
//     info: Function,
//     debug: Function,
//     error: Function,
// }

// const logger: loggerObject = {
//     info: (logText: string) => console.log(new Date() + "\ninfo::" + logText),
//     debug: (logText: string) => console.log(new Date() + "\ndebug::" + logText),
//     error: (logText: string) => console.error(new Date() + "\nerror::" + logText),
// }


// module.exports = logger;