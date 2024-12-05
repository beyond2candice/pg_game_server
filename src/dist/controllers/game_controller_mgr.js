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

//GameContolls
const candybonanzaController = __importDefault(require("./candy-bonanza/gameController"));
const wildbanditoController = __importDefault(require("./wild-bandito/gameController"));
const heiststakesController = __importDefault(require("./heist-stakes/gameController"));
const lgdmonkeykgController = __importDefault(require("./lgd-monkey-kg/gameController"));
const buffalowinController = __importDefault(require("./buffalo-win/gameController"));
const cryptfortuneController = __importDefault(require("./crypt-fortune/gameController"));
const emojirichesController = __importDefault(require("./emoji-riches/gameController"));
const sprmktspreeController = __importDefault(require("./sprmkt-spree/gameController"));
const spiritwonderController = __importDefault(require("./spirit-wonder/gameController"));
const destsunmoonController = __importDefault(require("./dest-sun-moon/gameController"));
const garudagemsController = __importDefault(require("./garuda-gems/gameController"));
const roosterrblController = __importDefault(require("./rooster-rbl/gameController"));
const battlegroundController = __importDefault(require("./battleground/gameController"));
const btrflyblossomController = __importDefault(require("./btrfly-blossom/gameController"));
const fortunetigerController = __importDefault(require("./fortune-tiger/gameController"));
const prosperftreeController = __importDefault(require("./prosper-ftree/gameController"));
const asgardianrsController = __importDefault(require("./asgardian-rs/gameController"));
const alchemygoldController = __importDefault(require("./alchemy-gold/gameController"));
const dinerdelightsController = __importDefault(require("./diner-delights/gameController"));
const midasfortuneController = __importDefault(require("./midas-fortune/gameController"));
const bakerybonanzaController = __importDefault(require("./bakery-bonanza/gameController"));
const songkransplController = __importDefault(require("./songkran-spl/gameController"));
const dragonhatch2Controller = __importDefault(require("./dragon-hatch-2/gameController"));
const wildape3258Controller = __importDefault(require("./wild-ape-3258/gameController"));
const sprgolfdriveController = __importDefault(require("./spr-golf-drive/gameController"));
const fortunerabbitController = __importDefault(require("./fortune-rabbit/gameController"));
const cruiseroyaleController = __importDefault(require("./cruise-royale/gameController"));
const cashmaniaController = __importDefault(require("./cash-mania/gameController"));
const fortunedragonController = __importDefault(require("./fortune-dragon/gameController"));
const piggygoldController = __importDefault(require("./piggy-gold/gameController"));
const jungledelightController = __importDefault(require("./jungle-delight/gameController"));
const ganeshagoldController = __importDefault(require("./ganesha-gold/gameController"));
const doublefortuneController = __importDefault(require("./double-fortune/gameController"));
const thegreaticescapeController = __importDefault(require("./the-great-icescape/gameController"));
const captainsbountyController = __importDefault(require("./captains-bounty/gameController"));
const dragonhatchController = __importDefault(require("./dragon-hatch/gameController"));
const vampirescharmController = __importDefault(require("./vampires-charm/gameController"));
const leprechaunrichesController = __importDefault(require("./leprechaun-riches/gameController"));
const gemsaviourconquestController = __importDefault(require("./gem-saviour-conquest/gameController"));
const mahjongwaysController = __importDefault(require("./mahjong-ways/gameController"));
const fortunemouseController = __importDefault(require("./fortune-mouse/gameController"));
const bikiniparadiseController = __importDefault(require("./bikini-paradise/gameController"));
const candyburstController = __importDefault(require("./candy-burst/gameController"));
const mahjongways2Controller = __importDefault(require("./mahjong-ways2/gameController"));
const ganeshafortuneController = __importDefault(require("./ganesha-fortune/gameController"));
const phoenixrisesController = __importDefault(require("./phoenix-rises/gameController"));
const wildfireworksController = __importDefault(require("./wild-fireworks/gameController"));
const galacticgemsController = __importDefault(require("./galactic-gems/gameController"));
const treasuresaztecController = __importDefault(require("./treasures-aztec/gameController"));
const jewelsprosperController = __importDefault(require("./jewels-prosper/gameController"));
const gdnicefireController = __importDefault(require("./gdn-ice-fire/gameController"));
const balivacationController = __importDefault(require("./bali-vacation/gameController"));
const majestictsController = __importDefault(require("./majestic-ts/gameController"));
const jackfrostsController = __importDefault(require("./jack-frosts/gameController"));
const fortuneoxController = __importDefault(require("./fortune-ox/gameController"));
const zombieoutbrkController = __importDefault(require("./zombie-outbrk/gameController"));
const anubiswrathController = __importDefault(require("./anubis-wrath/gameController"));
const wildbountysdController = __importDefault(require("./wild-bounty-sd/gameController"));

