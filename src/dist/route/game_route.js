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

exports.default = {
	initGameRoute(routes) {
		const candybonanzaController = __importDefault(require("../controllers/candy-bonanza/gameController"));
		routes.post("/game-api/candy-bonanza/v2/GameInfo/Get", candybonanzaController.default.getGameInfo)
		routes.post("/game-api/candy-bonanza/v2/Spin", candybonanzaController.default.spin)
		const wildbanditoController = __importDefault(require("../controllers/wild-bandito/gameController"));
		routes.post("/game-api/wild-bandito/v2/GameInfo/Get", wildbanditoController.default.getGameInfo)
		routes.post("/game-api/wild-bandito/v2/Spin", wildbanditoController.default.spin)
		const heiststakesController = __importDefault(require("../controllers/heist-stakes/gameController"));
		routes.post("/game-api/heist-stakes/v2/GameInfo/Get", heiststakesController.default.getGameInfo)
		routes.post("/game-api/heist-stakes/v2/Spin", heiststakesController.default.spin)
		const lgdmonkeykgController = __importDefault(require("../controllers/lgd-monkey-kg/gameController"));
		routes.post("/game-api/lgd-monkey-kg/v2/GameInfo/Get", lgdmonkeykgController.default.getGameInfo)
		routes.post("/game-api/lgd-monkey-kg/v2/Spin", lgdmonkeykgController.default.spin)
		const buffalowinController = __importDefault(require("../controllers/buffalo-win/gameController"));
		routes.post("/game-api/buffalo-win/v2/GameInfo/Get", buffalowinController.default.getGameInfo)
		routes.post("/game-api/buffalo-win/v2/Spin", buffalowinController.default.spin)
		const cryptfortuneController = __importDefault(require("../controllers/crypt-fortune/gameController"));
		routes.post("/game-api/crypt-fortune/v2/GameInfo/Get", cryptfortuneController.default.getGameInfo)
		routes.post("/game-api/crypt-fortune/v2/Spin", cryptfortuneController.default.spin)
		const emojirichesController = __importDefault(require("../controllers/emoji-riches/gameController"));
		routes.post("/game-api/emoji-riches/v2/GameInfo/Get", emojirichesController.default.getGameInfo)
		routes.post("/game-api/emoji-riches/v2/Spin", emojirichesController.default.spin)
		const sprmktspreeController = __importDefault(require("../controllers/sprmkt-spree/gameController"));
		routes.post("/game-api/sprmkt-spree/v2/GameInfo/Get", sprmktspreeController.default.getGameInfo)
		routes.post("/game-api/sprmkt-spree/v2/Spin", sprmktspreeController.default.spin)
		const spiritwonderController = __importDefault(require("../controllers/spirit-wonder/gameController"));
		routes.post("/game-api/spirit-wonder/v2/GameInfo/Get", spiritwonderController.default.getGameInfo)
		routes.post("/game-api/spirit-wonder/v2/Spin", spiritwonderController.default.spin)
		const destsunmoonController = __importDefault(require("../controllers/dest-sun-moon/gameController"));
		routes.post("/game-api/dest-sun-moon/v2/GameInfo/Get", destsunmoonController.default.getGameInfo)
		routes.post("/game-api/dest-sun-moon/v2/Spin", destsunmoonController.default.spin)
		const garudagemsController = __importDefault(require("../controllers/garuda-gems/gameController"));
		routes.post("/game-api/garuda-gems/v2/GameInfo/Get", garudagemsController.default.getGameInfo)
		routes.post("/game-api/garuda-gems/v2/Spin", garudagemsController.default.spin)
		const roosterrblController = __importDefault(require("../controllers/rooster-rbl/gameController"));
		routes.post("/game-api/rooster-rbl/v2/GameInfo/Get", roosterrblController.default.getGameInfo)
		routes.post("/game-api/rooster-rbl/v2/Spin", roosterrblController.default.spin)
		const battlegroundController = __importDefault(require("../controllers/battleground/gameController"));
		routes.post("/game-api/battleground/v2/GameInfo/Get", battlegroundController.default.getGameInfo)
		routes.post("/game-api/battleground/v2/Spin", battlegroundController.default.spin)
		const btrflyblossomController = __importDefault(require("../controllers/btrfly-blossom/gameController"));
		routes.post("/game-api/btrfly-blossom/v2/GameInfo/Get", btrflyblossomController.default.getGameInfo)
		routes.post("/game-api/btrfly-blossom/v2/Spin", btrflyblossomController.default.spin)
		const fortunetigerController = __importDefault(require("../controllers/fortune-tiger/gameController"));
		routes.post("/game-api/fortune-tiger/v2/GameInfo/Get", fortunetigerController.default.getGameInfo)
		routes.post("/game-api/fortune-tiger/v2/Spin", fortunetigerController.default.spin)
		const prosperftreeController = __importDefault(require("../controllers/prosper-ftree/gameController"));
		routes.post("/game-api/prosper-ftree/v2/GameInfo/Get", prosperftreeController.default.getGameInfo)
		routes.post("/game-api/prosper-ftree/v2/Spin", prosperftreeController.default.spin)
		const asgardianrsController = __importDefault(require("../controllers/asgardian-rs/gameController"));
		routes.post("/game-api/asgardian-rs/v2/GameInfo/Get", asgardianrsController.default.getGameInfo)
		routes.post("/game-api/asgardian-rs/v2/Spin", asgardianrsController.default.spin)
		const alchemygoldController = __importDefault(require("../controllers/alchemy-gold/gameController"));
		routes.post("/game-api/alchemy-gold/v2/GameInfo/Get", alchemygoldController.default.getGameInfo)
		routes.post("/game-api/alchemy-gold/v2/Spin", alchemygoldController.default.spin)
		const dinerdelightsController = __importDefault(require("../controllers/diner-delights/gameController"));
		routes.post("/game-api/diner-delights/v2/GameInfo/Get", dinerdelightsController.default.getGameInfo)
		routes.post("/game-api/diner-delights/v2/Spin", dinerdelightsController.default.spin)
		const midasfortuneController = __importDefault(require("../controllers/midas-fortune/gameController"));
		routes.post("/game-api/midas-fortune/v2/GameInfo/Get", midasfortuneController.default.getGameInfo)
		routes.post("/game-api/midas-fortune/v2/Spin", midasfortuneController.default.spin)
		const bakerybonanzaController = __importDefault(require("../controllers/bakery-bonanza/gameController"));
		routes.post("/game-api/bakery-bonanza/v2/GameInfo/Get", bakerybonanzaController.default.getGameInfo)
		routes.post("/game-api/bakery-bonanza/v2/Spin", bakerybonanzaController.default.spin)
		const songkransplController = __importDefault(require("../controllers/songkran-spl/gameController"));
		routes.post("/game-api/songkran-spl/v2/GameInfo/Get", songkransplController.default.getGameInfo)
		routes.post("/game-api/songkran-spl/v2/Spin", songkransplController.default.spin)
		const dragonhatch2Controller = __importDefault(require("../controllers/dragon-hatch-2/gameController"));
		routes.post("/game-api/dragon-hatch-2/v2/GameInfo/Get", dragonhatch2Controller.default.getGameInfo)
		routes.post("/game-api/dragon-hatch-2/v2/Spin", dragonhatch2Controller.default.spin)
		const wildape3258Controller = __importDefault(require("../controllers/wild-ape-3258/gameController"));
		routes.post("/game-api/wild-ape-3258/v2/GameInfo/Get", wildape3258Controller.default.getGameInfo)
		routes.post("/game-api/wild-ape-3258/v2/Spin", wildape3258Controller.default.spin)
		const sprgolfdriveController = __importDefault(require("../controllers/spr-golf-drive/gameController"));
		routes.post("/game-api/spr-golf-drive/v2/GameInfo/Get", sprgolfdriveController.default.getGameInfo)
		routes.post("/game-api/spr-golf-drive/v2/Spin", sprgolfdriveController.default.spin)
		const fortunerabbitController = __importDefault(require("../controllers/fortune-rabbit/gameController"));
		routes.post("/game-api/fortune-rabbit/v2/GameInfo/Get", fortunerabbitController.default.getGameInfo)
		routes.post("/game-api/fortune-rabbit/v2/Spin", fortunerabbitController.default.spin)
		const cruiseroyaleController = __importDefault(require("../controllers/cruise-royale/gameController"));
		routes.post("/game-api/cruise-royale/v2/GameInfo/Get", cruiseroyaleController.default.getGameInfo)
		routes.post("/game-api/cruise-royale/v2/Spin", cruiseroyaleController.default.spin)
		const cashmaniaController = __importDefault(require("../controllers/cash-mania/gameController"));
		routes.post("/game-api/cash-mania/v2/GameInfo/Get", cashmaniaController.default.getGameInfo)
		routes.post("/game-api/cash-mania/v2/Spin", cashmaniaController.default.spin)
		const fortunedragonController = __importDefault(require("../controllers/fortune-dragon/gameController"));
		routes.post("/game-api/fortune-dragon/v2/GameInfo/Get", fortunedragonController.default.getGameInfo)
		routes.post("/game-api/fortune-dragon/v2/Spin", fortunedragonController.default.spin)
		const piggygoldController = __importDefault(require("../controllers/piggy-gold/gameController"));
		routes.post("/game-api/piggy-gold/v2/GameInfo/Get", piggygoldController.default.getGameInfo)
		routes.post("/game-api/piggy-gold/v2/Spin", piggygoldController.default.spin)
		const jungledelightController = __importDefault(require("../controllers/jungle-delight/gameController"));
		routes.post("/game-api/jungle-delight/v2/GameInfo/Get", jungledelightController.default.getGameInfo)
		routes.post("/game-api/jungle-delight/v2/Spin", jungledelightController.default.spin)
		const ganeshagoldController = __importDefault(require("../controllers/ganesha-gold/gameController"));
		routes.post("/game-api/ganesha-gold/v2/GameInfo/Get", ganeshagoldController.default.getGameInfo)
		routes.post("/game-api/ganesha-gold/v2/Spin", ganeshagoldController.default.spin)
		const doublefortuneController = __importDefault(require("../controllers/double-fortune/gameController"));
		routes.post("/game-api/double-fortune/v2/GameInfo/Get", doublefortuneController.default.getGameInfo)
		routes.post("/game-api/double-fortune/v2/Spin", doublefortuneController.default.spin)
		const thegreaticescapeController = __importDefault(require("../controllers/the-great-icescape/gameController"));
		routes.post("/game-api/the-great-icescape/v2/GameInfo/Get", thegreaticescapeController.default.getGameInfo)
		routes.post("/game-api/the-great-icescape/v2/Spin", thegreaticescapeController.default.spin)
		const captainsbountyController = __importDefault(require("../controllers/captains-bounty/gameController"));
		routes.post("/game-api/captains-bounty/v2/GameInfo/Get", captainsbountyController.default.getGameInfo)
		routes.post("/game-api/captains-bounty/v2/Spin", captainsbountyController.default.spin)
		const dragonhatchController = __importDefault(require("../controllers/dragon-hatch/gameController"));
		routes.post("/game-api/dragon-hatch/v2/GameInfo/Get", dragonhatchController.default.getGameInfo)
		routes.post("/game-api/dragon-hatch/v2/Spin", dragonhatchController.default.spin)
		const vampirescharmController = __importDefault(require("../controllers/vampires-charm/gameController"));
		routes.post("/game-api/vampires-charm/v2/GameInfo/Get", vampirescharmController.default.getGameInfo)
		routes.post("/game-api/vampires-charm/v2/Spin", vampirescharmController.default.spin)
		const leprechaunrichesController = __importDefault(require("../controllers/leprechaun-riches/gameController"));
		routes.post("/game-api/leprechaun-riches/v2/GameInfo/Get", leprechaunrichesController.default.getGameInfo)
		routes.post("/game-api/leprechaun-riches/v2/Spin", leprechaunrichesController.default.spin)
		const gemsaviourconquestController = __importDefault(require("../controllers/gem-saviour-conquest/gameController"));
		routes.post("/game-api/gem-saviour-conquest/v2/GameInfo/Get", gemsaviourconquestController.default.getGameInfo)
		routes.post("/game-api/gem-saviour-conquest/v2/Spin", gemsaviourconquestController.default.spin)
		const mahjongwaysController = __importDefault(require("../controllers/mahjong-ways/gameController"));
		routes.post("/game-api/mahjong-ways/v2/GameInfo/Get", mahjongwaysController.default.getGameInfo)
		routes.post("/game-api/mahjong-ways/v2/Spin", mahjongwaysController.default.spin)
		const fortunemouseController = __importDefault(require("../controllers/fortune-mouse/gameController"));
		routes.post("/game-api/fortune-mouse/v2/GameInfo/Get", fortunemouseController.default.getGameInfo)
		routes.post("/game-api/fortune-mouse/v2/Spin", fortunemouseController.default.spin)
		const bikiniparadiseController = __importDefault(require("../controllers/bikini-paradise/gameController"));
		routes.post("/game-api/bikini-paradise/v2/GameInfo/Get", bikiniparadiseController.default.getGameInfo)
		routes.post("/game-api/bikini-paradise/v2/Spin", bikiniparadiseController.default.spin)
		const candyburstController = __importDefault(require("../controllers/candy-burst/gameController"));
		routes.post("/game-api/candy-burst/v2/GameInfo/Get", candyburstController.default.getGameInfo)
		routes.post("/game-api/candy-burst/v2/Spin", candyburstController.default.spin)
		const mahjongways2Controller = __importDefault(require("../controllers/mahjong-ways2/gameController"));
		routes.post("/game-api/mahjong-ways2/v2/GameInfo/Get", mahjongways2Controller.default.getGameInfo)
		routes.post("/game-api/mahjong-ways2/v2/Spin", mahjongways2Controller.default.spin)
		const ganeshafortuneController = __importDefault(require("../controllers/ganesha-fortune/gameController"));
		routes.post("/game-api/ganesha-fortune/v2/GameInfo/Get", ganeshafortuneController.default.getGameInfo)
		routes.post("/game-api/ganesha-fortune/v2/Spin", ganeshafortuneController.default.spin)
		const phoenixrisesController = __importDefault(require("../controllers/phoenix-rises/gameController"));
		routes.post("/game-api/phoenix-rises/v2/GameInfo/Get", phoenixrisesController.default.getGameInfo)
		routes.post("/game-api/phoenix-rises/v2/Spin", phoenixrisesController.default.spin)
		const wildfireworksController = __importDefault(require("../controllers/wild-fireworks/gameController"));
		routes.post("/game-api/wild-fireworks/v2/GameInfo/Get", wildfireworksController.default.getGameInfo)
		routes.post("/game-api/wild-fireworks/v2/Spin", wildfireworksController.default.spin)
		const galacticgemsController = __importDefault(require("../controllers/galactic-gems/gameController"));
		routes.post("/game-api/galactic-gems/v2/GameInfo/Get", galacticgemsController.default.getGameInfo)
		routes.post("/game-api/galactic-gems/v2/Spin", galacticgemsController.default.spin)
		const treasuresaztecController = __importDefault(require("../controllers/treasures-aztec/gameController"));
		routes.post("/game-api/treasures-aztec/v2/GameInfo/Get", treasuresaztecController.default.getGameInfo)
		routes.post("/game-api/treasures-aztec/v2/Spin", treasuresaztecController.default.spin)
		const jewelsprosperController = __importDefault(require("../controllers/jewels-prosper/gameController"));
		routes.post("/game-api/jewels-prosper/v2/GameInfo/Get", jewelsprosperController.default.getGameInfo)
		routes.post("/game-api/jewels-prosper/v2/Spin", jewelsprosperController.default.spin)
		const gdnicefireController = __importDefault(require("../controllers/gdn-ice-fire/gameController"));
		routes.post("/game-api/gdn-ice-fire/v2/GameInfo/Get", gdnicefireController.default.getGameInfo)
		routes.post("/game-api/gdn-ice-fire/v2/Spin", gdnicefireController.default.spin)
		const balivacationController = __importDefault(require("../controllers/bali-vacation/gameController"));
		routes.post("/game-api/bali-vacation/v2/GameInfo/Get", balivacationController.default.getGameInfo)
		routes.post("/game-api/bali-vacation/v2/Spin", balivacationController.default.spin)
		const majestictsController = __importDefault(require("../controllers/majestic-ts/gameController"));
		routes.post("/game-api/majestic-ts/v2/GameInfo/Get", majestictsController.default.getGameInfo)
		routes.post("/game-api/majestic-ts/v2/Spin", majestictsController.default.spin)
		const jackfrostsController = __importDefault(require("../controllers/jack-frosts/gameController"));
		routes.post("/game-api/jack-frosts/v2/GameInfo/Get", jackfrostsController.default.getGameInfo)
		routes.post("/game-api/jack-frosts/v2/Spin", jackfrostsController.default.spin)
		const fortuneoxController = __importDefault(require("../controllers/fortune-ox/gameController"));
		routes.post("/game-api/fortune-ox/v2/GameInfo/Get", fortuneoxController.default.getGameInfo)
		routes.post("/game-api/fortune-ox/v2/Spin", fortuneoxController.default.spin)
		const zombieoutbrkController = __importDefault(require("../controllers/zombie-outbrk/gameController"));
		routes.post("/game-api/zombie-outbrk/v2/GameInfo/Get", zombieoutbrkController.default.getGameInfo)
		routes.post("/game-api/zombie-outbrk/v2/Spin", zombieoutbrkController.default.spin)
		const anubiswrathController = __importDefault(require("../controllers/anubis-wrath/gameController"));
		routes.post("/game-api/anubis-wrath/v2/GameInfo/Get", anubiswrathController.default.getGameInfo)
		routes.post("/game-api/anubis-wrath/v2/Spin", anubiswrathController.default.spin)
		const wildbountysdController = __importDefault(require("../controllers/wild-bounty-sd/gameController"));
		routes.post("/game-api/wild-bounty-sd/v2/GameInfo/Get", wildbountysdController.default.getGameInfo)
		routes.post("/game-api/wild-bounty-sd/v2/Spin", wildbountysdController.default.spin)
	}
}