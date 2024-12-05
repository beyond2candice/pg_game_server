-- --------------------------------------------------------
-- 主机:                           192.168.1.4
-- 服务器版本:                        8.0.39 - MySQL Community Server - GPL
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- 导出  存储过程 api.add_and_return_call 结构
DROP PROCEDURE IF EXISTS `add_and_return_call`;
DELIMITER //
CREATE PROCEDURE `add_and_return_call`(IN in_iduser INT, IN in_gamecode VARCHAR(255), IN in_step INT, IN in_json VARCHAR(255))
BEGIN
    INSERT INTO calls (iduser, gamecode, jsonname, steps, bycall) VALUES (in_iduser, in_gamecode, in_json, in_step, 'system');
    SELECT * FROM calls WHERE id = LAST_INSERT_ID() LIMIT 1;
END//
DELIMITER ;

-- 导出  表 api.alchemygoldjson 结构
DROP TABLE IF EXISTS `alchemygoldjson`;
CREATE TABLE IF NOT EXISTS `alchemygoldjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cp":null,"cptw":null,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gm":0,"gsp":[1,3,5,9,12,15,19,21,23],"gwt":0,"hashr":null,"inw":false,"ml":2,"mr":null,"np":0,"nst":1,"nwp":null,"ocr":null,"orl":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","pswlp":null,"pswp":null,"rl":[6,5,3,7,2,9,1,7,0,8,3,7,2,8,4,7,0,8,1,9,2,8,3,5,6],"rns":null,"rs":null,"rwsp":null,"sc":2,"sid":"0","ssaw":0,"st":1,"sw":null,"swlp":null,"swp":null,"tb":0,"tbb":0,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wsc":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.anubiswrathjson 结构
DROP TABLE IF EXISTS `anubiswrathjson`;
CREATE TABLE IF NOT EXISTS `anubiswrathjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"crtw":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gm":0,"gwt":0,"hashr":null,"icc":false,"ich":null,"ihttmrl":[false,false,false,false,false],"imw":false,"inttmh":false,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":[5,11,10,7,12,1,2,3,8,4,0,11,12,1,2,3,5,11,10,7],"pcwc":0,"pf":0,"pgm":0,"pmt":null,"psid":"0","ptbr":null,"rl":[5,11,10,7,12,1,2,3,8,4,0,11,12,1,2,3,5,11,10,7],"rns":null,"rwsp":null,"sc":0,"sid":"0","snww":null,"ssaw":0,"st":1,"tb":0,"tbb":0,"ttmrl":[3,50,3,10,3],"tw":0,"twbm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.asgardianrsjson 结构
DROP TABLE IF EXISTS `asgardianrsjson`;
CREATE TABLE IF NOT EXISTS `asgardianrsjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"bwp":null,"cs":0.3,"ctw":0,"cwc":0,"eb":{"1":{"bt":1,"fp":5,"lp":7,"ls":1},"2":{"bt":1,"fp":8,"lp":9,"ls":2},"3":{"bt":2,"fp":10,"lp":12,"ls":1},"4":{"bt":1,"fp":20,"lp":21,"ls":2},"5":{"bt":1,"fp":23,"lp":24,"ls":1}},"ebb":{"1":{"bt":1,"fp":5,"lp":7,"ls":1},"2":{"bt":1,"fp":8,"lp":9,"ls":2},"3":{"bt":2,"fp":10,"lp":12,"ls":1},"4":{"bt":1,"fp":20,"lp":21,"ls":2},"5":{"bt":1,"fp":23,"lp":24,"ls":1}},"es":{"1":[5,6,7],"2":[8,9],"3":[10,11,12],"4":[20,21],"5":[23,24]},"esb":{"1":[5,6,7],"2":[8,9],"3":[10,11,12],"4":[20,21],"5":[23,24]},"fb":null,"fs":null,"fstc":null,"ge":null,"gm":1,"gwt":0,"hashr":null,"lw":null,"lwa":0,"ml":2,"mr":null,"mrl":[[0],[0],[0],[0]],"nmrl":[[0],[0],[0],[0]],"now":7200,"nowpr":[5,3,4,6,4,5],"np":0,"nst":1,"ocr":null,"orl":[8,4,1,10,7,2,2,2,3,3,0,0,0,11,10,0,9,12,7,7,4,4,0,5,5,12,5,1,11,6],"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"rl":[8,4,1,10,7,2,2,2,3,3,0,0,0,11,10,0,9,12,7,7,4,4,0,5,5,12,5,1,11,6],"rs":null,"rwsp":null,"sc":2,"sid":"0","snww":null,"ssaw":0,"st":1,"tb":0,"tbb":0,"tptbr":null,"trl":[3,6,2,4],"tw":0,"twp":null,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.bakerybonanzajson 结构
DROP TABLE IF EXISTS `bakerybonanzajson`;
CREATE TABLE IF NOT EXISTS `bakerybonanzajson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"btorl":[3,6,2,4],"btrl":[3,6,2,4],"bwp":null,"cs":0.3,"ctw":0,"cwc":0,"eb":{"1":{"bt":1,"fp":5,"lp":7,"ls":1},"2":{"bt":1,"fp":8,"lp":9,"ls":2},"3":{"bt":1,"fp":20,"lp":21,"ls":2},"4":{"bt":1,"fp":23,"lp":24,"ls":1}},"ebb":{"1":{"bt":1,"fp":5,"lp":7,"ls":1},"2":{"bt":1,"fp":8,"lp":9,"ls":2},"3":{"bt":1,"fp":20,"lp":21,"ls":2},"4":{"bt":1,"fp":23,"lp":24,"ls":1}},"es":{"1":[5,6,7],"2":[8,9],"3":[20,21],"4":[23,24]},"esb":{"1":[5,6,7],"2":[8,9],"3":[20,21],"4":[23,24]},"fb":null,"fs":null,"fstc":null,"ge":null,"gm":1,"gwt":0,"hashr":null,"lgm":0,"lw":null,"ml":2,"mr":null,"now":10800,"nowpr":[5,3,6,6,4,5],"np":0,"nst":1,"ocr":null,"orl":[8,4,1,10,7,2,2,2,3,3,0,0,0,11,10,0,9,11,7,7,4,4,0,5,5,11,5,1,11,6],"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"rl":[8,4,1,10,7,2,2,2,3,3,0,0,0,11,10,0,9,11,7,7,4,4,0,5,5,11,5,1,11,6],"rs":null,"rwsp":null,"sc":0,"sid":"0","snww":null,"ssaw":0,"st":1,"tb":0,"tbb":0,"tptbr":null,"trlm":null,"tw":0,"twbm":0,"twp":null,"twpl":null,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.balivacationjson 结构
DROP TABLE IF EXISTS `balivacationjson`;
CREATE TABLE IF NOT EXISTS `balivacationjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"acw":0,"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fa":false,"fb":null,"fbst":0,"fs":null,"fstc":null,"ge":null,"gm":0,"gwt":0,"hashr":null,"ix":false,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[7,2,4,4,1,3,3,2,8,2,5,5],"rs":null,"rwsp":null,"sc":0,"sid":"0","sp":null,"st":1,"sw":null,"symc":null,"tb":0,"tbb":0,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C","wwp":null}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.battlegroundjson 结构
DROP TABLE IF EXISTS `battlegroundjson`;
CREATE TABLE IF NOT EXISTS `battlegroundjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gm":1,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":[10,3,12,2,1,0,3,4,8,2,9,5,3,0,1,2,12,3,10],"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"rl":[10,3,12,2,1,0,3,4,8,2,9,5,3,0,1,2,12,3,10],"rns":null,"rwsp":null,"sc":0,"sid":"0","smc":-1,"smcp":null,"snww":null,"ssaw":0,"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.bikineparadisejson 结构
DROP TABLE IF EXISTS `bikineparadisejson`;
CREATE TABLE IF NOT EXISTS `bikineparadisejson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"wp":null,"lw":null,"orl":null,"wm":0,"rwm":null,"wabm":0.0,"fs":null,"sc":0,"wppr":[[],[],[0,1,2,3],[],[]],"gwt":0,"fb":null,"ctw":0.0,"pmt":null,"cwc":0,"fstc":null,"pcwc":0,"rwsp":null,"hashr":null,"ml":2,"cs":0.3,"rl":[3,8,4,12,9,1,10,5,0,0,0,0,9,1,10,5,3,8,4,12],"sid":"0","psid":"0","st":1,"nst":1,"pf":0,"aw":0.00,"wid":0,"wt":"C","wk":"0_C","wbn":null,"wfg":null,"blb":0.00,"blab":0.00,"bl":100000.00,"tb":0.00,"tbb":0.00,"tw":0.00,"np":0.00,"ocr":null,"mr":null,"ge":null}},"err":null}'),
  PRIMARY KEY (`id`) USING BTREE,
  KEY `id` (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.bikiniparadisejson 结构
DROP TABLE IF EXISTS `bikiniparadisejson`;
CREATE TABLE IF NOT EXISTS `bikiniparadisejson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[3,8,4,12,9,1,10,5,0,0,0,0,9,1,10,5,3,8,4,12],"rwm":null,"rwsp":null,"sc":0,"sid":"0","st":1,"tb":0,"tbb":0,"tw":0,"wabm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wm":0,"wp":null,"wppr":[[],[],[0,1,2,3],[],[]],"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.btrflyblossomjson 结构
DROP TABLE IF EXISTS `btrflyblossomjson`;
CREATE TABLE IF NOT EXISTS `btrflyblossomjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gm":1,"gmi":0,"gml":[1,2,3,5],"gwt":0,"hashr":null,"lw":null,"lwm":null,"ml":2,"mr":null,"np":0,"nst":1,"nswl":null,"ocr":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"rl":[1,5,6,7,4,2,0,8,0,3,1,4,4,2,0,8,1,5,6,7],"rl3x5":[5,6,7,2,0,8,3,1,4,2,0,8,5,6,7],"rs":null,"rswl":null,"rwsp":null,"saw":0,"sc":0,"sid":"0","st":1,"swl":[[6,3],[8,2],[14,1]],"swlb":[[6,3],[8,2],[14,1]],"tb":0,"tbb":0,"tlw":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wp3x5":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.buffalowinjson 结构
DROP TABLE IF EXISTS `buffalowinjson`;
CREATE TABLE IF NOT EXISTS `buffalowinjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"acw":0,"aw":0,"bl":100000,"blab":0,"blb":0,"bsc":null,"bwp":null,"bwsc":null,"cs":0.3,"ctw":0,"cwc":0,"es":{"1":[2,3],"2":[4,5,6],"3":[8,9]},"fb":null,"fs":null,"fstc":null,"ge":null,"gm":1,"gwt":0,"hashr":null,"ix":false,"lrs":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[2,1,6,6,0,0,0,2,3,3,2,7],"rs":null,"rwsp":null,"s":0,"sc":0,"scs":null,"sid":"0","st":1,"sw":null,"tb":0,"tbb":0,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.butterflyblossomplayerjson 结构
DROP TABLE IF EXISTS `butterflyblossomplayerjson`;
CREATE TABLE IF NOT EXISTS `butterflyblossomplayerjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"wp":null,"wp3x5":null,"wpl":null,"ptbr":null,"lw":null,"lwm":null,"rl3x5":[5,6,7,2,0,8,3,1,4,2,0,8,5,6,7],"swl":[[6,3],[8,2],[14,1]],"swlb":[[6,3],[8,2],[14,1]],"nswl":null,"rswl":null,"rs":null,"fs":null,"sc":0,"saw":0.0,"tlw":0.0,"gm":1,"gmi":0,"gml":[1,2,3,5],"gwt":0,"fb":null,"ctw":0.0,"pmt":null,"cwc":0,"fstc":null,"pcwc":0,"rwsp":null,"hashr":null,"ml":2,"cs":0.3,"rl":[1,5,6,7,4,2,0,8,0,3,1,4,4,2,0,8,1,5,6,7],"sid":"0","psid":"0","st":1,"nst":1,"pf":0,"aw":0.00,"wid":0,"wt":"C","wk":"0_C","wbn":null,"wfg":null,"blb":0.00,"blab":0.00,"bl":100000.00,"tb":0.00,"tbb":0.00,"tw":0.00,"np":0.00,"ocr":null,"mr":null,"ge":null}}}')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.caishenwinsjson 结构
DROP TABLE IF EXISTS `caishenwinsjson`;
CREATE TABLE IF NOT EXISTS `caishenwinsjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"wp":null,"twp":null,"lw":null,"trl":[3,0,2,4],"torl":null,"orl":[8,4,1,10,7,2,2,2,3,3,0,0,6,11,10,0,9,12,7,7,4,4,0,5,5,12,5,1,11,6],"bwp":null,"now":10800,"nowpr":[5,3,6,6,4,5],"snww":null,"esb":{"1":[5,6,7],"2":[8,9],"3":[20,21],"4":[23,24]},"ebb":{"1":{"fp":5,"lp":7,"bt":1,"ls":1},"2":{"fp":8,"lp":9,"bt":1,"ls":2},"3":{"fp":20,"lp":21,"bt":1,"ls":2},"4":{"fp":23,"lp":24,"bt":1,"ls":1}},"es":{"1":[5,6,7],"2":[8,9],"3":[20,21],"4":[23,24]},"eb":{"1":{"fp":5,"lp":7,"bt":1,"ls":1},"2":{"fp":8,"lp":9,"bt":1,"ls":2},"3":{"fp":20,"lp":21,"bt":1,"ls":2},"4":{"fp":23,"lp":24,"bt":1,"ls":1}},"fs":null,"rs":null,"ssaw":0.00,"ptbr":null,"gt":null,"tptbr":null,"gwt":0,"ctw":0.0,"pmt":null,"cwc":0,"fstc":null,"pcwc":0,"rwsp":null,"hashr":null,"fb":null,"ml":2,"cs":0.3,"rl":[8,4,1,10,7,2,2,2,3,3,0,0,6,11,10,0,9,12,7,7,4,4,0,5,5,12,5,1,11,6],"sid":"0","psid":"0","st":1,"nst":1,"pf":0,"aw":0.00,"wid":0,"wt":"C","wk":"0_C","wbn":null,"wfg":null,"blb":0.00,"blab":0.00,"bl":100000.00,"tb":0.00,"tbb":0.00,"tw":0.00,"np":0.00,"ocr":null,"mr":null,"ge":null}}}')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.calls 结构
DROP TABLE IF EXISTS `calls`;
CREATE TABLE IF NOT EXISTS `calls` (
  `id` int NOT NULL AUTO_INCREMENT,
  `iduser` int NOT NULL,
  `gamecode` varchar(255) NOT NULL,
  `jsonname` varchar(255) NOT NULL DEFAULT '0',
  `steps` int DEFAULT NULL,
  `bycall` varchar(255) DEFAULT NULL,
  `aw` float DEFAULT '0',
  `status` varchar(255) NOT NULL DEFAULT 'pending',
  `rtpcallid` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21679 DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.candybonanzajson 结构
DROP TABLE IF EXISTS `candybonanzajson`;
CREATE TABLE IF NOT EXISTS `candybonanzajson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"bsp":[[0,1,6,7],[28,29,34,35]],"bspb":[[0,1,6,7],[28,29,34,35]],"bspl":[0,1,6,7,28,29,34,35],"bsplb":[0,1,6,7,28,29,34,35],"cls":null,"cp":null,"cs":0.3,"ctw":0,"cwc":0,"dpp":null,"fb":null,"fs":null,"fstc":null,"ge":null,"gml":1,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":[2,2,6,0,9,9,2,2,6,8,1,8,7,7,5,5,5,5,3,3,3,3,7,7,8,1,8,6,4,4,9,9,0,6,4,4],"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[2,2,6,0,9,9,2,2,6,8,1,8,7,7,5,5,5,5,3,3,3,3,7,7,8,1,8,6,4,4,9,9,0,6,4,4],"rwsp":null,"sc":0,"sid":"0","ssaw":0,"st":1,"stw":0,"sw":null,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wlp":[],"wp":null,"wpl":null,"wsc":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.candyburstjson 结构
DROP TABLE IF EXISTS `candyburstjson`;
CREATE TABLE IF NOT EXISTS `candyburstjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"actw":null,"afw":null,"aw":0.24,"bl":141.36,"blab":141.36,"blb":141.36,"bmtw":null,"btw":null,"cls":{"1":[5],"2":[9],"3":[9],"4":[8]},"cp":null,"cs":0.02,"ctw":0,"cwc":0,"fb":null,"fs":null,"ge":[1,11],"gwt":-1,"lwa":null,"ml":1,"mr":null,"np":-0.4,"nst":1,"ocr":null,"orl":[2,7,9,8,3,9,5,4,8,9,6,5,9,7,6,2,6,4,9,5,9,8,6,2,8,7,6,5,9,8,2,7,8,3,9,8],"pcwc":0,"pf":1,"pft":null,"pmt":null,"psid":"0","pwp":null,"rl":[2,7,9,8,3,9,5,4,8,9,6,5,9,7,6,2,6,4,9,5,9,8,6,2,8,7,6,5,9,8,2,7,8,3,9,8],"rwsp":null,"sc":0,"sid":"0","ssaw":0.24,"st":4,"stw":0,"sw":null,"tb":0.4,"tbb":0.4,"tgml":1,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wsc":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.captainsbountyjson 结构
DROP TABLE IF EXISTS `captainsbountyjson`;
CREATE TABLE IF NOT EXISTS `captainsbountyjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"lwm":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[5,8,3,2,1,7,6,0,4,2,1,7,5,8,3],"rns":null,"rs":null,"rwsp":null,"sid":"0","st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wm":1,"wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.cashmaniajson 结构
DROP TABLE IF EXISTS `cashmaniajson`;
CREATE TABLE IF NOT EXISTS `cashmaniajson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"imw":false,"lw":null,"ml":2,"mr":null,"nfp":null,"np":0,"nst":1,"ocr":null,"orl":null,"orv":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[1,5,2,12,0,11,5,3,4],"rsrl":null,"rsrv":null,"rv":[0.6,60,3,1,0,100,60,6,30],"rwsp":null,"sid":"0","st":1,"tb":0,"tbb":0,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.circusdelightjson 结构
DROP TABLE IF EXISTS `circusdelightjson`;
CREATE TABLE IF NOT EXISTS `circusdelightjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si": {"wp": null,"lw": null,"lwm": null,"stp": null,"sc": 0,"orl": null,"ss": 0,"fs": null,"rs": null,"bns": null,"gwt": 0,"fb": null,"ctw": 0.0,"pmt": null,"cwc": 0,"fstc": null,"pcwc": 0,"rwsp": null,"hashr": null,"ml": 10,"cs": 0.02,"rl": [2,7,3,8,1,9,0,0,0,8,1,9,2,7,3],"sid": "0","psid": "0","st": 1,"nst": 1,"pf": 0,"aw": 0.00,"wid": 0,"wt": "C","wk": "0_C","wbn": null,"wfg": null,"blb": 0.00,"blab": 0.00,"bl": 2000.00,"tb": 0.00,"tbb": 0.00,"tw": 0.00,"np": 0.00,"ocr": null,"mr": null,"ge": null}}}')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  存储过程 api.create_and_return_alchemygoldjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_alchemygoldjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_alchemygoldjson`(p_id INT)
BEGIN
	INSERT INTO alchemygoldjson (id) VALUES (p_id);
	SELECT * FROM  alchemygoldjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_anubiswrathjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_anubiswrathjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_anubiswrathjson`(p_id INT)
BEGIN
	INSERT INTO anubiswrathjson (id) VALUES (p_id);
	SELECT * FROM  anubiswrathjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_asgardianrsjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_asgardianrsjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_asgardianrsjson`(p_id INT)
BEGIN
	INSERT INTO asgardianrsjson (id) VALUES (p_id);
	SELECT * FROM  asgardianrsjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_bakerybonanzajson 结构
DROP PROCEDURE IF EXISTS `create_and_return_bakerybonanzajson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_bakerybonanzajson`(p_id INT)
BEGIN
	INSERT INTO bakerybonanzajson (id) VALUES (p_id);
	SELECT * FROM  bakerybonanzajson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_balivacationjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_balivacationjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_balivacationjson`(p_id INT)
BEGIN
	INSERT INTO balivacationjson (id) VALUES (p_id);
	SELECT * FROM  balivacationjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_battlegroundjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_battlegroundjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_battlegroundjson`(p_id INT)
BEGIN
	INSERT INTO battlegroundjson (id) VALUES (p_id);
	SELECT * FROM  battlegroundjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_bikiniparadisejson 结构
DROP PROCEDURE IF EXISTS `create_and_return_bikiniparadisejson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_bikiniparadisejson`(p_id INT)
BEGIN
	INSERT INTO bikiniparadisejson (id) VALUES (p_id);
	SELECT * FROM  bikiniparadisejson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_btrflyblossomjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_btrflyblossomjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_btrflyblossomjson`(p_id INT)
BEGIN
	INSERT INTO btrflyblossomjson (id) VALUES (p_id);
	SELECT * FROM  btrflyblossomjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_buffalowinjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_buffalowinjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_buffalowinjson`(p_id INT)
BEGIN
	INSERT INTO buffalowinjson (id) VALUES (p_id);
	SELECT * FROM  buffalowinjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_candybonanzajson 结构
DROP PROCEDURE IF EXISTS `create_and_return_candybonanzajson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_candybonanzajson`(p_id INT)
BEGIN
	INSERT INTO candybonanzajson (id) VALUES (p_id);
	SELECT * FROM  candybonanzajson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_candyburstjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_candyburstjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_candyburstjson`(p_id INT)
BEGIN
	INSERT INTO candyburstjson (id) VALUES (p_id);
	SELECT * FROM  candyburstjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_captainsbountyjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_captainsbountyjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_captainsbountyjson`(p_id INT)
BEGIN
	INSERT INTO captainsbountyjson (id) VALUES (p_id);
	SELECT * FROM  captainsbountyjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_cashmaniajson 结构
DROP PROCEDURE IF EXISTS `create_and_return_cashmaniajson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_cashmaniajson`(p_id INT)
BEGIN
	INSERT INTO cashmaniajson (id) VALUES (p_id);
	SELECT * FROM  cashmaniajson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_cruiseroyalejson 结构
DROP PROCEDURE IF EXISTS `create_and_return_cruiseroyalejson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_cruiseroyalejson`(p_id INT)
BEGIN
	INSERT INTO cruiseroyalejson (id) VALUES (p_id);
	SELECT * FROM  cruiseroyalejson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_cryptfortunejson 结构
DROP PROCEDURE IF EXISTS `create_and_return_cryptfortunejson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_cryptfortunejson`(p_id INT)
BEGIN
	INSERT INTO cryptfortunejson (id) VALUES (p_id);
	SELECT * FROM  cryptfortunejson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_destsunmoonjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_destsunmoonjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_destsunmoonjson`(p_id INT)
BEGIN
	INSERT INTO destsunmoonjson (id) VALUES (p_id);
	SELECT * FROM  destsunmoonjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_dinerdelightsjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_dinerdelightsjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_dinerdelightsjson`(p_id INT)
BEGIN
	INSERT INTO dinerdelightsjson (id) VALUES (p_id);
	SELECT * FROM  dinerdelightsjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_doublefortunejson 结构
DROP PROCEDURE IF EXISTS `create_and_return_doublefortunejson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_doublefortunejson`(p_id INT)
BEGIN
	INSERT INTO doublefortunejson (id) VALUES (p_id);
	SELECT * FROM  doublefortunejson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_dragonhatch2json 结构
DROP PROCEDURE IF EXISTS `create_and_return_dragonhatch2json`;
DELIMITER //
CREATE PROCEDURE `create_and_return_dragonhatch2json`(p_id INT)
BEGIN
	INSERT INTO dragonhatch2json (id) VALUES (p_id);
	SELECT * FROM  dragonhatch2json WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_dragonhatchjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_dragonhatchjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_dragonhatchjson`(p_id INT)
BEGIN
	INSERT INTO dragonhatchjson (id) VALUES (p_id);
	SELECT * FROM  dragonhatchjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_emojirichesjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_emojirichesjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_emojirichesjson`(p_id INT)
BEGIN
	INSERT INTO emojirichesjson (id) VALUES (p_id);
	SELECT * FROM  emojirichesjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_fortunedragonjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_fortunedragonjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_fortunedragonjson`(p_id INT)
BEGIN
	INSERT INTO fortunedragonjson (id) VALUES (p_id);
	SELECT * FROM  fortunedragonjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_fortunemousejson 结构
DROP PROCEDURE IF EXISTS `create_and_return_fortunemousejson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_fortunemousejson`(p_id INT)
BEGIN
	INSERT INTO fortunemousejson (id) VALUES (p_id);
	SELECT * FROM  fortunemousejson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_fortuneoxjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_fortuneoxjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_fortuneoxjson`(p_id INT)
BEGIN
	INSERT INTO fortuneoxjson (id) VALUES (p_id);
	SELECT * FROM  fortuneoxjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_fortunerabbitjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_fortunerabbitjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_fortunerabbitjson`(p_id INT)
BEGIN
	INSERT INTO fortunerabbitjson (id) VALUES (p_id);
	SELECT * FROM  fortunerabbitjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_fortunetigerjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_fortunetigerjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_fortunetigerjson`(p_id INT)
BEGIN
	INSERT INTO fortunetigerjson (id) VALUES (p_id);
	SELECT * FROM  fortunetigerjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_galacticgemsjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_galacticgemsjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_galacticgemsjson`(p_id INT)
BEGIN
	INSERT INTO galacticgemsjson (id) VALUES (p_id);
	SELECT * FROM  galacticgemsjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_ganeshafortunejson 结构
DROP PROCEDURE IF EXISTS `create_and_return_ganeshafortunejson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_ganeshafortunejson`(p_id INT)
BEGIN
	INSERT INTO ganeshafortunejson (id) VALUES (p_id);
	SELECT * FROM  ganeshafortunejson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_ganeshagoldjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_ganeshagoldjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_ganeshagoldjson`(p_id INT)
BEGIN
	INSERT INTO ganeshagoldjson (id) VALUES (p_id);
	SELECT * FROM  ganeshagoldjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_garudagemsjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_garudagemsjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_garudagemsjson`(p_id INT)
BEGIN
	INSERT INTO garudagemsjson (id) VALUES (p_id);
	SELECT * FROM  garudagemsjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_gdnicefirejson 结构
DROP PROCEDURE IF EXISTS `create_and_return_gdnicefirejson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_gdnicefirejson`(p_id INT)
BEGIN
	INSERT INTO gdnicefirejson (id) VALUES (p_id);
	SELECT * FROM  gdnicefirejson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_gemsaviourconquestjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_gemsaviourconquestjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_gemsaviourconquestjson`(p_id INT)
BEGIN
	INSERT INTO gemsaviourconquestjson (id) VALUES (p_id);
	SELECT * FROM  gemsaviourconquestjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_heiststakesjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_heiststakesjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_heiststakesjson`(p_id INT)
BEGIN
	INSERT INTO heiststakesjson (id) VALUES (p_id);
	SELECT * FROM  heiststakesjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_jackfrostsjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_jackfrostsjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_jackfrostsjson`(p_id INT)
BEGIN
	INSERT INTO jackfrostsjson (id) VALUES (p_id);
	SELECT * FROM  jackfrostsjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_jewelsprosperjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_jewelsprosperjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_jewelsprosperjson`(p_id INT)
BEGIN
	INSERT INTO jewelsprosperjson (id) VALUES (p_id);
	SELECT * FROM  jewelsprosperjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_jungledelightjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_jungledelightjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_jungledelightjson`(p_id INT)
BEGIN
	INSERT INTO jungledelightjson (id) VALUES (p_id);
	SELECT * FROM  jungledelightjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_leprechaunrichesjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_leprechaunrichesjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_leprechaunrichesjson`(p_id INT)
BEGIN
	INSERT INTO leprechaunrichesjson (id) VALUES (p_id);
	SELECT * FROM  leprechaunrichesjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_lgdmonkeykgjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_lgdmonkeykgjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_lgdmonkeykgjson`(p_id INT)
BEGIN
	INSERT INTO lgdmonkeykgjson (id) VALUES (p_id);
	SELECT * FROM  lgdmonkeykgjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_mahjongways2json 结构
DROP PROCEDURE IF EXISTS `create_and_return_mahjongways2json`;
DELIMITER //
CREATE PROCEDURE `create_and_return_mahjongways2json`(p_id INT)
BEGIN
	INSERT INTO mahjongways2json (id) VALUES (p_id);
	SELECT * FROM  mahjongways2json WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_mahjongwaysjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_mahjongwaysjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_mahjongwaysjson`(p_id INT)
BEGIN
	INSERT INTO mahjongwaysjson (id) VALUES (p_id);
	SELECT * FROM  mahjongwaysjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_majestictsjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_majestictsjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_majestictsjson`(p_id INT)
BEGIN
	INSERT INTO majestictsjson (id) VALUES (p_id);
	SELECT * FROM  majestictsjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_midasfortunejson 结构
DROP PROCEDURE IF EXISTS `create_and_return_midasfortunejson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_midasfortunejson`(p_id INT)
BEGIN
	INSERT INTO midasfortunejson (id) VALUES (p_id);
	SELECT * FROM  midasfortunejson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_phoenixrisesjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_phoenixrisesjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_phoenixrisesjson`(p_id INT)
BEGIN
	INSERT INTO phoenixrisesjson (id) VALUES (p_id);
	SELECT * FROM  phoenixrisesjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_piggygoldjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_piggygoldjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_piggygoldjson`(p_id INT)
BEGIN
	INSERT INTO piggygoldjson (id) VALUES (p_id);
	SELECT * FROM  piggygoldjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_prosperftreejson 结构
DROP PROCEDURE IF EXISTS `create_and_return_prosperftreejson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_prosperftreejson`(p_id INT)
BEGIN
	INSERT INTO prosperftreejson (id) VALUES (p_id);
	SELECT * FROM  prosperftreejson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_roosterrbljson 结构
DROP PROCEDURE IF EXISTS `create_and_return_roosterrbljson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_roosterrbljson`(p_id INT)
BEGIN
	INSERT INTO roosterrbljson (id) VALUES (p_id);
	SELECT * FROM  roosterrbljson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_safariwildsjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_safariwildsjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_safariwildsjson`(p_id INT)
BEGIN
	INSERT INTO safariwildsjson (id) VALUES (p_id);
	SELECT * FROM  safariwildsjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_songkranspljson 结构
DROP PROCEDURE IF EXISTS `create_and_return_songkranspljson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_songkranspljson`(p_id INT)
BEGIN
	INSERT INTO songkranspljson (id) VALUES (p_id);
	SELECT * FROM  songkranspljson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_spiritwonderjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_spiritwonderjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_spiritwonderjson`(p_id INT)
BEGIN
	INSERT INTO spiritwonderjson (id) VALUES (p_id);
	SELECT * FROM  spiritwonderjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_sprgolfdrivejson 结构
DROP PROCEDURE IF EXISTS `create_and_return_sprgolfdrivejson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_sprgolfdrivejson`(p_id INT)
BEGIN
	INSERT INTO sprgolfdrivejson (id) VALUES (p_id);
	SELECT * FROM  sprgolfdrivejson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_sprmktspreejson 结构
DROP PROCEDURE IF EXISTS `create_and_return_sprmktspreejson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_sprmktspreejson`(p_id INT)
BEGIN
	INSERT INTO sprmktspreejson (id) VALUES (p_id);
	SELECT * FROM  sprmktspreejson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_thegreaticescapejson 结构
DROP PROCEDURE IF EXISTS `create_and_return_thegreaticescapejson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_thegreaticescapejson`(p_id INT)
BEGIN
	INSERT INTO thegreaticescapejson (id) VALUES (p_id);
	SELECT * FROM  thegreaticescapejson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_treasuresaztecjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_treasuresaztecjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_treasuresaztecjson`(p_id INT)
BEGIN
	INSERT INTO treasuresaztecjson (id) VALUES (p_id);
	SELECT * FROM  treasuresaztecjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_vampirescharmjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_vampirescharmjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_vampirescharmjson`(p_id INT)
BEGIN
	INSERT INTO vampirescharmjson (id) VALUES (p_id);
	SELECT * FROM  vampirescharmjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_wildape3258json 结构
DROP PROCEDURE IF EXISTS `create_and_return_wildape3258json`;
DELIMITER //
CREATE PROCEDURE `create_and_return_wildape3258json`(p_id INT)
BEGIN
	INSERT INTO wildape3258json (id) VALUES (p_id);
	SELECT * FROM  wildape3258json WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_wildbanditojson 结构
DROP PROCEDURE IF EXISTS `create_and_return_wildbanditojson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_wildbanditojson`(p_id INT)
BEGIN
	INSERT INTO wildbanditojson (id) VALUES (p_id);
	SELECT * FROM  wildbanditojson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_wildfireworksjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_wildfireworksjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_wildfireworksjson`(p_id INT)
BEGIN
	INSERT INTO wildfireworksjson (id) VALUES (p_id);
	SELECT * FROM  wildfireworksjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.create_and_return_zombieoutbrkjson 结构
DROP PROCEDURE IF EXISTS `create_and_return_zombieoutbrkjson`;
DELIMITER //
CREATE PROCEDURE `create_and_return_zombieoutbrkjson`(p_id INT)
BEGIN
	INSERT INTO zombieoutbrkjson (id) VALUES (p_id);
	SELECT * FROM  zombieoutbrkjson WHERE id = p_id LIMIT 1;
END//
DELIMITER ;

-- 导出  表 api.cruiseroyalejson 结构
DROP TABLE IF EXISTS `cruiseroyalejson`;
CREATE TABLE IF NOT EXISTS `cruiseroyalejson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"actw":0,"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gm":1,"gwt":0,"hashr":null,"imw":false,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":[5,13,10,7,12,2,3,8,4,1,11,5,4,1,11,5,12,2,3,8,5,13,10,7],"otrl":[0,8,8,0],"owsp":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[5,13,10,7,12,2,3,8,4,1,11,5,4,1,11,5,12,2,3,8,5,13,10,7],"rns":null,"rwsp":null,"sc":2,"sid":"0","snww":null,"st":1,"tb":0,"tbb":0,"trl":[0,8,8,0],"trns":null,"tw":0,"twbm":0,"twp":null,"twpl":null,"wbn":null,"wcp":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.cryptfortunejson 结构
DROP TABLE IF EXISTS `cryptfortunejson`;
CREATE TABLE IF NOT EXISTS `cryptfortunejson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gm":1,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"mwp":null,"np":0,"nst":1,"nswp":null,"ocr":null,"orl":[8,3,13,5,2,0,12,11,1,2,4,11,1,2,4,5,2,0,12,8,3,13],"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[8,3,13,5,2,0,12,11,1,2,4,11,1,2,4,5,2,0,12,8,3,13],"rns":null,"rwsp":null,"sc":0,"sid":"0","snww":null,"ssaw":0,"st":1,"swp":{"17":3,"5":3},"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.cryptogoldjson 结构
DROP TABLE IF EXISTS `cryptogoldjson`;
CREATE TABLE IF NOT EXISTS `cryptogoldjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si": {"wp": null,"bwp": null,"lw": null,"orl": [8,4,7,3,5,12,1,1,6,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,2,2,6,1,1,8,1,9,11,11,6,5],"now": 3888,"nowpr": [6,3,3,3,4,6],"snww": null,"esb": {"1": [6,7],"2": [9,10,11],"3": [12,13,14],"4": [16,17],"5": [19,20],"6": [21,22,23],"7": [24,25],"8": [27,28]},"ebb": {"1": {"fp": 6,"lp": 7,"bt": 2,"ls": 1},"2": {"fp": 9,"lp": 11,"bt": 1,"ls": 2},"3": {"fp": 12,"lp": 14,"bt": 2,"ls": 1},"4": {"fp": 16,"lp": 17,"bt": 2,"ls": 1},"5": {"fp": 19,"lp": 20,"bt": 2,"ls": 1},"6": {"fp": 21,"lp": 23,"bt": 2,"ls": 1},"7": {"fp": 24,"lp": 25,"bt": 1,"ls": 2},"8": {"fp": 27,"lp": 28,"bt": 2,"ls": 1}},"ebbf": null,"es": {"1": [6,7],"2": [9,10,11],"3": [12,13,14],"4": [16,17],"5": [19,20],"6": [21,22,23],"7": [24,25],"8": [27,28]},"eb": {"1": {"fp": 6,"lp": 7,"bt": 2,"ls": 1},"2": {"fp": 9,"lp": 11,"bt": 1,"ls": 2},"3": {"fp": 12,"lp": 14,"bt": 2,"ls": 1},"4": {"fp": 16,"lp": 17,"bt": 2,"ls": 1},"5": {"fp": 19,"lp": 20,"bt": 2,"ls": 1},"6": {"fp": 21,"lp": 23,"bt": 2,"ls": 1},"7": {"fp": 24,"lp": 25,"bt": 1,"ls": 2},"8": {"fp": 27,"lp": 28,"bt": 2,"ls": 1}},"rs": null,"ssaw": 0.00,"fs": null,"wbwp": null,"pr": null,"sc": 0,"mm": 0,"mnm": 0,"gwt": 0,"fb": null,"ctw": 0.0,"pmt": null,"cwc": 0,"fstc": null,"pcwc": 0,"rwsp": null,"hashr": null,"ml": 2,"cs": 0.3,"rl": [8,4,7,3,5,12,1,1,6,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,2,2,6,1,1,8,1,9,11,11,6,5],"sid": "0","psid": "0","st": 1,"nst": 1,"pf": 0,"aw": 0.00,"wid": 0,"wt": "C","wk": "0_C","wbn": null,"wfg": null,"blb": 0.00,"blab": 0.00,"bl": 100000.00,"tb": 0.00,"tbb": 0.00,"tw": 0.00,"np": 0.00,"ocr": null,"mr": null,"ge": null}}}')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.destsunmoonjson 结构
DROP TABLE IF EXISTS `destsunmoonjson`;
CREATE TABLE IF NOT EXISTS `destsunmoonjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"actw":null,"afw":null,"aw":1.62,"bl":139.78,"blab":139.78,"blb":139.78,"bmtw":null,"btw":null,"cs":0.02,"ctw":0,"cwc":0,"fb":null,"fs":null,"ge":[1,11],"gwt":-1,"lm":2,"lw":null,"lwa":null,"lwpk":null,"ml":1,"mp":[15,5],"mr":null,"nmp":null,"np":-0.4,"nst":1,"ocr":null,"orl":[10,11,11,9,5,3,9,7,10,0,7,7,4,10,9,3,1,7],"pf":1,"plm":2,"pmt":null,"prm":3,"psid":"0","rl":[10,11,11,9,5,3,9,7,10,0,7,7,4,10,9,3,1,7],"rm":3,"rns":[[],[],[],[0],[10,9],[1,7]],"rwpk":null,"sc":1,"sid":"0","snww":null,"ssaw":1.62,"st":4,"stw":null,"tb":0.4,"tbb":0.4,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wsp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.dinerdelightsjson 结构
DROP TABLE IF EXISTS `dinerdelightsjson`;
CREATE TABLE IF NOT EXISTS `dinerdelightsjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"afw":0,"aw":0,"bl":100000,"blab":0,"blb":0,"bsm":null,"cls":null,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"lwa":0,"ml":2,"mr":null,"nmk":[8,27],"np":0,"nst":1,"ocr":null,"orl":[3,3,3,7,7,7,3,3,90,7,7,7,10,1,10,2,2,2,10,10,10,2,1,2,8,8,8,90,4,4,8,8,8,4,4,4],"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[3,3,3,7,7,7,3,3,90,7,7,7,10,1,10,2,2,2,10,10,10,2,1,2,8,8,8,90,4,4,8,8,8,4,4,4],"rwsp":null,"sc":2,"sid":"0","sm":{"27":2,"8":5},"st":1,"tb":0,"tbb":0,"tm":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wsc":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.doublefortunejson 结构
DROP TABLE IF EXISTS `doublefortunejson`;
CREATE TABLE IF NOT EXISTS `doublefortunejson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"lwm":null,"ml":2,"mr":null,"nk":null,"np":0,"nst":1,"ocr":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[8,16,9,11,5,18,1,2,4,12,6,17,7,15,10],"rwsp":null,"sc":0,"sid":"0","slw":null,"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.dragonhatch2json 结构
DROP TABLE IF EXISTS `dragonhatch2json`;
CREATE TABLE IF NOT EXISTS `dragonhatch2json` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"actw":null,"afw":null,"aw":0,"bl":141.92,"blab":141.92,"blb":142.32,"bmtw":null,"btw":null,"cls":null,"cp":null,"cs":0.04,"ctw":0,"cwc":0,"df":null,"fb":null,"fstc":null,"ge":[1,11],"gwt":-1,"hashr":"0:7;2;7;6;5#5;8;3;7;1#5;4;0;4;5#1;5;5;8;7#7;1;1;2;5#MV#0.60#MT#1#MG#0#","imw":false,"lw":null,"lwa":null,"ml":1,"mr":null,"np":-0.4,"nst":1,"ocr":null,"orl":[7,5,5,1,7,2,8,4,5,1,7,3,8,5,1,6,7,4,8,2,5,1,5,7,5],"pcwc":0,"pf":1,"pmt":null,"psid":"0","rl":[7,5,5,1,7,2,8,4,5,1,7,3,0,5,1,6,7,4,8,2,5,1,5,7,5],"rwsp":null,"sid":"0","ssaw":null,"st":1,"stw":null,"sw":null,"swp":[12],"swpb":null,"tb":0.4,"tbb":0.4,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wsc":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.dragonhatchjson 结构
DROP TABLE IF EXISTS `dragonhatchjson`;
CREATE TABLE IF NOT EXISTS `dragonhatchjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cb":0,"cbc":0,"cs":0.3,"ctw":0,"cwc":0,"df":null,"fb":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"mdf":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":[0,5,2,3,1,6,2,3,1,4,2,3,1,4,2,3,1,4,2,8,1,4,2,7,0],"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[0,5,2,3,1,6,2,3,1,4,2,3,1,4,2,3,1,4,2,8,1,4,2,7,0],"rns":null,"rwsp":null,"sc":null,"sid":"0","st":1,"sw":null,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.dragontigerluckjson 结构
DROP TABLE IF EXISTS `dragontigerluckjson`;
CREATE TABLE IF NOT EXISTS `dragontigerluckjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"mrl":{"1":{"wp":null,"lw":null,"tw":0.00,"rl":[1,2,3,2,3,1,2,0,3],"orl":[2,3,0]},"2":{"wp":null,"lw":null,"tw":0.00,"rl":[2,0,1,3,1,2,3,2,1],"orl":[0,1,2]}},"gpt":3,"gwt":0,"fb":null,"ctw":0.0,"pmt":null,"cwc":0,"fstc":null,"pcwc":0,"rwsp":null,"hashr":null,"ml":1,"cs":0.5,"rl":null,"sid":"0","psid":"0","st":1,"nst":1,"pf":0,"aw":0.00,"wid":0,"wt":"C","wk":"0_C","wbn":null,"wfg":null,"blb":0.00,"blab":0.00,"bl":0.26,"tb":0.00,"tbb":0.00,"tw":0.00,"np":0.00,"ocr":null,"mr":null,"ge":null}},"err":null}'),
  PRIMARY KEY (`id`) USING BTREE,
  KEY `id` (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.egyptsbookmysteryjson 结构
DROP TABLE IF EXISTS `egyptsbookmysteryjson`;
CREATE TABLE IF NOT EXISTS `egyptsbookmysteryjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"wp":null,"twp":null,"bwp":null,"now":10800,"nowpr":[5,3,6,6,4,5],"snww":null,"lw":null,"trl":[4,0,3,5],"torl":[4,0,3,5],"orl":[9,5,1,11,8,3,3,3,4,4,0,0,7,12,11,0,10,13,8,8,5,5,0,6,6,13,6,1,12,7],"tptbr":null,"ptbr":null,"esb":{"1":[5,6,7],"2":[8,9],"3":[20,21],"4":[23,24]},"ebb":{"1":{"fp":5,"lp":7,"bt":1,"ls":1},"2":{"fp":8,"lp":9,"bt":1,"ls":2},"3":{"fp":20,"lp":21,"bt":1,"ls":2},"4":{"fp":23,"lp":24,"bt":1,"ls":1}},"es":{"1":[5,6,7],"2":[8,9],"3":[20,21],"4":[23,24]},"eb":{"1":{"fp":5,"lp":7,"bt":1,"ls":1},"2":{"fp":8,"lp":9,"bt":1,"ls":2},"3":{"fp":20,"lp":21,"bt":1,"ls":2},"4":{"fp":23,"lp":24,"bt":1,"ls":1}},"mcs":0,"mcsp":null,"mtrlcsp":null,"rs":null,"fs":null,"ssaw":0.00,"sc":0,"gwt":0,"ctw":0.0,"pmt":null,"cwc":0,"fstc":null,"pcwc":0,"rwsp":null,"hashr":null,"fb":null,"ml":2,"cs":0.3,"rl":[9,5,1,11,8,3,3,3,4,4,0,0,7,12,11,0,10,13,8,8,5,5,0,6,6,13,6,1,12,7],"sid":"0","psid":"0","st":1,"nst":1,"pf":0,"aw":0.00,"wid":0,"wt":"C","wk":"0_C","wbn":null,"wfg":null,"blb":0.00,"blab":0.00,"bl":100000.00,"tb":0.00,"tbb":0.00,"tw":0.00,"np":0.00,"ocr":null,"mr":null,"ge":null}}}')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.emojirichesjson 结构
DROP TABLE IF EXISTS `emojirichesjson`;
CREATE TABLE IF NOT EXISTS `emojirichesjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"acw":0,"aw":0,"bl":100000,"blab":0,"blb":0,"cls":null,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gml":1,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":[8,8,6,6,9,9,2,0,2,2,7,7,3,1,3,4,4,4,4,4,4,3,1,3,7,7,2,2,0,2,9,9,6,6,8,8],"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[8,8,6,6,9,9,2,0,2,2,7,7,3,1,3,4,4,4,4,4,4,3,1,3,7,7,2,2,0,2,9,9,6,6,8,8],"rs":null,"rwsp":null,"sc":2,"sid":"0","st":1,"stw":0,"sw":null,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wsc":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.fortunedragonjson 结构
DROP TABLE IF EXISTS `fortunedragonjson`;
CREATE TABLE IF NOT EXISTS `fortunedragonjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"crtw":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gm":1,"gwt":0,"hashr":null,"imw":false,"it":false,"lw":null,"mf":{"mi":[0],"ms":[true],"mt":[2]},"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":[2,2,5,0,0,0,6,3,3],"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[2,2,5,0,0,0,6,3,3],"rwsp":null,"sid":"0","ssaw":0,"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.fortunedragonplayerjson 结构
DROP TABLE IF EXISTS `fortunedragonplayerjson`;
CREATE TABLE IF NOT EXISTS `fortunedragonplayerjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"wp":null,"lw":null,"gm":1,"it":false,"orl":[2,2,5,0,0,0,6,3,3],"fs":null,"mf":{"mt":[2],"ms":[true],"mi":[0]},"ssaw":0.00,"crtw":0.0,"imw":false,"gwt":0,"fb":null,"ctw":0.0,"pmt":null,"cwc":0,"fstc":null,"pcwc":0,"rwsp":null,"hashr":null,"ml":2,"cs":0.3,"rl":[2,2,5,0,0,0,6,3,3],"sid":"0","psid":"0","st":1,"nst":1,"pf":0,"aw":0.00,"wid":0,"wt":"C","wk":"0_C","wbn":null,"wfg":null,"blb":0.00,"blab":0.00,"bl":100000.00,"tb":0.00,"tbb":0.00,"tw":0.00,"np":0.00,"ocr":null,"mr":null,"ge":null}},"err":null}'),
  PRIMARY KEY (`id`) USING BTREE,
  KEY `id` (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.fortunemousejson 结构
DROP TABLE IF EXISTS `fortunemousejson`;
CREATE TABLE IF NOT EXISTS `fortunemousejson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"idr":false,"ir":false,"ist":false,"itw":false,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rc":0,"rl":[1,1,1,0,0,0,2,2,2],"rwsp":null,"sid":"0","st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wc":0,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.fortunemouseplayerjson 结构
DROP TABLE IF EXISTS `fortunemouseplayerjson`;
CREATE TABLE IF NOT EXISTS `fortunemouseplayerjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"wp":null,"lw":null,"orl":null,"idr":false,"ir":false,"ist":false,"rc":0,"itw":false,"wc":0,"gwt":0,"fb":null,"ctw":0.0,"pmt":null,"cwc":0,"fstc":null,"pcwc":0,"rwsp":null,"hashr":null,"ml":2,"cs":0.3,"rl":[1,1,1,0,0,0,2,2,2],"sid":"0","psid":"0","st":1,"nst":1,"pf":0,"aw":0.00,"wid":0,"wt":"C","wk":"0_C","wbn":null,"wfg":null,"blb":0.00,"blab":0.00,"bl":100000.00,"tb":0.00,"tbb":0.00,"tw":0.00,"np":0.00,"ocr":null,"mr":null,"ge":null}},"err":null}'),
  PRIMARY KEY (`id`) USING BTREE,
  KEY `id` (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.fortuneoxjson 结构
DROP TABLE IF EXISTS `fortuneoxjson`;
CREATE TABLE IF NOT EXISTS `fortuneoxjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":false,"fstc":null,"ge":null,"gwt":0,"hashr":null,"im":false,"itw":false,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rc":0,"rf":false,"rl":[2,2,2,99,0,0,0,0,3,3,3,99],"rtf":false,"rwsp":null,"sid":"0","st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wc":0,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.fortuneoxrplayerjson 结构
DROP TABLE IF EXISTS `fortuneoxrplayerjson`;
CREATE TABLE IF NOT EXISTS `fortuneoxrplayerjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"wc":31,"ist":false,"itw":true,"fws":0,"wp":null,"orl":[5,7,6,5,6,3,3,7,6],"lw":null,"irs":false,"gwt":-1,"fb":null,"ctw":0,"pmt":null,"cwc":0,"fstc":null,"pcwc":0,"rwsp":null,"hashr":"0:2;5;4#3;3;6#7;3;6#MV#3.0#MT#1#MG#0#","ml":"1","cs":"0.08","rl":[5,7,6,5,6,3,3,7,6],"sid":"1758600495495052800","psid":"1758600495495052800","st":1,"nst":1,"pf":1,"aw":0,"wid":0,"wt":"C","wk":"0_C","wbn":null,"wfg":null,"blb":44409,"blab":44408.6,"bl":44408.6,"tb":0.4,"tbb":0.4,"tw":0,"np":-0.4,"ocr":null,"mr":null,"ge":[1,11]}},"err":null}'),
  PRIMARY KEY (`id`) USING BTREE,
  KEY `id` (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.fortunerabbitjson 结构
DROP TABLE IF EXISTS `fortunerabbitjson`;
CREATE TABLE IF NOT EXISTS `fortunerabbitjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cpf":{"1":{"bv":3000,"m":500,"p":4},"2":{"bv":120,"m":20,"p":5},"3":{"bv":30,"m":5,"p":6},"4":{"bv":3,"m":0.5,"p":7}},"cptw":0,"crtw":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"iff":false,"ift":false,"imw":false,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":[2,2,0,99,8,8,8,8,2,2,0,99],"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[2,2,0,99,8,8,8,8,2,2,0,99],"rwsp":null,"sid":"0","st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.fortunerabbitplayerjson 结构
DROP TABLE IF EXISTS `fortunerabbitplayerjson`;
CREATE TABLE IF NOT EXISTS `fortunerabbitplayerjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"wp":null,"lw":null,"orl":[2,2,0,99,8,8,8,8,2,2,0,99],"ift":false,"iff":false,"cpf":{"1":{"p":4,"bv":3000.00,"m":500.0},"2":{"p":5,"bv":120.00,"m":20.0},"3":{"p":6,"bv":30.00,"m":5.0},"4":{"p":7,"bv":3.00,"m":0.5}},"cptw":0.0,"crtw":0.0,"imw":false,"fs":null,"gwt":0,"fb":null,"ctw":0.0,"pmt":null,"cwc":0,"fstc":null,"pcwc":0,"rwsp":null,"hashr":null,"ml":2,"cs":0.3,"rl":[2,2,0,99,8,8,8,8,2,2,0,99],"sid":"0","psid":"0","st":1,"nst":1,"pf":0,"aw":0.00,"wid":0,"wt":"C","wk":"0_C","wbn":null,"wfg":null,"blb":0.00,"blab":0.00,"bl":100000.00,"tb":0.00,"tbb":0.00,"tw":0.00,"np":0.00,"ocr":null,"mr":null,"ge":null},"cc":"PGC"},"err":null}'),
  PRIMARY KEY (`id`) USING BTREE,
  KEY `id` (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.fortunetigerjson 结构
DROP TABLE IF EXISTS `fortunetigerjson`;
CREATE TABLE IF NOT EXISTS `fortunetigerjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fstc":null,"fws":0,"ge":null,"gwt":0,"hashr":null,"irs":false,"ist":false,"itw":false,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[2,2,5,0,0,0,6,3,3],"rwsp":null,"sid":"0","st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wc":3,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.fortunetigerplayerjson 结构
DROP TABLE IF EXISTS `fortunetigerplayerjson`;
CREATE TABLE IF NOT EXISTS `fortunetigerplayerjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"wc":31,"ist":false,"itw":true,"fws":0,"wp":null,"orl":[5,7,6,5,6,3,3,7,6],"lw":null,"irs":false,"gwt":-1,"fb":null,"ctw":0,"pmt":null,"cwc":0,"fstc":null,"pcwc":0,"rwsp":null,"hashr":"0:2;5;4#3;3;6#7;3;6#MV#3.0#MT#1#MG#0#","ml":"1","cs":"0.08","rl":[5,7,6,5,6,3,3,7,6],"sid":"1758600495495052800","psid":"1758600495495052800","st":1,"nst":1,"pf":1,"aw":0,"wid":0,"wt":"C","wk":"0_C","wbn":null,"wfg":null,"blb":44409,"blab":44408.6,"bl":44408.6,"tb":0.4,"tbb":0.4,"tw":0,"np":-0.4,"ocr":null,"mr":null,"ge":[1,11]}},"err":null}'),
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.fortunetreejson 结构
DROP TABLE IF EXISTS `fortunetreejson`;
CREATE TABLE IF NOT EXISTS `fortunetreejson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{ "si": {"orl": null,"wp": null,"lw": null,"pha": null,"ha": null,"fs": null,"bns": null,"gwt": 0,"fb": null,"ctw": 0.0,"pmt": null,"cwc": 0,"fstc": null,"pcwc": 0,"rwsp": null,"hashr": null,"ml": 10,"cs": 0.01,"rl": [8,5,7,1,9,6,5,8,6,0,9,5,3,9,8],"sid": "0","psid": "0","st": 1,"nst": 1,"pf": 0,"aw": 0.00,"wid": 0,"wt": "C","wk": "0_C","wbn": null,"wfg": null,"blb": 0.00,"blab": 0.00,"bl": 2000.00,"tb": 0.00,"tbb": 0.00,"tw": 0.00,"np": 0.00,"ocr": null,"mr": null,"ge": null}}}')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.fruitycandyjson 结构
DROP TABLE IF EXISTS `fruitycandyjson`;
CREATE TABLE IF NOT EXISTS `fruitycandyjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"wp":null,"lw":null,"snww":null,"wpl":null,"ssaw":0.00,"now":2000,"nowpr":[5,4,5,4,5],"twbm":0.00,"rlh":[5,4,5,4,5],"orl":[7,6,6,8,0,1,8,3,4,6,2,2,0,5,1,8,3,4,7,6,6,8,0],"rns":null,"crd":null,"gmlb":[1,2,3,5],"gml":[1,2,3,5],"gm":1,"sc":2,"imw":false,"fs":null,"gwt":0,"ctw":0.0,"pmt":null,"cwc":0,"fstc":null,"pcwc":0,"rwsp":null,"hashr":null,"fb":null,"ml":2,"cs":0.3,"rl":[7,6,6,8,0,1,8,3,4,6,2,2,0,5,1,8,3,4,7,6,6,8,0],"sid":"0","psid":"0","st":1,"nst":1,"pf":0,"aw":0.00,"wid":0,"wt":"C","wk":"0_C","wbn":null,"wfg":null,"blb":0.00,"blab":0.00,"bl":100000.00,"tb":0.00,"tbb":0.00,"tw":0.00,"np":0.00,"ocr":null,"mr":null,"ge":null}}}')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.galacticgemsjson 结构
DROP TABLE IF EXISTS `galacticgemsjson`;
CREATE TABLE IF NOT EXISTS `galacticgemsjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"blk":{"bp":[0,1,3,4,5,9,15,19,20,21,23,24],"bpb":[0,1,3,4,5,9,15,19,20,21,23,24],"up":null},"bns":null,"cs":0.3,"ctw":0,"cwc":0,"ewp":null,"fb":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":[7,11,4,8,10,6,3,5,3,6,4,6,2,6,4,9,3,5,3,9,11,10,4,10,11],"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[7,11,4,8,10,6,3,5,3,6,4,6,2,6,4,9,3,5,3,9,11,10,4,10,11],"rwsp":null,"sid":"0","snw":null,"ssaw":0,"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.gamertpcall 结构
DROP TABLE IF EXISTS `gamertpcall`;
CREATE TABLE IF NOT EXISTS `gamertpcall` (
  `id` int NOT NULL AUTO_INCREMENT,
  `agent_id` int NOT NULL,
  `user_code` varchar(50) NOT NULL,
  `provider_code` varchar(50) NOT NULL,
  `game_code` int NOT NULL DEFAULT '0',
  `bet` float NOT NULL DEFAULT '0',
  `expect` float NOT NULL DEFAULT '0',
  `real` float NOT NULL DEFAULT '0',
  `rtp` int NOT NULL DEFAULT '0',
  `type` int NOT NULL DEFAULT '0',
  `status` int NOT NULL DEFAULT '0',
  `created_at` bigint DEFAULT NULL,
  `updated_at` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_agent` (`agent_id`),
  KEY `idx_user_game_unique` (`user_code`,`game_code`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 数据导出被取消选择。

-- 导出  表 api.ganeshafortunejson 结构
DROP TABLE IF EXISTS `ganeshafortunejson`;
CREATE TABLE IF NOT EXISTS `ganeshafortunejson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"bwp":null,"cs":0.3,"ctw":0,"cwc":0,"eb":{"1":{"bt":1,"fp":6,"lp":7,"ls":1},"2":{"bt":1,"fp":8,"lp":9,"ls":2},"3":{"bt":1,"fp":20,"lp":21,"ls":2},"4":{"bt":1,"fp":23,"lp":24,"ls":1}},"ebb":{"1":{"bt":1,"fp":6,"lp":7,"ls":1},"2":{"bt":1,"fp":8,"lp":9,"ls":2},"3":{"bt":1,"fp":20,"lp":21,"ls":2},"4":{"bt":1,"fp":23,"lp":24,"ls":1}},"es":{"1":[5,6,7],"2":[8,9],"3":[20,21],"4":[23,24]},"esb":{"1":[5,6,7],"2":[8,9],"3":[20,21],"4":[23,24]},"esm":null,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"now":10800,"nowpr":[5,3,6,6,4,5],"np":0,"nst":1,"ocr":null,"orl":[8,4,1,10,7,2,2,2,3,3,0,0,6,11,10,0,9,12,7,7,4,4,0,5,5,12,5,1,11,6],"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"ptbrp":null,"rl":[8,4,1,10,7,2,2,2,3,3,0,0,6,11,10,0,9,12,7,7,4,4,0,5,5,12,5,1,11,6],"rs":null,"rwsp":null,"sc":0,"sid":"0","snww":null,"ssaw":0,"st":1,"tb":0,"tbb":0,"torl":[3,0,2,4],"tptbr":null,"trl":[3,0,2,4],"tw":0,"twp":null,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wml":1,"wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.ganeshagoldjson 结构
DROP TABLE IF EXISTS `ganeshagoldjson`;
CREATE TABLE IF NOT EXISTS `ganeshagoldjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"ltw":0,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[2,1,5,4,3,3,0,9,7,8,8,6,7,3,6],"rwsp":null,"sc":0,"sid":"0","snww":null,"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.garudagemsjson 结构
DROP TABLE IF EXISTS `garudagemsjson`;
CREATE TABLE IF NOT EXISTS `garudagemsjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"atw":0,"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fm":1,"fnm":1,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"nwcc":0,"ocr":null,"orl":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[8,5,2,13,5,2,0,12,7,1,6,4,7,1,6,4,5,3,0,12,8,5,3,13],"rns":null,"rwsp":null,"sc":0,"sid":"0","snww":null,"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wcc":0,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.gdnicefirejson 结构
DROP TABLE IF EXISTS `gdnicefirejson`;
CREATE TABLE IF NOT EXISTS `gdnicefirejson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"lwm":null,"ml":2,"mr":null,"norl":null,"np":0,"nst":1,"ocr":null,"orl":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[4,6,7,1,5,3,0,9,2,2,9,0,3,5,1,7,6,4],"rwsp":null,"sc":0,"sid":"0","slw":0,"slwm":0,"snw":null,"st":1,"stw":0,"stwm":0,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.gemsaviourconquestjson 结构
DROP TABLE IF EXISTS `gemsaviourconquestjson`;
CREATE TABLE IF NOT EXISTS `gemsaviourconquestjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"bwp":null,"cs":0.3,"ctw":0,"cwc":0,"eb":{"1":{"bt":1,"fp":6,"lp":8,"ls":1},"2":{"bt":1,"fp":9,"lp":11,"ls":2},"3":{"bt":1,"fp":24,"lp":25,"ls":2},"4":{"bt":1,"fp":27,"lp":29,"ls":1}},"ebb":{"1":{"bt":1,"fp":6,"lp":8,"ls":1},"2":{"bt":1,"fp":9,"lp":11,"ls":2},"3":{"bt":1,"fp":24,"lp":25,"ls":2},"4":{"bt":1,"fp":27,"lp":29,"ls":1}},"es":{"1":[6,7,8],"2":[9,10,11],"3":[24,25],"4":[27,28,29]},"esb":{"1":[6,7,8],"2":[9,10,11],"3":[24,25],"4":[27,28,29]},"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"now":7776,"nowpr":[6,2,6,6,3,6],"np":0,"nst":1,"ocr":null,"orl":[8,4,7,10,1,12,2,2,2,3,3,3,0,0,0,6,11,1,2,0,9,12,7,7,4,4,0,5,5,5,12,5,11,11,6,1],"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"rl":[8,4,7,10,1,12,2,2,2,3,3,3,0,0,0,6,11,1,2,0,9,12,7,7,4,4,0,5,5,5,12,5,11,11,6,1],"rs":null,"rwsp":null,"sc":0,"sid":"0","snww":null,"ssaw":0,"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.gemsaviourswordjson 结构
DROP TABLE IF EXISTS `gemsaviourswordjson`;
CREATE TABLE IF NOT EXISTS `gemsaviourswordjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si": {"wp": null,"lw": null,"sc": null,"bns": null,"frl": [14,14,17,14,0,17,14,15,17,14,16,17,14,17,17],"csf": null,"rs": null,"gwt": 0,"fb": null,"ctw": 0.0,"pmt": null,"cwc": 0,"fstc": null,"pcwc": 0,"rwsp": null,"hashr": null,"ml": 10,"cs": 0.05,"rl": [14,0,15,16,17],"sid": "0","psid": "0","st": 1,"nst": 1,"pf": 0,"aw": 0.00,"wid": 0,"wt": "C","wk": "0_C","wbn": null,"wfg": null,"blb": 0.00,"blab": 0.00,"bl": 2000.00,"tb": 0.00,"tbb": 0.00,"tw": 0.00,"np": 0.00,"ocr": null,"mr": null,"ge": null}}}')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.heiststakesjson 结构
DROP TABLE IF EXISTS `heiststakesjson`;
CREATE TABLE IF NOT EXISTS `heiststakesjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"actw":null,"afw":null,"aw":2.8,"bl":140.56,"blab":140.56,"blb":140.56,"bmtw":null,"btw":null,"cs":0.02,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":{"4":3},"ge":[3,1,11],"gwt":-1,"hashr":"3:4;7;0;7;6#10;3;0;8;8#1;8;0;5;4#8;0;2#0#MV#0#MT#1#MG#0#","iwf":true,"lw":null,"lwa":null,"ml":1,"mr":null,"np":-0.4,"nst":1,"ocr":null,"orl":[4,10,1,7,3,8,8,8,6,8,2,7,7,8,5,2,6,8,4],"osc":1,"otw":0,"pcwc":0,"pf":1,"pmt":null,"psid":"0","rl":[4,10,1,7,3,8,8,0,0,0,0,0,7,8,5,2,6,8,4],"rns":[[4,10],[7,3],[0,0,0,0,0],[],[]],"rwsp":null,"sc":1,"sid":"0","snww":null,"ssaw":2.8,"st":4,"stw":null,"tb":0.4,"tbb":0.4,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.hiphoppandajson 结构
DROP TABLE IF EXISTS `hiphoppandajson`;
CREATE TABLE IF NOT EXISTS `hiphoppandajson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si": {"wp": null,"lw": null,"ws": null,"gaw": null,"bm": {"rbm": null,"sym": [3,4,6,7,9],"obmd": [2,2,2,2,2],"nbmd": null,"lm": null,"bmw": null},"rns": null,"fs": null,"rs": null,"ptw": 0.0,"gwt": 0,"fb": null,"ctw": 0.0,"pmt": null,"cwc": 0,"fstc": null,"pcwc": 0,"rwsp": null,"hashr": null,"ml": 10,"cs": 0.01,"rl": [3,7,10,5,9,11,3,8,12],"sid": "0","psid": "0","st": 1,"nst": 1,"pf": 0,"aw": 0.00,"wid": 0,"wt": "C","wk": "0_C","wbn": null,"wfg": null,"blb": 0.00,"blab": 0.00,"bl": 2000.00,"tb": 0.00,"tbb": 0.00,"tw": 0.00,"np": 0.00,"ocr": null,"mr": null,"ge": null}}}')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.hotpotjson 结构
DROP TABLE IF EXISTS `hotpotjson`;
CREATE TABLE IF NOT EXISTS `hotpotjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{ "si": {"wp": null,"lw": null,"cd": null,"jd": {"0": {"jp": 2500.00,"bv": 5000.0,"ajca": 0.00},"1": {"jp": 400.00,"bv": 800.0,"ajca": 0.00},"2": {"jp": 50.00,"bv": 100.0,"ajca": 0.00}},"j": null,"gwt": 0,"fb": null,"ctw": 0.0,"pmt": null,"cwc": 0,"fstc": null,"pcwc": 0,"rwsp": null,"hashr": null,"ml": 10,"cs": 0.05,"rl": [0,6,1,7,2,3,4,5,8],"sid": "0","psid": "0","st": 1,"nst": 1,"pf": 0,"aw": 0.00,"wid": 0,"wt": "C","wk": "0_C","wbn": null,"wfg": null,"blb": 0.00,"blab": 0.00,"bl": 2000.00,"tb": 0.00,"tbb": 0.00,"tw": 0.00,"np": 0.00,"ocr": null,"mr": null,"ge": null}}}')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.jackfrostsjson 结构
DROP TABLE IF EXISTS `jackfrostsjson`;
CREATE TABLE IF NOT EXISTS `jackfrostsjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"actw":null,"acw":0,"afw":null,"agmfb":0,"aw":0,"bl":138.06,"blab":138.06,"blb":138.46,"bmtw":null,"btw":null,"cs":0.04,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":[1,11],"gm":1,"gwt":-1,"hashr":"0:2;10;6#12;10;6#12;2;6#12;3;2#MV#0.60#MT#1#MG#0#","ix":false,"lw":null,"lwa":null,"ml":1,"mr":null,"np":-0.4,"nst":1,"ocr":null,"pcwc":0,"pf":1,"pmt":null,"psid":"0","rl":[2,12,12,12,10,10,2,3,6,6,6,2],"rs":null,"rwsp":null,"sc":0,"sid":"0","sp":[],"ssaw":null,"st":1,"stw":null,"sw":null,"symc":null,"tb":0.4,"tbb":0.4,"tw":0,"twbm":0,"wbn":null,"wec":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C","wwp":null}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.jewelsprosperjson 结构
DROP TABLE IF EXISTS `jewelsprosperjson`;
CREATE TABLE IF NOT EXISTS `jewelsprosperjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[8,1,4,7,0,0,0,0,2,2,2,2,3,3,3,3,0,0,0,0,9,11,5,10],"rwsp":null,"sc":0,"sid":"0","snww":null,"sp":0,"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.jungledelightjson 结构
DROP TABLE IF EXISTS `jungledelightjson`;
CREATE TABLE IF NOT EXISTS `jungledelightjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"c":null,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[3,6,7,6,3,7,4,5,4,8,9,7,9,8,7],"rwsp":null,"sid":"0","st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.legendofhouyijson 结构
DROP TABLE IF EXISTS `legendofhouyijson`;
CREATE TABLE IF NOT EXISTS `legendofhouyijson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si": {"wp": null,"lw": null,"orl": null,"shd": null,"pow": null,"sc": 0,"sp": null,"fs": null,"gwt": 0,"fb": null,"ctw": 0.0,"pmt": null,"cwc": 0,"fstc": null,"pcwc": 0,"rwsp": null,"hashr": null,"ml": 10,"cs": 0.01,"rl": [3,7,10,5,4,6,7,3,9,5,4,6,3,7,8],"sid": "0","psid": "0","st": 1,"nst": 1,"pf": 0,"aw": 0.00,"wid": 0,"wt": "C","wk": "0_C","wbn": null,"wfg": null,"blb": 0.00,"blab": 0.00,"bl": 2000.00,"tb": 0.00,"tbb": 0.00,"tw": 0.00,"np": 0.00,"ocr": null,"mr": null,"ge": null}}}')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.leprechaunrichesjson 结构
DROP TABLE IF EXISTS `leprechaunrichesjson`;
CREATE TABLE IF NOT EXISTS `leprechaunrichesjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"bwp":null,"cs":0.3,"ctw":0,"cwc":0,"eb":{"1":{"bt":1,"fp":6,"lp":8,"ls":1},"2":{"bt":1,"fp":9,"lp":11,"ls":2},"3":{"bt":1,"fp":24,"lp":25,"ls":2},"4":{"bt":1,"fp":27,"lp":29,"ls":1}},"ebb":{"1":{"bt":1,"fp":6,"lp":8,"ls":1},"2":{"bt":1,"fp":9,"lp":11,"ls":2},"3":{"bt":1,"fp":24,"lp":25,"ls":2},"4":{"bt":1,"fp":27,"lp":29,"ls":1}},"es":{"1":[6,7,8],"2":[9,10,11],"3":[24,25],"4":[27,28,29]},"esb":{"1":[6,7,8],"2":[9,10,11],"3":[24,25],"4":[27,28,29]},"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"now":7776,"nowpr":[6,2,6,6,3,6],"np":0,"nst":1,"ocr":null,"orl":[8,4,7,10,1,12,2,2,2,3,3,3,0,0,0,6,11,1,2,0,9,12,7,7,4,4,0,5,5,5,12,5,11,11,6,1],"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"rl":[8,4,7,10,1,12,2,2,2,3,3,3,0,0,0,6,11,1,2,0,9,12,7,7,4,4,0,5,5,5,12,5,11,11,6,1],"rs":null,"rwsp":null,"sid":"0","snww":null,"ssaw":0,"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.lgdmonkeykgjson 结构
DROP TABLE IF EXISTS `lgdmonkeykgjson`;
CREATE TABLE IF NOT EXISTS `lgdmonkeykgjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"ew":{"1":[9,10,11]},"fb":null,"fm":0,"fnm":0,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"lwa":0,"ml":2,"mr":null,"now":1024,"np":0,"nst":1,"ocr":null,"orl":null,"pcwc":0,"pf":0,"pmt":null,"prh":null,"psid":"0","rc":0,"rh":[4,4,4,4,4],"rl":[11,6,10,8,5,1,2,9,11,0,0,0,5,1,2,9,11,6,10,8],"rns":null,"rwsp":null,"sc":0,"sep":null,"sid":"0","snww":null,"ssaw":0,"st":1,"stp":null,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.mahjongways2json 结构
DROP TABLE IF EXISTS `mahjongways2json`;
CREATE TABLE IF NOT EXISTS `mahjongways2json` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"lwa":0,"mi":0,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":[7,6,7,9,10,9,8,3,8,3,1,4,5,2,4,6,0,2,0,10,4,3,8,3,1,4,5,2,7,6,7,9,10,9,8],"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"rl":[7,6,7,9,10,9,8,3,8,3,1,4,5,2,4,6,0,2,0,10,4,3,8,3,1,4,5,2,7,6,7,9,10,9,8],"rs":null,"rwsp":null,"sc":0,"sid":"0","snww":null,"ss":{"1":9,"2":11,"3":17,"4":23,"5":25},"ssaw":0,"ssb":{"1":9,"2":11,"3":17,"4":23,"5":25},"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wm":0,"wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.mahjongwaysjson 结构
DROP TABLE IF EXISTS `mahjongwaysjson`;
CREATE TABLE IF NOT EXISTS `mahjongwaysjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"lwa":0,"mi":0,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":[7,6,7,8,9,8,3,2,3,1,5,5,7,0,7,8,0,8,3,2,1,4,5,5,7,6,7,8,9,8],"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"rl":[7,6,7,8,9,8,3,2,3,1,5,5,7,0,7,8,0,8,3,2,1,4,5,5,7,6,7,8,9,8],"rs":null,"rwsp":null,"sc":0,"sid":"0","snww":null,"ss":{"1":8,"2":21},"ssaw":0,"ssb":{"1":8,"2":21},"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wm":0,"wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.majestictsjson 结构
DROP TABLE IF EXISTS `majestictsjson`;
CREATE TABLE IF NOT EXISTS `majestictsjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cp":null,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gml":1,"gs":[2,5,9,12,15,19,22],"gsd":null,"gwt":0,"hashr":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"ogml":1,"ogs":[2,5,9,12,15,19,22],"orl":[0,5,3,7,2,9,1,7,2,8,3,7,2,8,4,7,2,8,1,9,2,8,3,5,0],"pcwc":0,"pf":0,"pmt":null,"psid":"0","rc":false,"rl":[0,5,3,7,2,9,1,7,2,8,3,7,2,8,4,7,2,8,1,9,2,8,3,5,0],"rngs":null,"rns":null,"rwsp":null,"sc":0,"sid":"0","ssaw":0,"st":1,"sw":null,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wsc":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.mermaidrichesjson 结构
DROP TABLE IF EXISTS `mermaidrichesjson`;
CREATE TABLE IF NOT EXISTS `mermaidrichesjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"twb":0.0,"wp":null,"wpl":null,"lw":null,"snww":null,"ssaw":0.00,"sc":1,"gm":1,"rns":null,"fs":null,"swlb":{"1":{"p":0,"ls":-1},"2":{"p":7,"ls":3}},"swl":{"1":{"p":0,"ls":-1},"2":{"p":7,"ls":3}},"ptbr":null,"gwt":0,"ctw":0.0,"pmt":null,"cwc":0,"fstc":null,"pcwc":0,"rwsp":null,"hashr":null,"fb":null,"ml":2,"cs":0.3,"rl":[0,10,11,3,1,2,8,0,9,4,2,7,11,5,6],"sid":"0","psid":"0","st":1,"nst":1,"pf":0,"aw":0.00,"wid":0,"wt":"C","wk":"0_C","wbn":null,"wfg":null,"blb":0.00,"blab":0.00,"bl":100000.00,"tb":0.00,"tbb":0.00,"tw":0.00,"np":0.00,"ocr":null,"mr":null,"ge":null}}}')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.midasfortunejson 结构
DROP TABLE IF EXISTS `midasfortunejson`;
CREATE TABLE IF NOT EXISTS `midasfortunejson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"am":0,"aw":0,"bl":100000,"blab":0,"blb":0,"cgm":0,"cgsp":null,"cp":null,"cs":0.3,"ctw":0,"cwc":0,"cwsp":null,"fb":null,"fs":null,"fstc":null,"ge":null,"gpps":[[0,3],[24,3]],"gsp":[2,5,9,12,15,19,22],"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"ngsp":null,"np":0,"nst":1,"ocr":null,"orl":[0,5,3,7,2,9,1,7,2,8,3,7,2,8,4,7,2,8,1,9,2,8,3,5,0],"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"rl":[0,5,3,7,2,9,1,7,2,8,3,7,2,8,4,7,2,8,1,9,2,8,3,5,0],"rns":null,"rwsp":null,"sc":0,"sid":"0","ssaw":0,"st":1,"sw":null,"tb":0,"tbb":0,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wgsp":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wsc":null,"wsm":1,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.mrhallowwinjson 结构
DROP TABLE IF EXISTS `mrhallowwinjson`;
CREATE TABLE IF NOT EXISTS `mrhallowwinjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{ "si": {"wp": null,"lw": null,"bns": null,"mhf": null,"orl": null,"sc": 0,"gwt": 0,"fb": null,"ctw": 0.0,"pmt": null,"cwc": 0,"fstc": null,"pcwc": 0,"rwsp": null,"hashr": null,"ml": 10,"cs": 0.01,"rl": [9,0,5,3,6,6,4,4,8,8,1,2,6,0,7,8,8,8,5,7],"sid": "0","psid": "0","st": 1,"nst": 1,"pf": 0,"aw": 0.00,"wid": 0,"wt": "C","wk": "0_C","wbn": null,"wfg": null,"blb": 0.00,"blab": 0.00,"bl": 2000.00,"tb": 0.00,"tbb": 0.00,"tw": 0.00,"np": 0.00,"ocr": null,"mr": null,"ge": null}}}')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.muaythaichampionjson 结构
DROP TABLE IF EXISTS `muaythaichampionjson`;
CREATE TABLE IF NOT EXISTS `muaythaichampionjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si": {"wp": null,"lw": null,"orl": null,"fs": null,"mtf": null,"gwt": 0,"fb": null,"ctw": 0.0,"pmt": null,"cwc": 0,"fstc": null,"pcwc": 0,"rwsp": null,"hashr": null,"ml": 10,"cs": 0.02,"rl": [2,0,0,2,1,8,7,9,4,11,1,3,0,0,3],"sid": "0","psid": "0","st": 1,"nst": 1,"pf": 0,"aw": 0.00,"wid": 0,"wt": "C","wk": "0_C","wbn": null,"wfg": null,"blb": 0.00,"blab": 0.00,"bl": 2000.00,"tb": 0.00,"tbb": 0.00,"tw": 0.00,"np": 0.00,"ocr": null,"mr": null,"ge": null}}}')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.orientalprosjson 结构
DROP TABLE IF EXISTS `orientalprosjson`;
CREATE TABLE IF NOT EXISTS `orientalprosjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"usp":null,"nsp":[],"sp":[2,27],"utsp":null,"ntsp":[],"tsp":[],"csc":0,"sc":2,"lgm":0,"gm":1,"wbwp":null,"wp":null,"lw":null,"twp":null,"trl":[3,6,2,4],"torl":[3,6,2,4],"twbm":0.0,"bwp":null,"now":10800,"nowpr":[5,3,6,6,4,5],"snww":null,"esb":{"1":[5,6,7],"2":[8,9],"3":[20,21],"4":[23,24]},"ebb":{"1":{"fp":5,"lp":7,"bt":1,"ls":1},"2":{"fp":8,"lp":9,"bt":1,"ls":2},"3":{"fp":20,"lp":21,"bt":1,"ls":2},"5":{"fp":23,"lp":24,"bt":1,"ls":1}},"es":{"1":[5,6,7],"2":[8,9],"3":[20,21],"4":[23,24]},"eb":{"1":{"fp":5,"lp":7,"bt":1,"ls":1},"2":{"fp":8,"lp":9,"bt":1,"ls":2},"3":{"fp":20,"lp":21,"bt":1,"ls":2},"5":{"fp":23,"lp":24,"bt":1,"ls":1}},"ssaw":0.00,"ptbr":null,"tptbr":null,"orl":[8,4,1,10,7,2,2,2,3,3,0,0,0,11,10,0,9,12,7,7,4,4,0,5,5,12,5,1,11,6],"rs":null,"fs":null,"gwt":0,"fb":null,"ctw":0.0,"pmt":null,"cwc":0,"fstc":null,"pcwc":0,"rwsp":null,"hashr":null,"ml":2,"cs":0.3,"rl":[8,4,1,10,7,2,2,2,3,3,0,0,0,11,10,0,9,12,7,7,4,4,0,5,5,12,5,1,11,6],"sid":"0","psid":"0","st":1,"nst":1,"pf":0,"aw":0.00,"wid":0,"wt":"C","wk":"0_C","wbn":null,"wfg":null,"blb":0.00,"blab":0.00,"bl":100000.00,"tb":0.00,"tbb":0.00,"tw":0.00,"np":0.00,"ocr":null,"mr":null,"ge":null}}}')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.phoenixrisesjson 结构
DROP TABLE IF EXISTS `phoenixrisesjson`;
CREATE TABLE IF NOT EXISTS `phoenixrisesjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[1,7,9,2,0,5,3,2,1,2,0,4,1,8,6],"rwsp":null,"sc":0,"sid":"0","snww":null,"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.piggygoldjson 结构
DROP TABLE IF EXISTS `piggygoldjson`;
CREATE TABLE IF NOT EXISTS `piggygoldjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"frl":[3,1,4,4,2,2,3,1,4],"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"pc":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[1,2,1],"rwsp":null,"sid":"0","st":1,"tb":0,"tbb":0,"tnbwm":null,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wm":null,"wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.prosperftreejson 结构
DROP TABLE IF EXISTS `prosperftreejson`;
CREATE TABLE IF NOT EXISTS `prosperftreejson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gm":1,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":[12,9,5,4,13,11,8,1,10,3,1,6,2,0,5,1,6,2,0,5,11,8,1,10,3,12,9,5,4,13],"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[12,9,5,4,13,11,8,1,10,3,1,6,2,0,5,1,6,2,0,5,11,8,1,10,3,12,9,5,4,13],"rns":null,"rwsp":null,"sc":0,"sid":"0","snww":null,"sps":null,"ssaw":0,"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.prosperitylionjson 结构
DROP TABLE IF EXISTS `prosperitylionjson`;
CREATE TABLE IF NOT EXISTS `prosperitylionjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si": {"wp": null,"lw": null,"bns": null,"orl": null,"lf": null,"bf": null,"ldf": null,"gwt": 0,"fb": null,"ctw": 0.0,"pmt": null,"cwc": 0,"fstc": null,"pcwc": 0,"rwsp": null,"hashr": null,"ml": 10,"cs": 0.05,"rl": [9,6,7,2,9,8,6,9,7,0,9,6,4,9,8],"sid": "0","psid": "0","st": 1,"nst": 1,"pf": 0,"aw": 0.00,"wid": 0,"wt": "C","wk": "0_C","wbn": null,"wfg": null,"blb": 0.00,"blab": 0.00,"bl": 2000.00,"tb": 0.00,"tbb": 0.00,"tw": 0.00,"np": 0.00,"ocr": null,"mr": null,"ge": null}}}')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.queenbountyjson 结构
DROP TABLE IF EXISTS `queenbountyjson`;
CREATE TABLE IF NOT EXISTS `queenbountyjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"wp":null,"lw":null,"ssaw":0.0,"rns":null,"orl":null,"cbf":null,"fs":null,"gwt":0,"fb":null,"ctw":0.0,"pmt":null,"cwc":0,"fstc":null,"pcwc":0,"rwsp":null,"hashr":null,"ml":2,"cs":0.3,"rl":[3,5,8,3,0,2,1,7,1,6,0,4,0,2,1,7,3,5,8,3],"sid":"0","psid":"0","st":1,"nst":1,"pf":0,"aw":0.00,"wid":0,"wt":"C","wk":"0_C","wbn":null,"wfg":null,"blb":0.00,"blab":0.00,"bl":100000.00,"tb":0.00,"tbb":0.00,"tw":0.00,"np":0.00,"ocr":null,"mr":null,"ge":null}}}')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.riseofapollojson 结构
DROP TABLE IF EXISTS `riseofapollojson`;
CREATE TABLE IF NOT EXISTS `riseofapollojson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"sc":0,"wp":null,"bwp":null,"lw":null,"snww":null,"ssaw":0.00,"twbm":0.0,"now":1920,"nowpr":[4,2,4,5,3,4],"ptbr":null,"orl":[8,4,4,4,1,12,2,2,2,3,3,3,0,0,0,6,11,5,2,0,9,1,1,7,4,4,0,5,5,5,12,5,11,11,11,1],"esb":{"1":[1,2,3],"2":[6,7,8],"3":[9,10,11],"4":[12,13,14],"5":[21,22],"6":[24,25],"7":[27,28,29],"8":[32,33,34]},"ebb":{"1":{"fp":1,"lp":3,"bt":2,"ls":1},"2":{"fp":6,"lp":8,"bt":1,"ls":1},"3":{"fp":9,"lp":11,"bt":1,"ls":2},"4":{"fp":12,"lp":14,"bt":2,"ls":1},"5":{"fp":21,"lp":22,"bt":2,"ls":1},"6":{"fp":24,"lp":25,"bt":1,"ls":2},"7":{"fp":27,"lp":29,"bt":1,"ls":1},"8":{"fp":32,"lp":34,"bt":2,"ls":1}},"es":{"1":[1,2,3],"2":[6,7,8],"3":[9,10,11],"4":[12,13,14],"5":[21,22],"6":[24,25],"7":[27,28,29],"8":[32,33,34]},"eb":{"1":{"fp":1,"lp":3,"bt":2,"ls":1},"2":{"fp":6,"lp":8,"bt":1,"ls":1},"3":{"fp":9,"lp":11,"bt":1,"ls":2},"4":{"fp":12,"lp":14,"bt":2,"ls":1},"5":{"fp":21,"lp":22,"bt":2,"ls":1},"6":{"fp":24,"lp":25,"bt":1,"ls":2},"7":{"fp":27,"lp":29,"bt":1,"ls":1},"8":{"fp":32,"lp":34,"bt":2,"ls":1}},"wbwp":null,"fmbwf":{"m":1,"bwsk":null,"bwsp":null},"rs":null,"fs":null,"gwt":0,"ctw":0.0,"pmt":null,"cwc":0,"fstc":null,"pcwc":0,"rwsp":null,"hashr":null,"fb":null,"ml":2,"cs":0.3,"rl":[8,4,4,4,1,12,2,2,2,3,3,3,0,0,0,6,11,5,2,0,9,1,1,7,4,4,0,5,5,5,12,5,11,11,11,1],"sid":"0","psid":"0","st":1,"nst":1,"pf":0,"aw":0.00,"wid":0,"wt":"C","wk":"0_C","wbn":null,"wfg":null,"blb":0.00,"blab":0.00,"bl":100000.00,"tb":0.00,"tbb":0.00,"tw":0.00,"np":0.00,"ocr":null,"mr":null,"ge":null}}}')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.roosterrbljson 结构
DROP TABLE IF EXISTS `roosterrbljson`;
CREATE TABLE IF NOT EXISTS `roosterrbljson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gm":1,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":null,"otw":0,"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"rl":[8,5,2,13,5,2,0,2,12,7,1,6,4,11,7,1,6,4,11,5,3,0,3,12,8,5,3,13],"rns":null,"rwsp":null,"sc":0,"sid":"0","snww":null,"ssaw":0,"st":1,"swl":{"1":{"ls":3,"p":6},"2":{"ls":3,"p":21}},"swlb":{"1":{"ls":3,"p":6},"2":{"ls":3,"p":21}},"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.safariwildsjson 结构
DROP TABLE IF EXISTS `safariwildsjson`;
CREATE TABLE IF NOT EXISTS `safariwildsjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"bwp":null,"cs":0.3,"ctw":0,"cwc":0,"eb":{"0":{"bt":2,"fp":2,"lp":3,"ls":1},"1":{"bt":2,"fp":7,"lp":9,"ls":1},"2":{"bt":2,"fp":11,"lp":13,"ls":1},"3":{"bt":2,"fp":14,"lp":15,"ls":1},"4":{"bt":2,"fp":16,"lp":17,"ls":1},"5":{"bt":2,"fp":19,"lp":21,"ls":1},"6":{"bt":2,"fp":24,"lp":26,"ls":1},"7":{"bt":2,"fp":29,"lp":30,"ls":1}},"ebb":{"0":{"bt":2,"fp":2,"lp":3,"ls":1},"1":{"bt":2,"fp":7,"lp":9,"ls":1},"2":{"bt":2,"fp":11,"lp":13,"ls":1},"3":{"bt":2,"fp":14,"lp":15,"ls":1},"4":{"bt":2,"fp":16,"lp":17,"ls":1},"5":{"bt":2,"fp":19,"lp":21,"ls":1},"6":{"bt":2,"fp":24,"lp":26,"ls":1},"7":{"bt":2,"fp":29,"lp":30,"ls":1}},"es":{"0":[2,3],"1":[7,8,9],"2":[11,12,13],"3":[14,15],"4":[16,17],"5":[19,20,21],"6":[24,25,26],"7":[29,30]},"esb":{"0":[2,3],"1":[7,8,9],"2":[11,12,13],"3":[14,15],"4":[16,17],"5":[19,20,21],"6":[24,25,26],"7":[29,30]},"fb":null,"fs":null,"fstc":null,"ge":null,"gm":1,"gwt":0,"hashr":null,"imw":false,"lw":null,"ml":2,"mr":null,"now":1296,"nowpr":null,"np":0,"nst":1,"ocr":null,"ogm":1,"orl":[6,9,3,3,12,7,1,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,7,1,4,4,4,6,9,5,5,12],"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"rl":[6,9,3,3,12,7,1,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,7,1,4,4,4,6,9,5,5,12],"rs":null,"rwsp":null,"sc":0,"sid":"0","snww":null,"ssaw":0,"st":1,"tb":0,"tbb":0,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.sctcleopatrajson 结构
DROP TABLE IF EXISTS `sctcleopatrajson`;
CREATE TABLE IF NOT EXISTS `sctcleopatrajson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"acw":0.0,"wp":null,"wwp":null,"sp":null,"wpl":null,"sw":null,"swm":null,"twwm":0.0,"sc":null,"ix":false,"orl":null,"gm":0,"prm":0,"ifsg":false,"rp":null,"rs":null,"fs":null,"gwt":0,"fb":null,"ctw":0.0,"pmt":null,"cwc":0,"fstc":null,"pcwc":0,"rwsp":null,"hashr":null,"ml":2,"cs":0.3,"rl":[7,2,4,4,1,3,3,2,8,2,5,5],"sid":"0","psid":"0","st":1,"nst":1,"pf":0,"aw":0.00,"wid":0,"wt":"C","wk":"0_C","wbn":null,"wfg":null,"blb":0.00,"blab":0.00,"bl":100000.00,"tb":0.00,"tbb":0.00,"tw":0.00,"np":0.00,"ocr":null,"mr":null,"ge":null}}}')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.songkranspljson 结构
DROP TABLE IF EXISTS `songkranspljson`;
CREATE TABLE IF NOT EXISTS `songkranspljson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"crtw":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gm":0,"gwt":0,"hashr":null,"imw":false,"lw":null,"mf":[0,0,0],"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":[2,12,12,3,10,1,9,5,5,0,8,7,3,10,1,9,2,12,12],"pcwc":0,"pf":0,"pmf":null,"pmt":null,"psid":"0","rl":[2,12,12,3,10,1,9,5,5,0,8,7,3,10,1,9,2,12,12],"rns":null,"rwsp":null,"sc":2,"sid":"0","snww":null,"ssaw":0,"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.spiritwonderjson 结构
DROP TABLE IF EXISTS `spiritwonderjson`;
CREATE TABLE IF NOT EXISTS `spiritwonderjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"bwp":null,"cs":0.3,"ctw":0,"cwc":0,"eb":{"1":{"bt":2,"fp":4,"lp":7,"ls":1},"2":{"bt":2,"fp":11,"lp":13,"ls":1},"3":{"bt":2,"fp":14,"lp":16,"ls":1},"4":{"bt":2,"fp":20,"lp":23,"ls":1}},"ebb":{"1":{"bt":2,"fp":4,"lp":7,"ls":1},"2":{"bt":2,"fp":11,"lp":13,"ls":1},"3":{"bt":2,"fp":14,"lp":16,"ls":1},"4":{"bt":2,"fp":20,"lp":23,"ls":1}},"es":{"1":[4,5,6,7],"2":[11,12,13],"3":[14,15,16],"4":[20,21,22,23]},"esb":{"1":[4,5,6,7],"2":[11,12,13],"3":[14,15,16],"4":[20,21,22,23]},"fb":null,"fs":null,"fstc":null,"ge":null,"gm":1,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"msp":null,"now":13500,"nowpr":[5,2,3,6,5,3,5],"np":0,"nst":1,"ocr":null,"orl":[8,7,6,13,2,2,2,2,12,10,0,4,4,4,5,5,5,1,9,11,3,3,3,3,8,7,6,13],"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[8,7,6,13,2,2,2,2,12,10,0,4,4,4,5,5,5,1,9,11,3,3,3,3,8,7,6,13],"rs":null,"rwsp":null,"sc":0,"sid":"0","snww":null,"spc":0,"ssaw":0,"st":1,"tb":0,"tbb":0,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.sprgolfdrivejson 结构
DROP TABLE IF EXISTS `sprgolfdrivejson`;
CREATE TABLE IF NOT EXISTS `sprgolfdrivejson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"bmtw":0,"bwp":null,"crtw":0,"cs":0.3,"ctw":0,"cwc":0,"eb":{"1":{"bt":1,"fp":3,"lp":3,"ls":1},"10":{"bt":1,"fp":23,"lp":23,"ls":1},"11":{"bt":1,"fp":25,"lp":27,"ls":1},"12":{"bt":2,"fp":28,"lp":29,"ls":1},"13":{"bt":1,"fp":33,"lp":33,"ls":1},"14":{"bt":1,"fp":34,"lp":34,"ls":1},"2":{"bt":1,"fp":4,"lp":4,"ls":1},"3":{"bt":1,"fp":7,"lp":9,"ls":1},"4":{"bt":2,"fp":10,"lp":11,"ls":1},"5":{"bt":2,"fp":12,"lp":13,"ls":1},"6":{"bt":1,"fp":14,"lp":14,"ls":1},"7":{"bt":1,"fp":17,"lp":17,"ls":1},"8":{"bt":2,"fp":18,"lp":19,"ls":1},"9":{"bt":1,"fp":20,"lp":20,"ls":1}},"ebb":{"1":{"bt":1,"fp":3,"lp":3,"ls":1},"10":{"bt":1,"fp":23,"lp":23,"ls":1},"11":{"bt":1,"fp":25,"lp":27,"ls":1},"12":{"bt":2,"fp":28,"lp":29,"ls":1},"13":{"bt":1,"fp":33,"lp":33,"ls":1},"14":{"bt":1,"fp":34,"lp":34,"ls":1},"2":{"bt":1,"fp":4,"lp":4,"ls":1},"3":{"bt":1,"fp":7,"lp":9,"ls":1},"4":{"bt":2,"fp":10,"lp":11,"ls":1},"5":{"bt":2,"fp":12,"lp":13,"ls":1},"6":{"bt":1,"fp":14,"lp":14,"ls":1},"7":{"bt":1,"fp":17,"lp":17,"ls":1},"8":{"bt":2,"fp":18,"lp":19,"ls":1},"9":{"bt":1,"fp":20,"lp":20,"ls":1}},"es":{"1":[3],"10":[23],"11":[25,26,27],"12":[28,29],"13":[33],"14":[34],"2":[4],"3":[7,8,9],"4":[10,11],"5":[12,13],"6":[14],"7":[17],"8":[18,19],"9":[20]},"esb":{"1":[3],"10":[23],"11":[25,26,27],"12":[28,29],"13":[33],"14":[34],"2":[4],"3":[7,8,9],"4":[10,11],"5":[12,13],"6":[14],"7":[17],"8":[18,19],"9":[20]},"fb":null,"fs":null,"fstc":null,"ge":null,"gm":0,"gwt":0,"hashr":null,"imw":false,"lw":null,"ml":2,"mr":null,"ms":0,"now":8100,"nowpr":[6,3,5,5,3,6],"np":0,"nst":1,"ocr":null,"orl":[8,4,7,8,8,12,9,2,2,2,3,3,1,1,11,11,0,5,1,1,11,11,0,5,9,2,2,2,3,3,8,4,7,8,8,12],"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"rl":[8,4,7,8,8,12,9,2,2,2,3,3,1,1,11,11,0,5,1,1,11,11,0,5,9,2,2,2,3,3,8,4,7,8,8,12],"rs":null,"rwsp":null,"sc":2,"sid":"0","snww":null,"ssaw":0,"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.sprmktspreejson 结构
DROP TABLE IF EXISTS `sprmktspreejson`;
CREATE TABLE IF NOT EXISTS `sprmktspreejson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"afw":0,"aw":0,"bl":100000,"blab":0,"blb":0,"bsm":null,"cls":null,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lwa":0,"ml":2,"mr":null,"nmk":[8,27],"np":0,"nst":1,"ocr":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[3,3,3,7,7,7,3,3,90,7,7,7,10,1,10,2,2,2,10,10,10,2,1,2,8,8,8,90,4,4,8,8,8,4,4,4],"rwsp":null,"sc":0,"sid":"0","sm":{"27":2,"8":5},"st":1,"sw":null,"tb":0,"tbb":0,"tm":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wsc":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  存储过程 api.sp_add_and_return_call 结构
DROP PROCEDURE IF EXISTS `sp_add_and_return_call`;
DELIMITER //
CREATE PROCEDURE `sp_add_and_return_call`(IN in_iduser INT, IN in_gamecode VARCHAR(50), IN in_step INT, IN in_json VARCHAR(1024), IN in_rtp_call_id INT)
BEGIN
    INSERT INTO calls (iduser, gamecode, jsonname, steps, bycall, rtpcallid) VALUES (in_iduser, in_gamecode, in_json, in_step, 'system', in_rtp_call_id);
    SELECT * FROM calls WHERE id = LAST_INSERT_ID() LIMIT 1;