//GameJsonResults
const candybonanzajsonResult = __importDefault(require("../jsons/candy-bonanza/jsonresult"));
const wildbanditojsonResult = __importDefault(require("../jsons/wild-bandito/jsonresult"));
const heiststakesjsonResult = __importDefault(require("../jsons/heist-stakes/jsonresult"));
const lgdmonkeykgjsonResult = __importDefault(require("../jsons/lgd-monkey-kg/jsonresult"));
const buffalowinjsonResult = __importDefault(require("../jsons/buffalo-win/jsonresult"));
const cryptfortunejsonResult = __importDefault(require("../jsons/crypt-fortune/jsonresult"));
const emojirichesjsonResult = __importDefault(require("../jsons/emoji-riches/jsonresult"));
const sprmktspreejsonResult = __importDefault(require("../jsons/sprmkt-spree/jsonresult"));
const spiritwonderjsonResult = __importDefault(require("../jsons/spirit-wonder/jsonresult"));
const destsunmoonjsonResult = __importDefault(require("../jsons/dest-sun-moon/jsonresult"));
const garudagemsjsonResult = __importDefault(require("../jsons/garuda-gems/jsonresult"));
const roosterrbljsonResult = __importDefault(require("../jsons/rooster-rbl/jsonresult"));
const battlegroundjsonResult = __importDefault(require("../jsons/battleground/jsonresult"));
const btrflyblossomjsonResult = __importDefault(require("../jsons/btrfly-blossom/jsonresult"));
const fortunetigerjsonResult = __importDefault(require("../jsons/fortune-tiger/jsonresult"));
const prosperftreejsonResult = __importDefault(require("../jsons/prosper-ftree/jsonresult"));
const asgardianrsjsonResult = __importDefault(require("../jsons/asgardian-rs/jsonresult"));
const alchemygoldjsonResult = __importDefault(require("../jsons/alchemy-gold/jsonresult"));
const dinerdelightsjsonResult = __importDefault(require("../jsons/diner-delights/jsonresult"));
const midasfortunejsonResult = __importDefault(require("../jsons/midas-fortune/jsonresult"));
const bakerybonanzajsonResult = __importDefault(require("../jsons/bakery-bonanza/jsonresult"));
const songkranspljsonResult = __importDefault(require("../jsons/songkran-spl/jsonresult"));
const dragonhatch2jsonResult = __importDefault(require("../jsons/dragon-hatch-2/jsonresult"));
const wildape3258jsonResult = __importDefault(require("../jsons/wild-ape-3258/jsonresult"));
const sprgolfdrivejsonResult = __importDefault(require("../jsons/spr-golf-drive/jsonresult"));
const fortunerabbitjsonResult = __importDefault(require("../jsons/fortune-rabbit/jsonresult"));
const cruiseroyalejsonResult = __importDefault(require("../jsons/cruise-royale/jsonresult"));
const cashmaniajsonResult = __importDefault(require("../jsons/cash-mania/jsonresult"));
const fortunedragonjsonResult = __importDefault(require("../jsons/fortune-dragon/jsonresult"));
const piggygoldjsonResult = __importDefault(require("../jsons/piggy-gold/jsonresult"));
const jungledelightjsonResult = __importDefault(require("../jsons/jungle-delight/jsonresult"));
const ganeshagoldjsonResult = __importDefault(require("../jsons/ganesha-gold/jsonresult"));
const doublefortunejsonResult = __importDefault(require("../jsons/double-fortune/jsonresult"));
const thegreaticescapejsonResult = __importDefault(require("../jsons/the-great-icescape/jsonresult"));
const captainsbountyjsonResult = __importDefault(require("../jsons/captains-bounty/jsonresult"));
const dragonhatchjsonResult = __importDefault(require("../jsons/dragon-hatch/jsonresult"));
const vampirescharmjsonResult = __importDefault(require("../jsons/vampires-charm/jsonresult"));
const leprechaunrichesjsonResult = __importDefault(require("../jsons/leprechaun-riches/jsonresult"));
const gemsaviourconquestjsonResult = __importDefault(require("../jsons/gem-saviour-conquest/jsonresult"));
const mahjongwaysjsonResult = __importDefault(require("../jsons/mahjong-ways/jsonresult"));
const fortunemousejsonResult = __importDefault(require("../jsons/fortune-mouse/jsonresult"));
const bikiniparadisejsonResult = __importDefault(require("../jsons/bikini-paradise/jsonresult"));
const candyburstjsonResult = __importDefault(require("../jsons/candy-burst/jsonresult"));
const mahjongways2jsonResult = __importDefault(require("../jsons/mahjong-ways2/jsonresult"));
const ganeshafortunejsonResult = __importDefault(require("../jsons/ganesha-fortune/jsonresult"));
const phoenixrisesjsonResult = __importDefault(require("../jsons/phoenix-rises/jsonresult"));
const wildfireworksjsonResult = __importDefault(require("../jsons/wild-fireworks/jsonresult"));
const galacticgemsjsonResult = __importDefault(require("../jsons/galactic-gems/jsonresult"));
const treasuresaztecjsonResult = __importDefault(require("../jsons/treasures-aztec/jsonresult"));
const jewelsprosperjsonResult = __importDefault(require("../jsons/jewels-prosper/jsonresult"));
const gdnicefirejsonResult = __importDefault(require("../jsons/gdn-ice-fire/jsonresult"));
const balivacationjsonResult = __importDefault(require("../jsons/bali-vacation/jsonresult"));
const majestictsjsonResult = __importDefault(require("../jsons/majestic-ts/jsonresult"));
const jackfrostsjsonResult = __importDefault(require("../jsons/jack-frosts/jsonresult"));
const fortuneoxjsonResult = __importDefault(require("../jsons/fortune-ox/jsonresult"));
const zombieoutbrkjsonResult = __importDefault(require("../jsons/zombie-outbrk/jsonresult"));
const anubiswrathjsonResult = __importDefault(require("../jsons/anubis-wrath/jsonresult"));
const wildbountysdjsonResult = __importDefault(require("../jsons/wild-bounty-sd/jsonresult"));


