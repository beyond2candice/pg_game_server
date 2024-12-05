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
const anubiswrathfunctions_1 = __importDefault(require("../../functions/anubis-wrath/functions"));
const allfunctions_1 = __importDefault(require("../../functions/allfunctions"));
const anubiswrathlinhaperda = __importDefault(require("../../jsons/anubis-wrath/linhaperda")); //输


const anubiswrathlinhabonus = __importDefault(require("../../jsons/anubis-wrath/linhabonus")); //大奖

const anubiswrathjsonresult = __importDefault(require("../../jsons/anubis-wrath/jsonresult"))

const constans = require("../../constans/constants");

require("dotenv/config");
const _ = require('lodash');
 
 

exports.default = {
    getGameInfo(token, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield allfunctions_1.default.getuserbyatk(token);
                if (user === null) {
                    return;
                }

                const user_id = user[0].id;
                let json = yield anubiswrathfunctions_1.default.getjsontiger(user_id);
                if (json === null || json.length === 0) {
                    json = yield anubiswrathfunctions_1.default.createAndReturnjsontiger(user_id);
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
                        maxwm: 10000,  
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
        let ret = anubiswrathjsonresult.default.RandomJson(score, bet);
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

    takeResultFromBet(user, agent, bet, user_score, token, gamename) {
        return __awaiter(this, void 0, void 0, function* () {
            let uid = user.id;
            const ret = yield allfunctions_1.default.getPendingCallOrGameRtpCall(user, agent, gamename, bet);
            if (ret) {
                if (ret.Type === 0) {
                    return ret.Result;
                } else {
                    return allfunctions_1.default.getBetResultByGameRtpCall(user, agent, ret.Result, gamename, anubiswrathjsonresult.default.GetGameJsons());
                }
            }
            return yield allfunctions_1.default.getBetResultScore(user, agent, bet, user_score, token, gamename, anubiswrathjsonresult.default.GetGameJsons());
        });
    },
    taskLostJsonData(json) {
        return anubiswrathlinhaperda.default.GetJson(json);
    },
    getLostJson(perdajson, ml, cs, bet, prevBalance) {
        let newbalance = prevBalance - bet;

        let json = {
            dt: {
                si: { 
                        crtw: perdajson.crtw, 
                        ctw: perdajson.ctw, 
                        cwc: perdajson.cwc, 
                        fb: perdajson.fb, 
                        fs: perdajson.fs, 
                        fstc: perdajson.fstc, 
                        gm: perdajson.gm, 
                        gwt: perdajson.gwt, 
                        hashr: perdajson.hashr, 
                        icc: perdajson.icc, 
                        ich: perdajson.ich, 
                        ihttmrl: perdajson.ihttmrl, 
                        imw: perdajson.imw, 
                        inttmh: perdajson.inttmh, 
                        lw: perdajson.lw, 
                        orl: perdajson.orl, 
                        pcwc: perdajson.pcwc, 
                        pgm: perdajson.pgm, 
                        pmt: perdajson.pmt, 
                        ptbr: perdajson.ptbr, 
                        rl: perdajson.rl, 
                        rns: perdajson.rns, 
                        rwsp: perdajson.rwsp, 
                        sc: perdajson.sc, 
                        snww: perdajson.snww, 
                        ssaw: perdajson.ssaw, 
                        ttmrl: perdajson.ttmrl, 
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
        return anubiswrathlinhabonus.default.GetJson(json);
    },
    GetBonusJson(cartajson, step, ml, cs, bet, prevBalance) {

        let propertyCount = Object.keys(cartajson).length;
        let cartajsonValue = cartajson[step];
        const betRate = bet / cartajsonValue.tbb;
        for (var i = step + 1; i < propertyCount; i++) 
        {
            prevBalance = prevBalance + allfunctions_1.default.MultiplyValueWithFix(cartajson[i].np , betRate);
        }
        
        var lw = null;
        let lwCfg = cartajsonValue.lw;
        if (lwCfg) {
            lw = {};
            for (var i in lwCfg) {
                lw[i] = allfunctions_1.default.MultiplyValueWithFix(lwCfg[i], betRate);
            }
        }
        
        let fs = null;
        if (cartajsonValue.fs) {
            fs = _.cloneDeep(cartajsonValue.fs);
            if (fs.hasOwnProperty('aw')) {
                fs.aw = allfunctions_1.default.MultiplyValueWithFix(fs.aw, betRate);
            }
            if (fs.hasOwnProperty('wa')) {
                fs.wa = allfunctions_1.default.MultiplyValueWithFix(fs.wa, betRate);
            }
        }

        let valorganho = 0;
        if (cartajsonValue.cwc === 1) {
            valorganho = allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.tw, betRate);
        }
        let totalValorganho = allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.aw, betRate); 
        let betCurrentRound = allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.tb , betRate);
        let newbalance = prevBalance + valorganho - betCurrentRound;
        let json = {
            dt: {
                si: { 
                crtw: cartajsonValue.crtw, 
                cwc: cartajsonValue.cwc, 
                fb: cartajsonValue.fb, 
                fstc: cartajsonValue.fstc, 
                ge: cartajsonValue.ge, 
                gwt: cartajsonValue.gwt, 
                hashr: cartajsonValue.hashr, 
                icc: cartajsonValue.icc, 
                ich: cartajsonValue.ich, 
                ihttmrl: cartajsonValue.ihttmrl, 
                imw: cartajsonValue.imw, 
                inttmh: cartajsonValue.inttmh, 
                mr: cartajsonValue.mr, 
                nst: cartajsonValue.nst, 
                ocr: cartajsonValue.ocr, 
                orl: cartajsonValue.orl, 
                pcwc: cartajsonValue.pcwc, 
                pf: cartajsonValue.pf, 
                pgm: cartajsonValue.pgm, 
                pmt: cartajsonValue.pmt, 
                ptbr: cartajsonValue.ptbr, 
                rl: cartajsonValue.rl, 
                rns: cartajsonValue.rns, 
                rwsp: cartajsonValue.rwsp, 
                sc: cartajsonValue.sc, 
                snww: cartajsonValue.snww, 
                st: cartajsonValue.st, 
                ttmrl: cartajsonValue.ttmrl, 
                twbm: allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.twbm, betRate), 
                wbn: cartajsonValue.wbn, 
                wfg: cartajsonValue.wfg, 
                wid: cartajsonValue.wid, 
                wk: cartajsonValue.wk, 
                wp: cartajsonValue.wp, 
                wt: cartajsonValue.wt, 
                lw: lw,  
                ctw: allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.ctw , betRate), // 本轮赢的钱
                fs:fs,
                ml: ml,
                cs: cs,
                sid: allfunctions_1.default.genSuid(),
                psid: allfunctions_1.default.genSuid(),
                aw: allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.aw , betRate),
                blb: allfunctions_1.default.ToFixScore(prevBalance), //之前的钱
                blab: allfunctions_1.default.ToFixScore(prevBalance - betCurrentRound), //下注后的钱
                bl: allfunctions_1.default.ToFixScore(newbalance), //最终的钱
                tb: allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.tb , betRate),
                tbb: allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.tbb , betRate),
                tw: allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.tw , betRate),
                gm:  cartajsonValue.gm,
                saw: allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.saw, betRate),
                ssaw: allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.ssaw, betRate),
                tlw: allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.tlw, betRate),
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
            totalValorganho:totalValorganho,
            json:json,
        };
    },
    
};