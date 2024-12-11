"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pino = __importDefault(require("pino"));
const pinoRotate = __importDefault(require('pino-rotate'));
const logFilePath = `${__dirname}/logs/app-{DATE}.log`;

const logger = pino.default(
    {
        level: 'info',
        // 使用 pino-rotate 插件来处理文件分割
        stream: pinoRotate.default({
            // 当文件大小达到1MB时进行分割
            maxSize: '1M',
            // 每天生成新的日志文件，格式为 app-YYYY-MM-DD.log
            period: '1d',
            // 保留最近的5个日志文件
            retain: 5,
            // 日志文件的路径
            path: logFilePath
        })
    }
);


// 重定向 console.log
//console.log = logger.info.bind(logger);

// 重定向 console.error
//console.error = logger.error.bind(logger);

exports.default = logger;
console.log("111");
console.log("222");