END//
DELIMITER ;

-- 导出  存储过程 api.sp_cancel_game_rtp_call 结构
DROP PROCEDURE IF EXISTS `sp_cancel_game_rtp_call`;
DELIMITER //
CREATE PROCEDURE `sp_cancel_game_rtp_call`(
    IN in_agent_id INT,
    IN in_id INT
)
BEGIN
    DECLARE existing_expect FLOAT;
    DECLARE existing_real FLOAT;
    DECLARE diff FLOAT;

    SELECT `expect`, `real` INTO existing_expect, existing_real FROM gamertpcall
    WHERE id = in_id  AND agent_id = in_agent_id AND status = 0;

    IF existing_expect IS NOT NULL AND existing_real IS NOT NULL THEN
        SET diff = existing_expect - existing_real;
        UPDATE gamertpcall SET status = 4 WHERE agent_id = in_agent_id AND id = in_id;
        SELECT diff AS Difference;
    ELSE
        SELECT NULL AS Difference;
    END IF;
END//
DELIMITER ;

-- 导出  存储过程 api.sp_game_rtp_call_insert 结构
DROP PROCEDURE IF EXISTS `sp_game_rtp_call_insert`;
DELIMITER //
CREATE PROCEDURE `sp_game_rtp_call_insert`(
    IN in_agent_id INT,
    IN in_user_code VARCHAR(50),
    IN in_provider_code VARCHAR(50),
    IN in_game_code INT,
    IN in_bet FLOAT,
    IN in_expect FLOAT,
    IN in_rtp INT,
    IN in_type INT,
    IN in_created_at BIGINT,
    IN in_updated_at BIGINT
)
BEGIN
    DECLARE existing_id INT;
    
    SELECT id INTO existing_id FROM gamertpcall WHERE user_code = in_user_code AND game_code = in_game_code AND  agent_id = in_agent_id AND status = 0 LIMIT 1;
    IF existing_id IS NOT NULL THEN
        SELECT 1 AS Result;
    ELSE
        INSERT INTO gamertpcall (agent_id, user_code, provider_code, game_code, bet, expect, rtp, type, created_at, updated_at)
        VALUES (in_agent_id, in_user_code, in_provider_code, in_game_code, in_bet, in_expect, in_rtp, in_type, in_created_at, in_updated_at);
        SELECT LAST_INSERT_ID() AS id, 0 AS Result;
    END IF;
