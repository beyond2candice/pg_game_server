"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const game_data_cache = __importDefault(require("../cache/game_data_cache"));
const gamecontollermgr_1 = __importDefault(require("../controllers/game_controller_mgr"));
const constans = require("../constans/constants");
const moment = require('moment');
const cron = require('node-cron')
const _ = require('lodash');

let TEST_CONTROL_LOST_RATE = 57; //输概率
let TEST_CONTROL_GANHO_RATE = 20; //小奖概率
let TEST_CONTROL_GANHO_BIG_RATE = 15; //中奖概率
let TEST_CONTROL_BONUS_RATE = 8; //大奖概率

let GANHO_SCORE_RATE_END = 10;  //小奖倍数结束，中奖开始
let NORMAL_GANHO_SCORE_RATE_END = 80; //中奖倍数结束，大奖开始

let TEST_CONTROL_BIG_WIN_NUM = 5;

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

var GetGameHistoryTableName = function (timestampMs) {
    const date = moment(timestampMs);
    const year = date.year();
    const weekNumber = date.week();
    return `game_history_${year}_${weekNumber}`;
}

console.log(GetGameHistoryTableName(1733451827065))
function GetTableNamesInRange(startTimeStampMs, endTimeStampMs) {
    const startDate = moment(startTimeStampMs);
    const endDate = moment(endTimeStampMs);
    const tableNames = [];
    let currentDate = startDate.startOf('week');
    while (currentDate <= endDate) {
        tableNames.push(GetGameHistoryTableName(currentDate.valueOf()));
        currentDate = moment(currentDate).add(1, 'week');
    }
    return tableNames;
}

function randn(mean, stdev) {
    var u1, u2, v1, v2, s;
    if (mean === undefined) {
        mean = 0.0;
    }
    if (stdev === undefined) {
        stdev = 1.0;
    }
    if (randn.v2 === null) {
        do {
            u1 = Math.random();
            u2 = Math.random();

            v1 = 2 * u1 - 1;
            v2 = 2 * u2 - 1;
            s = v1 * v1 + v2 * v2;
        } while (s === 0 || s >= 1);

        randn.v2 = v2 * Math.sqrt(-2 * Math.log(s) / s);
        return stdev * v1 * Math.sqrt(-2 * Math.log(s) / s) + mean;
    }

    v2 = randn.v2;
    randn.v2 = null;
    return stdev * v2 + mean;
}
randn.v2 = null;

function rSkewNorm(alpha, loc, scale, min, max) {
    var sigma, u0, v, u1, ret;

    if (alpha === undefined) {
        alpha = 0;
    }
    if (loc === undefined) {
        loc = 0;
    }
    if (scale === undefined) {
        scale = 1;
    }
    if (min === undefined) {
        min = -Math.infinity;
    }
    if (max === undefined) {
        max = Math.infinity;
    }
    if (min >= max) {
        return max;
    }

    sigma = alpha / Math.sqrt(1 + Math.pow(alpha, 2));

    var generate = function () {
        u0 = randn();
        v = randn();
        u1 = (sigma * u0 + Math.sqrt(1 - Math.pow(sigma, 2)) * v);

        if (u0 >= 0) {
            return u1 * scale + loc;
        }
        return (-u1) * scale + loc;
    }

    let i = 0;
    do {
        ret = generate();
        i++;
        if (i >= 1000) {
            return 0;
        }
    } while (ret < min || ret > max)

    return ret;
}