//初始化GameName->GameCode的关系
let GAME_NAME_TO_GAME_CODE = {};
GAME_NAME_TO_GAME_CODE["candy-bonanza"] = 100;
GAME_NAME_TO_GAME_CODE["wild-bandito"] = 104;
GAME_NAME_TO_GAME_CODE["heist-stakes"] = 105;
GAME_NAME_TO_GAME_CODE["lgd-monkey-kg"] = 107;
GAME_NAME_TO_GAME_CODE["buffalo-win"] = 108;
GAME_NAME_TO_GAME_CODE["crypt-fortune"] = 113;
GAME_NAME_TO_GAME_CODE["emoji-riches"] = 114;
GAME_NAME_TO_GAME_CODE["sprmkt-spree"] = 115;
GAME_NAME_TO_GAME_CODE["spirit-wonder"] = 119;
GAME_NAME_TO_GAME_CODE["dest-sun-moon"] = 121;
GAME_NAME_TO_GAME_CODE["garuda-gems"] = 122;
GAME_NAME_TO_GAME_CODE["rooster-rbl"] = 123;
GAME_NAME_TO_GAME_CODE["battleground"] = 124;
GAME_NAME_TO_GAME_CODE["btrfly-blossom"] = 125;
GAME_NAME_TO_GAME_CODE["fortune-tiger"] = 126;
GAME_NAME_TO_GAME_CODE["prosper-ftree"] = 1312883;
GAME_NAME_TO_GAME_CODE["asgardian-rs"] = 1340277;
GAME_NAME_TO_GAME_CODE["alchemy-gold"] = 1368367;
GAME_NAME_TO_GAME_CODE["diner-delights"] = 1372643;
GAME_NAME_TO_GAME_CODE["midas-fortune"] = 1402846;
GAME_NAME_TO_GAME_CODE["bakery-bonanza"] = 1418544;
GAME_NAME_TO_GAME_CODE["songkran-spl"] = 1448762;
GAME_NAME_TO_GAME_CODE["dragon-hatch-2"] = 1451122;
GAME_NAME_TO_GAME_CODE["wild-ape-3258"] = 1508783;
GAME_NAME_TO_GAME_CODE["spr-golf-drive"] = 1513328;
GAME_NAME_TO_GAME_CODE["fortune-rabbit"] = 1543462;
GAME_NAME_TO_GAME_CODE["cruise-royale"] = 1473388;
GAME_NAME_TO_GAME_CODE["cash-mania"] = 1682240;
GAME_NAME_TO_GAME_CODE["fortune-dragon"] = 1695365;
GAME_NAME_TO_GAME_CODE["piggy-gold"] = 39;
GAME_NAME_TO_GAME_CODE["jungle-delight"] = 40;
GAME_NAME_TO_GAME_CODE["ganesha-gold"] = 42;
GAME_NAME_TO_GAME_CODE["double-fortune"] = 48;
GAME_NAME_TO_GAME_CODE["the-great-icescape"] = 53;
GAME_NAME_TO_GAME_CODE["captains-bounty"] = 54;
GAME_NAME_TO_GAME_CODE["dragon-hatch"] = 57;
GAME_NAME_TO_GAME_CODE["vampires-charm"] = 58;
GAME_NAME_TO_GAME_CODE["leprechaun-riches"] = 60;
GAME_NAME_TO_GAME_CODE["gem-saviour-conquest"] = 62;
GAME_NAME_TO_GAME_CODE["mahjong-ways"] = 65;
GAME_NAME_TO_GAME_CODE["fortune-mouse"] = 68;
GAME_NAME_TO_GAME_CODE["bikini-paradise"] = 69;
GAME_NAME_TO_GAME_CODE["candy-burst"] = 70;
GAME_NAME_TO_GAME_CODE["mahjong-ways2"] = 74;
GAME_NAME_TO_GAME_CODE["ganesha-fortune"] = 75;
GAME_NAME_TO_GAME_CODE["phoenix-rises"] = 82;
GAME_NAME_TO_GAME_CODE["wild-fireworks"] = 83;
GAME_NAME_TO_GAME_CODE["galactic-gems"] = 86;
GAME_NAME_TO_GAME_CODE["treasures-aztec"] = 87;
GAME_NAME_TO_GAME_CODE["jewels-prosper"] = 88;
GAME_NAME_TO_GAME_CODE["gdn-ice-fire"] = 91;
GAME_NAME_TO_GAME_CODE["bali-vacation"] = 94;
GAME_NAME_TO_GAME_CODE["majestic-ts"] = 95;
GAME_NAME_TO_GAME_CODE["jack-frosts"] = 97;
GAME_NAME_TO_GAME_CODE["fortune-ox"] = 98;
GAME_NAME_TO_GAME_CODE["zombie-outbrk"] = 1635221;
GAME_NAME_TO_GAME_CODE["anubis-wrath"] = 1623475;
GAME_NAME_TO_GAME_CODE["wild-bounty-sd"] = 135;