END//
DELIMITER ;

-- 导出  存储过程 api.sp_get_call_or_game_rtp_call 结构
DROP PROCEDURE IF EXISTS `sp_get_call_or_game_rtp_call`;
DELIMITER //
CREATE PROCEDURE `sp_get_call_or_game_rtp_call`(
    IN in_user_id INT,  
    IN in_user_code VARCHAR(50), 
    IN in_game_code VARCHAR(50), 
    IN in_game_id INT,
    IN in_bet FLOAT
)
BEGIN
    
    DECLARE call_id INT;
    DECLARE rtp_call_id INT;
    DECLARE found_bet FLOAT;
    SELECT id INTO call_id FROM calls WHERE iduser = in_user_id AND status = 'pending' AND gamecode = in_game_code LIMIT 1;
    IF call_id IS NOT NULL THEN
        SELECT * FROM calls WHERE id = call_id LIMIT 1;
    ELSE
        SELECT id, bet INTO rtp_call_id, found_bet FROM gamertpcall WHERE user_code = in_user_code AND game_code = in_game_id AND status = 0 LIMIT 1;
        IF rtp_call_id IS NOT NULL THEN
            IF found_bet IS NOT NULL AND found_bet = in_bet THEN
                UPDATE gamertpcall SET status = 1 WHERE id = rtp_call_id;
                SELECT * FROM gamertpcall WHERE id = rtp_call_id LIMIT 1;
            ELSE
                UPDATE gamertpcall SET status = 3 WHERE id = rtp_call_id;
                SELECT NULL;
            END IF;
        ELSE
            SELECT NULL;
        END IF;
    END IF;
