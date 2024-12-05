"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        try {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        } catch(e) {
            console.log(e);
        }
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });


let AGENT_MAP = {};
let AGENT_TOKEN_TO_ID_MAP = {};
let SECRET_KEY_TO_ID_MAP = {};
let ONLINE_USER_MAP = new Map();
let SOCKET_2_USER_GAME_INFO = new Map();

exports.default = {
   getAgentById(id) {
        let agentCache = AGENT_MAP[id];
        let nowSec = Math.floor(Date.now()/1000);
        if (agentCache) {
            if(agentCache.ExpireSec >= nowSec) {
                delete AGENT_MAP.id;
                return null;
            }
            return agentCache.data;
        }
        return null;
   },
    getAgentByToken(token) {
        let id = AGENT_TOKEN_TO_ID_MAP[token];
        if (!id) {
            return null;
        }
        return this.getAgentById(id);
    },

    getAgentBySecretKey(secretKey) {
        let id = SECRET_KEY_TO_ID_MAP.get(token);
        if (!id) {
            return null;
        } 
        return this.getAgentById(id);
    },
    updateAgent(agent) {
        AGENT_MAP[agent.id]= agent;
        AGENT_TOKEN_TO_ID_MAP[agent.agentToken] = agent.id;
        SECRET_KEY_TO_ID_MAP[agent.secretKey] = agent.id;
    },
    updateAgentFields(id, fields) {
        let agent = this.getAgentById(id);
        if (agent == null) {
            return; 
        }

        for (let key in fields) {
            agent[key] = fields[key];
        }
    },

    getGameUser(user_name, gameid) {
        const game_user = ONLINE_USER_MAP.get(user_name);
        if (game_user)
        {
            let gameLst = game_user.GameList;
            for (let i=0; i<gameLst.length; i++) {
                if (gameLst[i].GameId == gameid) {
                    return {User:game_user.User, Game:gameLst[i]};
                }
            }
        }
        return null; 
    },
    addSocketUser(sck, gameid, user) {
        SOCKET_2_USER_GAME_INFO.set(sck, {UserName:user.username, GameId:gameid});
        let game_user = ONLINE_USER_MAP.get(user.username);
        if (game_user) {
            game_user.GameList = [{GameId:gameid}];
            //for (let i=0; i<gamelst.length; i++) {
            //    if (gamelst[i].GameId == gameid) {
            //        return;
            //    }
            //}
            //game_user.GameList.push({GameId:gameid})
        } else {
            ONLINE_USER_MAP.set(user.username, {GameList:[{GameId:gameid}], User:user});
        }
        
    },
    updateUserFields(user_code, game_id, gamefields, userfields) {
        let game_user = ONLINE_USER_MAP.get(user_code);
        if (!game_user) {
            return;
        }
        if (gamefields) {
            let game_lst = game_user.GameList;
            for (let i=0; i<game_lst.length; i++) {
                if (game_lst[i].GameId == game_id) {
                    for (let key in gamefields) {
                        game_lst[i][key] = gamefields[key];
                    }
                    break;
                }
            }
        }
        if (userfields) {
            let user = game_user.User;
            if (!user) {
                return;
            }
            for(let key in userfields) {
                user[key] = userfields[key];
            }
        }
    },
    removeSocketUser(sck) {
        let user_gameinfo = SOCKET_2_USER_GAME_INFO.get(sck);
        if (!user_gameinfo) {
            return;
        }
        let game_user = ONLINE_USER_MAP.get(user_gameinfo.UserName);   
        if (game_user) {
            let game_lst = game_user.GameList;
            for (let i=0; i<game_lst.length; i++) {
                if (game_lst[i].GameId == user_gameinfo.GameId) {
                    if (i+1 != game_lst.length) {
                        game_user.GameList[i] = game_user.GameList[game_lst.length - 1]
                    }
                    game_user.GameList.pop();
                    break;
                }
            }
            if (game_user.GameList.length < 1) {
                ONLINE_USER_MAP.delete(user_gameinfo.UserName);
            }
        }
        SOCKET_2_USER_GAME_INFO.delete(sck);
    },
    GetOnLineUserList() {
        return ONLINE_USER_MAP;
    }
};