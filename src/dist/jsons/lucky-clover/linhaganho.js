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

const lucky_clover_ganho_jsons = {
    [0]: {
        aw: 0.12,
        bl: 952942.47,
        blab: 952942.35,
        blb: 952942.35,
        crtw: 0,
        cs: 0.02,
        ctw: 0.12,
        cwc: 1,
        fb: null,
        fs: null,
        fstc: {"4":1},
        ge: [3,11],
        gm: 1,
        gwt: -1,
        hashr: "1:11;6;11;7;3;11#8;6;8;4;8;11#8;9;8;4;8;9#9;9;9;33;9;9#9;9;1;6;9;9#R#9#030413142343445354#MV#0#MT#1#MG#0.12###9646",
        ifa: true,
        imw: false,
        inwsf: false,
        mf: {},
        ml: 1,
        mr: null,
        np: 0.12,
        nst: 1,
        nus: -1,
        nwpl: [],
        ocr: null,
        orl: [11,8,8,10,10,6,6,9,10,10,11,8,8,10,1,7,4,4,33,6,3,8,8,10,10,11,11,9,10,10],
        pcwc: 0,
        pf: 1,
        pmt: null,
        psid: "1861637721062465536",
        ptbr: [0,1,2,5,6,7,10,11,12,15,16,17,19,20,21,22,25,26,27],
        ptu: [],
        rl: [11,8,8,9,9,6,6,9,9,9,11,8,8,9,1,7,4,4,33,6,3,8,8,9,9,11,11,9,9,9],
        rns: [[11,8,8],[6,6,9],[11,8,8],[7,4,4,33,6],[3,8,8],[11,11,9]],
        rwsp: {"9":6},
        sc: 1,
        sid: "1861751192236154880",
        ssaw: 0.12,
        st: 4,
        sw: {"9":0.12},
        tb: 0.4,
        tbb: 0.4,
        tw: 0.12,
        twbm: 0.12,
        usf: {"18":[10,9]},
        wbn: null,
        wfg: null,
        wid: 0,
        wk: "0_C",
        wp: {"9":[3,4,8,9,13,23,24,28,29]},
        wpl: [3,4,8,9,13,23,24,28,29],
        wsc: {"9":9},
        wt: "C",
    },
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    linhaganho() {
        return __awaiter(this, void 0, void 0, function* () {
            const numeroAleatorio = Math.floor(Math.random() * 1);
            console.log("LINHA DE PERDA " + numeroAleatorio + " ");
            return lucky_clover_ganho_jsons[numeroAleatorio];
        });
    },
    GetJson(json) {
        return lucky_clover_ganho_jsons[json]
    } 
};