END//
DELIMITER ;

-- 导出  存储过程 api.sp_new_agent 结构
DROP PROCEDURE IF EXISTS `sp_new_agent`;
DELIMITER //
CREATE PROCEDURE `sp_new_agent`(IN in_agent_code VARCHAR(50), IN in_token VARCHAR(50), IN in_secret_key VARCHAR(50), IN in_create_at BIGINT)
BEGIN
    INSERT INTO agents (agentCode, agentToken, secretKey, create_at) VALUES (in_agent_code, in_token, in_secret_key, in_create_at);
    SELECT * FROM agents WHERE id = LAST_INSERT_ID();
END//
DELIMITER ;

-- 导出  存储过程 api.sp_new_user 结构
DROP PROCEDURE IF EXISTS `sp_new_user`;
DELIMITER //
CREATE PROCEDURE `sp_new_user`(
	IN `in_user_code` VARCHAR(50),
	IN `in_token` VARCHAR(50),
	IN `in_atk` VARCHAR(50),
	IN `in_balance` FLOAT,
	IN `in_agent_id` INT,
	IN `in_provider_code` VARCHAR(50),
	IN `in_create_at` BIGINT
)
BEGIN
    INSERT INTO users (username, token, atk, saldo, agentid, provider_code, create_at) VALUES (in_user_code, in_token, in_atk, in_balance, in_agent_id, in_provider_code, in_create_at);
    SELECT * FROM users WHERE id = LAST_INSERT_ID();
