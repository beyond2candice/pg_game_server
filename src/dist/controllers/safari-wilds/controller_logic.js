"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc?!m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod!= null) for (var k in mod) if (k!== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        try {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        } catch(e) {
            console.log(e);
        }
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule)? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });

const logger_1 = __importDefault(require("../../logger"));
const safariwildsfunctions_1 = __importDefault(require("../../functions/safari-wilds/functions"));
const allfunctions_1 = __importDefault(require("../../functions/allfunctions"));
const safariwildslinhaperda = __importDefault(require("../../jsons/safari-wilds/linhaperda")); //输


const safariwildslinhabonus = __importDefault(require("../../jsons/safari-wilds/linhabonus")); //大奖

const gamejsonresult = __importDefault(require("../../jsons/safari-wilds/jsonresult"))

const constans = require("../../constans/constants");

require("dotenv/config");
const _ = require('lodash');

exports.default = {
    getGameInfo(token, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield safariwildsfunctions_1.default.getuserbyatk(token);
                if (user === null) {
                    return;
                }

                const user_id = user[0].id;
                let json = yield safariwildsfunctions_1.default.getjsontiger(user_id);
                if (json === null || json.length === 0) {
                    json = yield safariwildsfunctions_1.default.createAndReturnjsontiger(user_id);
                    if (json === null || json.length === 0) {
                        return;
                    }
                }

                const jsonformatado = JSON.parse(json[0].json);
                return {
                    dt: {  
                        cs: [0.03,0.1,0.3,0.9],  
                        fb: {"bm":75,"is":true,"t":0.6},  
                        gcs: null,  
                        inwe: false,  
                        iuwe: false,  
                        maxwm: 5000,  
                        ml: [1,2,3,4,5,6,7,8,9,10],  
                        mxl: 20,  
                        wt: {"bw":5,"mgw":15,"mw":3,"smgw":35}, 
                        bl:user[0].saldo,
                        ls: jsonformatado.dt,
                        cc: "BRL",
                    },
                    err: null,
                };


            } catch (error) {
                logger_1.default.error(error);
            }
        });
    },
    getMxl() {
        return 20;
    },
    taskJsonMetaByScore(score, bet, gameCode) {
        let ret= gamejsonresult.default.RandomJson(score, bet);
        if (ret) {
            return {
                result:ret.Type,
                gamecode:gameCode,
                json:ret.Index,
            } 
        }

        return {
            result: constans.LOST,
            gamecode:gameCode,
            json: 0,
        };
    },
    takeResultFromBet(uid, bet, user_score, token, gamename) {
        return __awaiter(this, void 0, void 0, function* () {
            const lastPendingCall = yield allfunctions_1.default.getUserPendingCall(uid, gamename);
            if (lastPendingCall!== null) {
                return lastPendingCall;
            }
            return yield allfunctions_1.default.getBetResultScore(uid, bet, user_score, token, gamename, gamejsonresult.default.GetGameJsons());
            
        });
    },
    taskLostJsonData(json) {
        return safariwildslinhaperda.default.GetJson(json);
    },
    getLostJson(perdajson, ml, cs, bet, prevBalance) {
        let newbalance = prevBalance - bet;

        let json = {
            dt: {
                si: { 
                        bwp: perdajson.bwp, 
                        ctw: perdajson.ctw, 
                        cwc: perdajson.cwc, 
                        eb: perdajson.eb, 
                        ebb: perdajson.ebb, 
                        es: perdajson.es, 
                        esb: perdajson.esb, 
                        fb: perdajson.fb, 
                        fs: perdajson.fs, 
                        fstc: perdajson.fstc, 
                        gm: perdajson.gm, 
                        gwt: perdajson.gwt, 
                        hashr: perdajson.hashr, 
                        imw: perdajson.imw, 
                        lw: perdajson.lw, 
                        now: perdajson.now, 
                        nowpr: perdajson.nowpr, 
                        ogm: perdajson.ogm, 
                        orl: perdajson.orl, 
                        pcwc: perdajson.pcwc, 
                        pmt: perdajson.pmt, 
                        ptbr: perdajson.ptbr, 
                        rl: perdajson.rl, 
                        rs: perdajson.rs, 
                        rwsp: perdajson.rwsp, 
                        sc: perdajson.sc, 
                        snww: perdajson.snww, 
                        ssaw: perdajson.ssaw, 
                        twbm: perdajson.twbm, 
                        wp: perdajson.wp, 
                        ml: ml,
                        cs: cs,
                        sid: allfunctions_1.default.genSuid(),
                        psid: allfunctions_1.default.genSuid(),
                        st: 1,
                        nst: 1,
                        pf: 4,
                        aw: 0.0,
                        wid: 0,
                        wt: "C",
                        wk: "0_C",
                        wbn: null,
                        wfg: null,
                        blb: allfunctions_1.default.ToFixScore(prevBalance),
                        blab: allfunctions_1.default.ToFixScore(prevBalance - bet),
                        bl: allfunctions_1.default.ToFixScore(newbalance),
                        tb: bet,
                        tbb: bet,
                        tw: 0.0,
                        np: -bet,
                        ocr: null,
                        mr: null,
                    ge: [1, 11],
                },
            },
            err: null,
        };
        return {
            newbalance: newbalance,
            //赢得钱
            prevbalance: prevBalance,
            json: json,
        };
    },
    
    
    
    taskBonusJsonData(json) {
        return safariwildslinhabonus.default.GetJson(json);
    },
    GetBonusJson(cartajson, step, ml, cs, bet, prevBalance) {

        let propertyCount = Object.keys(cartajson).length;
        let cartajsonValue = cartajson[step];
        const betRate = bet / cartajsonValue.tbb;
        for (var i = step + 1; i < propertyCount; i++) 
        {
            prevBalance += cartajson[i].np * betRate;
        }
        
        var lw = null;
        let lwCfg = cartajsonValue.lw;
        if (lwCfg) {
            lw = {};
            for (var i in lwCfg) {
                lw[i] = lwCfg[i]*betRate;
            }
        }
        
        let fs = null;
        if (cartajsonValue.fs) {
            fs = _.cloneDeep(cartajsonValue.fs);
            if (fs.hasOwnProperty('aw')) {
                fs.aw *= betRate
            }
            if (fs.hasOwnProperty('wa')) {
                fs.wa *= betRate
            }
        }
        let valorganho = cartajsonValue.ctw*betRate;
        let betCurrentRound = cartajsonValue.tb * betRate
        let newbalance = prevBalance + valorganho - betCurrentRound;
        let json = {
            dt: {
                si: { 
                bwp: cartajsonValue.bwp, 
                cwc: cartajsonValue.cwc, 
                eb: cartajsonValue.eb, 
                ebb: cartajsonValue.ebb, 
                es: cartajsonValue.es, 
                esb: cartajsonValue.esb, 
                fb: cartajsonValue.fb, 
                fstc: cartajsonValue.fstc, 
                ge: cartajsonValue.ge, 
                gm: allfunctions_1.default.MultiplyValue(cartajsonValue.gm, betRate), 
                gwt: cartajsonValue.gwt, 
                hashr: cartajsonValue.hashr, 
                imw: cartajsonValue.imw, 
                mr: cartajsonValue.mr, 
                now: cartajsonValue.now, 
                nowpr: cartajsonValue.nowpr, 
                nst: cartajsonValue.nst, 
                ocr: cartajsonValue.ocr, 
                ogm: cartajsonValue.ogm, 
                orl: cartajsonValue.orl, 
                pcwc: cartajsonValue.pcwc, 
                pf: cartajsonValue.pf, 
                pmt: cartajsonValue.pmt, 
                ptbr: cartajsonValue.ptbr, 
                rl: cartajsonValue.rl, 
                rs: allfunctions_1.default.MultiplyRsValue(cartajsonValue.rs, betRate), 
                rwsp: cartajsonValue.rwsp, 
                sc: cartajsonValue.sc, 
                snww: cartajsonValue.snww, 
                 
                st: cartajsonValue.st, 
                twbm: allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.twbm,betRate), 
                wbn: cartajsonValue.wbn, 
                wfg: cartajsonValue.wfg, 
                wid: cartajsonValue.wid, 
                wk: cartajsonValue.wk, 
                wp: cartajsonValue.wp, 
                wt: cartajsonValue.wt, 
                lw: lw,  
                ctw: cartajsonValue.ctw * betRate, // 本轮赢的钱
                fs:fs,
                ml: ml,
                cs: cs,
                sid: allfunctions_1.default.genSuid(),
                psid: allfunctions_1.default.genSuid(),
                aw: cartajsonValue.aw * betRate,
                blb: allfunctions_1.default.ToFixScore(prevBalance), //之前的钱
                blab: allfunctions_1.default.ToFixScore(prevBalance - betCurrentRound), //下注后的钱
                bl: allfunctions_1.default.ToFixScore(newbalance), //最终的钱
                tb: cartajsonValue.tb * betRate,
                tbb: cartajsonValue.tbb * betRate,
                tw: cartajsonValue.tw * betRate,
                np: newbalance - prevBalance, //本轮盈亏
                ocr: cartajsonValue.ocr,
                m: cartajsonValue.mr,
                ge: cartajsonValue.ge,
                },
            },

            err: null,
        };
        return {
            newbalance:newbalance,
            valorganho:valorganho,
            json:json,
        };
    },
    
};