// 初始化PlatformName->GameCode的关系
let PLATFORM_GAME_NAME_TO_GAME_CODE = {};
PLATFORM_GAME_NAME_TO_GAME_CODE["candy-bonanza"] = 100;
PLATFORM_GAME_NAME_TO_GAME_CODE["wild-bandito"] = 104;
PLATFORM_GAME_NAME_TO_GAME_CODE["heist-stakes"] = 105;
PLATFORM_GAME_NAME_TO_GAME_CODE["lgd-monkey-kg"] = 107;
PLATFORM_GAME_NAME_TO_GAME_CODE["buffalo-win"] = 108;
PLATFORM_GAME_NAME_TO_GAME_CODE["crypt-fortune"] = 113;
PLATFORM_GAME_NAME_TO_GAME_CODE["emoji-riches"] = 114;
PLATFORM_GAME_NAME_TO_GAME_CODE["sprmkt-spree"] = 115;
PLATFORM_GAME_NAME_TO_GAME_CODE["spirit-wonder"] = 119;
PLATFORM_GAME_NAME_TO_GAME_CODE["dest-sun-moon"] = 121;
PLATFORM_GAME_NAME_TO_GAME_CODE["garuda-gems"] = 122;
PLATFORM_GAME_NAME_TO_GAME_CODE["rooster-rbl"] = 123;
PLATFORM_GAME_NAME_TO_GAME_CODE["battleground"] = 124;
PLATFORM_GAME_NAME_TO_GAME_CODE["btrfly-blossom"] = 125;
PLATFORM_GAME_NAME_TO_GAME_CODE["fortune-tiger"] = 126;
PLATFORM_GAME_NAME_TO_GAME_CODE["prosper-ftree"] = 1312883;
PLATFORM_GAME_NAME_TO_GAME_CODE["asgardian-rs"] = 1340277;
PLATFORM_GAME_NAME_TO_GAME_CODE["alchemy-gold"] = 1368367;
PLATFORM_GAME_NAME_TO_GAME_CODE["diner-delights"] = 1372643;
PLATFORM_GAME_NAME_TO_GAME_CODE["midas-fortune"] = 1402846;
PLATFORM_GAME_NAME_TO_GAME_CODE["bakery-bonanza"] = 1418544;
PLATFORM_GAME_NAME_TO_GAME_CODE["songkran-spl"] = 1448762;
PLATFORM_GAME_NAME_TO_GAME_CODE["dragon-hatch2"] = 1451122;
PLATFORM_GAME_NAME_TO_GAME_CODE["wild-ape-3258"] = 1508783;
PLATFORM_GAME_NAME_TO_GAME_CODE["spr-golf-drive"] = 1513328;
PLATFORM_GAME_NAME_TO_GAME_CODE["fortune-rabbit"] = 1543462;
PLATFORM_GAME_NAME_TO_GAME_CODE["cruise-royale"] = 1473388;
PLATFORM_GAME_NAME_TO_GAME_CODE["cash-mania"] = 1682240;
PLATFORM_GAME_NAME_TO_GAME_CODE["fortune-dragon"] = 1695365;
PLATFORM_GAME_NAME_TO_GAME_CODE["piggy-gold"] = 39;
PLATFORM_GAME_NAME_TO_GAME_CODE["jungle-delight"] = 40;
PLATFORM_GAME_NAME_TO_GAME_CODE["ganesha-gold"] = 42;
PLATFORM_GAME_NAME_TO_GAME_CODE["double-fortune"] = 48;
PLATFORM_GAME_NAME_TO_GAME_CODE["the-great-icescape"] = 53;
PLATFORM_GAME_NAME_TO_GAME_CODE["captains-bounty"] = 54;
PLATFORM_GAME_NAME_TO_GAME_CODE["dragon-hatch"] = 57;
PLATFORM_GAME_NAME_TO_GAME_CODE["vampires-charm"] = 58;
PLATFORM_GAME_NAME_TO_GAME_CODE["leprechaun-riches"] = 60;
PLATFORM_GAME_NAME_TO_GAME_CODE["gem-saviour-conquest"] = 62;
PLATFORM_GAME_NAME_TO_GAME_CODE["mahjong-ways"] = 65;
PLATFORM_GAME_NAME_TO_GAME_CODE["fortune-mouse"] = 68;
PLATFORM_GAME_NAME_TO_GAME_CODE["bikini-paradise"] = 69;
PLATFORM_GAME_NAME_TO_GAME_CODE["candy-burst"] = 70;
PLATFORM_GAME_NAME_TO_GAME_CODE["mahjong-ways2"] = 74;
PLATFORM_GAME_NAME_TO_GAME_CODE["ganesha-fortune"] = 75;
PLATFORM_GAME_NAME_TO_GAME_CODE["phoenix-rises"] = 82;
PLATFORM_GAME_NAME_TO_GAME_CODE["wild-fireworks"] = 83;
PLATFORM_GAME_NAME_TO_GAME_CODE["galactic-gems"] = 86;
PLATFORM_GAME_NAME_TO_GAME_CODE["treasures-aztec"] = 87;
PLATFORM_GAME_NAME_TO_GAME_CODE["jewels-prosper"] = 88;
PLATFORM_GAME_NAME_TO_GAME_CODE["gdn-ice-fire"] = 91;
PLATFORM_GAME_NAME_TO_GAME_CODE["bali-vacation"] = 94;
PLATFORM_GAME_NAME_TO_GAME_CODE["majestic-ts"] = 95;
PLATFORM_GAME_NAME_TO_GAME_CODE["jack-frosts"] = 97;
PLATFORM_GAME_NAME_TO_GAME_CODE["fortune-ox"] = 98;
PLATFORM_GAME_NAME_TO_GAME_CODE["zombie-outbrk"] = 1635221;
PLATFORM_GAME_NAME_TO_GAME_CODE["anubis-wrath"] = 1623475;
PLATFORM_GAME_NAME_TO_GAME_CODE["wild-bounty-sd"] = 135;