END//
DELIMITER ;

-- 导出  存储过程 api.sp_update_user_lost 结构
DROP PROCEDURE IF EXISTS `sp_update_user_lost`;
DELIMITER //
CREATE PROCEDURE `sp_update_user_lost`(
    IN in_user_id INT,
    IN in_bet FLOAT,
    IN in_new_balance FLOAT,
    IN in_rtp_call_id INT,
    IN in_game_code INT
)
BEGIN
    UPDATE users SET saldo = in_new_balance, valordebitado = valordebitado + in_bet, valorapostado = valorapostado + in_bet WHERE id = in_user_id;
    IF in_rtp_call_id > 0 THEN
        UPDATE gamertpcall SET `real`=`real`-in_bet, status = 2 WHERE id = in_rtp_call_id;
    END IF;
    SELECT 1 AS Result;
END//
DELIMITER ;

-- 导出  存储过程 api.sp_update_user_win 结构
DROP PROCEDURE IF EXISTS `sp_update_user_win`;
DELIMITER //
CREATE PROCEDURE `sp_update_user_win`(
    IN in_user_id INT,
    IN in_bet FLOAT,
    IN in_new_balance FLOAT,
    IN in_win FLOAT,
    IN in_rtp_call_id INT,
    IN in_game_code INT
)
BEGIN
    UPDATE users SET saldo =in_new_balance, valordebitado = valordebitado +in_bet, valorapostado = valorapostado +in_bet, valorganho = valorganho +in_win WHERE id=in_user_id;
    IF in_rtp_call_id > 0 THEN
        UPDATE gamertpcall SET `real`=`real`+in_win, status = 2 WHERE id = in_rtp_call_id;
    END IF;
    SELECT 1 AS Result;
