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

const crypt_fortune_ganho_jsons = {
    [0]: {
        aw: 0,
        bl: 100151.2,
        blab: 100151.2,
        blb: 100151.2,
        cs: 0.3,
        ctw: 0,
        cwc: 0,
        fb: null,
        fs: null,
        fstc: {"4":1},
        ge: [1,11],
        gm: 0,
        gwt: -1,
        hashr: "1:11;10;2;3;9;6#2;10;2;4;9;10#2;10;9;90;9;10#2;9;10;6#R#2#0102132021#MV#0#MT#1#MG#0.00#",
        lw: {"2":24},
        ml: 2,
        mr: null,
        mwp: null,
        np: 0,
        nst: 1,
        nswp: null,
        ocr: null,
        orl: [11,2,2,10,10,10,2,2,2,9,9,3,4,90,10,9,9,9,6,6,10,10,-1,-1,-1,-1,-1,-1,3,3,11,11,11,9,9,3],
        pcwc: 0,
        pf: 4,
        pmt: null,
        psid: "1844318467940875776",
        rl: [11,2,2,10,10,10,2,2,2,9,9,3,4,90,10,9,9,9,6,6,10,10,-1,-1,-1,-1,-1,-1,3,3,11,11,11,9,9,3],
        rns: [[],[],[],[3,4],[],[]],
        rwsp: {"2":10},
        sc: 0,
        sid: "1844318476279152128",
        snww: {"2":4},
        ssaw: 0,
        st: 4,
        swp: null,
        tb: 0,
        tbb: 12,
        tw: 0,
        wbn: null,
        wfg: null,
        wid: 0,
        wk: "0_C",
        wp: {"2":[1,2,6,7,8]},
        wt: "C",
    },
    [1]: {
        aw: 0,
        bl: 100151.2,
        blab: 100151.2,
        blb: 100151.2,
        cs: 0.3,
        ctw: 0,
        cwc: 0,
        fb: null,
        fs: null,
        fstc: {"4":2},
        ge: [1,11],
        gm: 0,
        gwt: -1,
        hashr: "2:11;2;12;8;13;5#2;12;13;10;6;6#2;6;2;6;2;6#2;2;90;3#R#2#010210132223#MV#0#MT#1#MG#0.00#",
        lw: {"2":48},
        ml: 2,
        mr: null,
        mwp: null,
        np: 0,
        nst: 1,
        nswp: null,
        ocr: null,
        orl: [11,2,2,2,12,6,2,12,13,2,2,8,10,6,90,13,6,2,3,5,6,6,-1,-1,4,-1,-1,11,3,3,11,11,11,-1,-1,3],
        pcwc: 0,
        pf: 4,
        pmt: null,
        psid: "1844318467940875776",
        rl: [11,2,2,2,12,6,2,12,13,2,2,8,10,6,90,13,6,2,3,5,6,6,-1,-1,4,-1,-1,11,3,3,11,11,11,-1,-1,3],
        rns: [[],[2,12,6],[12,13],[8,10,6],[13,6,2],[]],
        rwsp: {"2":10},
        sc: 0,
        sid: "1844318484684537344",
        snww: {"2":8},
        ssaw: 0,
        st: 4,
        swp: null,
        tb: 0,
        tbb: 12,
        tw: 0,
        wbn: null,
        wfg: null,
        wid: 0,
        wk: "0_C",
        wp: {"2":[1,2,3,6,9,10]},
        wt: "C",
    },
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    linhaganho() {
        return __awaiter(this, void 0, void 0, function* () {
            const numeroAleatorio = Math.floor(Math.random() * 2);
            console.log("LINHA DE PERDA " + numeroAleatorio + " ");
            return crypt_fortune_ganho_jsons[numeroAleatorio];
        });
    },
    GetJson(json) {
        return crypt_fortune_ganho_jsons[json]
    } 
};