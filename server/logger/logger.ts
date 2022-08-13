class Logger {
    
    public info(logText: string): void {
        console.log(new Date() + "\ninfo::" + logText);
    }

    public debug(logText: string): void {
        console.log(new Date() + "\ndebug::" + logText);
    }

    public error(logText: string): void {
        console.log(new Date().toUTCString() + "\nerror::" + logText);
    }
    
    constructor() {}

}
export default new Logger();

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