function TestRandomBetScore() {
    let minusCount = 0;
    let counts = [];
    const MAX_INDEX = 100;
    const CELL_NUM = 50;
    for (let i = 0; i < MAX_INDEX + 1; i++) {
        counts.push(0);
    }
    counts.push(0);

    let data = [];
    for (let i = 0; i < 100000; i++) {
        data.push(rSkewNorm(-5, 80, 4200, -300.099, 121500.07))
    }

    data.forEach(value => {
        if (value <= 0) {
            minusCount++;
        } else {
            let idx = Math.floor(value / CELL_NUM);
            if (idx > MAX_INDEX) {
                counts[MAX_INDEX + 1]++;
            } else {
                counts[idx]++;
            }
        }
    });

    counts.forEach((value, i) => {
        console.log(i * CELL_NUM + "-" + (i + 1) * CELL_NUM + "=", value);
    })
    console.log("<0=" + minusCount);
}
//TestRandomBetScore();
const RESULT_SCORE_SCALE = 100000;
let GAME_JSON_SCORE_SET_CACHE = {};
// 启动定时器
const database_1 = __importDefault(require("../database"));
exports.default = {
    convertUserDecimalToFloat(user_lst) {
        if (Array.isArray(user_lst)) {
            for (var i = 0; i < user_lst.length; i++) {
                let user = user_lst[i];
                if (user) {
                    user.saldo = parseFloat(user.saldo);
                    user.valorapostado = parseFloat(user.valorapostado);
                    user.valordebitado = parseFloat(user.valordebitado);
                    user.valorganho = parseFloat(user.valorganho);
                }
            }
        }
    },
    getuserbytoken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield database_1.default.query(`SELECT * FROM users WHERE token= ? LIMIT 1`, [token]);
            this.convertUserDecimalToFloat(res[0]);
            return res[0];
        });
    },
    getuserbyatk(atk) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield database_1.default.query(`SELECT * FROM users WHERE atk= ? LIMIT 1`, [atk]);
            this.convertUserDecimalToFloat(res[0]);
            return res[0];
        });
    },
    getuserbyid(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield database_1.default.query("SELECT * FROM users WHERE id = ? LIMIT 1", [id]);
            this.convertUserDecimalToFloat(res[0]);
            return res[0];
        });
    },
    getuserbystartid(start_id, num) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield database_1.default.query("SELECT * FROM users WHERE id >= ? LIMIT ?", [start_id, num]);
            return res[0];
        });
    },
    updateUserLostBetInfo(user, agent, game_id, newbalance, bet, rtp_call_id, from_reward_pool, real_reward_pool_score) {
        return __awaiter(this, void 0, void 0, function* () {
            const user_code = user.username;
            const atk = user.atk;
            game_data_cache.default.updateUserFields(user_code, game_id, { Bet: bet }, { valordebitado: user.valordebitado + bet, valorapostado: user.valorapostado + bet });
            const res = yield database_1.default.query("CALL sp_update_user_lost(?,?,?,?,?,?,?)", [user.id, bet, newbalance, rtp_call_id, game_id, from_reward_pool, real_reward_pool_score]);
            return res[0];
        });
    },
    updateUserWinBetInfo(user, agent, game_id, newbalance, bet, winScore, rtp_call_id, from_reward_pool, real_reward_pool_score) {
        return __awaiter(this, void 0, void 0, function* () {
            const user_code = user.username;
            const atk = user.atk;
            game_data_cache.default.updateUserFields(user_code, game_id, { Bet: bet }, { valordebitado: user.valordebitado + bet, valorapostado: user.valorapostado + bet, valorganho: user.valorganho + winScore });

            const res = yield database_1.default.query("CALL sp_update_user_win(?,?,?,?,?,?,?,?)", [user.id, bet, newbalance, winScore, rtp_call_id, game_id, from_reward_pool, real_reward_pool_score]);
            return res[0][0];
        });
    },

    convertHistoryDecimalToFloat(history_lst) {
        if (Array.isArray(history_lst)) {
            for (var i = 0; i < history_lst.length; i++) {
                let history = history_lst[i];
                if (history) {
                    history.gtba = parseFloat(history.gtba);
                    history.gtwla = parseFloat(history.gtwla);
                }
            }
        }
    },
    getGameHistory(gid, start, end, atk) {
        return __awaiter(this, void 0, void 0, function* () {
            const tableNames = GetTableNamesInRange(start, end);
            const queryPromises = tableNames.map(tableName => {
                //console.log(`SELECT * FROM ${tableName} WHERE atk =? And gid=? And bt >=? and bt<=?` + atk + " " + gid + " " + start + " " + end);
                return database_1.default.query(`SELECT * FROM ${tableName} WHERE atk =? And gid=? And bt >=? and bt<=? order by bt desc`, [atk, gid, start, end]);
            });
            const results = yield Promise.all(queryPromises);
            let history_lst = results.reduce((acc, curr) => acc.concat(curr[0]), []);
            this.convertHistoryDecimalToFloat(history_lst);
            return history_lst;
        });
    },
    // 设置agent的自动奖励
    setAgentIsAutoReward(agent_code, is_auto_reward) {
        return __awaiter(this, void 0, void 0, function* () {
            is_auto_reward = +is_auto_reward;
            const res = yield database_1.default.query("UPDATE agents SET is_auto_reward = ? WHERE agentCode = ?", [is_auto_reward, agent_code]);
            if (res && res.length > 0 && res[0].affectedRows === 1) {
                return true;
            }
            return false;
        });
    },

    getGameHistoryByTid(tid, tm) {
        return __awaiter(this, void 0, void 0, function* () {
            const tableName = GetGameHistoryTableName(tm);
            const res = yield database_1.default.query(`SELECT * FROM ${tableName} WHERE tid=? LIMIT 1`, [tid]);
            if (res && Array.isArray(res) && res.length > 0 && Array.isArray(res[0]) && res[0].length > 0) {
                this.convertHistoryDecimalToFloat(res[0]);
                return res[0][0]
            }
            return null;
        });
    },
    insertGameHistory(user, bdLst) {
        return __awaiter(this, void 0, void 0, function* () {
            const tableName = GetGameHistoryTableName();
            const res = yield database_1.default.query(`INSERT INTO ${tableName} (tid, gid, atk, gtba, gtwla, bt, bc, bds, agent_id) VALUES (?,?,?,?,?,?,?,?,?)`, [bdLst.tid, bdLst.gid, user.atk, bdLst.gtba, bdLst.gtwla, bdLst.bt, bdLst.bc, JSON.stringify(bdLst), user.agentid]);
            return res[0];
        });
    },

    createGameHistory(gid, btJson) {
        let nowNs = Date.now();
        return {
            tid: btJson.sid,
            gid: gid,
            cc: "PGC",
            gtba: btJson.tb,
            gtwla: btJson.np,
            bt: nowNs,
            bc: 1,
            ge: [1, 11],
            bd: [
                {
                    tid: btJson.sid,
                    tba: btJson.tb,
                    twla: btJson.np,
                    bl: btJson.bl,
                    bt: nowNs,
                    gd: btJson,
                }
            ],
            mgcc: 0,
            fscc: 0,
        };
    },
    appendGameHistoryStep(history, btJson) {
        history.gtba += btJson.tb;
        history.gtwla += btJson.np;
        history.bc += 1;
        let nowNs = Date.now();
        let newBd = {
            tid: btJson.sid,
            tba: btJson.tb,
            twla: btJson.np,
            bl: btJson.bl,
            bt: nowNs,
            gd: btJson,
        }
        history.bd.push(newBd)
    },
    getcall(id, game_code) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield database_1.default.query("SELECT * FROM calls WHERE iduser = ? and status = 'pending' and gamecode= ?", [id, game_code]);
            return res[0];
        });
    },
    getagentbyid(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let agent = game_data_cache.default.getAgentById(id);
            if (agent) {
                return [agent];
            }
            const res = yield database_1.default.query("SELECT * FROM agents WHERE id = ?", [id]);
            if (res && res.length > 0 && res[0] && res[0].length > 0) {
                game_data_cache.default.updateAgent(res[0][0]);
                return res[0];
            }
        });
    },
    getAgentByAgentTokenAndSecretKey(token, secretKey) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.getagentbyagentToken(token);
            if (res && res.length > 0) {
                if (res[0].secretKey == secretKey) {
                    return res;
                }
            }
            return null;
        });
    },
    getagentbyagentToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            let agent = game_data_cache.default.getAgentByToken(token);
            if (agent) {
                return [agent];
            }
            const res = yield database_1.default.query(`SELECT * FROM agents WHERE agentToken= ?`, [token]);
            if (res && res.length > 0 && res[0] && res[0].length > 0) {
                game_data_cache.default.updateAgent(res[0][0]);
                return res[0];
            }
            return null;
        });
    },
    getagentbysecretkey(secretkey) {
        return __awaiter(this, void 0, void 0, function* () {
            let agent = game_data_cache.default.getAgentBySecretKey(secretkey);
            if (agent) {
                return [agent];
            }
            const res = yield database_1.default.query(`SELECT * FROM agents WHERE secretKey= ?`, [secretkey]);
            if (res && res.length > 0 && res[0] && res[0].length > 0) {
                game_data_cache.default.updateAgent(res[0][0]);
                return res[0];
            }
            return null;
        });
    },
    getuserbyagent(usercode, agentid) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield database_1.default.query(`SELECT * FROM users WHERE username= ? and agentid = ?`, [usercode, agentid]);
            this.convertUserDecimalToFloat(res[0]);
            return res[0];
        });
    },
    setbalanceuserbyid(id, balance, provider_code) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield database_1.default.query("UPDATE users SET saldo = ?,provider_code=? WHERE id=?", [balance, provider_code, id]);
            return res[0];
        });
    },
    createuser(user_code, tokenuser, atkuser, balance, agentid, provider_code) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield database_1.default.query("call sp_new_user(?,?,?,?,?,?,?)", [user_code, tokenuser, atkuser, balance, agentid, provider_code, Math.floor(Date.now() / 1000)]);
            if (Array.isArray(res) && res[0].length > 0 && Array.isArray(res[0]) && res[0].length > 0 && Array.isArray(res[0][0]) && res[0][0].length > 0) {
                this.convertUserDecimalToFloat(res[0][0]);
                return res[0][0][0];
            }
            //const res = yield database_1.default.query("INSERT INTO users (username,token,atk,saldo,agentid, provider_code, create_at) VALUES(?,?,?,?,?,?)", [user_code, tokenuser, atkuser, balance, agentid, provider_code]);
            return null;
        });
    },
    attagent(id, probganho, probbonus, probganhortp, probganhoinfluencer, probbonusinfluencer, probganhoaposta, probganhosaldo) {
        return __awaiter(this, void 0, void 0, function* () {
            game_data_cache.default.deleteAgentById(id);
            const res = yield database_1.default.query("UPDATE agents SET probganho = ?,probbonus = ?,probganhortp = ?,probganhoinfluencer = ?,probbonusinfluencer = ?,probganhoaposta = ?,probganhosaldo = ? WHERE id=?", [probganho, probbonus, probganhortp, probganhoinfluencer, probbonusinfluencer, probganhoaposta, probganhosaldo, id]);
            return res[0];
        });
    },
    updateUserRtp(user_code, agent_id, rtp) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield database_1.default.query("UPDATE users set rtp = ? WHERE username = ? and agentid = ?", [rtp, user_code, agent_id]);
            return res[0];
        });
    },
    updateBatchUserRtp(user_code_lst, agent_id, rtp) {
        return __awaiter(this, void 0, void 0, function* () {
            let query1 = "UPDATE users set rtp =" + rtp + " WHERE agentid =" + agent_id + " and username IN(" + user_code_lst + ")";
            // console.log(query1)
            //  try {
            //        const [results, fields] = yield database_1.default.query(query1);
            //      console.log("sql relust", results);
            //  } catch (err) {
            //       console.log("err =", err);
            //   }

            // const res = yield database_1.default.query("UPDATE users set rtp = ? WHERE agentid = ? and username IN (?)", [rtp, agent_id, user_code_lst]);
            return yield database_1.default.query(query1);
        });
    },
    getcallbyid(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield database_1.default.query("SELECT * FROM calls WHERE id = ?", [id]);
            return res[0];
        });
    },
    updatertp(token, rtp) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield database_1.default.query("UPDATE users SET rtp = ? WHERE token = ?", [rtp, token]);
            return res[0];
        });
    },
    addcall(gamecode, iduser, json) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield database_1.default.query("INSERT INTO calls (iduser,gamecode,jsonname,bycall) VALUES (?,?,?,'system')", [iduser, gamecode, json]);
            return res[0];
        });
    },

    insert_new_game_rtp_call(agent, game_user, gamecode, provider_code, except_money, call_bet, call_rtp, call_type) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = game_user.User;
            let game = game_user.Game;
            let nowMs = Date.now();
            const res = yield database_1.default.query('CALL sp_game_rtp_call_insert(?,?,?,?,?,?,?,?,?,?)', [agent.id, user.username, provider_code, gamecode, call_bet, except_money, call_rtp, call_type, nowMs, nowMs]);
            return res[0][0]
        });
    },

    convertGameRtpCallDecimalToFloat(rtp_call_lst) {
        if (Array.isArray(rtp_call_lst)) {
            for (var i = 0; i < rtp_call_lst.length; i++) {
                let rtp_call = rtp_call_lst[i];
                if (rtp_call) {
                    rtp_call.bet = parseFloat(rtp_call.bet);
                    rtp_call.expect = parseFloat(rtp_call.expect);
                    rtp_call.real = parseFloat(rtp_call.real);
                }
            }
        }
    },
    get_game_rtp_call(agent, offset, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield database_1.default.query('SELECT * FROM gamertpcall where agent_id=? ORDER BY id DESC LIMIT ?, ?', [agent.id, offset, limit]);
            this.convertGameRtpCallDecimalToFloat(res[0]);
            return res[0]
        });
    },
    get_game_rtp_call_by_ids(agent, call_ids) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield database_1.default.query('SELECT * FROM gamertpcall where agent_id=? AND id IN (?)', [agent.id, call_ids]);
            this.convertGameRtpCallDecimalToFloat(res[0]);
            return res[0]
        });
    },
    cancel_game_rtp_call_lst(agent, call_id_lst) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    },
    cancel_game_rtp_call(agent, call_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield database_1.default.query('CALL sp_cancel_game_rtp_call(?,?)', [agent.id, call_id]);
            return res[0][0]
        });
    },
    GetTotaluserRecords(user_code) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield database_1.default.query(`SELECT count(1) AS total_num FROM gamertpcall WHERE user_code=  ? `, [user_code]);
            if (res && Array.isArray(res) && res.length > 0 && Array.isArray(res[0])) {
                return res[0][0].total_num;
            }
            return null;
        });
    },
    rtp_call_user_code(user_code, offset, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield database_1.default.query(`SELECT * FROM gamertpcall WHERE user_code =? ORDER BY updated_at DESC LIMIT ? , ? `, [user_code, offset, limit]);
            if (res && Array.isArray(res)) {
                return res[0];
            }
            return null;
        });
    },
    addAndReturnCall(gamecode, iduser, json, step, rtp_call_id, from_reward_pool, reward_pool_score, real_score) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield database_1.default.query("CALL sp_add_and_return_call(?,?,?,?,?,?,?,?)", [iduser, gamecode, step, json, rtp_call_id || 0, from_reward_pool || 0, reward_pool_score || 0, real_score || 0]);
            return res[0][0];
        });
    },
    updateStepAndgetcallbyid(idcall, steps) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield database_1.default.query("CALL update_step_and_get_call_by_id(?,?)", [idcall, steps]);
            return res[0][0];
        });
    },
    updatestepscall(idcall, steps) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield database_1.default.query("UPDATE calls SET steps = ? WHERE id=?", [steps, idcall]);
            return res[0];
        });
    },
    subtrairstepscall(idcall) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield database_1.default.query("SELECT steps from calls WHERE id=?", [idcall]);
            const call = res[0];
            const steps = call[0].steps;
            const newsteps = steps - 1;
            const res1 = yield database_1.default.query("UPDATE calls SET steps = ? WHERE id = ?", [newsteps, idcall]);
            return res1[0];
        });
    },
    completecall(idcall) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield database_1.default.query('UPDATE calls SET status = "completed" WHERE id= ?', [idcall]);
            return res[0];
        });
    },
    adicionarZeroAntes(numero) {
        return __awaiter(this, void 0, void 0, function* () {
            return Number("0." + numero.toString());
        });
    },
    rtp_call_user_id(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield database_1.default.query('SELECT * FROM gamertpcall WHERE id= ? ', [id]);
            this.convertGameRtpCallDecimalToFloat(res[0]);
            return res[0];
        });
    },
    determinarResultado(probabilidadeGanho, probabilidadebonus, id, gamecode) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultadoAleatorio = Math.random();
            const callpending = yield this.getcall(id, gamecode);
            let numeroAleatorio = 0;
            if (callpending.length > 0 && callpending[0].status === "pending" && callpending[0].gamecode === `${gamecode}`) {
                return {
                    result: "bonus",
                    gamecode: gamecode,
                    json: callpending[0].jsonname,
                    idcall: callpending[0].id,
                };
            }
            if (resultadoAleatorio < probabilidadeGanho) {
                if (resultadoAleatorio < probabilidadebonus) {
                    const user = yield this.getuserbyid(id);
                    if (user[0].isinfluencer === 1) {
                        numeroAleatorio = Math.floor(Math.random() * 6) + 1;
                        yield this.addcall(gamecode, id, numeroAleatorio);
                    }
                    else {
                        numeroAleatorio = Math.floor(Math.random() * (12 - 7 + 1)) + 7;
                        yield this.addcall(gamecode, id, numeroAleatorio);
                    }
                    return { result: "ganho" };
                }
                else {
                    return { result: "ganho" };
                }
            }
            else {
                return { result: "perda" };
            }
        });
    },
    determinarResultado2(probabilidadeGanho, probabilidadebonus, id, gamecode) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultadoAleatorio = Math.random();
            const callpending = yield this.getcall(id, gamecode);
            if (callpending.length > 0 && callpending[0].status === "pending" && callpending[0].gamecode === `${gamecode}`) {
                return {
                    result: "bonus",
                    gamecode: gamecode,
                    json: callpending[0].jsonname,
                    idcall: callpending[0].id,
                };
            }
            if (resultadoAleatorio < probabilidadeGanho) {
                if (resultadoAleatorio < probabilidadebonus) {
                    return { result: "perda", nextGanho: true, bonus: true };
                }
                else {
                    return { result: "perda", nextGanho: true };
                }
            }
            else {
                return { result: "perda" };
            }
        });
    },

    determinarResultado3(probabilidadeGanho, probabilidadebonus, id, gamecode) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultadoAleatorio = Math.random();
            const callpending = yield this.getcall(id, gamecode);
            if (callpending.length > 0 && callpending[0].status === "pending" && callpending[0].gamecode === `${gamecode}`) {
                return {
                    result: "bonus",
                    gamecode: gamecode,
                    json: callpending[0].jsonname,
                    idcall: callpending[0].id,
                };
            }
            if (resultadoAleatorio < probabilidadeGanho) {
                if (resultadoAleatorio < probabilidadebonus) {
                    return { result: "ganho", nextGanho: true };
                }
                else {
                    return { result: "ganho" };
                }
            }
            else {
                return { result: "perda" };
            }
        });
    },

    determinarResultado4(probabilidadeGanho, probabilidadebonus, id, gamecode) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultadoAleatorio = Math.random();
            if (resultadoAleatorio < probabilidadeGanho) {
                if (resultadoAleatorio < probabilidadebonus) {
                    return { result: "ganho" };
                }
                else {
                    return { result: "ganho" };
                }
            }
            else {
                return { result: "perda" };
            }
        });
    },
    calcularganho(valorAposta, saldoatual, token, gamecode) {
        return __awaiter(this, void 0, void 0, function* () {
            var user = yield this.getuserbyatk(token);
            var agent = yield this.getagentbyid(user[0].agentid);
            let probabilidadeGanho = yield this.adicionarZeroAntes(agent[0].probganho); //中奖概率
            let probabilidadebonus = yield this.adicionarZeroAntes(agent[0].probbonus);//大奖概率
            if (user[0].rtp >= 0 && user[0].rtp <= 30 && user[0].isinfluencer === 0) {
                probabilidadeGanho = yield this.adicionarZeroAntes(agent[0].probganhortp);
            }
            if (saldoatual >= 100) {
                probabilidadeGanho = yield this.adicionarZeroAntes(agent[0].probganhosaldo);
            }
            if (valorAposta >= 2) {
                probabilidadeGanho = yield this.adicionarZeroAntes(agent[0].probganhoaposta);
            }
            if (user[0].isinfluencer === 1) {
                probabilidadeGanho = yield this.adicionarZeroAntes(agent[0].probganhoinfluencer);
                probabilidadebonus = yield this.adicionarZeroAntes(agent[0].probbonusinfluencer);
            }
            console.log("PROBABILIDADE DE GANHO ATUAL " + probabilidadeGanho);
            console.log("PROBABILIDADE DE BONUS ATUAL " + probabilidadebonus);
            const resultado = this.determinarResultado(probabilidadeGanho, probabilidadebonus, user[0].id, gamecode);
            return resultado;
        });
    },
    calcularganho2(valorAposta, saldoatual, token, gamecode) {
        return __awaiter(this, void 0, void 0, function* () {
            var user = yield this.getuserbyatk(token);
            var agent = yield this.getagentbyid(user[0].agentid);
            let probabilidadeGanho = yield this.adicionarZeroAntes(agent[0].probganho); //中奖概率
            let probabilidadebonus = yield this.adicionarZeroAntes(agent[0].probbonus);//大奖概率
            if (user[0].rtp >= 0 && user[0].rtp <= 30 && user[0].isinfluencer === 0) {
                probabilidadeGanho = yield this.adicionarZeroAntes(agent[0].probganhortp);
            }
            if (saldoatual >= 100) {
                probabilidadeGanho = yield this.adicionarZeroAntes(agent[0].probganhosaldo);
            }
            if (valorAposta >= 2) {
                probabilidadeGanho = yield this.adicionarZeroAntes(agent[0].probganhoaposta);
            }
            if (user[0].isinfluencer === 1) {
                probabilidadeGanho = yield this.adicionarZeroAntes(agent[0].probganhoinfluencer);
                probabilidadebonus = yield this.adicionarZeroAntes(agent[0].probbonusinfluencer);
            }
            console.log("PROBABILIDADE DE GANHO ATUAL " + probabilidadeGanho);
            console.log("PROBABILIDADE DE BONUS ATUAL " + probabilidadebonus);
            const resultado = this.determinarResultado2(probabilidadeGanho, probabilidadebonus, user[0].id, gamecode);
            return resultado;
        });
    },

    calcularganho3(valorAposta, saldoatual, token, gamecode) {
        return __awaiter(this, void 0, void 0, function* () {
            var user = yield this.getuserbyatk(token);
            var agent = yield this.getagentbyid(user[0].agentid);
            let probabilidadeGanho = yield this.adicionarZeroAntes(agent[0].probganho); //中奖概率
            let probabilidadebonus = yield this.adicionarZeroAntes(agent[0].probbonus);//大奖概率
            if (user[0].rtp >= 0 && user[0].rtp <= 30 && user[0].isinfluencer === 0) {
                probabilidadeGanho = yield this.adicionarZeroAntes(agent[0].probganhortp);
            }
            if (saldoatual >= 100) {
                probabilidadeGanho = yield this.adicionarZeroAntes(agent[0].probganhosaldo);
            }
            if (valorAposta >= 2) {
                probabilidadeGanho = yield this.adicionarZeroAntes(agent[0].probganhoaposta);
            }
            if (user[0].isinfluencer === 1) {
                probabilidadeGanho = yield this.adicionarZeroAntes(agent[0].probganhoinfluencer);
                probabilidadebonus = yield this.adicionarZeroAntes(agent[0].probbonusinfluencer);
            }
            console.log("PROBABILIDADE DE GANHO ATUAL " + probabilidadeGanho);
            console.log("PROBABILIDADE DE BONUS ATUAL " + probabilidadebonus);
            const resultado = this.determinarResultado3(probabilidadeGanho, probabilidadebonus, user[0].id, gamecode);
            return resultado;
        });
    },
    calcularganho4(valorAposta, saldoatual, token, gamecode) {
        return __awaiter(this, void 0, void 0, function* () {
            var user = yield this.getuserbyatk(token);
            var agent = yield this.getagentbyid(user[0].agentid);
            let probabilidadeGanho = yield this.adicionarZeroAntes(agent[0].probganho); //中奖概率
            let probabilidadebonus = yield this.adicionarZeroAntes(agent[0].probbonus);//大奖概率
            if (user[0].rtp >= 0 && user[0].rtp <= 30 && user[0].isinfluencer === 0) {
                probabilidadeGanho = yield this.adicionarZeroAntes(agent[0].probganhortp);
            }
            if (saldoatual >= 100) {
                probabilidadeGanho = yield this.adicionarZeroAntes(agent[0].probganhosaldo);
            }
            if (valorAposta >= 2) {
                probabilidadeGanho = yield this.adicionarZeroAntes(agent[0].probganhoaposta);
            }
            if (user[0].isinfluencer === 1) {
                probabilidadeGanho = yield this.adicionarZeroAntes(agent[0].probganhoinfluencer);
                probabilidadebonus = yield this.adicionarZeroAntes(agent[0].probbonusinfluencer);
            }
            console.log("PROBABILIDADE DE GANHO ATUAL " + probabilidadeGanho);
            console.log("PROBABILIDADE DE BONUS ATUAL " + probabilidadebonus);
            const resultado = this.determinarResultado4(probabilidadeGanho, probabilidadebonus, user[0].id, gamecode);
            return resultado;
        });
    },
    genSuid() {
        return "183" + Date.now().toString() + Math.floor(111 + Math.random() * 889).toString();
    },
    getPendingCallOrGameRtpCall(user, agent, gamecode, bet) {
        return __awaiter(this, void 0, void 0, function* () {
            let game_id = 0;
            const game_info = gamecontollermgr_1.default.GetGameInfoByGameName(gamecode);
            if (game_info) {
                game_id = game_info.GameCode;
            }

            const RTP = this.getUserRtp(user, agent);
            const REAL_RTP = 10;//Math.floor(user.valorganho / user.valorapostado * 100);
            const res = yield database_1.default.query("CALL sp_get_call_or_game_rtp_call(?,?,?,?,?, ?, ?)", [user.id, user.username, gamecode, game_id, bet, RTP, REAL_RTP]);
            console.log("user.id " + user.id + " " + user.username + " " + gamecode + " " + game_id + " " + bet + " " + RTP);
            if (res && res.length > 0 && res[0].length > 0 && res[0][0].length > 0) {

                if (res[0][0][0].hasOwnProperty("jsonname")) {
                    return {
                        Type: 0,
                        Result: {
                            result: 2,
                            gamecode: gamecode,
                            json: res[0][0][0].jsonname,
                            idcall: res[0][0][0].id,
                            call_rtp_id: res[0][0][0].call_rtp_id,
                            from_reward_pool: 0,
                            reward_pool_score: 0
                        }
                    };

                } else if (res[0][0][0].hasOwnProperty("expect")) {
                    return {
                        Type: 1,
                        Result: res[0][0][0]
                    }
                } else if (res[0][0][0].hasOwnProperty("reward_rtp") && res[0][0][0].hasOwnProperty("pool_reward_score")) {
                    let reward_rtp = res[0][0][0].hasOwnProperty("reward_rtp");
                    let reward_score = res[0][0][0].hasOwnProperty("pool_reward_score");
                    if (reward_rtp > 0 && reward_score > 0) {
                        return {
                            Type: 2,
                            Result: res[0][0][0]
                        }
                    }
                }
            }
            return null;
        });
    },
    getUserPendingCall(uid, gamecode) {
        return __awaiter(this, void 0, void 0, function* () {
            const callpending = yield this.getcall(uid, gamecode);
            if (callpending.length > 0 && callpending[0].status === "pending" && callpending[0].gamecode === `${gamecode}`) {
                return {
                    result: 2,
                    gamecode: gamecode,
                    json: callpending[0].jsonname,
                    idcall: callpending[0].id,
                    call_rtp_id: callpending[0].call_rtp_id,
                    from_reward_pool: callpending[0].from_reward_pool || 0,
                    reward_pool_score: callpending[0].reward_pool_score || 0
                };
            }
            return null;
        });
    },
    getFirstJsonIndexEqualOrGreaterThanScore(gamejsons, score) {
        score *= RESULT_SCORE_SCALE
        let low = 0;
        let high = Object.keys(gamejsons).length - 1;
        let index = -1;
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            const midItem = gamejsons[mid];
            if (midItem.WinScore < score) {
                low = mid + 1;
            } else {
                high = mid - 1;
                index = mid
            }
        }
        if (index !== -1) {
            return index;
        }
        return Object.keys(gamejsons).length - 1;
    },
    getFirstJsonIndexEqualOrLessThanScore(gamejsons, score) {
        let index = this.getFirstJsonIndexEqualOrGreaterThanScore(gamejsons, score);
        if (Math.floor(gamejsons[index].WinScore / RESULT_SCORE_SCALE) <= score) {
            return index;
        }
        if (index > 0) {
            return index - 1;
        }
        return 0;
    },
    getJsonIndexRange(gamejsons, score) {
        let low = 0;
        let high = 0;
        if (score < 0) {
            low = this.getFirstJsonIndexEqualOrLessThanScore(gamejsons, score - 0.01);
            high = this.getFirstJsonIndexEqualOrLessThanScore(gamejsons, score);
        } else {
            low = this.getFirstJsonIndexEqualOrLessThanScore(gamejsons, score);
            high = this.getFirstJsonIndexEqualOrLessThanScore(gamejsons, score + 0.01);
        }
        return {
            Low: low,
            High: high - 1
        };
    },

    getJsonIndexRangeByScorRange(gamejsons, score_min, score_max) {
        let idxRange = { Low: 0, High: 0 };
        let lowRange = { Low: 0, High: 0 };
        let highRange = { Low: 0, High: 0 };
        if (score_min <= score_max) {
            lowRange = this.getJsonIndexRange(gamejsons, score_min);
            highRange = this.getJsonIndexRange(gamejsons, score_max);

        } else if (score_min > score_min) {
            lowRange = this.getJsonIndexRange(gamejsons, score_max);
            highRange = this.getJsonIndexRange(gamejsons, score_min);
        }
        let low = lowRange.Low;
        if (low > lowRange.High) {
            low = lowRange.High;
        }
        let high = highRange.Low;
        if (high < highRange.High) {
            high = highRange.High
        }
        return { Low: low, High: high };
    },

    getJsonScoreset(gamejsons, gameCode) {
        let scoreSetCache = GAME_JSON_SCORE_SET_CACHE[gameCode];
        if (scoreSetCache) {
            return scoreSetCache;
        }

        const bet = gamejsons[0].Tb;
        let scoreset = []
        let scoreStart = -bet;
        let high = Object.keys(gamejsons).length - 1;
        for (let i = 0; i < 100; i++) {
            let idx = this.getFirstJsonIndexEqualOrGreaterThanScore(gamejsons, scoreStart);
            let winScore = gamejsons[idx].WinScore / RESULT_SCORE_SCALE;
            scoreset.push(winScore);
            if (idx == high) {
                break;
            }
            scoreStart = winScore + 1;
        }
        GAME_JSON_SCORE_SET_CACHE[gameCode] = scoreset;
        return GAME_JSON_SCORE_SET_CACHE[gameCode];
    },

    getJsonIndexFromGameJsons(gamejsons, score) {
        score *= RESULT_SCORE_SCALE
        let low = 0;
        let high = Object.keys(gamejsons).length - 1;
        let closest = -1;
        let minDiff = Infinity;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            const midItem = gamejsons[mid];
            if (!midItem) {
                console.log(low + " " + mid + " " + high);
                break;
            } else {

                if (midItem.WinScore < score) {
                    const diff = score - midItem.WinScore;
                    if (diff < minDiff) {
                        minDiff = diff;
                        closest = mid;
                    }
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
        }
        if (closest == -1) {
            return 0;
        }
        return closest;
    },

    getBetResultByGameRtpCallType1(user, agent, rtp_call, game_code, gamejsons) {
        const RTP = Math.floor(rtp_call.rtp / 100);
        const bet = rtp_call.bet;
        const betRate = bet / gamejsons[0].Tb;
        const betScore = (bet * RTP / 100) / betRate;
        const ret = this.getJsonIndexRange(gamejsons, betScore);
        let idx = -1;
        if (ret.Low < ret.High) {
            idx = ret.Low + Math.floor(Math.random() * (ret.High - ret.Low + 1));
        } else {
            idx = ret.Low;
        }
        if (!(idx >= 0)) {
            idx = 0;
        }

        let result = gamejsons[idx];
        //console.log("RTP=" + rtp_call.rtp + " real=" + Math.floor(result.WinScore/RESULT_SCORE_SCALE) + " expect=" + betScore);

        return {
            result: result.Type,
            gamecode: game_code,
            json: result.Index,
            Idx: idx,
            call_rtp_id: rtp_call.id,
            from_reward_pool: 0,
            reward_pool_score: 0
        }
    },
    getScoreByRtp(rtp, gamejsons) {
        const high = Object.keys(gamejsons).length - 1;
        let lowScore = gamejsons[0].WinScore / RESULT_SCORE_SCALE;
        let maxScore = gamejsons[high].WinScore / RESULT_SCORE_SCALE
        const betRate = gamejsons[0].Tb / 100;
        let alpha = -10.8;
        if (rtp >= 80) {
            alpha = -10.8;
        } else if (rtp >= 70 && rtp < 80) {
            alpha = -10.5;
        } else if (rtp >= 60 && rtp < 70) {
            alpha = -9.5;
        } else if (rtp >= 50 && rtp < 60) {
            alpha = -8.5;
        } else if (rtp >= 40 && rtp < 50) {
            alpha = -7.5;
        } else if (rtp >= 30 && rtp < 40) {
            alpha = -6.5;
        } else if (rtp >= 15 && rtp < 30) {
            alpha = -5.2;
        } else {
            alpha = -4;
        }
        let scoreRand = rSkewNorm(alpha, rtp - 100, 2500 - (rtp - 80) * 30, lowScore / betRate, maxScore / betRate);
        let score = scoreRand * betRate;
        if (score < lowScore) {
            score = lowScore;
        }
        return score;
    },

    getBetResultByGameRtpCallType2(user, agent, bet, rtp_call, game_code, gamejsons) {
        let rtp = rtp_call.reward_rtp || 0;
        let reward_score = rtp_call.pool_reward_score || 0;
        let score = this.getScoreByRtp(rtp, gamejsons);
        if (score > reward_score) {
            score = reward_score;
        } else if (score < 0) {
            score = 0
        }
        const betRate = bet / gamejsons[0].Tb;
        console.log("rtp=" + rtp + " score=" + score + " betRate=" + betRate);
        const ret = this.getJsonIndexRange(gamejsons, score/betRate);
        let idx = -1;
        if (ret.Low < ret.High) {
            idx = ret.Low + Math.floor(Math.random() * (ret.High - ret.Low + 1));
        } else {
            idx = ret.Low;
        }
        if (!(idx >= 0)) {
            idx = 0;
        }

        let result = gamejsons[idx];
        return {
            result: result.Type,
            gamecode: game_code,
            json: result.Index,
            Idx: idx,
            call_rtp_id: rtp_call.id,
            from_reward_pool: 1,
            reward_pool_score: rtp_call.pool_reward_score,
            user_real_score: Math.floor(result.WinScore / RESULT_SCORE_SCALE) * betRate
        }
    },
    getBetResultByGameRtpCall(user, agent, bet, rtp, game_code, gamejsons) {
        if (rtp.Type === 1) {
            return this.getBetResultByGameRtpCallType1(user, agent, rtp.Result, game_code, gamejsons);
        } else if (rtp.Type == 2) {
            return this.getBetResultByGameRtpCallType2(user, agent, bet, rtp.Result, game_code, gamejsons);
        }
    },
    getUserRtp(user, agent) {
        if (user.rtp > 0) {
            return user.rtp;
        }

        return parseInt(agent.probganhortp);
    },
    getBetResultScoreTest(user, agent, bet, userScore, token, gameCode, gamejsons) {
        return __awaiter(this, void 0, void 0, function* () {

            const jsonscoreset = yield exports.default.getJsonScoreset(gamejsons, gameCode);
            if (!Array.isArray(jsonscoreset) || jsonscoreset.length < 1) {
                const result = gamejsons[0];
                return {
                    result: result.Type,
                    gamecode: gameCode,
                    json: result.Index,
                    Idx: 0,
                    call_rtp_id: 0,
                    from_reward_pool: 0,
                    reward_pool_score: 0
                }
            }
            //5 +1 + 2
            let target_score = 0;
            if (jsonscoreset.length < 8) {
                const idx = Math.floor(Math.random() * jsonscoreset.length)
                target_score = jsonscoreset[idx];
            } else {
                let rate = Math.floor(Math.random() * 100);
                const OTHER_WIN_NUM = jsonscoreset.length - TEST_CONTROL_BIG_WIN_NUM - 1;
                const NORMAL_WIN_NUM = Math.floor(OTHER_WIN_NUM / 2);
                const SMALL_WIN_NUM = OTHER_WIN_NUM - NORMAL_WIN_NUM;
                if (rate < TEST_CONTROL_LOST_RATE) {
                    target_score = jsonscoreset[0];
                } else if (rate < TEST_CONTROL_LOST_RATE + TEST_CONTROL_GANHO_RATE) {
                    const idx = 1 + Math.floor(Math.random() * SMALL_WIN_NUM);
                    target_score = jsonscoreset[idx];
                } else if (rate < TEST_CONTROL_LOST_RATE + TEST_CONTROL_GANHO_RATE + TEST_CONTROL_GANHO_BIG_RATE) {
                    //中赢
                    const idx = 1 + SMALL_WIN_NUM + Math.floor(Math.random() * NORMAL_WIN_NUM);
                    target_score = jsonscoreset[idx];
                } else {
                    const idx = jsonscoreset.length - TEST_CONTROL_BIG_WIN_NUM + Math.floor(Math.random() * TEST_CONTROL_BIG_WIN_NUM);
                    target_score = jsonscoreset[idx];
                }
            }

            const ret = this.getJsonIndexRange(gamejsons, target_score);
            let idx = -1;
            if (ret.Low < ret.High) {
                idx = ret.Low + Math.floor(Math.random() * (ret.High - ret.Low + 1));
            } else {
                idx = ret.Low;
            }
            if (!(idx >= 0)) {
                idx = 0;
            }

            const result = gamejsons[idx];
            return {
                result: result.Type,
                gamecode: gameCode,
                json: result.Index,
                Idx: idx,
                call_rtp_id: 0,
                from_reward_pool: 0,
                reward_pool_score: 0
            }

            return ret;
        });
    },

    getBetResultScoreTest0(user, agent, bet, userScore, token, gameCode, gamejsons) {
        return __awaiter(this, void 0, void 0, function* () {

            let idxRange = { Low: 0, High: 0 };
            const Tb = gamejsons[0].Tb;
            let rate = Math.floor(Math.random() * 100);
            if (rate < TEST_CONTROL_LOST_RATE) {
                idxRange = this.getJsonIndexRangeByScorRange(gamejsons, -Tb, 0);
            } else if (rate < TEST_CONTROL_LOST_RATE + TEST_CONTROL_GANHO_RATE) {
                idxRange = this.getJsonIndexRangeByScorRange(gamejsons, -Tb + 0.03, GANHO_SCORE_RATE_END * Tb - 0.01);
            } else if (rate < TEST_CONTROL_LOST_RATE + TEST_CONTROL_GANHO_RATE + TEST_CONTROL_GANHO_BIG_RATE) {
                idxRange = this.getJsonIndexRangeByScorRange(gamejsons, GANHO_SCORE_RATE_END * Tb, NORMAL_GANHO_SCORE_RATE_END * Tb - 0.01);
            } else {
                idxRange = this.getJsonIndexRangeByScorRange(gamejsons, NORMAL_GANHO_SCORE_RATE_END * Tb, 10000 * Tb);
            }
            let idx = 0;
            if (idxRange.Low <= idxRange.High) {
                idx = idxRange.Low + Math.floor(Math.random() * (idxRange.High - idxRange.Low + 1));
            } else if (idxRange.Low < idxRange.High) {
                idx = idxRange.High + Math.floor(Math.random() * (idxRange.Low - idxRange.High + 1));
            }
            const result = gamejsons[idx];
            return {
                result: result.Type,
                gamecode: gameCode,
                json: result.Index,
                Idx: idx,
                call_rtp_id: 0,
                from_reward_pool: 0,
                reward_pool_score: 0
            }

            return ret;
        });
    },
    //必中奖
    getBetResultScore_reward(user, agent, bet, userScore, token, gameCode, gamejsons) {
        return __awaiter(this, void 0, void 0, function* () {
            const high = Object.keys(gamejsons).length - 1;
            let retIdx = -1;
            if (0 == high) {
                retIdx = 0;
            } else {
                let RTP = this.getUserRtp(user, agent);//适当放大倍率

                if (Math.random() * 100 < -1) {
                    retIdx = Math.floor(Math.random() * 500);
                } else {
                    const BIGWIN_RATE = Math.floor(((RTP - 60) /  2000) * 100);
                    const randVal = Math.random() * 10000;
                    if (randVal < BIGWIN_RATE) {
                        retIdx = indexHight + Math.floor(Math.random() * (high - indexHight));
                    } else
                    {
                        if (randVal < (RTP*100 - BIGWIN_RATE)/10) {
                            retIdx = indexLow + Math.floor(Math.random() * (indexHight - indexLow)); 
                        } else {
                            if (randVal < (RTP * 100 - BIGWIN_RATE) / 2) {
                                retIdx = indexLow + Math.floor(Math.random() * (indexHight - indexLow));
                            } else {
                                let index = yield this.getJsonIndexFromGameJsons(gamejsons, 0);
                                retIdx = indexLow + Math.floor(Math.random() * (index - indexLow))
                            }
                        }
                    }
                }
            }

            const result = gamejsons[retIdx];
            let ret = {
                result: result.Type,
                gamecode: gameCode,
                json: result.Index,
                Idx: retIdx,
                call_rtp_id: 0,
                from_reward_pool: 0,
                reward_pool_score: 0
            }

            //console.log("idx=" + retIdx + " ret=" + JSON.stringify(ret));
            return ret;
        });
    },
    getBetResultScore(user, agent, bet, userScore, token, gameCode, gamejsons) {
        return __awaiter(this, void 0, void 0, function* () {
            if (process.env.TEST_MODE === "1") {
                return this.getBetResultScoreTest0(user, agent, bet, userScore, token, gameCode, gamejsons)
            }
            const high = Object.keys(gamejsons).length - 1;
            let retIdx = -1;
            if (0 == high) {
                retIdx = 0;
            } else {
                let RTP = this.getUserRtp(user, agent);
                if (RTP > 10) {
                    RTP -= 10;
                }

                if (Math.random() * 100 < 100 - RTP) {
                    retIdx = Math.floor(Math.random() * 500);
                } else {
                    let score = this.getScoreByRtp(RTP, gamejsons);
                    const indexMid = yield this.getJsonIndexFromGameJsons(gamejsons, score);
                    //console.log("bet=" + bet + " scoreRand=" + scoreRand + " score=" + score + " lowScore" + lowScore * RTP / bet+ " maxScore = " + maxScore * RTP / bet + " indexMid=" + indexMid);
                    let indexHight = indexMid + 10;
                    if (indexHight > high) {
                        indexHight = high;
                    }
                    let indexLow = indexMid - 90;
                    if (indexLow < 0) {
                        indexLow = 0;
                    }
                    if (indexLow >= indexHight) {
                        retIdx = indexLow;
                    } else {
                        const BIGWIN_RATE = Math.floor(((RTP - 60) / 2000) * 100);
                        const randVal = Math.random() * 10000;
                        if (randVal < BIGWIN_RATE) {
                            retIdx = indexHight + Math.floor(Math.random() * (high - indexHight));
                        } else {
                            if (randVal < (RTP * 100 - BIGWIN_RATE)) {
                                retIdx = indexLow + Math.floor(Math.random() * (indexHight - indexLow));
                            } else {
                                retIdx = Math.floor(Math.random() * indexLow)
                            }
                        }
                    }
                }
            }

            const result = gamejsons[retIdx];
            let ret = {
                result: result.Type,
                gamecode: gameCode,
                json: result.Index,
                Idx: retIdx,
                call_rtp_id: 0,
                from_reward_pool: 0,
                reward_pool_score: 0
            }

            //console.log("idx=" + retIdx + " ret=" + JSON.stringify(ret));
            return ret;
        });
    },

    CreateHistoryTable() {

        return __awaiter(this, void 0, void 0, function* () {
            const now = moment();
            const isMonday = now.day() === 1;
            if (!isMonday) {
                const daysToMonday = (8 - now.day()) % 7;
                now.add(daysToMonday, 'days');
            }
            now.hour(0).minute(0).second(0).millisecond(0);

            const tableNames = [];
            for (let i = 0; i < 3; i++) {
                const tableTimestamp = moment(now).add(i * 7, 'days');
                tableNames.push(GetGameHistoryTableName(tableTimestamp));
            }
            yield Promise.all(tableNames.map(tableName => {
                const createTableSQL = `CREATE TABLE IF NOT EXISTS \`${tableName}\` (
                \`id\` INT NOT NULL AUTO_INCREMENT,
                \`gid\` INT NOT NULL,
                \`atk\` VARCHAR(255) NOT NULL,
                \`tid\` VARCHAR(255) NOT NULL,
                \`gtba\` DECIMAL(20,2) NULL DEFAULT 0,
                \`gtwla\` DECIMAL(20,2) NULL DEFAULT 0,
                \`bt\` BIGINT DEFAULT NULL,
                \`bc\` INT NOT NULL,
                \`bds\` LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
                \`agent_id\` INT NOT NULL DEFAULT '0',
                PRIMARY KEY (\`id\`)
                ) ENGINE=InnoDB DEFAULT CHARSET=latin1;`;
                database_1.default.query(createTableSQL);
            }))
        });

    },
    MultiplyValue(val, multiplier) {
        if (val) {
            return val * multiplier
        }
        return val
    },
    MultiplyValueWithFix(val, multiplier) {
        if (val) {
            if (val > 0) {
                return parseFloat((val * multiplier + constans.SCORE_ADJUST).toFixed(constans.SCORE_DECIMAL_PLACE));
            } else {
                return parseFloat((val * multiplier - constans.SCORE_ADJUST).toFixed(constans.SCORE_DECIMAL_PLACE));
            }
        }
        return val
    },
    ToFixScore(score) {
        return parseFloat((score + constans.SCORE_ADJUST).toFixed(constans.SCORE_DECIMAL_PLACE));
    },

    MultiplyCptwValue(cptw, betRate) {
        if (cptw && Array.isArray(cptw)) {
            let newCptw = _.cloneDeep(cptw);
            for (var i = 0; i < newCptw.length; i++) {
                newCptw[i] = this.MultiplyValueWithFix(newCptw[i], betRate);
            }
            return newCptw;
        }
        return cptw;
    },
    MultiplyCpValue(cp, betRate) {
        if (cp) {
            let newCp = _.cloneDeep(cp);
            for (var key in newCp) {
                let cpData = newCp[key];
                if (cpData) {
                    if (cpData.hasOwnProperty("ctw")) {
                        let cpCtw = cpData.ctw;
                        if (cpCtw) {
                            for (var key in cpCtw) {
                                let cpCtwItem = cpCtw[key];
                                if (cpCtwItem && Array.isArray(cpCtwItem)) {
                                    for (var i = 0; i < cpCtwItem.length; i++) {
                                        cpCtwItem[i] = this.MultiplyValueWithFix(cpCtwItem[i], betRate);
                                    }
                                }
                            }
                        }
                    }
                    else if (Array.isArray(cpData) && cpData.length > 0 && Array.isArray(cpData[0]) && cpData[0].length > 0) {
                        for (var i = 0; i < cpData.length; i++) {
                            let cpDataValue = cpData[i];
                            for (var j = 0; j < cpDataValue.length; j++) {
                                cpDataValue[j] = this.MultiplyValueWithFix(cpDataValue[j], betRate);
                            }
                        }
                    }
                }
            }
            return newCp;
        }
        return cp;
    },
    MultiplyBnsValue(bns, betRate) {
        if (bns && bns.hasOwnProperty("twbm")) {
            let newBns = _.cloneDeep(bns);
            newBns.twbm = this.MultiplyValueWithFix(newBns, betRate);
            return newBns;
        }
        return bns;
    },
    MultiplyRsValue(rs, betRate) {
        if (rs && rs.hasOwnProperty("aw")) {
            let newRs = _.cloneDeep(rs);
            newRs.aw = this.MultiplyValueWithFix(newRs.aw, betRate);
            return newRs;
        }
        return rs;
    },
    MultiplyRvValue(rv, betRate) {
        if (rv && Array.isArray(rv) && rv.length > 0 && _.isNumber(rv[0])) {
            let newRv = _.cloneDeep(rv);
            for (var i = 0; i < newRv.length; i++) {
                if (i != 3 && i != 4 && i != 5)
                    newRv[i] = this.MultiplyValueWithFix(newRv[i], betRate);
            }
            return newRv;
        }
        return rv;
    },
    MultiplyOrvValue(orv, betRate) {
        if (orv && Array.isArray(orv) && orv.length > 0 && _.isNumber(orv[0])) {
            let newOrv = _.cloneDeep(orv);
            for (var i = 0; i < newRv.length; i++) {
                newOrv[i] = this.MultiplyValueWithFix(newOrv[i], betRate);
            }
            return newOrv;
        }
        return orv;
    },
    MultiplyFsValue(fsVal, betRate) {
        if (fsVal) {
            let fs = _.cloneDeep(fsVal);
            if (fs.hasOwnProperty('aw')) {
                fs.aw = this.MultiplyValueWithFix(fs.aw, betRate);
            }
            if (fs.hasOwnProperty('wa')) {
                fs.wa = this.MultiplyValueWithFix(fs.wa, betRate);
            }
            if (fs.hasOwnProperty('slw')) {
                let slw = fs['slw'];
                if (Array.isArray(slw)) {
                    for (var i = 0; i < slw.length; i++) {
                        slw[i] = this.MultiplyValueWithFix(slw[i], betRate);
                    }
                } else {
                    fs.slw = this.MultiplyValueWithFix(slw, betRate);
                }
            }
            if (fs.hasOwnProperty('stw')) {
                fs.stw = this.MultiplyValueWithFix(fs.stw, betRate);
            }
            if (fs.hasOwnProperty('stwm')) {
                fs.stwm = this.MultiplyValueWithFix(fs.stwm, betRate);
            }
            return fs;
        }
        return fsVal;
    },

    MultiplyCpfValue(cpf, betRate) {
        if (cpf) {
            for (var key in cpf) {
                let cpfVal = cpf[key];
                if (!cpfVal.hasOwnProperty("bv") || !cpfVal.hasOwnProperty("m")) {
                    return cpf;
                }
            }

            let newCpf = _.cloneDeep(cpf);
            for (var key in newCpf) {
                let cpfVal = newCpf[key];
                if (cpfVal.hasOwnProperty("bv") && cpfVal["bv"]) {
                    cpfVal["bv"] = this.MultiplyValueWithFix(cpfVal["bv"], betRate);
                }

                if (cpfVal.hasOwnProperty("m") && cpfVal["m"]) {
                    cpfVal["m"] = this.MultiplyValueWithFix(cpfVal["m"], betRate);
                }
            }
            return newCpf;
        }
        return cpf;
    },
    getAgentByTokenEx(token) {
        return __awaiter(this, void 0, void 0, function* () {
            let agent = game_data_cache.default.getAgentByToken(token);
            if (agent) {
                return agent;
            }

            const res = yield database_1.default.query(`SELECT * FROM agents WHERE agentToken=? LIMIT 1`, [token]);

            if (res && res.length > 0 && res[0] && res[0].length > 0) {

                game_data_cache.default.updateAgent(res[0][0]);

                return res[0][0];

            }

            return null;

        });



    },

    AgentRtpSet(agentCode, agentToken, agent_rtp) {

        return __awaiter(this, void 0, void 0, function* () {

            game_data_cache.default.deleteAgentByCode(agentCode);

            const res = yield database_1.default.query("UPDATE agents SET probganhortp =? WHERE agentCode =? and agentToken=?", [agent_rtp, agentCode, agentToken]);

            if (res && res.length > 0 && res[0].affectedRows == 1) {

                return true;

            }

            return false;

        });

    },



    AgentUrlSet(agentCode, agentToken, callbackurl) {

        return __awaiter(this, void 0, void 0, function* () {

            game_data_cache.default.deleteAgentByCode(agentCode);

            const res = yield database_1.default.query("UPDATE agents SET callbackurl =? WHERE agentToken =? and agentCode=?", [callbackurl, agentToken, agentCode]);

            if (res && res.length > 0 && res[0].affectedRows == 1) {

                return true;

            }

            return false;

        });

    },

    newAgent(agent_code, agent_token, secret_key, api_mode) {

        return __awaiter(this, void 0, void 0, function* () {

            const res = yield database_1.default.query('call sp_new_agent(?,?,?,?,?)', [agent_code, agent_token, secret_key, Math.floor(Date.now() / 1000), api_mode]);

            if (Array.isArray(res) && res.length > 0 && Array.isArray(res[0]) && res[0].length > 0 && Array.isArray(res[0][0]) && res[0][0].length > 0) {

                return res[0][0][0];

            }

            return null;

        });

    },



    getDirtyUserListBySyncVersion(sync_ver, limit) {

        return __awaiter(this, void 0, void 0, function* () {

            const res = yield database_1.default.query('SELECT id, username, atk, saldo, valorapostado, valordebitado, valorganho, call_score, rtp, agentid, provider_code, create_at, ver FROM tb_users_dirty WHERE ver>? ORDER BY ver LIMIT ? ', [sync_ver, limit]);

            if (Array.isArray(res) && res.length > 0 && Array.isArray(res[0])) {

                return res[0];

            }

            return null;

        });

    },



    getDirtyCallListBySyncVersion(sync_ver, limit) {

        return __awaiter(this, void 0, void 0, function* () {

            const res = yield database_1.default.query('SELECT id, agent_id, user_code, provider_code, game_code, bet, expect, `real`, rtp, `type`, status, created_at, updated_at, ver FROM tb_rtpcall_dirty WHERE ver>? ORDER BY ver LIMIT ? ', [sync_ver, limit]);

            if (Array.isArray(res) && res.length > 0 && Array.isArray(res[0])) {

                return res[0];

            }

            return null;

        });

    },



    getHistoryListById(table_name, start_id, limit) {

        return __awaiter(this, void 0, void 0, function* () {

            try {

                const res = yield database_1.default.query(`SELECT id, gid, atk, tid, gtba, gtwla, bt, bc, agent_id FROM ${table_name} WHERE id>? ORDER BY id LIMIT ? `, [start_id, limit]);

                if (Array.isArray(res) && res.length > 0 && Array.isArray(res[0])) {

                    this.convertHistoryDecimalToFloat(res[0]);

                    return res[0];

                }

                return null;

            } catch (e) {

                console.log(e);

                if (e.errno === 1146) {

                    return [];

                }

                return null;

            }

        });

    },

    getHistoryListByStartYearWeekId(timems, week_id_start, nowMs, limit) {

        return __awaiter(this, void 0, void 0, function* () {

            let tableNames;

            if (timems == 0) {

                const res = yield database_1.default.query('SHOW TABLES LIKE "game_history_%_%"');

                if (Array.isArray(res) && res.length > 0 && Array.isArray(res[0]) && res[0].length > 0) {

                    tableNames = [];

                    for (var i = 0; i < res[0].length; i++) {

                        const result = res[0][i];

                        tableNames.push(result[Object.keys(result)[0]]);

                    }

                    tableNames = tableNames.sort((a, b) => {

                        const partsA = a.split('_');

                        const partsB = b.split('_');

                        const yearA = parseInt(partsA[2]);

                        const yearB = parseInt(partsB[2]);

                        if (yearA !== yearB) {

                            return yearA - yearB;

                        }

                        const weekA = parseInt(partsA[3]);

                        const weekB = parseInt(partsB[3]);

                        return weekA - weekB;

                    });

                } else {

                    return null;

                }

            } else {

                tableNames = GetTableNamesInRange(timems, nowMs);

            }



            let historyLst = null;

            historyLst = yield exports.default.getHistoryListById(tableNames[0], week_id_start, limit);

            if (Array.isArray(historyLst) && historyLst.length > 0) {

                return {

                    week_id_start: week_id_start,

                    historyLst: historyLst

                };

            }

            if (tableNames.length < 2) {

                return {

                    week_id_start: week_id_start,

                    historyLst: historyLst

                };

            }



            for (var i = 1; i < tableNames.length; i++) {

                historyLst = yield exports.default.getHistoryListById(tableNames[i], 0, limit);

                if (Array.isArray(historyLst) && historyLst.length > 0) {

                    return {

                        week_id_start: 0,

                        historyLst: historyLst

                    }

                }

            }

            return {

                week_id_start: 0,

            }

        });

    },



};



