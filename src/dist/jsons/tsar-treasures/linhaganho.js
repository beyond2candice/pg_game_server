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

const tsar_treasures_ganho_jsons = {
    [0]: {
        aw: 0.4,
        bl: 948417.36,
        blab: 948416.96,
        blb: 948416.96,
        cs: 0.02,
        ctw: 0,
        cwc: 0,
        fb: null,
        fs: null,
        fstc: {"4":2},
        ge: [1,11],
        gm: 3,
        gwt: -1,
        hashr: "2:6;5;5;8;0#9;9;8;3;6#4;9;8;5;9#5;4;9#MV#0#MT#3#MG#0###163",
        imw: false,
        lw: null,
        ml: 1,
        mr: null,
        np: 0,
        nst: 1,
        ocr: null,
        orl: [6,9,4,5,9,9,5,5,8,8,4,8,3,5,9,2,6,9],
        pcwc: 0,
        pf: 1,
        pmt: null,
        psid: "1861425504199020544",
        rl: [6,9,4,5,9,9,5,5,8,8,4,8,3,5,9,0,6,9],
        rns: [[6],[5,9],[5],[8],[]],
        rwsp: null,
        sc: 0,
        sid: "1861673010891755520",
        snww: null,
        ssaw: 0.4,
        st: 4,
        tb: 0.4,
        tbb: 0.4,
        tsp: [15],
        tw: 0,
        twbm: 0,
        wbn: null,
        wfg: null,
        wid: 0,
        wk: "0_C",
        wp: null,
        wt: "C",
    },
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    linhaganho() {
        return __awaiter(this, void 0, void 0, function* () {
            const numeroAleatorio = Math.floor(Math.random() * 1);
            console.log("LINHA DE PERDA " + numeroAleatorio + " ");
            return tsar_treasures_ganho_jsons[numeroAleatorio];
        });
    },
    GetJson(json) {
        return tsar_treasures_ganho_jsons[json]
    } 
};