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

const ninja_raccoon_ganho_jsons = {
    [0]: {
        aw: 0.72,
        awip: null,
        bl: 953601.09,
        blab: 953600.37,
        blb: 953600.37,
        cs: 0.02,
        ctw: 0,
        cwc: 0,
        fb: null,
        fs: null,
        fstc: {"4":2},
        ge: [1,11],
        gm: 3,
        gwt: -1,
        hashr: "2:4;5;13;10;9;12#3;5;13;13;13;7#13;2;0;11;11;13#MV#0#MT#1#MG#0###3958",
        imw: false,
        lw: null,
        ml: 1,
        mlw: null,
        mr: null,
        mrl: [6,8,8,9,12,5,9,7,5,7,13,4,2,11,13,8,13,11],
        mrns: [[6,8],[9,12],[9],[7],[2],[8]],
        mrtw: 0,
        msnww: null,
        mwip: null,
        mwp: null,
        mwpl: null,
        np: 0,
        nst: 1,
        ocr: null,
        omrl: [6,8,8,9,12,5,9,7,5,7,13,4,2,11,13,8,13,11],
        orl: [4,3,13,5,5,2,13,13,0,10,13,11,9,13,11,12,7,13],
        pcwc: 0,
        pf: 1,
        pmt: null,
        psid: "1861767922958303232",
        rl: [4,3,13,5,5,2,13,13,0,10,13,11,9,13,11,12,7,13],
        rns: null,
        rtw: 0,
        rwsp: {},
        sc: 0,
        sid: "1861790862026309632",
        snww: null,
        ssaw: 0.72,
        st: 4,
        tb: 0.4,
        tbb: 0.4,
        tw: 0,
        twbm: 0,
        wbn: null,
        wfg: null,
        wid: 0,
        wip: null,
        wk: "0_C",
        wp: null,
        wpl: null,
        wt: "C",
    },
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    linhaganho() {
        return __awaiter(this, void 0, void 0, function* () {
            const numeroAleatorio = Math.floor(Math.random() * 1);
            console.log("LINHA DE PERDA " + numeroAleatorio + " ");
            return ninja_raccoon_ganho_jsons[numeroAleatorio];
        });
    },
    GetJson(json) {
        return ninja_raccoon_ganho_jsons[json]
    } 
};