function TestGameRtpRandom(gameName, gameJsons, betNum, bet, agentRtp) {

    return __awaiter(this, void 0, void 0, function* () {

        let totalScore = 0;

        const betRate = bet / gameJsons[0].Tb;

        let betResult = {};

        let betScore = {};

        for (let i = 0; i < betNum; i++) {

            let agent = { probganhortp: agentRtp };

            let result = yield exports.default.getBetResultScore({ rtp: 0 }, agent, bet, 1000, 1000, "100", gameJsons);

            let realScore = gameJsons[result.Idx].WinScore / RESULT_SCORE_SCALE * betRate;

            totalScore += realScore;

            if (!betResult[result.result]) {

                betResult[result.result] = 1;

            } else {

                betResult[result.result]++;

            }

            let key = Math.floor(realScore / bet);

            if (!betScore[key]) {

                betScore[key] = 1;

            } else {

                betScore[key]++;

            }

        }

        //console.log("GameName=" +  gameName + " bet=" + bet + " agentRtp=" + agentRtp + " totalScore=" + totalScore + " Num=" + betNum+ " Rtp=" + (1 + totalScore/(bet*betNum))+ " arg=" + totalScore/betNum);

        //console.log(betResult);

        //console.log(betScore);



    });

}

function TestGameRtpRandomJson(gameName, gameJsons) {

    return __awaiter(this, void 0, void 0, function* () {

        //let betLst = [0.5, 1, 50, 100, 1000];

        //let numLst = [10000, 5000, 1000, 100]

        let numLst = [100]

        let betLst = [50];

        let agentRtpLst = ["95", "90", "85", "80", "75", "70", "65", "60", "55", "50", "45", "40", "35", "30", "25", "20", "15", "10"];

        for (let i = 0; i < betLst.length; i++) {

            for (let j = 0; j < agentRtpLst.length; j++) {

                for (let n = 0; n < numLst.length; n++) {

                    yield TestGameRtpRandom(gameName, gameJsons, numLst[n], betLst[i], agentRtpLst[j]);

                }

            }

        }

    });

}

