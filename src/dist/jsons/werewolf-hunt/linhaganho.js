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

const werewolf_hunt_ganho_jsons = {
    [0]: {
        aw: 0.72,
        bl: 948891.34,
        blab: 948890.62,
        blb: 948890.62,
        cs: 0.02,
        ctw: 0,
        cwc: 1,
        fb: null,
        fs: null,
        fstc: {"4":2},
        ge: [1,11],
        gm: 1,
        gwt: -1,
        hashr: "2:9;7;3;6;9;5#9;7;5;6;8;3#8;3;3;4;8;10#11;5;8;11;6;6#9;11;3;8#MV#0#MT#1#MG#0.72###8784",
        imw: false,
        lw: null,
        ml: 1,
        mp: {},
        mr: null,
        np: 0.72,
        nst: 1,
        ocr: null,
        orl: [9,9,8,11,7,7,3,5,9,3,5,3,8,11,6,6,4,11,3,9,8,8,6,8,5,3,10,6],
        pcwc: 0,
        pf: 1,
        pmt: null,
        psid: "1861638132368322560",
        rl: [9,9,8,11,7,7,3,5,9,3,5,3,8,11,6,6,4,11,3,9,8,8,6,8,5,3,10,6],
        rns: [[9],[7],[3,5],[6],[],[]],
        rwsp: null,
        sc: 0,
        sid: "1861706052800786432",
        snww: null,
        ssaw: 0.72,
        st: 4,
        tb: 0.4,
        tbb: 0.4,
        tw: 0.72,
        wbn: null,
        wdp: [],
        wfg: null,
        wid: 0,
        wk: "0_C",
        wp: null,
        wpl: [],
        wt: "C",
    },
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    linhaganho() {
        return __awaiter(this, void 0, void 0, function* () {
            const numeroAleatorio = Math.floor(Math.random() * 1);
            console.log("LINHA DE PERDA " + numeroAleatorio + " ");
            return werewolf_hunt_ganho_jsons[numeroAleatorio];
        });
    },
    GetJson(json) {
        return werewolf_hunt_ganho_jsons[json]
    } 
};