let GAME_CODE_INFO = {};
GAME_CODE_INFO[100] = {GameCode:100, GameName:"candy-bonanza", PlatformGameName:"candy-bonanza"};
GAME_CODE_INFO[104] = {GameCode:104, GameName:"wild-bandito", PlatformGameName:"wild-bandito"};
GAME_CODE_INFO[105] = {GameCode:105, GameName:"heist-stakes", PlatformGameName:"heist-stakes"};
GAME_CODE_INFO[107] = {GameCode:107, GameName:"lgd-monkey-kg", PlatformGameName:"lgd-monkey-kg"};
GAME_CODE_INFO[108] = {GameCode:108, GameName:"buffalo-win", PlatformGameName:"buffalo-win"};
GAME_CODE_INFO[113] = {GameCode:113, GameName:"crypt-fortune", PlatformGameName:"crypt-fortune"};
GAME_CODE_INFO[114] = {GameCode:114, GameName:"emoji-riches", PlatformGameName:"emoji-riches"};
GAME_CODE_INFO[115] = {GameCode:115, GameName:"sprmkt-spree", PlatformGameName:"sprmkt-spree"};
GAME_CODE_INFO[119] = {GameCode:119, GameName:"spirit-wonder", PlatformGameName:"spirit-wonder"};
GAME_CODE_INFO[121] = {GameCode:121, GameName:"dest-sun-moon", PlatformGameName:"dest-sun-moon"};
GAME_CODE_INFO[122] = {GameCode:122, GameName:"garuda-gems", PlatformGameName:"garuda-gems"};
GAME_CODE_INFO[123] = {GameCode:123, GameName:"rooster-rbl", PlatformGameName:"rooster-rbl"};
GAME_CODE_INFO[124] = {GameCode:124, GameName:"battleground", PlatformGameName:"battleground"};
GAME_CODE_INFO[125] = {GameCode:125, GameName:"btrfly-blossom", PlatformGameName:"btrfly-blossom"};
GAME_CODE_INFO[126] = {GameCode:126, GameName:"fortune-tiger", PlatformGameName:"fortune-tiger"};
GAME_CODE_INFO[1312883] = {GameCode:1312883, GameName:"prosper-ftree", PlatformGameName:"prosper-ftree"};
GAME_CODE_INFO[1340277] = {GameCode:1340277, GameName:"asgardian-rs", PlatformGameName:"asgardian-rs"};
GAME_CODE_INFO[1368367] = {GameCode:1368367, GameName:"alchemy-gold", PlatformGameName:"alchemy-gold"};
GAME_CODE_INFO[1372643] = {GameCode:1372643, GameName:"diner-delights", PlatformGameName:"diner-delights"};
GAME_CODE_INFO[1402846] = {GameCode:1402846, GameName:"midas-fortune", PlatformGameName:"midas-fortune"};
GAME_CODE_INFO[1418544] = {GameCode:1418544, GameName:"bakery-bonanza", PlatformGameName:"bakery-bonanza"};
GAME_CODE_INFO[1448762] = {GameCode:1448762, GameName:"songkran-spl", PlatformGameName:"songkran-spl"};
GAME_CODE_INFO[1451122] = {GameCode:1451122, GameName:"dragon-hatch-2", PlatformGameName:"dragon-hatch2"};
GAME_CODE_INFO[1508783] = {GameCode:1508783, GameName:"wild-ape-3258", PlatformGameName:"wild-ape-3258"};
GAME_CODE_INFO[1513328] = {GameCode:1513328, GameName:"spr-golf-drive", PlatformGameName:"spr-golf-drive"};
GAME_CODE_INFO[1543462] = {GameCode:1543462, GameName:"fortune-rabbit", PlatformGameName:"fortune-rabbit"};
GAME_CODE_INFO[1473388] = {GameCode:1473388, GameName:"cruise-royale", PlatformGameName:"cruise-royale"};
GAME_CODE_INFO[1682240] = {GameCode:1682240, GameName:"cash-mania", PlatformGameName:"cash-mania"};
GAME_CODE_INFO[1695365] = {GameCode:1695365, GameName:"fortune-dragon", PlatformGameName:"fortune-dragon"};
GAME_CODE_INFO[39] = {GameCode:39, GameName:"piggy-gold", PlatformGameName:"piggy-gold"};
GAME_CODE_INFO[40] = {GameCode:40, GameName:"jungle-delight", PlatformGameName:"jungle-delight"};
GAME_CODE_INFO[42] = {GameCode:42, GameName:"ganesha-gold", PlatformGameName:"ganesha-gold"};
GAME_CODE_INFO[48] = {GameCode:48, GameName:"double-fortune", PlatformGameName:"double-fortune"};
GAME_CODE_INFO[53] = {GameCode:53, GameName:"the-great-icescape", PlatformGameName:"the-great-icescape"};
GAME_CODE_INFO[54] = {GameCode:54, GameName:"captains-bounty", PlatformGameName:"captains-bounty"};
GAME_CODE_INFO[57] = {GameCode:57, GameName:"dragon-hatch", PlatformGameName:"dragon-hatch"};
GAME_CODE_INFO[58] = {GameCode:58, GameName:"vampires-charm", PlatformGameName:"vampires-charm"};
GAME_CODE_INFO[60] = {GameCode:60, GameName:"leprechaun-riches", PlatformGameName:"leprechaun-riches"};
GAME_CODE_INFO[62] = {GameCode:62, GameName:"gem-saviour-conquest", PlatformGameName:"gem-saviour-conquest"};
GAME_CODE_INFO[65] = {GameCode:65, GameName:"mahjong-ways", PlatformGameName:"mahjong-ways"};
GAME_CODE_INFO[68] = {GameCode:68, GameName:"fortune-mouse", PlatformGameName:"fortune-mouse"};
GAME_CODE_INFO[69] = {GameCode:69, GameName:"bikini-paradise", PlatformGameName:"bikini-paradise"};
GAME_CODE_INFO[70] = {GameCode:70, GameName:"candy-burst", PlatformGameName:"candy-burst"};
GAME_CODE_INFO[74] = {GameCode:74, GameName:"mahjong-ways2", PlatformGameName:"mahjong-ways2"};
GAME_CODE_INFO[75] = {GameCode:75, GameName:"ganesha-fortune", PlatformGameName:"ganesha-fortune"};
GAME_CODE_INFO[82] = {GameCode:82, GameName:"phoenix-rises", PlatformGameName:"phoenix-rises"};
GAME_CODE_INFO[83] = {GameCode:83, GameName:"wild-fireworks", PlatformGameName:"wild-fireworks"};
GAME_CODE_INFO[86] = {GameCode:86, GameName:"galactic-gems", PlatformGameName:"galactic-gems"};
GAME_CODE_INFO[87] = {GameCode:87, GameName:"treasures-aztec", PlatformGameName:"treasures-aztec"};
GAME_CODE_INFO[88] = {GameCode:88, GameName:"jewels-prosper", PlatformGameName:"jewels-prosper"};
GAME_CODE_INFO[91] = {GameCode:91, GameName:"gdn-ice-fire", PlatformGameName:"gdn-ice-fire"};
GAME_CODE_INFO[94] = {GameCode:94, GameName:"bali-vacation", PlatformGameName:"bali-vacation"};
GAME_CODE_INFO[95] = {GameCode:95, GameName:"majestic-ts", PlatformGameName:"majestic-ts"};
GAME_CODE_INFO[97] = {GameCode:97, GameName:"jack-frosts", PlatformGameName:"jack-frosts"};
GAME_CODE_INFO[98] = {GameCode:98, GameName:"fortune-ox", PlatformGameName:"fortune-ox"};
GAME_CODE_INFO[1635221] = {GameCode:1635221, GameName:"zombie-outbrk", PlatformGameName:"zombie-outbrk"};
GAME_CODE_INFO[1623475] = {GameCode:1623475, GameName:"anubis-wrath", PlatformGameName:"anubis-wrath"};
GAME_CODE_INFO[135] = {GameCode:135, GameName:"wild-bounty-sd", PlatformGameName:"wild-bounty-sd"};