END//
DELIMITER ;

-- 导出  表 api.thegreaticescapejson 结构
DROP TABLE IF EXISTS `thegreaticescapejson`;
CREATE TABLE IF NOT EXISTS `thegreaticescapejson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"b":{"bp":[0,1,3,4,5,9,15,19,20,21,23,24],"nbp":null,"up":null},"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[6,10,4,11,7,8,2,5,2,9,4,5,3,5,4,9,2,5,2,8,7,11,4,10,6],"rwsp":null,"sid":"0","snww":null,"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpa":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.treasuresaztecjson 结构
DROP TABLE IF EXISTS `treasuresaztecjson`;
CREATE TABLE IF NOT EXISTS `treasuresaztecjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"bwp":null,"cs":0.3,"ctw":0,"cwc":0,"eb":{"1":{"bt":1,"fp":5,"lp":7,"ls":1},"2":{"bt":1,"fp":8,"lp":9,"ls":2},"3":{"bt":1,"fp":20,"lp":21,"ls":2},"4":{"bt":1,"fp":23,"lp":24,"ls":1}},"ebb":{"1":{"bt":1,"fp":5,"lp":7,"ls":1},"2":{"bt":1,"fp":8,"lp":9,"ls":2},"3":{"bt":1,"fp":20,"lp":21,"ls":2},"4":{"bt":1,"fp":23,"lp":24,"ls":1}},"es":{"1":[5,6,7],"2":[8,9],"3":[20,21],"4":[23,24]},"esb":{"1":[5,6,7],"2":[8,9],"3":[20,21],"4":[23,24]},"fb":null,"fs":null,"fstc":null,"ge":null,"gml":1,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"ngml":1,"now":10800,"nowpr":[5,3,6,6,4,5],"np":0,"nst":1,"ocr":null,"orl":[8,4,1,10,7,2,2,2,3,3,0,0,6,11,10,0,9,12,7,7,4,4,0,5,5,12,5,1,11,6],"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"ptbrp":null,"rl":[8,4,1,10,7,2,2,2,3,3,0,0,6,11,10,0,9,12,7,7,4,4,0,5,5,12,5,1,11,6],"rs":null,"rwsp":null,"sc":0,"sid":"0","snww":null,"ssaw":0,"st":1,"tb":0,"tbb":0,"torl":[3,0,2,4],"tptbr":null,"trl":[3,0,2,4],"tw":0,"twp":null,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  存储过程 api.update_step_and_get_call_by_id 结构
DROP PROCEDURE IF EXISTS `update_step_and_get_call_by_id`;
DELIMITER //
CREATE PROCEDURE `update_step_and_get_call_by_id`(IN in_call_id INT, IN in_step INT)
BEGIN
    UPDATE calls SET `steps` = in_step WHERE id = in_call_id;
    SELECT * FROM calls WHERE id = in_call_id LIMIT 1;
