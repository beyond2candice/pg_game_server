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

const buffalo_win_ganho_jsons = {
    [0]: {
        acw: 7.2,
        aw: 14.4,
        bl: 99954.4,
        blab: 99940,
        blb: 99940,
        bsc: null,
        bwp: null,
        bwsc: null,
        cs: 0.3,
        ctw: 7.2,
        cwc: 1,
        es: null,
        fb: null,
        fs: null,
        fstc: {"4":1},
        ge: [1,11],
        gm: 2,
        gwt: -1,
        hashr: "1:12;0;2#12;0;8#2;2;8#8;4;8#R#8#031011212223#MV#0#MT#1#MG#14.40#",
        ix: false,
        lrs: null,
        lw: null,
        ml: 2,
        mr: null,
        np: 14.4,
        nst: 1,
        ocr: null,
        orl: [12,12,2,8,0,0,2,4,2,8,8,8],
        pcwc: 0,
        pf: 4,
        pmt: null,
        psid: "1843682887045414400",
        rl: [12,12,2,8,0,0,2,4,2,8,8,8,6,6,2,5],
        rs: {"ebwp":null,"ebwsc":null,"ecrl":[6,6,2,5],"ewp":null,"nes":null,"oecrl":[6,6,2,5],"pr":null,"sr":8},
        rwsp: null,
        s: 6,
        sc: 0,
        scs: {"8":6},
        sid: "1843686630314933760",
        st: 4,
        sw: {"8":[2,7.2]},
        tb: 0,
        tbb: 6,
        tw: 14.4,
        twbm: 7.2,
        wbn: null,
        wfg: null,
        wid: 0,
        wk: "0_C",
        wp: {"8":[3,4,5,9,10,11]},
        wpl: [3,4,5,9,10,11],
        wt: "C",
    },
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    linhaganho() {
        return __awaiter(this, void 0, void 0, function* () {
            const numeroAleatorio = Math.floor(Math.random() * 1);
            console.log("LINHA DE PERDA " + numeroAleatorio + " ");
            return buffalo_win_ganho_jsons[numeroAleatorio];
        });
    },
    GetJson(json) {
        return buffalo_win_ganho_jsons[json]
    } 
};