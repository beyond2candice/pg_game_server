"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        try {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        } catch (e) {
            console.log(e);
        }
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });

try {
    const mysql = require('mysql2');

const connection = mysql.createConnection
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const index_1 = __importDefault(require("./logger/index"));
const routes_1 = __importDefault(require("./routes"));
const figlet = __importStar(require("figlet"));
const path_1 = __importDefault(require("path"));
const socket_io_1 = require("socket.io");
const allfunctions_1 = __importDefault(require("./functions/allfunctions"));
const game_data_cache = __importDefault(require("./cache/game_data_cache"));
const serverEvents_1 = require("./serverEvents");

if (process.env.TEST_MODE === "1"){
    console.log("||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
    console.log("TEST MODE");
    console.log("TEST MODE");
    console.log("TEST MODE");
    console.log("TEST MODE");
    console.log("TEST MODE");
    console.log("TEST MODE");
    console.log("||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
}
require("dotenv/config");
// const privateKey = fs.readFileSync("server.key", "utf8")
// const certificate = fs.readFileSync("server.crt", "utf8")
// const credentials = {
//   key: privateKey,
//   cert: certificate,
// }
const app = (0, express_1.default)();
const httpServer = http_1.default.createServer(app);
const io = new socket_io_1.Server(httpServer);
console.log(figlet.textSync("API DE JOGOS JOHN"), "\n");
//const users = new Map();
io.on("connection", (socket) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Socket Connect ", socket.id);
    socket.on("join", (socket1) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const token = socket1.token;
            const gameid = parseInt(socket1.gameId);
            if (token && token != "") {
                const res = yield allfunctions_1.default.getuserbytoken(token);
                if (res && res.length > 0) {
                    game_data_cache.default.addSocketUser(socket, gameid, res[0]);
                }
            }
        } catch(e) {
            console.log(e);
        }
       // setInterval(function () {
       //     return __awaiter(this, void 0, void 0, function* () {
       //         const user = yield allfunctions_1.default.getuserbytoken(token);
       //         if (!user[0]) {
       //             socket.disconnect(true);
       //             return false;
       //         }
       //         const retornado = user[0].valorganho;
       //         const valorapostado = user[0].valorapostado;
       //         const rtp = Math.round((retornado / valorapostado) * 100);
       //         if (isNaN(rtp) === false) {
       //             yield allfunctions_1.default.updatertp(token, rtp);
       //         }
       //     });
       // }, 10000);
    }));
    (0, serverEvents_1.adicionarListener)("attganho", (dados) => __awaiter(void 0, void 0, void 0, function* () {
        //users.forEach((valor, chave) => __awaiter(void 0, void 0, void 0, function* () {
        //    let newvalue = parseFloat(users.get(socket.id).aw) + dados.aw;
        //    users.set(socket.id, {
        //        aw: newvalue,
        //    });
        //}));
        //(0, serverEvents_1.emitirEventoInterno)("awreceive", {
        //    aw: users.get(socket.id).aw,
        //});
    }));
    (0, serverEvents_1.adicionarListener)("att", (dados) => {
        //users.forEach((valor, chave) => {
        //    if (valor.token === dados.token) {
        //        return false;
        //    }
        //    else {
        //        users.set(socket.id, {
        //            token: dados.token,
        //            username: dados.username,
        //            bet: dados.bet,
        //            saldo: dados.saldo,
        //            rtp: dados.rtp,
        //            agentid: dados.agentid,
        //            socketid: socket.id,
        //            gamecode: dados.gamecode,
        //            aw: 0,
        //        });
        //    }
        //});
        //if (Object.keys(users).length === 0) {
        //    users.set(socket.id, {
        //        token: dados.token,
        //        username: dados.username,
        //        bet: dados.bet,
        //        saldo: dados.saldo,
        //        rtp: dados.rtp,
        //        agentid: dados.agentid,
        //        socketid: socket.id,
        //        gamecode: dados.gamecode,
        //        aw: 0,
        //    });
        //}
    });
    socket.on("disconnect", (reason) => {
        //users.delete(socket.id);
        //console.log("Client disconnect:"+reason + " " + socket.id);
        try {
            game_data_cache.default.removeSocketUser(socket);
        } catch (e) {
            console.log(e);
        }
    });
}));

(0, serverEvents_1.emitirEventoInterno)("att", {
    token: "1234",
    username: "user",
    bet: 10000,
    saldo: 1000,
    rtp: 10000,
    agentid: 10000,
    gamecode: 123,
});

// Middleware para adicionar o socket.io em cada requisição
app.use((req, res, next) => {
    req.io = io; // Adiciona o socket.io ao objeto req
    if (req.originalUrl == '/AuthenticationVerify/GetBetHistoryVerifyHtml'){
        res.setHeader('Access-Control-Allow-Origin', process.env.VERIFY_ORIGIN);
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
    }
    next();
});
const corsOptions = {
    origin: function (origin, callback) {
        // 这里可以根据需求设置允许的源，比如只允许特定源或允许所有源等
        // 假设这里允许所有源进行跨域请求（实际应用需谨慎）
        callback(null, true);
    },
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
};

app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/", express_1.default.static(path_1.default.join(__dirname, "public")));
app.use(helmet_1.default.contentSecurityPolicy({
    useDefaults: false,
    directives: {
        "default-src": ["'none'"],
        "base-uri": "'self'",
        "font-src": ["'self'", "https:", "data:"],
        "frame-ancestors": ["'self'"],
        "img-src": ["'self'", "data:"],
        "object-src": ["'none'"],
        "script-src": ["'self'", "https://cdnjs.cloudflare.com"],
        "script-src-attr": "'none'",
        "style-src": ["'self'", "https://cdnjs.cloudflare.com"],
    },
}));
app.use("/status", (req, res) => {
    res.json({ status: "operational" });
});
app.use(routes_1.default);
httpServer.listen(3000, () => {
    index_1.default.info("SERVIDOR INICIADO API JOHN " + process.env.PORT);
});


const WebSocket = require('ws');

const wss = new WebSocket.Server({ noServer: true });

const server = require('http').createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello, World!');
});

server.on('upgrade', (request, socket, head) => {
    if (request.url === '/lifeservice/ws2') {
        wss.handleUpgrade(request, socket, head, (ws) => {
            wss.emit('connection', ws, request);
        });
    } else {
        socket.destroy();
    }
});

wss.on('connection', (ws) => {
    console.log('客户端连接成功');
    // 可以在这里向新连接的客户端发送欢迎消息
    ws.send(JSON.stringify({error:0}));
});
wss.on('message', (message, ws) => {
    console.log(`接收到消息：${message}`);
    // 对消息进行处理，例如根据不同的消息内容执行不同的操作
});
wss.on('error', (error) => {
    console.error(`WebSocket 服务器错误：${error}`);
});

wss.on('close', (error) => {
    console.error(`WebSocket 服务器错误：${error}`);
});

const port = 3001;
server.listen(port, () => {
    console.log(`服务器正在监听端口 ${port}...`);
});
} catch(e) {
    console.log(e);
}