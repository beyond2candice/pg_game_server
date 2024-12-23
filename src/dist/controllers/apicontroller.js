"use strict";
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
const axios_1 = __importDefault(require("axios"));
const logger_1 = __importDefault(require("../logger"));
require("dotenv/config");
const allfunctions_1 = __importDefault(require("../functions/allfunctions"));
const gamecontollermgr_1 = __importDefault(require("./game_controller_mgr"));
const uuid_1 = require("uuid");
const protobuf = require('protobufjs');
const path = require('path');
const protoFilePath = path.join(__dirname, '../proto/message.proto');
const game_data_cache = __importDefault(require("../cache/game_data_cache"));
const constans = require("../constans/constants")

protobuf.load(protoFilePath, (err, root) => {
    if (err) {
        throw err;
    }

    const WalletInfo = root.lookupType("WalletInfo")
    const InfoReq = root.lookupType("InfoReq")
    const GameInfoAck = root.lookupType("GameInfoAck")
    const MallInfo = root.lookupType("MallInfo")
    const PreferRoundShow = root.lookupType("MallInfo")
    const Tournament = root.lookupType("MallInfo")
})
exports.default = {
    launchgame(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const agentToken = req.body.agent_token;
            const agentCode = req.body.agent_code;
            const secretKey = req.body.agent_secret;
            const user_code = req.body.user_code;
            const provider_code = req.body.provider_code;
            const game_code = req.body.game_code;
            const user_balance = allfunctions_1.default.ToFixScore(parseFloat(req.body.user_balance));
            const lang = req.body.lang;
            try {
                if (!user_code) {
                    res.send({
                        status: 0,
                        message: "Voce precisa passar o user_code.",
                    });
                    return false;
                }
                if (isNaN(user_balance) === true) {
                    res.send({
                        status: 0,
                        message: "User Balance deve ser um numero.",
                    });
                    return false;
                }
                const gameControlInfo = gamecontollermgr_1.default.GetGameInfoByPlaformName(game_code);
                if (!gameControlInfo) {
                    res.send({
                        status: 0,
                        msg: "Esse game não existe.",
                    });
                    return false;
                }
                const codegame = gameControlInfo.GameCode;
                const agent = yield allfunctions_1.default.getAgentByAgentTokenAndSecretKey(agentToken, secretKey);
                if (!agent || agent.length == 0) {
                    res.send({
                        status: 0,
                        msg: "Agent Token não cadastrado.",
                    });
                    return false;
                }

                const user = yield allfunctions_1.default.getuserbyagent(user_code, agent[0].id); //PUXA O USUARIO ATRAVES DO USER E AGENTID
                //const gameUrl = "pgtv138.tv"
                const gameUrl = constans.GAME_PLATFORM_URL
                let pgType = 2;
                if (user.length === 0) {
                    const tokenuser = (0, uuid_1.v4)();
                    const atkuser = (0, uuid_1.v4)();
                    const getnewuser = yield allfunctions_1.default.createuser(user_code, tokenuser, atkuser, user_balance, agent[0].id, provider_code);
                    if (getnewuser) {
                        var launghUrl;
                        if (pgType == 1) {
                            launghUrl = `https://${gameUrl}/${codegame}/index.html?oc=0&l=pt&operator_token=Zm9saWFiZXQ=&t=${getnewuser.token}&l=pt&or=api.${gameUrl}&api=api.${gameUrl}`;
                        } else {
                            // if(codegame == 1635221)
                            //  {
                            //launghUrl = `https://${gameUrl}/${codegame}/index.html?l=pt&btt=1&t=${getnewuser.token}&ot=${getnewuser.token}&operator_token=Zm9saWFiZXQ&ops=Zm9saWFiZXQ&jurisdiction=CW&game_id=${codegame}&or=static.pgsoft-games.com&__hv=1fb84f27&api=https://pgsoft-games.com`;
                            //  }
                            //   else{
                            launghUrl = `https://${gameUrl}/${codegame}/index.html?l=pt&btt=1&t=${getnewuser.token}&ot=${getnewuser.token}&operator_token=Zm9saWFiZXQ&ops=Zm9saWFiZXQ&jurisdiction=CW&or=static.7-zeus.net&__hv=1fc4fe3b&__refer=static.7-zeus.net&api=https://${gameUrl}`;
                            //   }


                        }
                        res.send({
                            status: 1,
                            msg: "SUCCESS",
                            //https://pool-game.com/126/index.html?btt=1&oc=0&iwk=1&operator_token=Zm9saWFiZXQd&t=4433d99b-5142-472e-bc66-87bdcd8caf31&l=pt&op=2613925&or=pool-game.com&api=pool-game.com&__hv=1fb84f27
                            //https://pool-game.com/126/index.html?btt=1&oc=0&iwk=1&operator_token=Zm9saWFiZXQd&t=4433d99b-5142-472e-bc66-87bdcd8caf31&l=pt&op=2613925&or=pool-game.com&__refer=pool-game.com&__hv=1fb84f27
                            //launch_url:`https://${gameUrl}/index.html?l=pt&btt=1&ot=${getnewuser[0].token}&ops=Zm9saWFiZXQ&jurisdiction=CW&game_id=${codegame}&or=pool-game.com&__hv=1fb84f27&api=https://pool-game.com`,
                            launch_url: launghUrl,
                        });
                    }
                    else {
                        res.send({
                            status: 0,
                            msg: "Erro ao cadastrar o usuario.",
                        });
                        return false;
                    }
                }
                else {
                    var launghUrl
                    if (pgType == 1) {
                        launghUrl = `https://${gameUrl}/${codegame}/index.html?oc=1&l=pt&operator_token=Zm9saWFiZXQ=&btt=1&t=${user[0].token}&or=${gameUrl}&api=${gameUrl}`;
                    } else {
                        // if(codegame == 1635221)
                        //    {
                        ////         launghUrl = `https://${gameUrl}/${codegame}/index.html?l=pt&btt=1&t=${user[0].token}&ot=${user[0].token}&operator_token=Zm9saWFiZXQ&ops=Zm9saWFiZXQ&jurisdiction=CW&game_id=${codegame}&or=static.pgsoft-games.com&__hv=1fb84f27&api=https://pgsoft-games.com`;
                        //   }
                        //    else
                          //  {
                            launghUrl = `https://${gameUrl}/${codegame}/index.html?l=pt&btt=1&t=${user[0].token}&ot=${user[0].token}&operator_token=Zm9saWFiZXQ&ops=Zm9saWFiZXQ&jurisdiction=CW&or=static.7-zeus.net&__hv=1fc4fe3b&__refer=static.7-zeus.net&api=https://${gameUrl}`;
                         //   }
                        
                    }

                    yield allfunctions_1.default.setbalanceuserbyid(user[0].id, user_balance, provider_code);
                    res.send({
                        status: 1,
                        msg: "SUCCESS",

                        //https://pool-game.com/126/index.html?oc=1&l=pt&operator_token=Zm9saWFiZXQd&t=4433d99b-5142-472e-bc66-87bdcd8caf31&or=pool-game.com&api=pool-game.com
                        //launch_url:`https://${gameUrl}/index.html?l=pt&btt=1&ot=${user[0].token}&ops=Zm9saWFiZXQ&jurisdiction=CW&game_id=${codegame}&or=pool-game.com&__hv=1fa32d39&api=https://pool-game.com`,
                        launch_url: launghUrl,
                    });
                }
            }
            catch (error) {
                logger_1.default.error(error);
            }
        });
    },
    callbackgame(agent, json) {
        return __awaiter(this, void 0, void 0, function* () {
            //yield allfunctions_1.default.savegamehistory()
            if (json && json.slot) {
                json.slot.bet_money = allfunctions_1.default.ToFixScore(json.slot.bet_money);
                json.slot.win_money = allfunctions_1.default.ToFixScore(json.slot.win_money);
            }
            json.method = "transaction";
            try {
                return yield (0, axios_1.default)({
                    maxBodyLength: Infinity,
                    method: "POST",
                    url: `${agent.callbackurl}`,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    data: json,
                })
                    .then((data) => {
                        if (data.data.status === 1) {
                            console.log("NEW BALANCE " + data.data.user_balance);
                            return { status: 1, user_balance: data.data.user_balance };
                        } else {
                            console.log(data.data);
                            return { status: 0, user_balance: data.data.user_balance };
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                        return { status: 0, user_balance: data.data.user_balance };
                    });
            }
            catch (error) {
                console.log(error);
            }
            return { status: 0, user_balance: data.data.user_balance };
        });
    },

    getUserBalance(agent, user) {
        return __awaiter(this, void 0, void 0, function* () {
            //yield allfunctions_1.default.savegamehistory()
            try {
                //console.log(agent.agentCode + " " + agent.secretKey + " " + user.username);

                return yield (0, axios_1.default)({
                    maxBodyLength: Infinity,
                    method: "POST",
                    url: `${agent.callbackurl}`,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    data: {
                        method: "user_balance",
                        agent_code: agent.agentCode,
                        agent_secret: agent.secretKey,
                        user_code: user.username,
                    },
                })
                    .then((data) => {
                        console.log(data.data);
                        if (data.data.status === 1) {
                            console.log("USER_BALANCE" + data.data.user_balance);
                            return { status: 1, user_balance: allfunctions_1.default.ToFixScore(data.data.user_balance) };
                        } else {
                            console.log("FAIL " + data.data);
                            return { status: 0, user_balance: 0 };
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } catch (e) {
                console.log(e);
            }
            return { status: 0, user_balance: 0 };
        });
    },
    SetIsAutoReward(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const agent_code = req.body.agent_code;
                const is_auto_reward = +req.body.is_auto_reward;
                if (!agent_code || agent_code == "" || is_auto_reward == undefined) {
                    res.send({
                        status: 0,
                        msg: "Invalid Parameter",
                        detail: "Invalid Parameter"
                    });
                    return;
                }
                let updateRes = yield allfunctions_1.default.setAgentIsAutoReward(agent_code, is_auto_reward);
                if (!updateRes) {
                    return res.send({
                        status: 0,
                        msg: "Failed to update auto reward setting."
                    });
                }
                return res.send({
                    status: 1,
                    msg: "Auto reward setting updated successfully."
                });
            } catch (e) {
                logger_1.default.error(e);
                // 设置自动奖励时出错
                res.send({
                    status: 0,
                    msg: "Erro ao definir recompensa automática.",
                });
            }
        })
    },
    getagent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const agentToken = req.body.agentToken;
            const secretKey = req.body.secretKey;
            const agent = yield allfunctions_1.default.getAgentByAgentTokenAndSecretKey(agentToken, secretKey);
            if (!agent || agent.length == 0) {
                res.send({
                    status: "error",
                    message: "Agent Token não cadastrado.",
                });
                return false;
            }

            agent[0].saldo = undefined;
            agent[0].agentToken = undefined;
            agent[0].saldo = undefined;
            res.send(agent[0]);
        });
    },
    attagent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const agentToken = req.body.agentToken;
            const secretKey = req.body.secretKey;
            const probganho = req.body.probganho;
            const probbonus = req.body.probbonus;
            const probganhortp = req.body.probganhortp;
            const probganhoinfluencer = req.body.probganhoinfluencer;
            const probbonusinfluencer = req.body.probbonusinfluencer;
            const probganhoaposta = req.body.probganhoaposta;
            const probganhosaldo = req.body.probganhosaldo;
            const agent = yield allfunctions_1.default.getAgentByAgentTokenAndSecretKey(agentToken, secretKey);
            if (!agent || agent.length == 0) {
                res.send({
                    status: "error",
                    message: "Agent Token não cadastrado.",
                });
                return false;

            }
            const att = yield allfunctions_1.default.attagent(agent[0].id, probganho, probbonus, probganhortp, probganhoinfluencer, probbonusinfluencer, probganhoaposta, probganhosaldo);
            if (att.affectedRows > 0) {
                res.send({
                    status: "success",
                    message: "Probabiliades alteradas com sucesso.",
                });
            }
            else {
                res.send({
                    status: "error",
                    message: "Erro desconhecido por favor contate o adm.",
                });
            }
        });
    },

    OnJiliReq(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("req.body", req);
        });
    },

    controlRtp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const agent_code = req.body.agent_code;
                const agent_token = req.body.agent_token;
                const provider_code = req.body.provider_code;
                const user_code = req.body.user_code;
                const rtp = parseInt(req.body.rtp);
                if (rtp < 0) {
                    res.send({
                        status: 0,
                        msg: "Invalid rtp"
                    });
                    return;
                }
                console.log("agent[" + agent_token + "," + agent_code + "]" + " set user " + user_code + " rtp " + rtp);
                if (user_code == "") {
                    res.send({
                        status: 0,
                        msg: "Invalid Parameter",
                        detail: "Invalid Parameter"
                    });
                    return;
                }
                let agents = yield allfunctions_1.default.getagentbyagentToken(agent_token);
                if (!agents || agents.length == 0 || agents[0].agentCode != agent_code) {
                    res.send({
                        status: 0,
                        msg: "Invalid JSON"
                    });
                    return;
                }
                if(rtp > 100)
                {
                    rtp = 100;
                }
                yield allfunctions_1.default.updateUserRtp(user_code, agents[0].id, rtp);
                res.send({
                    status: 1,
                    changed_rtp: rtp
                });
                return;
            } catch (e) {
                console.log(e);
            }

            res.send({
                status: 0,
                msg: "Invalid Parameter",
                detail: "Invalid Parameter"
            });
        });
    },
    controlUserRtp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const agent_code = req.body.agent_code;
                const agent_token = req.body.agent_token;
                const user_codes = req.body.user_codes;
                const rtp = parseInt(req.body.rtp);
                if (rtp < 0) {
                    res.send({
                        status: 0,
                        msg: "Invalid rtp"
                    });
                    return;
                }
                const startsWithBracket = user_codes.startsWith("[");
                const endsWithBracket = user_codes.endsWith("]");
                if (!startsWithBracket || !endsWithBracket) {
                    res.send({
                        status: 0,
                        msg: "Invalid JSON"
                    });
                    return;
                }
                const strlist = user_codes.slice(1, -1);
                console.log("agent[" + agent_token + "," + agent_code + "]" + " set user " + strlist + " rtp " + rtp);
                let agents = yield allfunctions_1.default.getagentbyagentToken(agent_token);
                if (!agents || agents.length == 0 || agents[0].agentCode != agent_code) {
                    res.send({
                        status: 0,
                        msg: "Invalid JSON"
                    });
                    return;
                }
               if(rtp > 100)
               {
                    rtp = 100;
               }
                yield allfunctions_1.default.updateBatchUserRtp(strlist, agents[0].id, rtp);
                res.send({
                    status: 1,
                    changed_rtp: rtp
                });
                return;
            } catch (e) {
                console.log(e);
            }

            res.send({
                status: 0,
                msg: "Invalid JSON"
            });
        });
    },

    call_players(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const agent_code = req.body.agent_code;
                const agent_token = req.body.agent_token;

                const res_agent = yield allfunctions_1.default.getagentbyagentToken(agent_token);
                if (!res_agent || res_agent.length == 0 || res_agent[0].agentCode != agent_code) {
                    res.send({
                        status: 0,
                        msg: "Agent Token não cadastrado.",
                    });
                    return false;
                }

                let agent = res_agent[0];
                if (!agent || agent.agentCode != agent_code) {
                    res.send({
                        status: 0,
                        msg: "Agent Token não cadastrado.",
                    });
                    return false;
                }
                let user_lst = game_data_cache.default.GetOnLineUserList();
                let data = [];
                user_lst.forEach((game_user, key) => {
                    let user = game_user.User;
                    let gamelist = game_user.GameList;
                    if (!(gamelist.length > 0)) {
                        return;
                    }
                    if (user.agentid != agent.id) {
                        return;
                    }
                    let game = gamelist[0];
                    let game_info = gamecontollermgr_1.default.GetGameInfoByGameCode(game.GameId);
                    if (!game_info) {
                        return;
                    }
                    if (game.Bet) {
                        data.push(
                            {
                                user_code: user.username,
                                provider_code: user.provider_code,
                                game_code: game_info.PlatformGameName,
                                bet: game_user.GameList[game_user.GameList.length - 1].Bet,
                                balance: user.saldo,
                                total_debit: user.valordebitado,
                                total_credit: user.valorganho,
                                target_rtp: allfunctions_1.default.getUserRtp(user, agent) * 100,
                                real_rtp: Math.floor(user.valorganho / user.valordebitado * 10000)
                            }
                        );
                    }
                });

                res.send({
                    status: 1,
                    data: data
                });
                return true;
            } catch (e) {
                console.log(e);
            }
        });
    },
    call_list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const agent_code = req.body.agent_code;
                const agent_token = req.body.agent_token;
                const provider_code = req.body.provider_code;
                const game_code = req.body.game_code;
                const user_code = req.body.user_code
                if (!agent_code || agent_code == "" || !agent_token || agent_token == "" || !game_code || game_code == "" || !user_code || user_code == "") {
                    res.send({
                        status: 0,
                        msg: "Invalid Param"
                    });
                    return false;
                }
                const agent_res = yield allfunctions_1.default.getagentbyagentToken(agent_token);
                if (!agent_res || agent_res.length == 0 || agent_res[0].agentCode != agent_code) {
                    res.send({
                        status: 0,
                        msg: "Agent Token não cadastrado.",
                    });
                    return false;
                }

                const gameControlInfo = gamecontollermgr_1.default.GetGameInfoByPlaformName(game_code);
                if (!gameControlInfo) {
                    res.send({
                        status: 0,
                        msg: "game_code invalid"
                    });
                    return false;
                }
                const gameJsonResult = gamecontollermgr_1.default.GetGameJsonResultByGameCode(gameControlInfo.GameCode);
                if (!gameJsonResult) {
                    res.send({
                        status: 0,
                        msg: "game_code invalid"
                    });
                    return false;
                }
                const game_jsons = gameJsonResult.default.GetGameJsons();
                let jsonscoreset = allfunctions_1.default.getJsonScoreset(game_jsons, gameControlInfo.GameCode);
                if (!jsonscoreset) {
                    res.send({
                        status: 0,
                        msg: "game_code invalid"
                    });
                    return false;
                }

                let calls = [];
                const TbScore = game_jsons[0].Tb;
                jsonscoreset.forEach(score => {
                    const winScore = score;
                    if (score >= 0) {
                        calls.push({ rtp: Math.floor(10000 * (winScore / TbScore)), call_type: "Free" });
                    } else {
                        calls.push({ rtp: Math.floor(10000 * (winScore / TbScore)), call_type: "Free" });
                    }
                });

                res.send({
                    status: 1,
                    calls: calls
                });
                return true;
            } catch (e) {
                console.log(e);
            }

            res.send({
                status: 0,
                msg: "game_code invalid"
            });
            return false;
        });
    },
    call_apply(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const agent_code = req.body.agent_code;
                const agent_token = req.body.agent_token;
                const provider_code = req.body.provider_code;
                const pt_game_name = req.body.game_code;
                const user_code = req.body.user_code;
                const call_bet = parseFloat(req.body.call_bet);
                const call_rtp = parseInt(req.body.call_rtp);
                const call_type = parseInt(req.body.call_type);
                if (!agent_code || agent_code == "" || !agent_token || agent_token == "" || !user_code || user_code == "" || !pt_game_name || pt_game_name == "" || !(call_bet > 0) || !(call_rtp >= 0)) {
                    res.send({
                        status: 0,
                        msg: "invalid param"
                    });
                    return false;
                }
                const game_info = gamecontollermgr_1.default.GetGameInfoByPlaformName(pt_game_name)
                if (!game_info) {
                    res.send({
                        status: 0,
                        msg: "Invalid game_code.",
                    });
                    return false;
                }
                const game_code = game_info.GameCode;
                const game_user = game_data_cache.default.getGameUser(user_code, game_code)
                if (!game_user || !game_user.Game || !(game_user.Game.Bet > 0)) {
                    res.send({
                        status: 0,
                        msg: "user not online",
                    });
                    return false;
                }
                // if (game_user.Game.Bet != call_bet) {
                //     res.send({
                //         status: 0,
                //         msg: "bet change",
                //     });
                //     return false;
                // }
                let user = game_user.User;
                const agent_res = yield allfunctions_1.default.getagentbyagentToken(agent_token);
                if (!agent_res || agent_res.length == 0 || agent_res[0].agentCode != agent_code) {
                    res.send({
                        status: 0,
                        msg: "Agent Token não cadastrado.",
                    });
                    return false;
                }
                let agent = agent_res[0];
                if (user.agentid !== agent.id) {
                    res.send({
                        status: 0,
                        msg: "user is not belone to agent",
                    });
                    return false;
                }
                const except_money = game_user.Game.Bet * (call_rtp / 10000)
                let insert_res = yield allfunctions_1.default.insert_new_game_rtp_call(agent, game_user, game_code, provider_code, except_money, call_bet, call_rtp, 0);
                if (!insert_res || insert_res.length < 1) {
                    res.send({
                        status: 0,
                        msg: "internal error",
                    });
                    return false;
                }

                if (insert_res[0].Result !== 0) {
                    res.send({
                        status: 0,
                        msg: "repeated rtp call",
                    });
                    return false;
                }

                res.send({
                    status: 1,
                    called_money: except_money,
                    callId: insert_res[0].id,
                    msg: "SUCCESS",
                });
                return true;

            } catch (e) {
                console.log(e);
            }

            res.send({
                status: 0,
                msg: "sytem error",
            });
            return false;
        });
    },
    call_history(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const agent_code = req.body.agent_code;
                const agent_token = req.body.agent_token;
                const offset = parseInt(req.body.offset);
                const limit = parseInt(req.body.limit);
                if (!agent_code || agent_code == "" || !agent_token || agent_token == "" || !(offset >= 0) || !(limit > 0 && limit <= 500)) {
                    res.send({
                        status: 0,
                        msg: "invalid param"
                    });
                    return false;
                }

                const agent_res = yield allfunctions_1.default.getagentbyagentToken(agent_token);
                if (!agent_res || agent_res.length == 0 || agent_res[0].agentCode != agent_code) {
                    res.send({
                        status: 0,
                        msg: "Agent Token não cadastrado.",
                    });
                    return false;
                }
                let agent = agent_res[0];
                let get_res = yield allfunctions_1.default.get_game_rtp_call(agent, offset, limit);
                if (!get_res) {
                    res.send({
                        status: 0,
                        msg: "Internal Error.",
                    });
                    return false;
                }

                let data = [];
                get_res.forEach(rtp_call => {
                    const game_info = gamecontollermgr_1.default.GetGameInfoByGameCode(rtp_call.game_code);
                    if (!game_info) {
                        res.send({
                            status: 0,
                            msg: "Invalid game_code.",
                        });
                        return false;
                    }

                    data.push({
                        id: rtp_call.id,
                        agent_code: agent.agentCode,
                        user_code: rtp_call.user_code,
                        provider_code: rtp_call.provider_code,
                        game_code: game_info.PlatformGameName,
                        bet: rtp_call.bet,
                        expect: rtp_call.expect,
                        real: rtp_call.real,
                        missed: rtp_call.expect - rtp_call.real,
                        rtp: rtp_call.rtp,
                        type: "common",
                        status: rtp_call.status,
                        created_at: new Date(rtp_call.created_at),
                        updated_at: new Date(rtp_call.updated_at)
                    });
                });

                res.send({
                    status: 1,
                    data: data
                });
                return true;
            } catch (e) {
                console.log(e);
            }
            res.send({
                status: 0,
                msg: "Internal Error.",
            });
            return false;
        });
    },

    call_cancel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const agent_code = req.body.agent_code;
                const agent_token = req.body.agent_token;
                const call_id = parseInt(req.body.call_id);
                if (!agent_code || agent_code == "" || !agent_token || agent_token == "" || !(call_id >= 0)) {
                    res.send({
                        status: 0,
                        msg: "invalid param"
                    });
                    return false;
                }

                const agent_res = yield allfunctions_1.default.getagentbyagentToken(agent_token);
                if (!agent_res || agent_res.length == 0 || agent_res[0].agentCode != agent_code) {
                    res.send({
                        status: 0,
                        msg: "Agent Token não cadastrado.",
                    });
                    return false;
                }
                let agent = agent_res[0];
                let cancel_res = yield allfunctions_1.default.cancel_game_rtp_call(agent, call_id);
                if (cancel_res.length > 0) {
                    if (cancel_res[0].hasOwnProperty("Difference")) {
                        res.send({
                            status: 1,
                            calceled_money: cancel_res[0].Difference,
                            msg: "SUCCESS"
                        });

                        return true;
                    }
                }
                res.send({
                    status: 0,
                    msg: "There is no waiting call."
                });
                return true;

            } catch (e) {
                console.log(e);
            }
            res.send({
                status: 0,
                msg: "Internal Error."
            });
        });
    },
    call_list_info(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const agent_code = req.body.agent_code;
                const agent_token = req.body.agent_token;
                const call_id_list = req.body.call_id_list;
                if (!agent_code || agent_code == "" || !agent_token || agent_token == "" || !(Array.isArray(call_id_list)) || call_id_list.length < 1) {
                    res.send({
                        status: 0,
                        msg: "invalid param"
                    });
                    return false;
                }
                let call_ids = [];
                for (let i = 0; i < call_id_list.length; i++) {
                    const call_id = parseInt(call_id_list[i]);
                    let is_repeated = false;
                    for (let j = 0; j < call_ids.length; j++) {
                        if (call_ids[j] == call_id) {
                            is_repeated = true;
                            break;
                        }
                    }
                    if (!is_repeated) {
                        call_ids.push(call_id);
                    }
                }
                if (call_ids.length < 1) {
                    res.send({
                        status: 0,
                        msg: "invalid param"
                    });
                    return false;

                }
                const agent_res = yield allfunctions_1.default.getagentbyagentToken(agent_token);
                if (!agent_res || agent_res.length == 0 || agent_res[0].agentCode != agent_code) {
                    res.send({
                        status: 0,
                        msg: "Agent Token não cadastrado.",
                    });
                    return false;
                }
                let agent = agent_res[0];
                let get_res = yield allfunctions_1.default.get_game_rtp_call_by_ids(agent, call_ids);
                let data = [];
                get_res.forEach(rtp_call => {
                    const game_info = gamecontollermgr_1.default.GetGameInfoByGameCode(rtp_call.game_code);
                    if (!game_info) {
                        res.send({
                            status: 0,
                            msg: "Invalid game_code.",
                        });
                        return false;
                    }

                    data.push({
                        id: rtp_call.id,
                        agent_code: agent.agentCode,
                        user_code: rtp_call.user_code,
                        provider_code: rtp_call.provider_code,
                        game_code: game_info.PlatformGameName,
                        bet: rtp_call.bet,
                        expect: rtp_call.expect,
                        missed: rtp_call.expect - rtp_call.real,
                        rtp: rtp_call.rtp,
                        type: "common",
                        status: rtp_call.status,
                        created_at: new Date(rtp_call.created_at),
                        updated_at: new Date(rtp_call.updated_at)
                    });
                });
                res.send({
                    status: 1,
                    data: data
                });

                return true;

            } catch (e) {
                console.log(e);
            }
        });
    },
    call_cancel_list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const agent_code = req.body.agent_code;
                const agent_token = req.body.agent_token;
                const call_id_list = req.body.call_id_list;
                if (!agent_code || agent_code == "" || !agent_token || agent_token == "" || !(!Array.isArray(call_id_list)) || call_id_list.length < 1) {
                    res.send({
                        status: 0,
                        msg: "invalid param"
                    });
                    return false;
                }

                let call_ids = [];
                for (let i = 0; i < call_id_list.length(); i++) {
                    const call_id = parsInt(call_id_list[i]);
                    let is_repeated = false;
                    for (let j = 0; j < call_ids.length; j++) {
                        if (call_ids[j] == call_id) {
                            is_repeated = true;
                            break;
                        }
                    }
                    if (!is_repeated) {
                        call_ids.push(call_id);
                    }
                }
                if (call_ids.length < 1) {
                    res.send({
                        status: 0,
                        msg: "invalid param"
                    });
                    return false;
                }

                const agent_res = yield allfunctions_1.default.getagentbyagentToken(agent_token);
                if (!agent_res || agent_res.length == 0 || agent_res[0].agentCode != agent_code) {
                    res.send({
                        status: 0,
                        msg: "Agent Token não cadastrado.",
                    });
                    return false;
                }
                let agent = agent_res[0];
                let res = yield allfunctions_1.default.cancel_game_rtp_call_lst(agent, call_id_list);
                if (res.length > 0) {
                    if (res[0].hasOwnProperty("Difference")) {
                        res.send({
                            status: 1,
                            calceled_money: res[0].Difference,
                            msg: "SUCCESS"
                        });

                        return true;
                    }
                }
                res.send({
                    status: 0,
                    msg: "There is no waiting call."
                });
                return true;

            } catch (e) {
                console.log(e);
            }

        });
    },
    AgentRtpSet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const agent_code = req.body.agent_code;
                const agent_token = req.body.agent_token;
                const agent_rtp = parseInt(req.body.agent_rtp);
                if (!agent_code || agent_code === "" || typeof agent_code !== 'string' || !agent_token || agent_token === "" || typeof agent_code !== 'string' || agent_code.length > 50 || agent_token.length > 50 || isNaN(agent_rtp || agent_rtp <= 0)) {
                    return res.send({ status: 0, msg: "The parameters were entered incorrectly" });
                }

                const ret = yield allfunctions_1.default.AgentRtpSet(agent_code, agent_token, agent_rtp);
                if (ret) {
                    return res.send({ status: 1, agent_code: agent_code, rtp: agent_rtp || 0 });
                } else {
                    return res.send({ status: 0, msg: "The acquisition of parameters from the database failed" });
                }
            } catch (error) {
                console.error(error);
                return res.send({ status: 0, msg: "The setting of RTP failed" });
            }
        });
    },
    AgentUrlSet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const agent_code = req.body.agent_code;
                const agent_token = req.body.agent_token;
                const callbackurl = req.body.callbackurl;
                if (!agent_code || agent_code == "" || typeof agent_code !== 'string' || !agent_token || agent_token == "" || typeof agent_token !== 'string' || !(typeof callbackurl === 'string' && callbackurl.length > 0) || agent_code.length > 50 || agent_token.length > 50) {
                    return res.send({ status: 0, msg: "The parameters were entered incorrectly" });
                }
                const agents = yield allfunctions_1.default.AgentUrlSet(agent_code, agent_token, callbackurl);

                if (agents) {
                    return res.send({ status: 1, agent_code: agent_code, callbackurl: agents.callbackurl || null });
                } else {
                    return res.send({ status: 0, msg: "The acquisition of parameters from the database failed" });
                }
            } catch (error) {
                console.error(error);
                return res.send({ status: 0, msg: "The setting of the URL failed" });
            }
        });
    },
    new_agent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const agent_code = req.body.agent_code;
                const secret_key = req.body.secret_key;
                const agent_token = req.body.agent_token;
                const api_mode = req.body.api_mode;
                if (!agent_code || agent_code == "" || typeof agent_code !== 'string' || !agent_token || agent_token == "" || typeof agent_token !== 'string' || agent_code.length > 50 || agent_token.length > 50 || !(api_mode !== 0 && api_mode !== 1)) {
                    return res.send({ status: 0, msg: "The parameters were entered incorrectly" });
                }
                const newAgent = yield allfunctions_1.default.newAgent(agent_code, agent_token, secret_key, api_mode);
                if (newAgent) {
                    return res.send({ status: 1, agent_code: agent_code, agent_token: agent_token, secret_key: secret_key, agent_id: newAgent.id, agent_rtp: newAgent.probganhortp, api_mode: newAgent.api_mode });
                } else {
                    return res.send({ status: 0, msg: "The acquisition of parameters from the database failed" });
                }
            } catch (error) {
                console.error(error);
                return res.send({ status: 0, msg: "The setting of the new agent failed" });
            }
        });
    },
    rtp_call_id(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.body.id);
                const agent_code = req.body.agent_code;
                const agent_token = req.body.agent_token;
                if (!agent_code || agent_code == "" || !agent_token || agent_token == "" || !id || id == "") {
                    res.send({
                        status: 0,
                        msg: "invalid param"
                    });
                    return false;
                }

                const agent_res = yield allfunctions_1.default.getagentbyagentToken(agent_token);
                if (!agent_res || agent_res.length == 0 || agent_res[0].agentCode != agent_code) {
                    res.send({
                        status: 0,
                        msg: "Agent Token não cadastrado.",
                    });
                    return false;
                }
                let get_res = yield allfunctions_1.default.rtp_call_user_id(id);
                if (!get_res) {
                    res.send({
                        status: 0,
                        msg: "Internal Error.",
                    });
                    return false;
                }

                let data = [];
                get_res.forEach(rtp_call => {
                    const game_info = gamecontollermgr_1.default.GetGameInfoByGameCode(rtp_call.game_code);
                    if (!game_info) {
                        res.send({
                            status: 0,
                            msg: "Invalid game_code.",
                        });
                        return false;
                    }

                    data.push({
                        id: rtp_call.id,
                        agent_code: rtp_call.agentCode,
                        user_code: rtp_call.user_code,
                        provider_code: rtp_call.provider_code,
                        game_code: game_info.PlatformGameName,
                        bet: rtp_call.bet,
                        expect: rtp_call.expect,
                        real: rtp_call.real,
                        missed: rtp_call.expect - rtp_call.real,
                        rtp: rtp_call.rtp,
                        type: "common",
                        status: rtp_call.status,
                        created_at: new Date(rtp_call.created_at),
                        updated_at: new Date(rtp_call.updated_at)
                    });
                });

                res.send({
                    status: 1,
                    data: data
                });
                return true;
            } catch (e) {
                console.log(e);
            }
            res.send({
                status: 0,
                msg: "Internal Error.",
            });
            return false;
        });
    },
    rtp_call_code(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user_code = req.body.user_code;
                const agent_code = req.body.agent_code;
                const agent_token = req.body.agent_token;
                const page = parseInt(req.body.page);
                const limit = parseInt(req.body.limit);

                if (!user_code || user_code == "" || !agent_code || agent_code == "" || !agent_token || agent_token == "" || !page || page == "" || !limit || limit == "") {
                    return res.send({ status: 0, msg: "The parameters were entered incorrectly" });
                }


                const agent_res = yield allfunctions_1.default.getagentbyagentToken(agent_token);
                if (!agent_res || agent_res.length == 0 || agent_res[0].agentCode != agent_code) {
                    res.send({
                        status: 0,
                        msg: "Agent Token não cadastrado.",
                    });
                    return false;
                }
                let agent = agent_res[0];
                const totalRecords = yield allfunctions_1.default.GetTotaluserRecords(user_code);

                const offset = (page - 1) * limit;

                if (totalRecords < offset) {
                    return res.send({ status: 1, data: [], totalRecords: totalRecords, currentPage: page });
                }



                let get_res = yield allfunctions_1.default.rtp_call_user_code(user_code, offset, limit);
                let data = [];
                get_res.forEach(rtp_call => {
                    const game_info = gamecontollermgr_1.default.GetGameInfoByGameCode(rtp_call.game_code);
                    if (!game_info) {
                        res.send({
                            status: 0,
                            msg: "Invalid game_code.",
                        });
                        return false;
                    }

                    data.push({
                        id: rtp_call.id,
                        agent_code: agent.agentCode,
                        user_code: rtp_call.user_code,
                        provider_code: rtp_call.provider_code,
                        game_code: game_info.PlatformGameName,
                        bet: rtp_call.bet,
                        expect: rtp_call.expect,
                        real: rtp_call.real,
                        missed: rtp_call.expect - rtp_call.real,
                        rtp: rtp_call.rtp,
                        type: "common",
                        status: rtp_call.status,
                        created_at: new Date(rtp_call.created_at),
                        updated_at: new Date(rtp_call.updated_at)
                    });
                });

                res.send({
                    status: 1,
                    data: data,
                    totalRecords: totalRecords,
                    currentPage: page
                });
                return true;
            } catch (e) {
                console.log(e);
            }
            res.send({
                status: 0,
                msg: "Internal Error.",
            });
            return false;
        });
    },
    SyncGameData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {

                const last_user_ver = parseInt(req.body.last_user_ver) || 0;
                const last_call_ver = parseInt(req.body.last_call_ver) || 0;
                const week_id_start = parseInt(req.body.week_id_start) || 0;
                const history_time_ms = parseInt(req.body.history_time_ms) || 0;
                let page_size = parseInt(req.body.page_size) || 0;
                //console.log("last_user_ver=" + last_user_ver + " last_call_ver=" + last_call_ver +" week_id_start=" + week_id_start + " history_time_ms=" + history_time_ms, + " page_size" + page_size);
                if (!(page_size > 0 && page_size < 500)) {
                    page_size = 100;
                }
                const userList = yield allfunctions_1.default.getDirtyUserListBySyncVersion(last_user_ver, page_size);
                var result = {};
                if (Array.isArray(userList)) {
                    result.users = userList
                }

                const callHistoryList = yield allfunctions_1.default.getDirtyCallListBySyncVersion(last_call_ver, page_size);
                if (Array.isArray(callHistoryList)) {
                    result.callList = callHistoryList;
                }

                const nowMs = Date.now();
                const historyListRet = yield allfunctions_1.default.getHistoryListByStartYearWeekId(history_time_ms, week_id_start, nowMs, page_size);
                if (historyListRet) {
                    if (Array.isArray(historyListRet.historyLst) && historyListRet.historyLst.length > 0) {
                        result.historys = historyListRet.historyLst;
                        const lastHistoryRec = historyListRet.historyLst[historyListRet.historyLst.length - 1];
                        if (lastHistoryRec) {
                            result.update_ms = lastHistoryRec.bt;
                            result.week_id_start = lastHistoryRec.id;
                        }
                    }
                    else {
                        result.update_ms = nowMs;
                        result.week_id_start = historyListRet.week_id_start;
                    }
                }
                result.status = 1
                return res.send(result);
            } catch (error) {
                console.error(error);
                return res.send({ status: 0, msg: "The acquisition of the URL failed" });
            }
        });
    },
    GetBetHistoryVerifyHtml(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const parameters = req.body.ea.split('&');
                if (!Array.isArray(parameters) || parameters.length !== 5) {
                    return res.send({ status: 0, msg: "Invalid Params" });
                }
                const typeParams = parameters[0].split('=');
                if (typeParams.length < 2) {
                    return res.send({ status: 0, msg: "Invalid Params" });
                }
                const type = typeParams[1];

                let sidParams = parameters[1].split('=');
                if (sidParams.length < 2) {
                    return res.send({ status: 0, msg: "Invalid Params" });
                }
                let sid = sidParams[1];
                let gidParams = parameters[2].split('=');
                if (gidParams.length < 2) {
                    return res.send({ status: 0, msg: "Invalid Params" });
                }
                let gid = gidParams[1];
                let atkParams = parameters[3].split('=');
                if (atkParams.length < 2) {
                    return res.send({ status: 0, msg: "Invalid Params" });
                }
                let atk = atkParams[1];
                let langParams = parameters[4].split('=');
                if (langParams.length < 2) {
                    return res.send({ status: 0, msg: "Invalid Params" });
                }
                let lang = langParams[1];
                let env = req.body.env;

                const trace_id = (0, uuid_1.v4)();
                const htmlContent = `
    <!doctype html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Redirecting...</title>
        <style lang="css">
            html, body {
                background: #000;
                color: #fff;
                padding: 0;
                margin: 0;
                width: 100%;
                height: 100%;
                font-family: arial, pingfang sc, microsoft yahei, wenquanyi micro hei, sans-serif;
            }
            #b {
                --time:.3s;
                position: relative;
                margin-bottom: 30px;
                width: 100%!important;
                background: #bebebe;
                transition: var(--time) linear;
                transition-property: background-color;
            }
            #b::before {
                display: block;
                content: '';
                width: 1%;
                height: 6px;
                background: #787878;
                transition: var(--time) linear;
                transition-property: width, background-color;
            }
        </style>
    </head>
    <body>
        <div id="b"></div>
        <div id="c">
            <div id="title">OOPS, SITE UNREACHABLE...</div>
            <hr id="line">
            <div id="text">
                <p>Please make sure your device is connected to mobile data or a Wi-Fi network.</p>
                <p>If you need to connect to the internet, please refer to the following:
                    <li>Check the Wi-Fi settings on your phone to see if there is a Wi-Fi network you can connect to.</li>
                    <li>Check if your phone is connected to mobile data.</li>
                </p>
                <p>If you are connected to Wi-Fi:
                    <li>Please check whether the Wi-Fi hotspot you're connected to has internet access or if it permits your device to access the internet.</li>
                </p>
            </div>
            <div id="url">
                <span class="t">TRY </span>
                <a class="v" href="#" id="fallback-link">THIS FALLBACK LINK</a> :'(
            </div>
            <div id="tid" class="flex">
                <span class="t">Trace ID:</span>
                <span class="v"></span>
            </div>
        </div>
        <div id="debug">
            <div class="t">DEBUG</div>
            <ul class="c" id="d"></ul>
        </div>

        <script>
            // 跳转到目标地址
            var targetUrl = "https://${constans.HISTORY_VERIFY_URL}/${gid}.html?trace_id=${trace_id}&sid=${sid}&psid=${sid}&t=12112196&api=//${constans.GAME_PLATFORM_URL}/web-api/operator-proxy/v1/History/GetBetHistory&lang=${lang}&type=operator";
            window.location.href = targetUrl;
        </script>
    </body>
    </html>
    `;

                // 设置响应头并返回构建好的HTML内容
                res.set('Content-Type', 'text/html');
                res.send({ dt: { content: htmlContent, contentType: "text/html", statusCode: null }, err: null });


            } catch (error) {
                console.error(error);
                return res.send({ status: 0, msg: "The setting of the proxy agent failed" });
            }
        });
    },

    login_test_user(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const uid_start = parseInt(req.body.uid_start) || 0;
                const num = parseInt(req.body.num) || 1;

                const users = yield allfunctions_1.default.getuserbystartid(uid_start, num);
                if (!Array.isArray(users) || users.length < 1) {
                    return res.send({ status: 0 });
                }
                const atk_lst = users.map(user => ({
                    atk: user.atk,
                    score: user.saldo,
                }));
                return res.send({ status: 1, users: atk_lst });
            } catch (error) {
                console.log(error);
                return res.send({ status: 0, msg: "The acquisition of the URL failed" });
            }
        });
    },




};