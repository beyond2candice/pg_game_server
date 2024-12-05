const game_config_json= {
    [126]: {
        Name:{def:"Baccarat Deluxe", pt:"Baccarat Deluxe"},
        rtp: {
            Default: {min: 140.0,max: 140.0}
        },
        ows: {itare: false,tart: 0,igare: false,gart: 0},
        jws: null
    },

    ["any"]: {
        Name:{def:"Baccarat Deluxe", pt:"Baccarat Deluxe"},
        rtp: {
            Default: {min: 140.0,max: 140.0}
        },
        ows: {itare: false,tart: 0,igare: false,gart: 0},
        jws: null
    },
};

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
   GetName(game_code, lang) {
        let gameConf = game_config_json[game_code];
        if (!gameConf) {
            gameConf = game_config_json["any"];
        }
        let name = gameConf.Name[lang];
        if (name) {
            return name;
        }
        return gameConf.Name.def;
    },
    GetConfig(game_code) {
        let gameConf = game_config_json[game_code];
        if (!gameConf) {
            gameConf = game_config_json["any"];
        }
        return gameConf;
    }, 
};
