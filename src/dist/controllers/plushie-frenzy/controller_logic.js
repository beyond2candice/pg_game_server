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
const plushiefrenzyfunctions_1 = __importDefault(require("../../functions/plushie-frenzy/functions"));
const allfunctions_1 = __importDefault(require("../../functions/allfunctions"));
const plushiefrenzylinhaperda = __importDefault(require("../../jsons/plushie-frenzy/linhaperda")); //输

const plushiefrenzylinhaganho = __importDefault(require("../../jsons/plushie-frenzy/linhaganho")); //赢


const plushiefrenzylinhabonus = __importDefault(require("../../jsons/plushie-frenzy/linhabonus")); //大奖

const plushiefrenzyjsonresult = __importDefault(require("../../jsons/plushie-frenzy/jsonresult"))

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
                let json = yield plushiefrenzyfunctions_1.default.getjsontiger(user_id);
                if (json === null || json.length === 0) {
                    json = yield plushiefrenzyfunctions_1.default.createAndReturnjsontiger(user_id);
                    if (json === null || json.length === 0) {
                        return;
                    }
                }

                const jsonformatado = JSON.parse(json[0].json);
                return {
                    dt: {  
                        cs: [0.01,0.1,0.4,2],  
                        fb: null,  
                        inwe: false,  
                        iuwe: false,  
                        maxwm: null,  
                        ml: [1,2,3,4,5,6,7,8,9,10],  
                        mxl: 30,  
                        wt: {"bw":5,"mgw":15,"mw":2.5,"smgw":35}, 
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
        return 30;
    },
    taskJsonMetaByScore(score, bet, gameCode) {
        let ret = plushiefrenzyjsonresult.default.RandomJson(score, bet);
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
                    return allfunctions_1.default.getBetResultByGameRtpCall(user, agent, ret.Result, gamename, plushiefrenzyjsonresult.default.GetGameJsons());
                }
            }
            return yield allfunctions_1.default.getBetResultScore(user, agent, bet, user_score, token, gamename, plushiefrenzyjsonresult.default.GetGameJsons());
        });
    },
    taskLostJsonData(json) {
        return plushiefrenzylinhaperda.default.GetJson(json);
    },
    getLostJson(perdajson, ml, cs, bet, prevBalance) {
        let newbalance = prevBalance - bet;

        let json = {
            dt: {
                si: { 
                        bns: perdajson.bns, 
                        cf: perdajson.cf, 
                        ctw: perdajson.ctw, 
                        cwc: perdajson.cwc, 
                        fb: perdajson.fb, 
                        fstc: perdajson.fstc, 
                        gwt: perdajson.gwt, 
                        hashr: perdajson.hashr, 
                        lw: perdajson.lw, 
                        pcwc: perdajson.pcwc, 
                        pmt: perdajson.pmt, 
                        rl: perdajson.rl, 
                        rs: perdajson.rs, 
                        rwsp: perdajson.rwsp, 
                        tlwa: perdajson.tlwa, 
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
                        blb: prevBalance,
                        blab: prevBalance - bet,
                        bl: newbalance,
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
        return plushiefrenzylinhaganho.default.GetJson(json);
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
        
        let json = {
            dt: {
                si: { 
                    cf: ganhojson.cf, 
                    cwc: ganhojson.cwc, 
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
                    rwsp: ganhojson.rwsp, 
                    st: ganhojson.st, 
                    tlwa: ganhojson.tlwa, 
                    wbn: ganhojson.wbn, 
                    wfg: ganhojson.wfg, 
                    wid: ganhojson.wid, 
                    wk: ganhojson.wk, 
                    wp: ganhojson.wp, 
                    wt: ganhojson.wt, 
                     lw: lw, //每条线中奖信息 "1":{s:中奖牌,wa:赢的钱} 
                    ctw: allfunctions_1.default.MultiplyValueWithFix(ganhojson.ctw, betRate), // 本轮赢的钱
                    fs: allfunctions_1.default.MultiplyFsValue(ganhojson.fs, betRate),
                    ml: ml,
                    cs: cs,
                    sid: allfunctions_1.default.genSuid(),
                    psid: allfunctions_1.default.genSuid(),
                    saw: allfunctions_1.default.MultiplyValueWithFix(ganhojson.saw, betRate),
                    ssaw: allfunctions_1.default.MultiplyValueWithFix(ganhojson.ssaw, betRate),
                    tlw: allfunctions_1.default.MultiplyValueWithFix(ganhojson.tlw, betRate),
                    aw: allfunctions_1.default.MultiplyValueWithFix(ganhojson.aw, betRate),
                    blb: prevBalance, //之前的钱
                    blab: prevBalance - bet, //下注后的钱
                    bl: newbalance, //最终的钱
                    tb: allfunctions_1.default.MultiplyValueWithFix(ganhojson.tb, betRate),
                    tbb: allfunctions_1.default.MultiplyValueWithFix(ganhojson.tbb, betRate),
                    tw: allfunctions_1.default.MultiplyValueWithFix(ganhojson.tw, betRate),
                    twbm: allfunctions_1.default.MultiplyValueWithFix(ganhojson.twbm, betRate),
                    acw: allfunctions_1.default.MultiplyValueWithFix(ganhojson.acw, betRate),
                    stw:allfunctions_1.default.MultiplyValueWithFix(ganhojson.stw, betRate),
                    atw:allfunctions_1.default.MultiplyValueWithFix(ganhojson.atw, betRate),
                    slw:allfunctions_1.default.MultiplyValueWithFix(ganhojson.slw, betRate),
                    slwm:allfunctions_1.default.MultiplyValueWithFix(ganhojson.slwm, betRate),
                    bmtw:allfunctions_1.default.MultiplyValueWithFix(ganhojson.bmtw, betRate),
                    afw:allfunctions_1.default.MultiplyValueWithFix(ganhojson.afw, betRate),
                    lwa:allfunctions_1.default.MultiplyValueWithFix(ganhojson.lwa, betRate),
                    ltw: allfunctions_1.default.MultiplyValueWithFix(ganhojson.ltw, betRate),
                    esw:allfunctions_1.default.MultiplyValueWithFix(ganhojson.esw, betRate),
                    wabm:allfunctions_1.default.MultiplyValueWithFix(ganhojson.wabm, betRate),
                    cptw: allfunctions_1.default.MultiplyCptwValue(ganhojson.cptw, betRate),
                    cp: allfunctions_1.default.MultiplyCpValue(ganhojson.cp, betRate),
                    bns: allfunctions_1.default.MultiplyBnsValue(ganhojson.bns, betRate),
                    rs: allfunctions_1.default.MultiplyRsValue(ganhojson.rs, betRate), 
                    rv: allfunctions_1.default.MultiplyRvValue(ganhojson.rv, betRate), 
                    stwm: allfunctions_1.default.MultiplyValueWithFix(ganhojson.stwm, betRate),
                    cpf: allfunctions_1.default.MultiplyCpfValue(ganhojson.cpf, betRate),
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
        return plushiefrenzylinhabonus.default.GetJson(json);
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
        

        let valorganho = allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.tw, betRate);
        let totalValorganho = allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.aw, betRate); 
        let betCurrentRound = 0;
        if (step +1 === propertyCount){
            betCurrentRound = allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.tb , betRate);
        }
        let newbalance = prevBalance + valorganho - betCurrentRound;
        let json = {
            dt: {
                si: { 
                cf: cartajsonValue.cf, 
                cwc: cartajsonValue.cwc, 
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
                rwsp: cartajsonValue.rwsp, 
                st: cartajsonValue.st, 
                tlwa: cartajsonValue.tlwa, 
                wbn: cartajsonValue.wbn, 
                wfg: cartajsonValue.wfg, 
                wid: cartajsonValue.wid, 
                wk: cartajsonValue.wk, 
                wp: cartajsonValue.wp, 
                wt: cartajsonValue.wt, 
                lw: lw,  
                ctw: allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.ctw , betRate), // 本轮赢的钱
                fs: allfunctions_1.default.MultiplyFsValue(cartajsonValue.fs, betRate),
                ml: ml,
                cs: cs,
                sid: allfunctions_1.default.genSuid(),
                psid: allfunctions_1.default.genSuid(),
                aw: allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.aw , betRate),
                blb: prevBalance, //之前的钱
                blab: prevBalance - betCurrentRound, //下注后的钱
                bl: newbalance, //最终的钱
                tb: betCurrentRound,
                tbb: allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.tbb , betRate),
                tw: allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.tw , betRate),
                saw: allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.saw, betRate),
                ssaw: allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.ssaw, betRate),
                tlw: allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.tlw, betRate),
                twbm: allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.twbm, betRate),
                acw: allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.acw, betRate),
                stw:allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.stw, betRate),
                atw:allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.atw, betRate),
                slw:allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.slw, betRate),
                slwm:allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.slwm, betRate),
                bmtw:allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.bmtw, betRate),
                afw:allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.afw, betRate),
                lwa:allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.lwa, betRate),
                ltw:allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.ltw, betRate),
                esw:allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.esw, betRate),
                wabm:allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.wabm, betRate),
                cptw: allfunctions_1.default.MultiplyCptwValue(cartajsonValue.cptw, betRate),
                cp: allfunctions_1.default.MultiplyCpValue(cartajsonValue.cp, betRate),
                bns: allfunctions_1.default.MultiplyBnsValue(cartajsonValue.bns, betRate),
                rs: allfunctions_1.default.MultiplyRsValue(cartajsonValue.rs, betRate), 
                rv: allfunctions_1.default.MultiplyRvValue(cartajsonValue.rv, betRate), 
                stwm: allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.stwm, betRate),
                cpf: allfunctions_1.default.MultiplyValueWithFix(cartajsonValue.cpf, betRate),
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