exports.default = {
    GetGameInfoByPlaformName(platform_name) {
        let game_code = PLATFORM_GAME_NAME_TO_GAME_CODE[platform_name];
        if (!game_code) {return null;}
        return this.GetGameInfoByGameCode(game_code);
    },
    GetGameInfoByGameName(game_name) {
        let game_code = PLATFORM_GAME_NAME_TO_GAME_CODE[game_name]; 
        if (!game_code) {return null;}
        return this.GetGameInfoByGameCode(game_code);
    },
    GetGameInfoByGameCode(game_code) {
        return GAME_CODE_INFO[game_code];
    },
    
    GetGameContollerByGameCode(game_code) {
        if (game_code === 100) {
            return candybonanzaController;
        }
        else if (game_code === 104) {
            return wildbanditoController;
        }
        else if (game_code === 105) {
            return heiststakesController;
        }
        else if (game_code === 107) {
            return lgdmonkeykgController;
        }
        else if (game_code === 108) {
            return buffalowinController;
        }
        else if (game_code === 113) {
            return cryptfortuneController;
        }
        else if (game_code === 114) {
            return emojirichesController;
        }
        else if (game_code === 115) {
            return sprmktspreeController;
        }
        else if (game_code === 119) {
            return spiritwonderController;
        }
        else if (game_code === 121) {
            return destsunmoonController;
        }
        else if (game_code === 122) {
            return garudagemsController;
        }
        else if (game_code === 123) {
            return roosterrblController;
        }
        else if (game_code === 124) {
            return battlegroundController;
        }
        else if (game_code === 125) {
            return btrflyblossomController;
        }
        else if (game_code === 126) {
            return fortunetigerController;
        }
        else if (game_code === 1312883) {
            return prosperftreeController;
        }
        else if (game_code === 1340277) {
            return asgardianrsController;
        }
        else if (game_code === 1368367) {
            return alchemygoldController;
        }
        else if (game_code === 1372643) {
            return dinerdelightsController;
        }
        else if (game_code === 1402846) {
            return midasfortuneController;
        }
        else if (game_code === 1418544) {
            return bakerybonanzaController;
        }
        else if (game_code === 1448762) {
            return songkransplController;
        }
        else if (game_code === 1451122) {
            return dragonhatch2Controller;
        }
        else if (game_code === 1508783) {
            return wildape3258Controller;
        }
        else if (game_code === 1513328) {
            return sprgolfdriveController;
        }
        else if (game_code === 1543462) {
            return fortunerabbitController;
        }
        else if (game_code === 1473388) {
            return cruiseroyaleController;
        }
        else if (game_code === 1682240) {
            return cashmaniaController;
        }
        else if (game_code === 1695365) {
            return fortunedragonController;
        }
        else if (game_code === 39) {
            return piggygoldController;
        }
        else if (game_code === 40) {
            return jungledelightController;
        }
        else if (game_code === 42) {
            return ganeshagoldController;
        }
        else if (game_code === 48) {
            return doublefortuneController;
        }
        else if (game_code === 53) {
            return thegreaticescapeController;
        }
        else if (game_code === 54) {
            return captainsbountyController;
        }
        else if (game_code === 57) {
            return dragonhatchController;
        }
        else if (game_code === 58) {
            return vampirescharmController;
        }
        else if (game_code === 60) {
            return leprechaunrichesController;
        }
        else if (game_code === 62) {
            return gemsaviourconquestController;
        }
        else if (game_code === 65) {
            return mahjongwaysController;
        }
        else if (game_code === 68) {
            return fortunemouseController;
        }
        else if (game_code === 69) {
            return bikiniparadiseController;
        }
        else if (game_code === 70) {
            return candyburstController;
        }
        else if (game_code === 74) {
            return mahjongways2Controller;
        }
        else if (game_code === 75) {
            return ganeshafortuneController;
        }
        else if (game_code === 82) {
            return phoenixrisesController;
        }
        else if (game_code === 83) {
            return wildfireworksController;
        }
        else if (game_code === 86) {
            return galacticgemsController;
        }
        else if (game_code === 87) {
            return treasuresaztecController;
        }
        else if (game_code === 88) {
            return jewelsprosperController;
        }
        else if (game_code === 91) {
            return gdnicefireController;
        }
        else if (game_code === 94) {
            return balivacationController;
        }
        else if (game_code === 95) {
            return majestictsController;
        }
        else if (game_code === 97) {
            return jackfrostsController;
        }
        else if (game_code === 98) {
            return fortuneoxController;
        }
        else if (game_code === 1635221) {
            return zombieoutbrkController;
        }
        else if (game_code === 1623475) {
            return anubiswrathController;
        }
        else if (game_code === 135) {
            return wildbountysdController;
        }
    },

    GetGameJsonResultByGameCode(game_code) {
        if (game_code === 100) {
            return candybonanzajsonResult;
        }
        else if (game_code === 104) {
            return wildbanditojsonResult;
        }
        else if (game_code === 105) {
            return heiststakesjsonResult;
        }
        else if (game_code === 107) {
            return lgdmonkeykgjsonResult;
        }
        else if (game_code === 108) {
            return buffalowinjsonResult;
        }
        else if (game_code === 113) {
            return cryptfortunejsonResult;
        }
        else if (game_code === 114) {
            return emojirichesjsonResult;
        }
        else if (game_code === 115) {
            return sprmktspreejsonResult;
        }
        else if (game_code === 119) {
            return spiritwonderjsonResult;
        }
        else if (game_code === 121) {
            return destsunmoonjsonResult;
        }
        else if (game_code === 122) {
            return garudagemsjsonResult;
        }
        else if (game_code === 123) {
            return roosterrbljsonResult;
        }
        else if (game_code === 124) {
            return battlegroundjsonResult;
        }
        else if (game_code === 125) {
            return btrflyblossomjsonResult;
        }
        else if (game_code === 126) {
            return fortunetigerjsonResult;
        }
        else if (game_code === 1312883) {
            return prosperftreejsonResult;
        }
        else if (game_code === 1340277) {
            return asgardianrsjsonResult;
        }
        else if (game_code === 1368367) {
            return alchemygoldjsonResult;
        }
        else if (game_code === 1372643) {
            return dinerdelightsjsonResult;
        }
        else if (game_code === 1402846) {
            return midasfortunejsonResult;
        }
        else if (game_code === 1418544) {
            return bakerybonanzajsonResult;
        }
        else if (game_code === 1448762) {
            return songkranspljsonResult;
        }
        else if (game_code === 1451122) {
            return dragonhatch2jsonResult;
        }
        else if (game_code === 1508783) {
            return wildape3258jsonResult;
        }
        else if (game_code === 1513328) {
            return sprgolfdrivejsonResult;
        }
        else if (game_code === 1543462) {
            return fortunerabbitjsonResult;
        }
        else if (game_code === 1473388) {
            return cruiseroyalejsonResult;
        }
        else if (game_code === 1682240) {
            return cashmaniajsonResult;
        }
        else if (game_code === 1695365) {
            return fortunedragonjsonResult;
        }
        else if (game_code === 39) {
            return piggygoldjsonResult;
        }
        else if (game_code === 40) {
            return jungledelightjsonResult;
        }
        else if (game_code === 42) {
            return ganeshagoldjsonResult;
        }
        else if (game_code === 48) {
            return doublefortunejsonResult;
        }
        else if (game_code === 53) {
            return thegreaticescapejsonResult;
        }
        else if (game_code === 54) {
            return captainsbountyjsonResult;
        }
        else if (game_code === 57) {
            return dragonhatchjsonResult;
        }
        else if (game_code === 58) {
            return vampirescharmjsonResult;
        }
        else if (game_code === 60) {
            return leprechaunrichesjsonResult;
        }
        else if (game_code === 62) {
            return gemsaviourconquestjsonResult;
        }
        else if (game_code === 65) {
            return mahjongwaysjsonResult;
        }
        else if (game_code === 68) {
            return fortunemousejsonResult;
        }
        else if (game_code === 69) {
            return bikiniparadisejsonResult;
        }
        else if (game_code === 70) {
            return candyburstjsonResult;
        }
        else if (game_code === 74) {
            return mahjongways2jsonResult;
        }
        else if (game_code === 75) {
            return ganeshafortunejsonResult;
        }
        else if (game_code === 82) {
            return phoenixrisesjsonResult;
        }
        else if (game_code === 83) {
            return wildfireworksjsonResult;
        }
        else if (game_code === 86) {
            return galacticgemsjsonResult;
        }
        else if (game_code === 87) {
            return treasuresaztecjsonResult;
        }
        else if (game_code === 88) {
            return jewelsprosperjsonResult;
        }
        else if (game_code === 91) {
            return gdnicefirejsonResult;
        }
        else if (game_code === 94) {
            return balivacationjsonResult;
        }
        else if (game_code === 95) {
            return majestictsjsonResult;
        }
        else if (game_code === 97) {
            return jackfrostsjsonResult;
        }
        else if (game_code === 98) {
            return fortuneoxjsonResult;
        }
        else if (game_code === 1635221) {
            return zombieoutbrkjsonResult;
        }
        else if (game_code === 1623475) {
            return anubiswrathjsonResult;
        }
        else if (game_code === 135) {
            return wildbountysdjsonResult;
        }
    },

};