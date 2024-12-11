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
const vampirescharmfunctions_1 = __importDefault(require("../../functions/vampires-charm/functions"));
const allfunctions_1 = __importDefault(require("../../functions/allfunctions"));
const vampirescharmlinhaperda = __importDefault(require("../../jsons/vampires-charm/linhaperda")); //输

const vampirescharmlinhaganho = __importDefault(require("../../jsons/vampires-charm/linhaganho")); //赢


const vampirescharmlinhabonus = __importDefault(require("../../jsons/vampires-charm/linhabonus")); //大奖

const vampirescharmjsonresult = __importDefault(require("../../jsons/vampires-charm/jsonresult"))

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
                let json = yield vampirescharmfunctions_1.default.getjsontiger(user_id);
                if (json === null || json.length === 0) {
                    json = yield vampirescharmfunctions_1.default.createAndReturnjsontiger(user_id);
                    if (json === null || json.length === 0) {
                        return;
                    }
                }

                const jsonformatado = JSON.parse(json[0].json);
                return {
                    dt: {  
                        cs: [0.05,0.5,2.0],  
                        fb: {"bm":100,"is":true,"t":0.3},  
                        gcs: null,  
                        inwe: false,  
                        iuwe: false,  
                        maxwm: null,  
                        ml: [1,2,3,4,5,6,7,8,9,10],  
                        mxl: 10,  
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
        return 10;
    },
    taskJsonMetaByScore(score, bet, gameCode) {
        let ret = vampirescharmjsonresult.default.RandomJson(score, bet);
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
                    return allfunctions_1.default.getBetResultByGameRtpCall(user, agent, bet, ret, gamename, vampirescharmjsonresult.default.GetGameJsons());
                }
            }
            return yield allfunctions_1.default.getBetResultScore(user, agent, bet, user_score, token, gamename, vampirescharmjsonresult.default.GetGameJsons());
        });
    },
    taskLostJsonData(json) {
        return vampirescharmlinhaperda.default.GetJson(json);
    },
    getLostJson(perdajson, ml, cs, bet, prevBalance) {
        let newbalance = prevBalance - bet;

        let json = {
            dt: {
                si: { 
                        bns: perdajson.bns, 
                        ct: perdajson.ct, 
                        ctw: perdajson.ctw, 
                        cwc: perdajson.cwc, 
                        esi: perdajson.esi, 
                        esw: perdajson.esw, 
                        fb: perdajson.fb, 
                        fs: perdajson.fs, 
                        fstc: perdajson.fstc, 
                        gwt: perdajson.gwt, 
                        hashr: perdajson.hashr, 
                        lw: perdajson.lw, 
                        pcwc: perdajson.pcwc, 
                        pmt: perdajson.pmt, 
                        rl: perdajson.rl, 
                        rs: perdajson.rs, 
                        rwsp: perdajson.rwsp, 
                        sc: perdajson.sc, 
                        sw: perdajson.sw, 
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
    
    taskWinJsonData(json) {
        return vampirescharmlinhaganho.default.GetJson(json);
    },
    GetWinJson(ganhojson, step, ml, cs, bet, prevBalance) {
        const betRate = bet / ganhojson.tbb
        const valorganho = allfunctions_1.default.MultiplyValueWithFix(ganhojson.ctw , betRate);
        const newbalance = prevBalance + valorganho - bet;
        
        var lw = null;
        let lwCfg = ganhojson.lw;
        if (lwCfg) {
            lw = {};
            for (var i in lwCfg) {
                lw[i] = allfunctions_1.default.MultiplyValueWithFix(lwCfg[i], betRate);
            }
        }
        
        let fs = null;
        if (ganhojson.fs) {
            fs = _.cloneDeep(ganhojson.fs);
            if (fs.hasOwnProperty('aw')) {
                fs.aw = allfunctions_1.default.MultiplyValueWithFix(fs.aw, betRate);
            }
            if (fs.hasOwnProperty('wa')) {
                fs.wa = allfunctions_1.default.MultiplyValueWithFix(fs.wa , betRate);
            }
            if (fs.hasOwnProperty('fsaw')) {
                fs.fsaw = allfunctions_1.default.MultiplyValueWithFix(fs.fsaw , betRate);
            }
        }
        let json = {
            dt: {
                si: { 
                    bns: allfunctions_1.default.MultiplyBnsValue(ganhojson.bns, betRate), 
                    ct: ganhojson.ct, 
                    cwc: ganhojson.cwc, 
                    esi: ganhojson.esi, 
                    esw: allfunctions_1.default.MultiplyValueWithFix(ganhojson.esw, betRate), 
                    fb: ganhojson.fb, 
                    fstc: ganhojson.fstc, 
                    ge: ganhojson.ge, 
                    gwt: ganhojson.gwt, 
                    hashr: ganhojson.hashr, 
                    mr: ganhojson.mr, 
                    nst: ganhojson.nst, 
                    ocr: ganhojson.ocr, 
                    pcwc: ganhojson.pcwc, 
                    pf: ganhojson.pf, 
                    pmt: ganhojson.pmt, 
                    rl: ganhojson.rl, 
                    rs: allfunctions_1.default.MultiplyRsValue(ganhojson.rs, betRate), 
                    rwsp: ganhojson.rwsp, 
                    sc: ganhojson.sc, 
                    st: ganhojson.st, 
                    wbn: ganhojson.wbn, 
                    wfg: ganhojson.wfg, 
                    wid: ganhojson.wid, 
                    wk: ganhojson.wk, 
                    wp: ganhojson.wp, 
                    wt: ganhojson.wt, 
                     lw: lw, //每条线中奖信息 "1":{s:中奖牌,wa:赢的钱} 
                    ctw: allfunctions_1.default.MultiplyValueWithFix(ganhojson.ctw, betRate), // 本轮赢的钱
                    fs, fs,
                    ml: ml,
                    cs: cs,
                    sid: allfunctions_1.default.genSuid(),
                    psid: allfunctions_1.default.genSuid(),
                    gm:  ganhojson.gm,
                    saw: allfunctions_1.default.MultiplyValueWithFix(ganhojson.saw, betRate),
                    ssaw: allfunctions_1.default.MultiplyValueWithFix(ganhojson.ssaw, betRate),
                    tlw: allfunctions_1.default.MultiplyValueWithFix(ganhojson.tlw, betRate),
                    aw: allfunctions_1.default.MultiplyValueWithFix(ganhojson.aw, betRate),
                    blb: allfunctions_1.default.ToFixScore(prevBalance), //之前的钱
                    blab: allfunctions_1.default.ToFixScore(prevBalance - bet), //下注后的钱
                    bl: allfunctions_1.default.ToFixScore(newbalance), //最终的钱
                    tb: allfunctions_1.default.MultiplyValueWithFix(ganhojson.tb, betRate),
                    tbb: allfunctions_1.default.MultiplyValueWithFix(ganhojson.tbb, betRate),
                    tw: allfunctions_1.default.MultiplyValueWithFix(ganhojson.tw, betRate),
                    np: newbalance - prevBalance, //本轮盈亏
                    ocr: ganhojson.ocr,
                    m: ganhojson.mr,
                    ge: ganhojson.ge,
                },
            },
            err: null,
        };

        return {
            newbalance: newbalance,
            //赢得钱
            valorganho:valorganho,
            json: json,
        };
    },
    
    
    
    taskBonusJsonData(json) {
        return vampirescharmlinhabonus.default.GetJson(json);
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
            if (fs.hasOwnProperty('fsaw')) {
                fs.fsaw = allfunctions_1.default.MultiplyValueWithFix(fs.fsaw , betRate);
            }
        }
        let valorganho = allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.ctw, betRate);
        let totalValorganho = allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.aw, betRate); 
        let betCurrentRound = 0;
        if (step +1 === propertyCount){
            betCurrentRound = allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.tb , betRate);
        }
        let newbalance = prevBalance + valorganho - betCurrentRound;
        let json = {
            dt: {
                si: { 
                bns: allfunctions_1.default.MultiplyBnsValue(cartajsonValue.bns, betRate), 
                ct: cartajsonValue.ct, 
                cwc: cartajsonValue.cwc, 
                esi: cartajsonValue.esi, 
                esw: cartajsonValue.esw, 
                fb: cartajsonValue.fb, 
                fstc: cartajsonValue.fstc, 
                ge: cartajsonValue.ge, 
                gwt: cartajsonValue.gwt, 
                hashr: cartajsonValue.hashr, 
                mr: cartajsonValue.mr, 
                nst: cartajsonValue.nst, 
                ocr: cartajsonValue.ocr, 
                pcwc: cartajsonValue.pcwc, 
                pf: cartajsonValue.pf, 
                pmt: cartajsonValue.pmt, 
                rl: cartajsonValue.rl, 
                rs: allfunctions_1.default.MultiplyRsValue(cartajsonValue.rs, betRate), 
                rwsp: cartajsonValue.rwsp, 
                sc: cartajsonValue.sc, 
                st: cartajsonValue.st, 
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
                tb: betCurrentRound,
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