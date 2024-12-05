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
        } catch(e) {
            console.log(e);
        }
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constans = require("../../constans/constants")													
const axios_1 = __importDefault(require("axios"));
const logger_1 = __importDefault(require("../../logger"));
const crypto = __importStar(require("crypto"));
const uuid_1 = require("uuid");
const moment_1 = __importDefault(require("moment"));
const safariwildsfunctions_1 = __importDefault(require("../../functions/safari-wilds/functions"));
const allfunctions_1 = __importDefault(require("../../functions/allfunctions"));
const apicontroller_1 = __importDefault(require("../apicontroller"));
const serverEvents_1 = require("../../serverEvents");
const safariwildsnotcash = __importDefault(require("../../jsons/safari-wilds/notcash"));
const safariwildscontrol_logic = __importDefault(require("./controller_logic"));																	  

 
require("dotenv/config");
const _ = require('lodash');
exports.default = {
    getGameInfo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = req.body.atk;
                const jsonData = yield safariwildscontrol_logic.default.getGameInfo(token);
                res.send(jsonData);
            }
            catch (error) {
                logger_1.default.error(error);
            }
        });
    },
    spin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let cs = req.body.cs;
            let ml = req.body.ml;
            const token = req.body.atk;

            function gerarNumeroUnico() {
                return crypto.randomBytes(8).toString("hex");
            }
            try {
                const user = yield safariwildsfunctions_1.default.getuserbyatk(token);
                let bet = cs * ml * safariwildscontrol_logic.default.getMxl();
                console.log(bet);
                let saldoatual = user[0].saldo;
                const gamename = "cruise-royale";
                const gameCode = 1473388;
                (0, serverEvents_1.emitirEventoInterno)("att", {
                    token: token,
                    username: user[0].username,
                    bet: bet,
                    saldo: saldoatual,
                    rtp: user[0].rtp,
                    agentid: user[0].agentid,
                    gamecode: gamename,
                });
                const agent = yield allfunctions_1.default.getagentbyid(user[0].agentid);
                const checkuserbalance = yield (0, axios_1.default)({
                    maxBodyLength: Infinity,
                    method: "POST",
                    url: `${agent[0].callbackurl}/getBalance`,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    data: {
                        user_code: user[0].username,
                    },
                });
                if (checkuserbalance.data.msg === "INVALID_USER") {
                    res.send(yield safariwildsnotcash.default.notcash(saldoatual, cs, ml));
                    return false;
                }
                else if (checkuserbalance.data.msg === "INSUFFICIENT_USER_FUNDS") {
                    res.send(yield safariwildsnotcash.default.notcash(saldoatual, cs, ml));
                    return false;
                }
                const retornado = user[0].valorganho;
                const valorapostado = user[0].valorapostado;
                const rtp = (retornado / valorapostado) * 100;
                console.log("RTP ATUAL " + rtp);
                console.log("BET ATUAL " + bet);
                if (saldoatual < bet) {
                    const semsaldo = yield safariwildsnotcash.default.notcash(saldoatual, cs, ml);
                    res.send(semsaldo);
                    return false;
                }
                const resultadospin = yield safariwildscontrol_logic.default.takeResultFromBet(user[0].id, bet, saldoatual, token, gamename);
                if (resultadospin.result === constans.LOST) {//输
                    const perdajson = safariwildscontrol_logic.default.taskLostJsonData(resultadospin.json);
                    const jsonData = safariwildscontrol_logic.default.getLostJson(perdajson, ml, cs, bet, saldoatual)

                    let newbalance = jsonData.newbalance;
                    let json = jsonData.json;
                    yield safariwildsfunctions_1.default.updateUserLostBetInfo(token, newbalance, bet);

                    let history = allfunctions_1.default.createGameHistory(gameCode, json.dt.si)
                    if (history) {
                       yield allfunctions_1.default.insertGameHistory(user, history)
                    }

                    yield safariwildsfunctions_1.default.savejsonspin(user[0].id, JSON.stringify(json));
                    const txnid = (0, uuid_1.v4)();
                    const dataFormatada = (0, moment_1.default)().toISOString();
                    yield apicontroller_1.default.callbackgame({
                        agent_code: agent[0].agentcode,
                        agent_secret: agent[0].secretKey,
                        user_code: user[0].username,
                        user_balance: user[0].saldo,
                        user_total_credit: user[0].valorganho,
                        user_total_debit: user[0].valorapostado,
                        game_type: "slot",
                        slot: {
                            provider_code: "PGSOFT",
                            game_code: gamename,
                            round_id: yield gerarNumeroUnico(),
                            type: "BASE",
                            bet: bet,
                            win: 0,
                            txn_id: `${txnid}`,
                            txn_type: "debit_credit",
                            is_buy: false,
                            is_call: false,
                            user_before_balance: user[0].saldo,
                            user_after_balance: newbalance,
                            agent_before_balance: 100,
                            agent_after_balance: 100,
                            created_at: dataFormatada,
                        }
                    });
                 
                    res.send(json);
                } 
                
                
                else if (resultadospin.result === constans.BIGWIN && resultadospin.gamecode === "safari-wilds") {//大奖
                    const cartajson = safariwildscontrol_logic.default.taskBonusJsonData(resultadospin.json)

                    let  calltwo = null;
                    if (resultadospin.idcall > 0) {
                        calltwo = yield allfunctions_1.default.getcallbyid(resultadospin.idcall);
                        if (calltwo[0].steps === null && calltwo[0].status === "pending") {
                            calltwo = yield allfunctions_1.default.updateStepAndgetcallbyid(resultadospin.idcall, Object.keys(cartajson).length - 1);
                        }
                    } else {
                        const steps = Object.keys(cartajson).length - 1;
                        calltwo = yield allfunctions_1.default.addAndReturnCall(gamename, user[0].id, resultadospin.json, steps);
                        resultadospin.idcall = calltwo[0].id;
                    }
                    
                    let propertyCount = Object.keys(cartajson).length;
                    const currentStep = calltwo[0].steps; 

                    const jsonData = safariwildscontrol_logic.default.GetBonusJson(cartajson, currentStep, ml, cs, bet, saldoatual);
                    const newbalance = jsonData.newbalance;
                    const valorganho = jsonData.valorganho;
                    const json = jsonData.json;
                   
                    if (currentStep === 0) {

                        yield safariwildsfunctions_1.default.updateUserWinBetInfo(token, newbalance, bet, valorganho);
                       if (propertyCount == 1) {
                            let history = allfunctions_1.default.createGameHistory(gameCode, json.dt.si);
                            if (history) {
                                yield allfunctions_1.default.insertGameHistory(user, history)
                            }
                        } else {
                            let historyJson = safariwildscontrol_logic.default.GetBonusJson(cartajson, propertyCount - 1, ml, cs, bet, saldoatual).json.dt.si;
                            let history = allfunctions_1.default.createGameHistory(gameCode, historyJson);
                            for (var i= propertyCount - 2; i>0; i--) {
                                allfunctions_1.default.appendGameHistoryStep(history, safariwildscontrol_logic.default.GetBonusJson(cartajson, i, ml, cs, bet, saldoatual).json.dt.si);
                            }
                            allfunctions_1.default.appendGameHistoryStep(history, json.dt.si);

                           yield allfunctions_1.default.insertGameHistory(user, history)
                        }

                        yield safariwildsfunctions_1.default.savejsonspin(user[0].id, JSON.stringify(json));
                        yield allfunctions_1.default.completecall(calltwo[0].id);
                        const txnid = (0, uuid_1.v4)();
                        const dataFormatada = (0, moment_1.default)().toISOString();
                        yield apicontroller_1.default.callbackgame({
                            agent_code: agent[0].agentcode,
                            agent_secret: agent[0].secretKey,
                            user_code: user[0].username,
                            user_balance: user[0].saldo,
                            user_total_credit: user[0].valorganho,
                            user_total_debit: user[0].valorapostado,
                            game_type: "slot",
                            slot: {
                                provider_code: "PGSOFT",
                                game_code: gamename,
                                round_id: yield gerarNumeroUnico(),
                                type: "BASE",
                                bet: bet,
                                win: valorganho,
                                txn_id: `${txnid}`,
                                txn_type: "debit_credit",
                                is_buy: false,
                                is_call: true,
                                user_before_balance: user[0].saldo,
                                user_after_balance: newbalance,
                                agent_before_balance: 100,
                                agent_after_balance: 100,
                                created_at: dataFormatada,
                            },
                        });
                        res.send(json);
                        return true;
                    }
                    yield allfunctions_1.default.subtrairstepscall(resultadospin.idcall);
                    res.send(json);

                }
                
            }
            catch (error) {
                logger_1.default.error(error);
            }
        });
    },
};