function TestRtpRandom() {

    return __awaiter(this, void 0, void 0, function* () {

        const fortunedragonjsonresult = __importDefault(require("../jsons/fortune-dragon/jsonresult"))

        const fortunemousejsonresult = __importDefault(require("../jsons/fortune-mouse/jsonresult"))

        const fortuneoxjsonresult = __importDefault(require("../jsons/fortune-ox/jsonresult"))

        const fortunetigerjsonresult = __importDefault(require("../jsons/fortune-tiger/jsonresult"))

        const fortunerabbitjsonresult = __importDefault(require("../jsons/fortune-rabbit/jsonresult"))

        {

            let lost = 0;

            let win = 0;

            let bigwin = 0;

            for (var i = 0; i < 100; i++) {

                //let result = yield exports.default.getBetResultScoreTest0({}, {}, 0.4, 100, "", 1695365, fortunedragonjsonresult.default.GetGameJsons());

                let result = yield exports.default.getBetResultScore({}, {}, 0.4, 100, "", 1695365, fortunedragonjsonresult.default.GetGameJsons());

                if (result.result == 0) {

                    lost++;

                } else if (result.result == 1) {

                    win++;

                } else if (result.result == 2) {

                    bigwin++;

                }

            }

            console.log("lost=" + lost + " win=" + win + " bigwin=" + bigwin);

        }

        return

        {

            let jsonscoreset0 = yield exports.default.getJsonScoreset(fortunedragonjsonresult.default.GetGameJsons(), 1695365);

            let jsonscoreset1 = yield exports.default.getJsonScoreset(fortunemousejsonresult.default.GetGameJsons(), 68);

            let jsonscoreset2 = yield exports.default.getJsonScoreset(fortuneoxjsonresult.default.GetGameJsons(), 98);

            let jsonscoreset3 = yield exports.default.getJsonScoreset(fortunetigerjsonresult.default.GetGameJsons(), 126);

            let jsonscoreset4 = yield exports.default.getJsonScoreset(fortunerabbitjsonresult.default.GetGameJsons(), 1543462);

            console.log("11");



        }

        const jsonscoreset = yield exports.default.getJsonScoreset(fortunetigerjsonresult.default.GetGameJsons(), 126);

        for (var i = 0; i < jsonscoreset.length; i++) {

            if (jsonscoreset[i] > 0) {

                const rtptest = Math.floor(10000 * (jsonscoreset[i] / 3));

                yield exports.default.getBetResultByGameRtpCall({}, {}, { rtp: rtptest, bet: 0.40 }, "fortune_tiger", fortunetigerjsonresult.default.GetGameJsons());

                yield exports.default.getBetResultByGameRtpCall({}, {}, { rtp: rtptest - 10, bet: 0.40 }, "fortune_tiger", fortunetigerjsonresult.default.GetGameJsons());

                yield exports.default.getBetResultByGameRtpCall({}, {}, { rtp: rtptest + 10, bet: 0.40 }, "fortune_tiger", fortunetigerjsonresult.default.GetGameJsons());

            }

        }



        yield TestGameRtpRandomJson("fortunedragon", fortunedragonjsonresult.default.GetGameJsons());

        yield TestGameRtpRandomJson("fortunemouse", fortunemousejsonresult.default.GetGameJsons());

        yield TestGameRtpRandomJson("fortuneox", fortuneoxjsonresult.default.GetGameJsons());

        console.log("TestRtpRandom succ");

    });

}



