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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
exports.default = {
    savejsonspin(id, json) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield database_1.default.query("UPDATE songkranspljson SET JSON = ? WHERE id = ?", [json, id]);
            return res[0];
        });
    },
    getjsontiger(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield database_1.default.query("SELECT * FROM songkranspljson WHERE id=?", [id]);
            return res[0];
        });
    },
    createjsontiger(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield database_1.default.query("INSERT INTO songkranspljson (id) VALUES (?);", [id]);
            return res[0];
        });
    },

    createAndReturnjsontiger(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield database_1.default.query("CALL create_and_return_songkranspljson(?);", [id]);
            return res[0][0];
        });
    },
    completecallAndSaveJsonSpin(call_id, user_id, json_pin) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield database_1.default.query("CALL sp_completecall_savejson_songkranspljson(?,?,?);", [call_id, user_id, json_pin]);
            return res[0][0];
        });
    },
    subtrairstepscallAndSaveJsonSpin(call_id, user_id, json_pin) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield database_1.default.query("CALL sp_subtrirstepscall_savejson_songkranspljson(?,?,?);", [call_id, user_id, json_pin]);
            return res[0][0];
        });
    },
};