END//
DELIMITER ;

-- 导出  表 api.users 结构
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `token` varchar(255) NOT NULL DEFAULT '',
  `atk` varchar(255) NOT NULL,
  `saldo` decimal(20,2) NOT NULL DEFAULT (0),
  `valorapostado` decimal(20,2) NOT NULL DEFAULT (0),
  `valordebitado` decimal(20,2) NOT NULL DEFAULT (0),
  `valorganho` decimal(20,2) NOT NULL DEFAULT (0),
  `rtp` smallint NOT NULL DEFAULT (0),
  `isinfluencer` float NOT NULL DEFAULT '0',
  `agentid` int NOT NULL,
  `provider_code` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `create_at` bigint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `token` (`token`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `atk` (`atk`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=761 DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.vampirescharmjson 结构
DROP TABLE IF EXISTS `vampirescharmjson`;
CREATE TABLE IF NOT EXISTS `vampirescharmjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"bns":null,"cs":0.3,"ct":0,"ctw":0,"cwc":0,"esi":-1,"esw":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[10,4,7,2,8,3,7,0,6,2,8,3,10,4,7],"rs":null,"rwsp":null,"sc":0,"sid":"0","st":1,"sw":0,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.waysofqilinjson 结构
DROP TABLE IF EXISTS `waysofqilinjson`;
CREATE TABLE IF NOT EXISTS `waysofqilinjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"wp":null,"bwp":null,"lw":null,"orl":[8,4,7,10,1,12,2,2,2,3,3,3,0,0,0,6,11,1,2,0,9,12,7,7,4,4,0,5,5,5,12,5,11,11,6,1],"now":7776,"nowpr":[6,2,6,6,3,6],"snww":null,"esb":{"1":[6,7,8],"2":[9,10,11],"3":[24,25],"4":[27,28,29]},"ebb":{"1":{"fp":6,"lp":8,"bt":1,"ls":1},"2":{"fp":9,"lp":11,"bt":1,"ls":2},"3":{"fp":24,"lp":25,"bt":1,"ls":2},"4":{"fp":27,"lp":29,"bt":1,"ls":1}},"es":{"1":[6,7,8],"2":[9,10,11],"3":[24,25],"4":[27,28,29]},"eb":{"1":{"fp":6,"lp":8,"bt":1,"ls":1},"2":{"fp":9,"lp":11,"bt":1,"ls":2},"3":{"fp":24,"lp":25,"bt":1,"ls":2},"4":{"fp":27,"lp":29,"bt":1,"ls":1}},"ptbr":null,"ssaw":0.00,"rs":null,"fs":null,"ssi":null,"sc":0,"gwt":0,"fb":null,"ctw":0.0,"pmt":null,"cwc":0,"fstc":null,"pcwc":0,"rwsp":null,"hashr":null,"ml":2,"cs":0.3,"rl":[8,4,7,10,1,12,2,2,2,3,3,3,0,0,0,6,11,1,2,0,9,12,7,7,4,4,0,5,5,5,12,5,11,11,6,1],"sid":"0","psid":"0","st":1,"nst":1,"pf":0,"aw":0.00,"wid":0,"wt":"C","wk":"0_C","wbn":null,"wfg":null,"blb":0.00,"blab":0.00,"bl":100000.00,"tb":0.00,"tbb":0.00,"tw":0.00,"np":0.00,"ocr":null,"mr":null,"ge":null}}}')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.wildape3258json 结构
DROP TABLE IF EXISTS `wildape3258json`;
CREATE TABLE IF NOT EXISTS `wildape3258json` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"bwp":null,"crtw":0,"cs":0.3,"ctw":0,"cwc":0,"eb":{"1":{"bt":2,"fp":0,"lp":1,"ls":1},"10":{"bt":3,"fp":25,"lp":26,"ls":1},"11":{"bt":2,"fp":27,"lp":28,"ls":1},"12":{"bt":2,"fp":30,"lp":31,"ls":1},"13":{"bt":2,"fp":32,"lp":33,"ls":1},"14":{"bt":2,"fp":34,"lp":35,"ls":1},"2":{"bt":2,"fp":2,"lp":3,"ls":1},"3":{"bt":2,"fp":4,"lp":5,"ls":1},"4":{"bt":3,"fp":7,"lp":8,"ls":1},"5":{"bt":2,"fp":9,"lp":10,"ls":1},"6":{"bt":2,"fp":14,"lp":15,"ls":1},"7":{"bt":3,"fp":16,"lp":16,"ls":1},"8":{"bt":2,"fp":20,"lp":21,"ls":1},"9":{"bt":3,"fp":22,"lp":22,"ls":1}},"ebb":{"1":{"bt":2,"fp":0,"lp":1,"ls":1},"10":{"bt":3,"fp":25,"lp":26,"ls":1},"11":{"bt":2,"fp":27,"lp":28,"ls":1},"12":{"bt":2,"fp":30,"lp":31,"ls":1},"13":{"bt":2,"fp":32,"lp":33,"ls":1},"14":{"bt":2,"fp":34,"lp":35,"ls":1},"2":{"bt":2,"fp":2,"lp":3,"ls":1},"3":{"bt":2,"fp":4,"lp":5,"ls":1},"4":{"bt":3,"fp":7,"lp":8,"ls":1},"5":{"bt":2,"fp":9,"lp":10,"ls":1},"6":{"bt":2,"fp":14,"lp":15,"ls":1},"7":{"bt":3,"fp":16,"lp":16,"ls":1},"8":{"bt":2,"fp":20,"lp":21,"ls":1},"9":{"bt":3,"fp":22,"lp":22,"ls":1}},"es":{"1":[0,1],"10":[25,26],"11":[27,28],"12":[30,31],"13":[32,33],"14":[34,35],"2":[2,3],"3":[4,5],"4":[7,8],"5":[9,10],"6":[14,15],"7":[16],"8":[20,21],"9":[22]},"esb":{"1":[0,1],"10":[25,26],"11":[27,28],"12":[30,31],"13":[32,33],"14":[34,35],"2":[2,3],"3":[4,5],"4":[7,8],"5":[9,10],"6":[14,15],"7":[16],"8":[20,21],"9":[22]},"fb":null,"fs":null,"fstc":null,"ge":null,"gm":1,"gwt":0,"hashr":null,"imw":false,"lw":null,"ml":2,"mr":null,"mwbs":false,"now":3600,"nowpr":[3,4,5,5,4,3],"np":0,"nst":1,"ocr":null,"orl":[8,8,7,7,9,9,12,2,2,1,1,11,4,0,99,99,10,8,4,0,99,99,10,8,12,2,2,1,1,11,8,8,7,7,9,9],"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"rl":[8,8,7,7,9,9,12,2,2,1,1,11,4,0,99,99,10,8,4,0,99,99,10,8,12,2,2,1,1,11,8,8,7,7,9,9],"rs":null,"rsc":0,"rwsp":null,"sc":2,"sid":"0","snww":null,"ssaw":0,"st":1,"tb":0,"tbb":0,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.wildbanditojson 结构
DROP TABLE IF EXISTS `wildbanditojson`;
CREATE TABLE IF NOT EXISTS `wildbanditojson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gm":1,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":[10,4,8,9,5,3,2,3,1,6,9,0,8,4,0,3,2,1,3,6,10,4,8,9,5],"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"rl":[10,4,8,9,5,3,2,3,1,6,9,0,8,4,0,3,2,1,3,6,10,4,8,9,5],"rs":null,"rwsp":null,"sc":2,"sid":"0","snww":null,"ss":{"1":7,"2":18},"ssaw":0,"ssb":{"1":7,"2":18},"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.wildfireworksjson 结构
DROP TABLE IF EXISTS `wildfireworksjson`;
CREATE TABLE IF NOT EXISTS `wildfireworksjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"baf":null,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"lwm":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[10,6,1,7,6,8,1,3,9,2,4,5,0,0,0,0,0,0,0,0],"rns":null,"rwsp":null,"sc":0,"sid":"0","snww":null,"ssaw":0,"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

-- 导出  表 api.zombieoutbrkjson 结构
DROP TABLE IF EXISTS `zombieoutbrkjson`;
CREATE TABLE IF NOT EXISTS `zombieoutbrkjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cc":0,"crtw":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gm":1,"gwt":0,"hashr":null,"imw":false,"lml":0,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":[5,2,2,3,0,99,99,99,99,8,4,1,11,0,99,99,99,99,5,2,2,3],"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"rl":[5,2,2,3,0,99,99,99,99,8,4,1,11,0,99,99,99,99,5,2,2,3],"rml":0,"rns":null,"rwsp":null,"sc":0,"sid":"0","snww":null,"ssaw":0,"st":1,"tb":0,"tbb":0,"tw":0,"twbm":0,"wbn":null,"wc":0,"wfg":null,"wid":0,"wk":"0_C","wm":{"1":[10,15,25],"3":[1,2,3]},"wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 数据导出被取消选择。

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