function TestAgentCache() {

    return __awaiter(this, void 0, void 0, function* () {

        //id:1  agentCode:jubliu  agentToken:508e1011-d04b-4d18-bb47-87261a0dd7c1, secretKey:b59cc5b2-a04f-48c1-8b6a-b3784ef8cf37

        //getagentbyagentToken

        //getagentbysecretkey

        //getAgentByTokenEx

        //AgentRtpSet

        //AgentUrlSet

        //attagent

        //const agent000 = yield exports.default.getagentbysecretkey("b59cc5b2-a04f-48c1-8b6a-b3784ef8cf37");

        //const agent000 = yield exports.default.getagentbyagentToken("508e1011-d04b-4d18-bb47-87261a0dd7c1");

        //const agent000 = yield exports.default.getagentbyid(1);

        const agent000 = yield exports.default.getAgentByTokenEx("508e1011-d04b-4d18-bb47-87261a0dd7c1");

        const agent01 = yield exports.default.getagentbyid(1);

        const agent20 = yield exports.default.getagentbyagentToken("508e1011-d04b-4d18-bb47-87261a0dd7c1");

        yield exports.default.AgentRtpSet("jubileu", "508e1011-d04b-4d18-bb47-87261a0dd7c1", 200);

        const agent21 = yield exports.default.getagentbyagentToken("508e1011-d04b-4d18-bb47-87261a0dd7c1");

        const agent30 = yield exports.default.getagentbysecretkey("b59cc5b2-a04f-48c1-8b6a-b3784ef8cf37");

        yield exports.default.AgentUrlSet("jubileu", "508e1011-d04b-4d18-bb47-87261a0dd7c1", "https://www.88888bet.net");

        const agent31 = yield exports.default.getagentbysecretkey("b59cc5b2-a04f-48c1-8b6a-b3784ef8cf37");

        const agent40 = yield exports.default.getAgentByTokenEx("508e1011-d04b-4d18-bb47-87261a0dd7c1");

        yield exports.default.attagent(1, 15, 2, 200, 20, 10, 15, 15);

        const agent41 = yield exports.default.getAgentByTokenEx("508e1011-d04b-4d18-bb47-87261a0dd7c1");

        const agent42 = yield exports.default.getAgentByTokenEx("508e1011-d04b-4d18-bb47-87261a0dd7c1");



    });

}

//TestRtpRandom();

//TestAgentCache();

exports.default.CreateHistoryTable()

const task = () => {

    return __awaiter(this, void 0, void 0, function* () {

        exports.default.CreateHistoryTable()

    });

}



const cronExpression = '0 0 * * 1';

cron.schedule(cronExpression, task);

