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
const fortunetigerfunctions_1 = __importDefault(require("../../functions/fortune-tiger/functions"));
const allfunctions_1 = __importDefault(require("../../functions/allfunctions"));
const apicontroller_1 = __importDefault(require("../apicontroller"));
const serverEvents_1 = require("../../serverEvents");
const fortunetigernotcash = __importDefault(require("../../jsons/fortune-tiger/notcash"));
const fortunetigercontrol_logic = __importDefault(require("./controller_logic"));																	  
require("dotenv/config");
const _ = require('lodash');
exports.default = {
    getGameInfo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = req.body.atk;
                const jsonData = yield fortunetigercontrol_logic.default.getGameInfo(token);
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
                const userRet = yield allfunctions_1.default.getuserbyatk(token);
				if (!userRet || userRet.length < 1) {
		            res.send(yield fortunetigernotcash.default.notcash(0, cs, ml));
                    return false;
				}
				const user = userRet[0];
                let bet = cs * ml * fortunetigercontrol_logic.default.getMxl();
                console.log(bet);
                const gamename = "fortune-tiger";
                const game_code = 126;
                const agentRet = yield allfunctions_1.default.getagentbyid(user.agentid);
				if (!agentRet || agentRet.length < 1) {
		            res.send(yield fortunetigernotcash.default.notcash(0, cs, ml));
                    return false;
				}
				let agent = agentRet[0];
                let getBalanceRet = yield apicontroller_1.default.getUserBalance(agent, user);
                if (getBalanceRet.status !== 1) {
                    res.send(yield fortunetigernotcash.default.notcash(user.saldo, cs, ml));
                    return false;
                }
				
                let saldoatual = getBalanceRet.user_balance;
                console.log("BET ATUAL " + bet);
                if (!(bet>0) && (saldoatual < bet)) {
                    const semsaldo = yield fortunetigernotcash.default.notcash(saldoatual, cs, ml);
                    res.send(semsaldo);
                    return false;
                }
                const resultadospin = yield fortunetigercontrol_logic.default.takeResultFromBet(user, agent, bet, saldoatual, token, gamename);
                if (resultadospin.result === constans.LOST) {//输
                    const perdajson = fortunetigercontrol_logic.default.taskLostJsonData(resultadospin.json);
                    const jsonData = fortunetigercontrol_logic.default.getLostJson(perdajson, ml, cs, bet, saldoatual)

                    const txnid = (0, uuid_1.v4)();
                    const dataFormatada = (0, moment_1.default)().toISOString();
                    let transRet = yield apicontroller_1.default.callbackgame(agent, {
                        agent_code: agent.agentCode,
                        agent_secret: agent.secretKey,
                        agent_balance:0,
                        user_code: user.username,
                        user_balance: user.saldo,
                        game_type: "slot",
                        slot: {
                            provider_code: "PGSOFT",
                            game_code: gamename,
                            type: "BASE",
                            bet_money: bet,
                            win_money: 0,
                            txn_id: `${txnid}`,
                            txn_type: "debit_credit",
                            created_at: dataFormatada,
                        }
                    });
                    if (transRet.status !== 1) {
                        res.send(yield fortunetigernotcash.default.notcash(saldoatual, cs, ml));
                        return false;
                    }

                    let newbalance = transRet.user_balance;
                    let json = jsonData.json;

                    yield allfunctions_1.default.updateUserLostBetInfo(user, agent, game_code, newbalance, bet, resultadospin.call_rtp_id);

                    let history = allfunctions_1.default.createGameHistory(game_code, json.dt.si)
                    if (history) {
                       yield allfunctions_1.default.insertGameHistory(user, history)
                    }

                    yield fortunetigerfunctions_1.default.savejsonspin(user.id, JSON.stringify(json));
                 
                    res.send(json);
                } 
                
                else if (resultadospin.result == constans.WIN) {
                    const ganhojson = fortunetigercontrol_logic.default.taskWinJsonData(resultadospin.json)
                    const jsonData = fortunetigercontrol_logic.default.GetWinJson(ganhojson, 0, ml, cs, bet, saldoatual);
                    const valorganho = jsonData.valorganho;

                    const txnid = (0, uuid_1.v4)();
                    const dataFormatada = (0, moment_1.default)().toISOString();
                    let transRet = yield apicontroller_1.default.callbackgame(agent, {

                        agent_code: agent.agentCode,
                        agent_secret: agent.secretKey,
                        agent_balance:0,
                        user_code: user.username,
                        user_balance: user.saldo,
                        game_type: "slot",
                        slot: {
                            provider_code: "PGSOFT",
                            game_code: gamename,
                            type: "BASE",
                            bet_money: bet,
                            win_money: valorganho,
                            txn_id: `${txnid}`,
                            txn_type: "debit_credit",
                            created_at: dataFormatada,
                        }
                    });
                    if (transRet.status !== 1) {
                        res.send(yield fortunetigernotcash.default.notcash(saldoatual, cs, ml));
                        return false;
                    }

                    const newbalance = transRet.user_balance;
                    const json = jsonData.json;
                    yield allfunctions_1.default.updateUserWinBetInfo(user, agent, game_code, newbalance, bet, valorganho, resultadospin.call_rtp_id);
                    let history = allfunctions_1.default.createGameHistory(game_code, json.dt.si);
                    if (history) {
                        yield allfunctions_1.default.insertGameHistory(user, history)
                    }

                    yield fortunetigerfunctions_1.default.savejsonspin(user.id, JSON.stringify(json));
                    res.send(json);
                    return true;
                }
                
                
                else if (resultadospin.result === constans.BIGWIN && resultadospin.gamecode === "fortune-tiger") {//大奖
                    const cartajson = fortunetigercontrol_logic.default.taskBonusJsonData(resultadospin.json)

                    let  calltwo = null;
                    if (resultadospin.idcall > 0) {
                        calltwo = yield allfunctions_1.default.getcallbyid(resultadospin.idcall);
                        if (calltwo[0].steps === null && calltwo[0].status === "pending") {
                            calltwo = yield allfunctions_1.default.updateStepAndgetcallbyid(resultadospin.idcall, Object.keys(cartajson).length - 1);
                        }
                    } else {
                        const steps = Object.keys(cartajson).length - 1;
                        calltwo = yield allfunctions_1.default.addAndReturnCall(gamename, user.id, resultadospin.json, steps, resultadospin.call_rtp_id);
                        resultadospin.idcall = calltwo[0].id;
                    }
                    
                    let propertyCount = Object.keys(cartajson).length;
                    const currentStep = calltwo[0].steps; 

                    const jsonData = fortunetigercontrol_logic.default.GetBonusJson(cartajson, currentStep, ml, cs, bet, saldoatual);
                    const totalValorganho = jsonData.totalValorganho;
                    const json = jsonData.json;
                   
                    if (currentStep === 0) {
                        const txnid = (0, uuid_1.v4)();
                        const dataFormatada = (0, moment_1.default)().toISOString();
                        let transRet = yield apicontroller_1.default.callbackgame(agent,{
                            agent_code: agent.agentCode,
                            agent_secret: agent.secretKey,
                            agent_balance:0,
                            user_code: user.username,
                            user_balance: user.saldo,
                            game_type: "slot",
                            slot: {
                                provider_code: "PGSOFT",
                                game_code: gamename,
                                type: "BASE",
                                bet_money: bet,
                                win_money: totalValorganho,
                                txn_id: `${txnid}`,
                                txn_type: "debit_credit",
                                created_at: dataFormatada,
                            }
                        });

                        if (transRet.status !==1) {
                            res.send(yield fortunetigernotcash.default.notcash(saldoatual, cs, ml));
                            return false;
                        }

                        const newbalance = transRet.user_balance;
                        yield allfunctions_1.default.updateUserWinBetInfo(user, agent, game_code, newbalance, bet, totalValorganho, resultadospin.call_rtp_id);
                       if (propertyCount == 1) {
                            let history = allfunctions_1.default.createGameHistory(game_code, json.dt.si);
                            if (history) {
                                yield allfunctions_1.default.insertGameHistory(user, history)
                            }
                        } else {
                            let historyJson = fortunetigercontrol_logic.default.GetBonusJson(cartajson, propertyCount - 1, ml, cs, bet, saldoatual).json.dt.si;
                            let history = allfunctions_1.default.createGameHistory(game_code, historyJson);
                            for (var i= propertyCount - 2; i>0; i--) {
                                allfunctions_1.default.appendGameHistoryStep(history, fortunetigercontrol_logic.default.GetBonusJson(cartajson, i, ml, cs, bet, saldoatual).json.dt.si);
                            }
                            allfunctions_1.default.appendGameHistoryStep(history, json.dt.si);

                           yield allfunctions_1.default.insertGameHistory(user, history)
                        }

                        yield fortunetigerfunctions_1.default.completecallAndSaveJsonSpin(calltwo[0].id, user.id, JSON.stringify(json));
                        res.send(json);
                        return true;
                    }
                    yield fortunetigerfunctions_1.default.subtrairstepscallAndSaveJsonSpin(resultadospin.idcall, user.id, JSON.stringify(json));
                    res.send(json);

                }
                
            }
            catch (error) {
                logger_1.default.error(error);
            }
        });
    },
};