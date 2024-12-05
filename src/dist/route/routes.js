"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apicontroller_1 = __importDefault(require("../controllers/apicontroller"));

const routes = (0, express_1.Router)();

//API CONTROLLERS
routes.post("/login_agent", apicontroller_1.default.LoginAgent);
routes.post("/agent_rtp_get", apicontroller_1.default.AgentRtpGet);
routes.post("/agent_rtp_set", apicontroller_1.default.AgentRtpSet);
routes.post("/agent_url_get", apicontroller_1.default.AgentUrlGet);
routes.post("/agent_url_set", apicontroller_1.default.AgentUrlSet);
routes.post("/new_agent", apicontroller_1.default.NewAgent);
routes.post("/agent_user_get", apicontroller_1.default.AgentUserGet);
routes.post("/agent_ggt_set", apicontroller_1.default.AgentGgtSet);
routes.post("/get_agent_list", apicontroller_1.default.GetAgentList);
routes.post("/api_total_get", apicontroller_1.default.ApiTotalGet);
routes.post("/get_agent_user_list", apicontroller_1.default.GetAgentUserList);
routes.post("/get_user_game_history", apicontroller_1.default.GetUserGameHistory);
routes.post("/agent_api_get", apicontroller_1.default.AgentApiGet);
routes.post("/api_mode_set", apicontroller_1.default.ApiModeSet);
routes.post("/user_score_get", apicontroller_1.default.UserScoreGet);
routes.post("/agent_key_set", apicontroller_1.default.AgentKeySet);






exports.default = routes;


