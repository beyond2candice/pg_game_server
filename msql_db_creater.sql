
DROP TABLE IF EXISTS `wildbanditojson`;
CREATE TABLE `wildbanditojson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gm":1,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":[10,4,8,9,5,3,2,3,1,6,9,0,8,4,0,3,2,1,3,6,10,4,8,9,5],"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"rl":[10,4,8,9,5,3,2,3,1,6,9,0,8,4,0,3,2,1,3,6,10,4,8,9,5],"rs":null,"rwsp":null,"sc":2,"sid":"0","snww":null,"ss":{"1":7,"2":18},"ssaw":0,"ssb":{"1":7,"2":18},"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_wildbanditojson;
DELIMITER //
CREATE PROCEDURE create_and_return_wildbanditojson(p_id INT)
BEGIN
	INSERT INTO wildbanditojson (id) VALUES (p_id);
	SELECT * FROM  wildbanditojson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `heiststakesjson`;
CREATE TABLE `heiststakesjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"actw":null,"afw":null,"aw":2.8,"bl":140.56,"blab":140.56,"blb":140.56,"bmtw":null,"btw":null,"cs":0.02,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":{"4":3},"ge":[3,1,11],"gwt":-1,"hashr":"3:4;7;0;7;6#10;3;0;8;8#1;8;0;5;4#8;0;2#0#MV#0#MT#1#MG#0#","iwf":true,"lw":null,"lwa":null,"ml":1,"mr":null,"np":-0.4,"nst":1,"ocr":null,"orl":[4,10,1,7,3,8,8,8,6,8,2,7,7,8,5,2,6,8,4],"osc":1,"otw":0,"pcwc":0,"pf":1,"pmt":null,"psid":"0","rl":[4,10,1,7,3,8,8,0,0,0,0,0,7,8,5,2,6,8,4],"rns":[[4,10],[7,3],[0,0,0,0,0],[],[]],"rwsp":null,"sc":1,"sid":"0","snww":null,"ssaw":2.8,"st":4,"stw":null,"tb":0.4,"tbb":0.4,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_heiststakesjson;
DELIMITER //
CREATE PROCEDURE create_and_return_heiststakesjson(p_id INT)
BEGIN
	INSERT INTO heiststakesjson (id) VALUES (p_id);
	SELECT * FROM  heiststakesjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `lgdmonkeykgjson`;
CREATE TABLE `lgdmonkeykgjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"ew":{"1":[9,10,11]},"fb":null,"fm":0,"fnm":0,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"lwa":0,"ml":2,"mr":null,"now":1024,"np":0,"nst":1,"ocr":null,"orl":null,"pcwc":0,"pf":0,"pmt":null,"prh":null,"psid":"0","rc":0,"rh":[4,4,4,4,4],"rl":[11,6,10,8,5,1,2,9,11,0,0,0,5,1,2,9,11,6,10,8],"rns":null,"rwsp":null,"sc":0,"sep":null,"sid":"0","snww":null,"ssaw":0,"st":1,"stp":null,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_lgdmonkeykgjson;
DELIMITER //
CREATE PROCEDURE create_and_return_lgdmonkeykgjson(p_id INT)
BEGIN
	INSERT INTO lgdmonkeykgjson (id) VALUES (p_id);
	SELECT * FROM  lgdmonkeykgjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `buffalowinjson`;
CREATE TABLE `buffalowinjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"acw":0,"aw":0,"bl":100000,"blab":0,"blb":0,"bsc":null,"bwp":null,"bwsc":null,"cs":0.3,"ctw":0,"cwc":0,"es":{"1":[2,3],"2":[4,5,6],"3":[8,9]},"fb":null,"fs":null,"fstc":null,"ge":null,"gm":1,"gwt":0,"hashr":null,"ix":false,"lrs":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[2,1,6,6,0,0,0,2,3,3,2,7],"rs":null,"rwsp":null,"s":0,"sc":0,"scs":null,"sid":"0","st":1,"sw":null,"tb":0,"tbb":0,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_buffalowinjson;
DELIMITER //
CREATE PROCEDURE create_and_return_buffalowinjson(p_id INT)
BEGIN
	INSERT INTO buffalowinjson (id) VALUES (p_id);
	SELECT * FROM  buffalowinjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `cryptfortunejson`;
CREATE TABLE `cryptfortunejson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gm":1,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"mwp":null,"np":0,"nst":1,"nswp":null,"ocr":null,"orl":[8,3,13,5,2,0,12,11,1,2,4,11,1,2,4,5,2,0,12,8,3,13],"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[8,3,13,5,2,0,12,11,1,2,4,11,1,2,4,5,2,0,12,8,3,13],"rns":null,"rwsp":null,"sc":0,"sid":"0","snww":null,"ssaw":0,"st":1,"swp":{"17":3,"5":3},"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_cryptfortunejson;
DELIMITER //
CREATE PROCEDURE create_and_return_cryptfortunejson(p_id INT)
BEGIN
	INSERT INTO cryptfortunejson (id) VALUES (p_id);
	SELECT * FROM  cryptfortunejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `emojirichesjson`;
CREATE TABLE `emojirichesjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"acw":0,"aw":0,"bl":100000,"blab":0,"blb":0,"cls":null,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gml":1,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":[8,8,6,6,9,9,2,0,2,2,7,7,3,1,3,4,4,4,4,4,4,3,1,3,7,7,2,2,0,2,9,9,6,6,8,8],"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[8,8,6,6,9,9,2,0,2,2,7,7,3,1,3,4,4,4,4,4,4,3,1,3,7,7,2,2,0,2,9,9,6,6,8,8],"rs":null,"rwsp":null,"sc":2,"sid":"0","st":1,"stw":0,"sw":null,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wsc":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `sprmktspreejson`;
CREATE TABLE `sprmktspreejson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"afw":0,"aw":0,"bl":100000,"blab":0,"blb":0,"bsm":null,"cls":null,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lwa":0,"ml":2,"mr":null,"nmk":[8,27],"np":0,"nst":1,"ocr":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[3,3,3,7,7,7,3,3,90,7,7,7,10,1,10,2,2,2,10,10,10,2,1,2,8,8,8,90,4,4,8,8,8,4,4,4],"rwsp":null,"sc":0,"sid":"0","sm":{"27":2,"8":5},"st":1,"sw":null,"tb":0,"tbb":0,"tm":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wsc":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_sprmktspreejson;
DELIMITER //
CREATE PROCEDURE create_and_return_sprmktspreejson(p_id INT)
BEGIN
	INSERT INTO sprmktspreejson (id) VALUES (p_id);
	SELECT * FROM  sprmktspreejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `spiritwonderjson`;
CREATE TABLE `spiritwonderjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"bwp":null,"cs":0.3,"ctw":0,"cwc":0,"eb":{"1":{"bt":2,"fp":4,"lp":7,"ls":1},"2":{"bt":2,"fp":11,"lp":13,"ls":1},"3":{"bt":2,"fp":14,"lp":16,"ls":1},"4":{"bt":2,"fp":20,"lp":23,"ls":1}},"ebb":{"1":{"bt":2,"fp":4,"lp":7,"ls":1},"2":{"bt":2,"fp":11,"lp":13,"ls":1},"3":{"bt":2,"fp":14,"lp":16,"ls":1},"4":{"bt":2,"fp":20,"lp":23,"ls":1}},"es":{"1":[4,5,6,7],"2":[11,12,13],"3":[14,15,16],"4":[20,21,22,23]},"esb":{"1":[4,5,6,7],"2":[11,12,13],"3":[14,15,16],"4":[20,21,22,23]},"fb":null,"fs":null,"fstc":null,"ge":null,"gm":1,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"msp":null,"now":13500,"nowpr":[5,2,3,6,5,3,5],"np":0,"nst":1,"ocr":null,"orl":[8,7,6,13,2,2,2,2,12,10,0,4,4,4,5,5,5,1,9,11,3,3,3,3,8,7,6,13],"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[8,7,6,13,2,2,2,2,12,10,0,4,4,4,5,5,5,1,9,11,3,3,3,3,8,7,6,13],"rs":null,"rwsp":null,"sc":0,"sid":"0","snww":null,"spc":0,"ssaw":0,"st":1,"tb":0,"tbb":0,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_spiritwonderjson;
DELIMITER //
CREATE PROCEDURE create_and_return_spiritwonderjson(p_id INT)
BEGIN
	INSERT INTO spiritwonderjson (id) VALUES (p_id);
	SELECT * FROM  spiritwonderjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `destsunmoonjson`;
CREATE TABLE `destsunmoonjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"actw":null,"afw":null,"aw":1.62,"bl":139.78,"blab":139.78,"blb":139.78,"bmtw":null,"btw":null,"cs":0.02,"ctw":0,"cwc":0,"fb":null,"fs":null,"ge":[1,11],"gwt":-1,"lm":2,"lw":null,"lwa":null,"lwpk":null,"ml":1,"mp":[15,5],"mr":null,"nmp":null,"np":-0.4,"nst":1,"ocr":null,"orl":[10,11,11,9,5,3,9,7,10,0,7,7,4,10,9,3,1,7],"pf":1,"plm":2,"pmt":null,"prm":3,"psid":"0","rl":[10,11,11,9,5,3,9,7,10,0,7,7,4,10,9,3,1,7],"rm":3,"rns":[[],[],[],[0],[10,9],[1,7]],"rwpk":null,"sc":1,"sid":"0","snww":null,"ssaw":1.62,"st":4,"stw":null,"tb":0.4,"tbb":0.4,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wsp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_destsunmoonjson;
DELIMITER //
CREATE PROCEDURE create_and_return_destsunmoonjson(p_id INT)
BEGIN
	INSERT INTO destsunmoonjson (id) VALUES (p_id);
	SELECT * FROM  destsunmoonjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `garudagemsjson`;
CREATE TABLE `garudagemsjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"atw":0,"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fm":1,"fnm":1,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"nwcc":0,"ocr":null,"orl":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[8,5,2,13,5,2,0,12,7,1,6,4,7,1,6,4,5,3,0,12,8,5,3,13],"rns":null,"rwsp":null,"sc":0,"sid":"0","snww":null,"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wcc":0,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_garudagemsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_garudagemsjson(p_id INT)
BEGIN
	INSERT INTO garudagemsjson (id) VALUES (p_id);
	SELECT * FROM  garudagemsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `roosterrbljson`;
CREATE TABLE `roosterrbljson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gm":1,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":null,"otw":0,"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"rl":[8,5,2,13,5,2,0,2,12,7,1,6,4,11,7,1,6,4,11,5,3,0,3,12,8,5,3,13],"rns":null,"rwsp":null,"sc":0,"sid":"0","snww":null,"ssaw":0,"st":1,"swl":{"1":{"ls":3,"p":6},"2":{"ls":3,"p":21}},"swlb":{"1":{"ls":3,"p":6},"2":{"ls":3,"p":21}},"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_roosterrbljson;
DELIMITER //
CREATE PROCEDURE create_and_return_roosterrbljson(p_id INT)
BEGIN
	INSERT INTO roosterrbljson (id) VALUES (p_id);
	SELECT * FROM  roosterrbljson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `battlegroundjson`;
CREATE TABLE `battlegroundjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gm":1,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":[10,3,12,2,1,0,3,4,8,2,9,5,3,0,1,2,12,3,10],"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"rl":[10,3,12,2,1,0,3,4,8,2,9,5,3,0,1,2,12,3,10],"rns":null,"rwsp":null,"sc":0,"sid":"0","smc":-1,"smcp":null,"snww":null,"ssaw":0,"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_battlegroundjson;
DELIMITER //
CREATE PROCEDURE create_and_return_battlegroundjson(p_id INT)
BEGIN
	INSERT INTO battlegroundjson (id) VALUES (p_id);
	SELECT * FROM  battlegroundjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `btrflyblossomjson`;
CREATE TABLE `btrflyblossomjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gm":1,"gmi":0,"gml":[1,2,3,5],"gwt":0,"hashr":null,"lw":null,"lwm":null,"ml":2,"mr":null,"np":0,"nst":1,"nswl":null,"ocr":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"rl":[1,5,6,7,4,2,0,8,0,3,1,4,4,2,0,8,1,5,6,7],"rl3x5":[5,6,7,2,0,8,3,1,4,2,0,8,5,6,7],"rs":null,"rswl":null,"rwsp":null,"saw":0,"sc":0,"sid":"0","st":1,"swl":[[6,3],[8,2],[14,1]],"swlb":[[6,3],[8,2],[14,1]],"tb":0,"tbb":0,"tlw":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wp3x5":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_btrflyblossomjson;
DELIMITER //
CREATE PROCEDURE create_and_return_btrflyblossomjson(p_id INT)
BEGIN
	INSERT INTO btrflyblossomjson (id) VALUES (p_id);
	SELECT * FROM  btrflyblossomjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `fortunetigerjson`;
CREATE TABLE `fortunetigerjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fstc":null,"fws":0,"ge":null,"gwt":0,"hashr":null,"irs":false,"ist":false,"itw":false,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[2,2,5,0,0,0,6,3,3],"rwsp":null,"sid":"0","st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wc":3,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_fortunetigerjson;
DELIMITER //
CREATE PROCEDURE create_and_return_fortunetigerjson(p_id INT)
BEGIN
	INSERT INTO fortunetigerjson (id) VALUES (p_id);
	SELECT * FROM  fortunetigerjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `prosperftreejson`;
CREATE TABLE `prosperftreejson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gm":1,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":[12,9,5,4,13,11,8,1,10,3,1,6,2,0,5,1,6,2,0,5,11,8,1,10,3,12,9,5,4,13],"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[12,9,5,4,13,11,8,1,10,3,1,6,2,0,5,1,6,2,0,5,11,8,1,10,3,12,9,5,4,13],"rns":null,"rwsp":null,"sc":0,"sid":"0","snww":null,"sps":null,"ssaw":0,"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_prosperftreejson;
DELIMITER //
CREATE PROCEDURE create_and_return_prosperftreejson(p_id INT)
BEGIN
	INSERT INTO prosperftreejson (id) VALUES (p_id);
	SELECT * FROM  prosperftreejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `asgardianrsjson`;
CREATE TABLE `asgardianrsjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"bwp":null,"cs":0.3,"ctw":0,"cwc":0,"eb":{"1":{"bt":1,"fp":5,"lp":7,"ls":1},"2":{"bt":1,"fp":8,"lp":9,"ls":2},"3":{"bt":2,"fp":10,"lp":12,"ls":1},"4":{"bt":1,"fp":20,"lp":21,"ls":2},"5":{"bt":1,"fp":23,"lp":24,"ls":1}},"ebb":{"1":{"bt":1,"fp":5,"lp":7,"ls":1},"2":{"bt":1,"fp":8,"lp":9,"ls":2},"3":{"bt":2,"fp":10,"lp":12,"ls":1},"4":{"bt":1,"fp":20,"lp":21,"ls":2},"5":{"bt":1,"fp":23,"lp":24,"ls":1}},"es":{"1":[5,6,7],"2":[8,9],"3":[10,11,12],"4":[20,21],"5":[23,24]},"esb":{"1":[5,6,7],"2":[8,9],"3":[10,11,12],"4":[20,21],"5":[23,24]},"fb":null,"fs":null,"fstc":null,"ge":null,"gm":1,"gwt":0,"hashr":null,"lw":null,"lwa":0,"ml":2,"mr":null,"mrl":[[0],[0],[0],[0]],"nmrl":[[0],[0],[0],[0]],"now":7200,"nowpr":[5,3,4,6,4,5],"np":0,"nst":1,"ocr":null,"orl":[8,4,1,10,7,2,2,2,3,3,0,0,0,11,10,0,9,12,7,7,4,4,0,5,5,12,5,1,11,6],"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"rl":[8,4,1,10,7,2,2,2,3,3,0,0,0,11,10,0,9,12,7,7,4,4,0,5,5,12,5,1,11,6],"rs":null,"rwsp":null,"sc":2,"sid":"0","snww":null,"ssaw":0,"st":1,"tb":0,"tbb":0,"tptbr":null,"trl":[3,6,2,4],"tw":0,"twp":null,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_asgardianrsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_asgardianrsjson(p_id INT)
BEGIN
	INSERT INTO asgardianrsjson (id) VALUES (p_id);
	SELECT * FROM  asgardianrsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `alchemygoldjson`;
CREATE TABLE `alchemygoldjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cp":null,"cptw":null,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gm":0,"gsp":[1,3,5,9,12,15,19,21,23],"gwt":0,"hashr":null,"inw":false,"ml":2,"mr":null,"np":0,"nst":1,"nwp":null,"ocr":null,"orl":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","pswlp":null,"pswp":null,"rl":[6,5,3,7,2,9,1,7,0,8,3,7,2,8,4,7,0,8,1,9,2,8,3,5,6],"rns":null,"rs":null,"rwsp":null,"sc":2,"sid":"0","ssaw":0,"st":1,"sw":null,"swlp":null,"swp":null,"tb":0,"tbb":0,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wsc":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `dinerdelightsjson`;
CREATE TABLE `dinerdelightsjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"afw":0,"aw":0,"bl":100000,"blab":0,"blb":0,"bsm":null,"cls":null,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"lwa":0,"ml":2,"mr":null,"nmk":[8,27],"np":0,"nst":1,"ocr":null,"orl":[3,3,3,7,7,7,3,3,90,7,7,7,10,1,10,2,2,2,10,10,10,2,1,2,8,8,8,90,4,4,8,8,8,4,4,4],"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[3,3,3,7,7,7,3,3,90,7,7,7,10,1,10,2,2,2,10,10,10,2,1,2,8,8,8,90,4,4,8,8,8,4,4,4],"rwsp":null,"sc":2,"sid":"0","sm":{"27":2,"8":5},"st":1,"tb":0,"tbb":0,"tm":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wsc":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_dinerdelightsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_dinerdelightsjson(p_id INT)
BEGIN
	INSERT INTO dinerdelightsjson (id) VALUES (p_id);
	SELECT * FROM  dinerdelightsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `midasfortunejson`;
CREATE TABLE `midasfortunejson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"am":0,"aw":0,"bl":100000,"blab":0,"blb":0,"cgm":0,"cgsp":null,"cp":null,"cs":0.3,"ctw":0,"cwc":0,"cwsp":null,"fb":null,"fs":null,"fstc":null,"ge":null,"gpps":[[0,3],[24,3]],"gsp":[2,5,9,12,15,19,22],"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"ngsp":null,"np":0,"nst":1,"ocr":null,"orl":[0,5,3,7,2,9,1,7,2,8,3,7,2,8,4,7,2,8,1,9,2,8,3,5,0],"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"rl":[0,5,3,7,2,9,1,7,2,8,3,7,2,8,4,7,2,8,1,9,2,8,3,5,0],"rns":null,"rwsp":null,"sc":0,"sid":"0","ssaw":0,"st":1,"sw":null,"tb":0,"tbb":0,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wgsp":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wsc":null,"wsm":1,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_midasfortunejson;
DELIMITER //
CREATE PROCEDURE create_and_return_midasfortunejson(p_id INT)
BEGIN
	INSERT INTO midasfortunejson (id) VALUES (p_id);
	SELECT * FROM  midasfortunejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `bakerybonanzajson`;
CREATE TABLE `bakerybonanzajson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"btorl":[3,6,2,4],"btrl":[3,6,2,4],"bwp":null,"cs":0.3,"ctw":0,"cwc":0,"eb":{"1":{"bt":1,"fp":5,"lp":7,"ls":1},"2":{"bt":1,"fp":8,"lp":9,"ls":2},"3":{"bt":1,"fp":20,"lp":21,"ls":2},"4":{"bt":1,"fp":23,"lp":24,"ls":1}},"ebb":{"1":{"bt":1,"fp":5,"lp":7,"ls":1},"2":{"bt":1,"fp":8,"lp":9,"ls":2},"3":{"bt":1,"fp":20,"lp":21,"ls":2},"4":{"bt":1,"fp":23,"lp":24,"ls":1}},"es":{"1":[5,6,7],"2":[8,9],"3":[20,21],"4":[23,24]},"esb":{"1":[5,6,7],"2":[8,9],"3":[20,21],"4":[23,24]},"fb":null,"fs":null,"fstc":null,"ge":null,"gm":1,"gwt":0,"hashr":null,"lgm":0,"lw":null,"ml":2,"mr":null,"now":10800,"nowpr":[5,3,6,6,4,5],"np":0,"nst":1,"ocr":null,"orl":[8,4,1,10,7,2,2,2,3,3,0,0,0,11,10,0,9,11,7,7,4,4,0,5,5,11,5,1,11,6],"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"rl":[8,4,1,10,7,2,2,2,3,3,0,0,0,11,10,0,9,11,7,7,4,4,0,5,5,11,5,1,11,6],"rs":null,"rwsp":null,"sc":0,"sid":"0","snww":null,"ssaw":0,"st":1,"tb":0,"tbb":0,"tptbr":null,"trlm":null,"tw":0,"twbm":0,"twp":null,"twpl":null,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_bakerybonanzajson;
DELIMITER //
CREATE PROCEDURE create_and_return_bakerybonanzajson(p_id INT)
BEGIN
	INSERT INTO bakerybonanzajson (id) VALUES (p_id);
	SELECT * FROM  bakerybonanzajson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `songkranspljson`;
CREATE TABLE `songkranspljson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"crtw":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gm":0,"gwt":0,"hashr":null,"imw":false,"lw":null,"mf":[0,0,0],"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":[2,12,12,3,10,1,9,5,5,0,8,7,3,10,1,9,2,12,12],"pcwc":0,"pf":0,"pmf":null,"pmt":null,"psid":"0","rl":[2,12,12,3,10,1,9,5,5,0,8,7,3,10,1,9,2,12,12],"rns":null,"rwsp":null,"sc":2,"sid":"0","snww":null,"ssaw":0,"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_songkranspljson;
DELIMITER //
CREATE PROCEDURE create_and_return_songkranspljson(p_id INT)
BEGIN
	INSERT INTO songkranspljson (id) VALUES (p_id);
	SELECT * FROM  songkranspljson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `dragonhatch2json`;
CREATE TABLE `dragonhatch2json` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"actw":null,"afw":null,"aw":0,"bl":141.92,"blab":141.92,"blb":142.32,"bmtw":null,"btw":null,"cls":null,"cp":null,"cs":0.04,"ctw":0,"cwc":0,"df":null,"fb":null,"fstc":null,"ge":[1,11],"gwt":-1,"hashr":"0:7;2;7;6;5#5;8;3;7;1#5;4;0;4;5#1;5;5;8;7#7;1;1;2;5#MV#0.60#MT#1#MG#0#","imw":false,"lw":null,"lwa":null,"ml":1,"mr":null,"np":-0.4,"nst":1,"ocr":null,"orl":[7,5,5,1,7,2,8,4,5,1,7,3,8,5,1,6,7,4,8,2,5,1,5,7,5],"pcwc":0,"pf":1,"pmt":null,"psid":"0","rl":[7,5,5,1,7,2,8,4,5,1,7,3,0,5,1,6,7,4,8,2,5,1,5,7,5],"rwsp":null,"sid":"0","ssaw":null,"st":1,"stw":null,"sw":null,"swp":[12],"swpb":null,"tb":0.4,"tbb":0.4,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wsc":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_dragonhatch2json;
DELIMITER //
CREATE PROCEDURE create_and_return_dragonhatch2json(p_id INT)
BEGIN
	INSERT INTO dragonhatch2json (id) VALUES (p_id);
	SELECT * FROM  dragonhatch2json WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `wildape3258json`;
CREATE TABLE `wildape3258json` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"bwp":null,"crtw":0,"cs":0.3,"ctw":0,"cwc":0,"eb":{"1":{"bt":2,"fp":0,"lp":1,"ls":1},"10":{"bt":3,"fp":25,"lp":26,"ls":1},"11":{"bt":2,"fp":27,"lp":28,"ls":1},"12":{"bt":2,"fp":30,"lp":31,"ls":1},"13":{"bt":2,"fp":32,"lp":33,"ls":1},"14":{"bt":2,"fp":34,"lp":35,"ls":1},"2":{"bt":2,"fp":2,"lp":3,"ls":1},"3":{"bt":2,"fp":4,"lp":5,"ls":1},"4":{"bt":3,"fp":7,"lp":8,"ls":1},"5":{"bt":2,"fp":9,"lp":10,"ls":1},"6":{"bt":2,"fp":14,"lp":15,"ls":1},"7":{"bt":3,"fp":16,"lp":16,"ls":1},"8":{"bt":2,"fp":20,"lp":21,"ls":1},"9":{"bt":3,"fp":22,"lp":22,"ls":1}},"ebb":{"1":{"bt":2,"fp":0,"lp":1,"ls":1},"10":{"bt":3,"fp":25,"lp":26,"ls":1},"11":{"bt":2,"fp":27,"lp":28,"ls":1},"12":{"bt":2,"fp":30,"lp":31,"ls":1},"13":{"bt":2,"fp":32,"lp":33,"ls":1},"14":{"bt":2,"fp":34,"lp":35,"ls":1},"2":{"bt":2,"fp":2,"lp":3,"ls":1},"3":{"bt":2,"fp":4,"lp":5,"ls":1},"4":{"bt":3,"fp":7,"lp":8,"ls":1},"5":{"bt":2,"fp":9,"lp":10,"ls":1},"6":{"bt":2,"fp":14,"lp":15,"ls":1},"7":{"bt":3,"fp":16,"lp":16,"ls":1},"8":{"bt":2,"fp":20,"lp":21,"ls":1},"9":{"bt":3,"fp":22,"lp":22,"ls":1}},"es":{"1":[0,1],"10":[25,26],"11":[27,28],"12":[30,31],"13":[32,33],"14":[34,35],"2":[2,3],"3":[4,5],"4":[7,8],"5":[9,10],"6":[14,15],"7":[16],"8":[20,21],"9":[22]},"esb":{"1":[0,1],"10":[25,26],"11":[27,28],"12":[30,31],"13":[32,33],"14":[34,35],"2":[2,3],"3":[4,5],"4":[7,8],"5":[9,10],"6":[14,15],"7":[16],"8":[20,21],"9":[22]},"fb":null,"fs":null,"fstc":null,"ge":null,"gm":1,"gwt":0,"hashr":null,"imw":false,"lw":null,"ml":2,"mr":null,"mwbs":false,"now":3600,"nowpr":[3,4,5,5,4,3],"np":0,"nst":1,"ocr":null,"orl":[8,8,7,7,9,9,12,2,2,1,1,11,4,0,99,99,10,8,4,0,99,99,10,8,12,2,2,1,1,11,8,8,7,7,9,9],"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"rl":[8,8,7,7,9,9,12,2,2,1,1,11,4,0,99,99,10,8,4,0,99,99,10,8,12,2,2,1,1,11,8,8,7,7,9,9],"rs":null,"rsc":0,"rwsp":null,"sc":2,"sid":"0","snww":null,"ssaw":0,"st":1,"tb":0,"tbb":0,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_wildape3258json;
DELIMITER //
CREATE PROCEDURE create_and_return_wildape3258json(p_id INT)
BEGIN
	INSERT INTO wildape3258json (id) VALUES (p_id);
	SELECT * FROM  wildape3258json WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `sprgolfdrivejson`;
CREATE TABLE `sprgolfdrivejson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"bmtw":0,"bwp":null,"crtw":0,"cs":0.3,"ctw":0,"cwc":0,"eb":{"1":{"bt":1,"fp":3,"lp":3,"ls":1},"10":{"bt":1,"fp":23,"lp":23,"ls":1},"11":{"bt":1,"fp":25,"lp":27,"ls":1},"12":{"bt":2,"fp":28,"lp":29,"ls":1},"13":{"bt":1,"fp":33,"lp":33,"ls":1},"14":{"bt":1,"fp":34,"lp":34,"ls":1},"2":{"bt":1,"fp":4,"lp":4,"ls":1},"3":{"bt":1,"fp":7,"lp":9,"ls":1},"4":{"bt":2,"fp":10,"lp":11,"ls":1},"5":{"bt":2,"fp":12,"lp":13,"ls":1},"6":{"bt":1,"fp":14,"lp":14,"ls":1},"7":{"bt":1,"fp":17,"lp":17,"ls":1},"8":{"bt":2,"fp":18,"lp":19,"ls":1},"9":{"bt":1,"fp":20,"lp":20,"ls":1}},"ebb":{"1":{"bt":1,"fp":3,"lp":3,"ls":1},"10":{"bt":1,"fp":23,"lp":23,"ls":1},"11":{"bt":1,"fp":25,"lp":27,"ls":1},"12":{"bt":2,"fp":28,"lp":29,"ls":1},"13":{"bt":1,"fp":33,"lp":33,"ls":1},"14":{"bt":1,"fp":34,"lp":34,"ls":1},"2":{"bt":1,"fp":4,"lp":4,"ls":1},"3":{"bt":1,"fp":7,"lp":9,"ls":1},"4":{"bt":2,"fp":10,"lp":11,"ls":1},"5":{"bt":2,"fp":12,"lp":13,"ls":1},"6":{"bt":1,"fp":14,"lp":14,"ls":1},"7":{"bt":1,"fp":17,"lp":17,"ls":1},"8":{"bt":2,"fp":18,"lp":19,"ls":1},"9":{"bt":1,"fp":20,"lp":20,"ls":1}},"es":{"1":[3],"10":[23],"11":[25,26,27],"12":[28,29],"13":[33],"14":[34],"2":[4],"3":[7,8,9],"4":[10,11],"5":[12,13],"6":[14],"7":[17],"8":[18,19],"9":[20]},"esb":{"1":[3],"10":[23],"11":[25,26,27],"12":[28,29],"13":[33],"14":[34],"2":[4],"3":[7,8,9],"4":[10,11],"5":[12,13],"6":[14],"7":[17],"8":[18,19],"9":[20]},"fb":null,"fs":null,"fstc":null,"ge":null,"gm":0,"gwt":0,"hashr":null,"imw":false,"lw":null,"ml":2,"mr":null,"ms":0,"now":8100,"nowpr":[6,3,5,5,3,6],"np":0,"nst":1,"ocr":null,"orl":[8,4,7,8,8,12,9,2,2,2,3,3,1,1,11,11,0,5,1,1,11,11,0,5,9,2,2,2,3,3,8,4,7,8,8,12],"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"rl":[8,4,7,8,8,12,9,2,2,2,3,3,1,1,11,11,0,5,1,1,11,11,0,5,9,2,2,2,3,3,8,4,7,8,8,12],"rs":null,"rwsp":null,"sc":2,"sid":"0","snww":null,"ssaw":0,"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_sprgolfdrivejson;
DELIMITER //
CREATE PROCEDURE create_and_return_sprgolfdrivejson(p_id INT)
BEGIN
	INSERT INTO sprgolfdrivejson (id) VALUES (p_id);
	SELECT * FROM  sprgolfdrivejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `fortunerabbitjson`;
CREATE TABLE `fortunerabbitjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cpf":{"1":{"bv":3000,"m":500,"p":4},"2":{"bv":120,"m":20,"p":5},"3":{"bv":30,"m":5,"p":6},"4":{"bv":3,"m":0.5,"p":7}},"cptw":0,"crtw":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"iff":false,"ift":false,"imw":false,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":[2,2,0,99,8,8,8,8,2,2,0,99],"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[2,2,0,99,8,8,8,8,2,2,0,99],"rwsp":null,"sid":"0","st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_fortunerabbitjson;
DELIMITER //
CREATE PROCEDURE create_and_return_fortunerabbitjson(p_id INT)
BEGIN
	INSERT INTO fortunerabbitjson (id) VALUES (p_id);
	SELECT * FROM  fortunerabbitjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `cruiseroyalejson`;
CREATE TABLE `cruiseroyalejson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"actw":0,"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gm":1,"gwt":0,"hashr":null,"imw":false,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":[5,13,10,7,12,2,3,8,4,1,11,5,4,1,11,5,12,2,3,8,5,13,10,7],"otrl":[0,8,8,0],"owsp":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[5,13,10,7,12,2,3,8,4,1,11,5,4,1,11,5,12,2,3,8,5,13,10,7],"rns":null,"rwsp":null,"sc":2,"sid":"0","snww":null,"st":1,"tb":0,"tbb":0,"trl":[0,8,8,0],"trns":null,"tw":0,"twbm":0,"twp":null,"twpl":null,"wbn":null,"wcp":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_cruiseroyalejson;
DELIMITER //
CREATE PROCEDURE create_and_return_cruiseroyalejson(p_id INT)
BEGIN
	INSERT INTO cruiseroyalejson (id) VALUES (p_id);
	SELECT * FROM  cruiseroyalejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `cashmaniajson`;
CREATE TABLE `cashmaniajson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"imw":false,"lw":null,"ml":2,"mr":null,"nfp":null,"np":0,"nst":1,"ocr":null,"orl":null,"orv":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[1,5,2,12,0,11,5,3,4],"rsrl":null,"rsrv":null,"rv":[0.6,60,3,1,0,100,60,6,30],"rwsp":null,"sid":"0","st":1,"tb":0,"tbb":0,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_cashmaniajson;
DELIMITER //
CREATE PROCEDURE create_and_return_cashmaniajson(p_id INT)
BEGIN
	INSERT INTO cashmaniajson (id) VALUES (p_id);
	SELECT * FROM  cashmaniajson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `fortunedragonjson`;
CREATE TABLE `fortunedragonjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"crtw":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gm":1,"gwt":0,"hashr":null,"imw":false,"it":false,"lw":null,"mf":{"mi":[0],"ms":[true],"mt":[2]},"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":[2,2,5,0,0,0,6,3,3],"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[2,2,5,0,0,0,6,3,3],"rwsp":null,"sid":"0","ssaw":0,"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_fortunedragonjson;
DELIMITER //
CREATE PROCEDURE create_and_return_fortunedragonjson(p_id INT)
BEGIN
	INSERT INTO fortunedragonjson (id) VALUES (p_id);
	SELECT * FROM  fortunedragonjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `piggygoldjson`;
CREATE TABLE `piggygoldjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"frl":[3,1,4,4,2,2,3,1,4],"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"pc":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[1,2,1],"rwsp":null,"sid":"0","st":1,"tb":0,"tbb":0,"tnbwm":null,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wm":null,"wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_piggygoldjson;
DELIMITER //
CREATE PROCEDURE create_and_return_piggygoldjson(p_id INT)
BEGIN
	INSERT INTO piggygoldjson (id) VALUES (p_id);
	SELECT * FROM  piggygoldjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `ganeshagoldjson`;
CREATE TABLE `ganeshagoldjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"ltw":0,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[2,1,5,4,3,3,0,9,7,8,8,6,7,3,6],"rwsp":null,"sc":0,"sid":"0","snww":null,"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_ganeshagoldjson;
DELIMITER //
CREATE PROCEDURE create_and_return_ganeshagoldjson(p_id INT)
BEGIN
	INSERT INTO ganeshagoldjson (id) VALUES (p_id);
	SELECT * FROM  ganeshagoldjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `doublefortunejson`;
CREATE TABLE `doublefortunejson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"lwm":null,"ml":2,"mr":null,"nk":null,"np":0,"nst":1,"ocr":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[8,16,9,11,5,18,1,2,4,12,6,17,7,15,10],"rwsp":null,"sc":0,"sid":"0","slw":null,"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_doublefortunejson;
DELIMITER //
CREATE PROCEDURE create_and_return_doublefortunejson(p_id INT)
BEGIN
	INSERT INTO doublefortunejson (id) VALUES (p_id);
	SELECT * FROM  doublefortunejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `thegreaticescapejson`;
CREATE TABLE `thegreaticescapejson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"b":{"bp":[0,1,3,4,5,9,15,19,20,21,23,24],"nbp":null,"up":null},"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[6,10,4,11,7,8,2,5,2,9,4,5,3,5,4,9,2,5,2,8,7,11,4,10,6],"rwsp":null,"sid":"0","snww":null,"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpa":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_thegreaticescapejson;
DELIMITER //
CREATE PROCEDURE create_and_return_thegreaticescapejson(p_id INT)
BEGIN
	INSERT INTO thegreaticescapejson (id) VALUES (p_id);
	SELECT * FROM  thegreaticescapejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `captainsbountyjson`;
CREATE TABLE `captainsbountyjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"lwm":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[5,8,3,2,1,7,6,0,4,2,1,7,5,8,3],"rns":null,"rs":null,"rwsp":null,"sid":"0","st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wm":1,"wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_captainsbountyjson;
DELIMITER //
CREATE PROCEDURE create_and_return_captainsbountyjson(p_id INT)
BEGIN
	INSERT INTO captainsbountyjson (id) VALUES (p_id);
	SELECT * FROM  captainsbountyjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `dragonhatchjson`;
CREATE TABLE `dragonhatchjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cb":0,"cbc":0,"cs":0.3,"ctw":0,"cwc":0,"df":null,"fb":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"mdf":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":[0,5,2,3,1,6,2,3,1,4,2,3,1,4,2,3,1,4,2,8,1,4,2,7,0],"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[0,5,2,3,1,6,2,3,1,4,2,3,1,4,2,3,1,4,2,8,1,4,2,7,0],"rns":null,"rwsp":null,"sc":null,"sid":"0","st":1,"sw":null,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_dragonhatchjson;
DELIMITER //
CREATE PROCEDURE create_and_return_dragonhatchjson(p_id INT)
BEGIN
	INSERT INTO dragonhatchjson (id) VALUES (p_id);
	SELECT * FROM  dragonhatchjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `vampirescharmjson`;
CREATE TABLE `vampirescharmjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"bns":null,"cs":0.3,"ct":0,"ctw":0,"cwc":0,"esi":-1,"esw":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[10,4,7,2,8,3,7,0,6,2,8,3,10,4,7],"rs":null,"rwsp":null,"sc":0,"sid":"0","st":1,"sw":0,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_vampirescharmjson;
DELIMITER //
CREATE PROCEDURE create_and_return_vampirescharmjson(p_id INT)
BEGIN
	INSERT INTO vampirescharmjson (id) VALUES (p_id);
	SELECT * FROM  vampirescharmjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `leprechaunrichesjson`;
CREATE TABLE `leprechaunrichesjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"bwp":null,"cs":0.3,"ctw":0,"cwc":0,"eb":{"1":{"bt":1,"fp":6,"lp":8,"ls":1},"2":{"bt":1,"fp":9,"lp":11,"ls":2},"3":{"bt":1,"fp":24,"lp":25,"ls":2},"4":{"bt":1,"fp":27,"lp":29,"ls":1}},"ebb":{"1":{"bt":1,"fp":6,"lp":8,"ls":1},"2":{"bt":1,"fp":9,"lp":11,"ls":2},"3":{"bt":1,"fp":24,"lp":25,"ls":2},"4":{"bt":1,"fp":27,"lp":29,"ls":1}},"es":{"1":[6,7,8],"2":[9,10,11],"3":[24,25],"4":[27,28,29]},"esb":{"1":[6,7,8],"2":[9,10,11],"3":[24,25],"4":[27,28,29]},"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"now":7776,"nowpr":[6,2,6,6,3,6],"np":0,"nst":1,"ocr":null,"orl":[8,4,7,10,1,12,2,2,2,3,3,3,0,0,0,6,11,1,2,0,9,12,7,7,4,4,0,5,5,5,12,5,11,11,6,1],"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"rl":[8,4,7,10,1,12,2,2,2,3,3,3,0,0,0,6,11,1,2,0,9,12,7,7,4,4,0,5,5,5,12,5,11,11,6,1],"rs":null,"rwsp":null,"sid":"0","snww":null,"ssaw":0,"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_leprechaunrichesjson;
DELIMITER //
CREATE PROCEDURE create_and_return_leprechaunrichesjson(p_id INT)
BEGIN
	INSERT INTO leprechaunrichesjson (id) VALUES (p_id);
	SELECT * FROM  leprechaunrichesjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `gemsaviourconquestjson`;
CREATE TABLE `gemsaviourconquestjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"bwp":null,"cs":0.3,"ctw":0,"cwc":0,"eb":{"1":{"bt":1,"fp":6,"lp":8,"ls":1},"2":{"bt":1,"fp":9,"lp":11,"ls":2},"3":{"bt":1,"fp":24,"lp":25,"ls":2},"4":{"bt":1,"fp":27,"lp":29,"ls":1}},"ebb":{"1":{"bt":1,"fp":6,"lp":8,"ls":1},"2":{"bt":1,"fp":9,"lp":11,"ls":2},"3":{"bt":1,"fp":24,"lp":25,"ls":2},"4":{"bt":1,"fp":27,"lp":29,"ls":1}},"es":{"1":[6,7,8],"2":[9,10,11],"3":[24,25],"4":[27,28,29]},"esb":{"1":[6,7,8],"2":[9,10,11],"3":[24,25],"4":[27,28,29]},"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"now":7776,"nowpr":[6,2,6,6,3,6],"np":0,"nst":1,"ocr":null,"orl":[8,4,7,10,1,12,2,2,2,3,3,3,0,0,0,6,11,1,2,0,9,12,7,7,4,4,0,5,5,5,12,5,11,11,6,1],"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"rl":[8,4,7,10,1,12,2,2,2,3,3,3,0,0,0,6,11,1,2,0,9,12,7,7,4,4,0,5,5,5,12,5,11,11,6,1],"rs":null,"rwsp":null,"sc":0,"sid":"0","snww":null,"ssaw":0,"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_gemsaviourconquestjson;
DELIMITER //
CREATE PROCEDURE create_and_return_gemsaviourconquestjson(p_id INT)
BEGIN
	INSERT INTO gemsaviourconquestjson (id) VALUES (p_id);
	SELECT * FROM  gemsaviourconquestjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `mahjongwaysjson`;
CREATE TABLE `mahjongwaysjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"lwa":0,"mi":0,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":[7,6,7,8,9,8,3,2,3,1,5,5,7,0,7,8,0,8,3,2,1,4,5,5,7,6,7,8,9,8],"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"rl":[7,6,7,8,9,8,3,2,3,1,5,5,7,0,7,8,0,8,3,2,1,4,5,5,7,6,7,8,9,8],"rs":null,"rwsp":null,"sc":0,"sid":"0","snww":null,"ss":{"1":8,"2":21},"ssaw":0,"ssb":{"1":8,"2":21},"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wm":0,"wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_mahjongwaysjson;
DELIMITER //
CREATE PROCEDURE create_and_return_mahjongwaysjson(p_id INT)
BEGIN
	INSERT INTO mahjongwaysjson (id) VALUES (p_id);
	SELECT * FROM  mahjongwaysjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `fortunemousejson`;
CREATE TABLE `fortunemousejson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"idr":false,"ir":false,"ist":false,"itw":false,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rc":0,"rl":[1,1,1,0,0,0,2,2,2],"rwsp":null,"sid":"0","st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wc":0,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_fortunemousejson;
DELIMITER //
CREATE PROCEDURE create_and_return_fortunemousejson(p_id INT)
BEGIN
	INSERT INTO fortunemousejson (id) VALUES (p_id);
	SELECT * FROM  fortunemousejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `bikiniparadisejson`;
CREATE TABLE `bikiniparadisejson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[3,8,4,12,9,1,10,5,0,0,0,0,9,1,10,5,3,8,4,12],"rwm":null,"rwsp":null,"sc":0,"sid":"0","st":1,"tb":0,"tbb":0,"tw":0,"wabm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wm":0,"wp":null,"wppr":[[],[],[0,1,2,3],[],[]],"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_bikiniparadisejson;
DELIMITER //
CREATE PROCEDURE create_and_return_bikiniparadisejson(p_id INT)
BEGIN
	INSERT INTO bikiniparadisejson (id) VALUES (p_id);
	SELECT * FROM  bikiniparadisejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `candyburstjson`;
CREATE TABLE `candyburstjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"actw":null,"afw":null,"aw":0.24,"bl":141.36,"blab":141.36,"blb":141.36,"bmtw":null,"btw":null,"cls":{"1":[5],"2":[9],"3":[9],"4":[8]},"cp":null,"cs":0.02,"ctw":0,"cwc":0,"fb":null,"fs":null,"ge":[1,11],"gwt":-1,"lwa":null,"ml":1,"mr":null,"np":-0.4,"nst":1,"ocr":null,"orl":[2,7,9,8,3,9,5,4,8,9,6,5,9,7,6,2,6,4,9,5,9,8,6,2,8,7,6,5,9,8,2,7,8,3,9,8],"pcwc":0,"pf":1,"pft":null,"pmt":null,"psid":"0","pwp":null,"rl":[2,7,9,8,3,9,5,4,8,9,6,5,9,7,6,2,6,4,9,5,9,8,6,2,8,7,6,5,9,8,2,7,8,3,9,8],"rwsp":null,"sc":0,"sid":"0","ssaw":0.24,"st":4,"stw":0,"sw":null,"tb":0.4,"tbb":0.4,"tgml":1,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wsc":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_candyburstjson;
DELIMITER //
CREATE PROCEDURE create_and_return_candyburstjson(p_id INT)
BEGIN
	INSERT INTO candyburstjson (id) VALUES (p_id);
	SELECT * FROM  candyburstjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `mahjongways2json`;
CREATE TABLE `mahjongways2json` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"lwa":0,"mi":0,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":[7,6,7,9,10,9,8,3,8,3,1,4,5,2,4,6,0,2,0,10,4,3,8,3,1,4,5,2,7,6,7,9,10,9,8],"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"rl":[7,6,7,9,10,9,8,3,8,3,1,4,5,2,4,6,0,2,0,10,4,3,8,3,1,4,5,2,7,6,7,9,10,9,8],"rs":null,"rwsp":null,"sc":0,"sid":"0","snww":null,"ss":{"1":9,"2":11,"3":17,"4":23,"5":25},"ssaw":0,"ssb":{"1":9,"2":11,"3":17,"4":23,"5":25},"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wm":0,"wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_mahjongways2json;
DELIMITER //
CREATE PROCEDURE create_and_return_mahjongways2json(p_id INT)
BEGIN
	INSERT INTO mahjongways2json (id) VALUES (p_id);
	SELECT * FROM  mahjongways2json WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `ganeshafortunejson`;
CREATE TABLE `ganeshafortunejson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"bwp":null,"cs":0.3,"ctw":0,"cwc":0,"eb":{"1":{"bt":1,"fp":6,"lp":7,"ls":1},"2":{"bt":1,"fp":8,"lp":9,"ls":2},"3":{"bt":1,"fp":20,"lp":21,"ls":2},"4":{"bt":1,"fp":23,"lp":24,"ls":1}},"ebb":{"1":{"bt":1,"fp":6,"lp":7,"ls":1},"2":{"bt":1,"fp":8,"lp":9,"ls":2},"3":{"bt":1,"fp":20,"lp":21,"ls":2},"4":{"bt":1,"fp":23,"lp":24,"ls":1}},"es":{"1":[5,6,7],"2":[8,9],"3":[20,21],"4":[23,24]},"esb":{"1":[5,6,7],"2":[8,9],"3":[20,21],"4":[23,24]},"esm":null,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"now":10800,"nowpr":[5,3,6,6,4,5],"np":0,"nst":1,"ocr":null,"orl":[8,4,1,10,7,2,2,2,3,3,0,0,6,11,10,0,9,12,7,7,4,4,0,5,5,12,5,1,11,6],"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"ptbrp":null,"rl":[8,4,1,10,7,2,2,2,3,3,0,0,6,11,10,0,9,12,7,7,4,4,0,5,5,12,5,1,11,6],"rs":null,"rwsp":null,"sc":0,"sid":"0","snww":null,"ssaw":0,"st":1,"tb":0,"tbb":0,"torl":[3,0,2,4],"tptbr":null,"trl":[3,0,2,4],"tw":0,"twp":null,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wml":1,"wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_ganeshafortunejson;
DELIMITER //
CREATE PROCEDURE create_and_return_ganeshafortunejson(p_id INT)
BEGIN
	INSERT INTO ganeshafortunejson (id) VALUES (p_id);
	SELECT * FROM  ganeshafortunejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `phoenixrisesjson`;
CREATE TABLE `phoenixrisesjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[1,7,9,2,0,5,3,2,1,2,0,4,1,8,6],"rwsp":null,"sc":0,"sid":"0","snww":null,"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_phoenixrisesjson;
DELIMITER //
CREATE PROCEDURE create_and_return_phoenixrisesjson(p_id INT)
BEGIN
	INSERT INTO phoenixrisesjson (id) VALUES (p_id);
	SELECT * FROM  phoenixrisesjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `wildfireworksjson`;
CREATE TABLE `wildfireworksjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"baf":null,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"lwm":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[10,6,1,7,6,8,1,3,9,2,4,5,0,0,0,0,0,0,0,0],"rns":null,"rwsp":null,"sc":0,"sid":"0","snww":null,"ssaw":0,"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_wildfireworksjson;
DELIMITER //
CREATE PROCEDURE create_and_return_wildfireworksjson(p_id INT)
BEGIN
	INSERT INTO wildfireworksjson (id) VALUES (p_id);
	SELECT * FROM  wildfireworksjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `galacticgemsjson`;
CREATE TABLE `galacticgemsjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"blk":{"bp":[0,1,3,4,5,9,15,19,20,21,23,24],"bpb":[0,1,3,4,5,9,15,19,20,21,23,24],"up":null},"bns":null,"cs":0.3,"ctw":0,"cwc":0,"ewp":null,"fb":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":[7,11,4,8,10,6,3,5,3,6,4,6,2,6,4,9,3,5,3,9,11,10,4,10,11],"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[7,11,4,8,10,6,3,5,3,6,4,6,2,6,4,9,3,5,3,9,11,10,4,10,11],"rwsp":null,"sid":"0","snw":null,"ssaw":0,"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_galacticgemsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_galacticgemsjson(p_id INT)
BEGIN
	INSERT INTO galacticgemsjson (id) VALUES (p_id);
	SELECT * FROM  galacticgemsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `treasuresaztecjson`;
CREATE TABLE `treasuresaztecjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"bwp":null,"cs":0.3,"ctw":0,"cwc":0,"eb":{"1":{"bt":1,"fp":5,"lp":7,"ls":1},"2":{"bt":1,"fp":8,"lp":9,"ls":2},"3":{"bt":1,"fp":20,"lp":21,"ls":2},"4":{"bt":1,"fp":23,"lp":24,"ls":1}},"ebb":{"1":{"bt":1,"fp":5,"lp":7,"ls":1},"2":{"bt":1,"fp":8,"lp":9,"ls":2},"3":{"bt":1,"fp":20,"lp":21,"ls":2},"4":{"bt":1,"fp":23,"lp":24,"ls":1}},"es":{"1":[5,6,7],"2":[8,9],"3":[20,21],"4":[23,24]},"esb":{"1":[5,6,7],"2":[8,9],"3":[20,21],"4":[23,24]},"fb":null,"fs":null,"fstc":null,"ge":null,"gml":1,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"ngml":1,"now":10800,"nowpr":[5,3,6,6,4,5],"np":0,"nst":1,"ocr":null,"orl":[8,4,1,10,7,2,2,2,3,3,0,0,6,11,10,0,9,12,7,7,4,4,0,5,5,12,5,1,11,6],"pcwc":0,"pf":0,"pmt":null,"psid":"0","ptbr":null,"ptbrp":null,"rl":[8,4,1,10,7,2,2,2,3,3,0,0,6,11,10,0,9,12,7,7,4,4,0,5,5,12,5,1,11,6],"rs":null,"rwsp":null,"sc":0,"sid":"0","snww":null,"ssaw":0,"st":1,"tb":0,"tbb":0,"torl":[3,0,2,4],"tptbr":null,"trl":[3,0,2,4],"tw":0,"twp":null,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_treasuresaztecjson;
DELIMITER //
CREATE PROCEDURE create_and_return_treasuresaztecjson(p_id INT)
BEGIN
	INSERT INTO treasuresaztecjson (id) VALUES (p_id);
	SELECT * FROM  treasuresaztecjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `jewelsprosperjson`;
CREATE TABLE `jewelsprosperjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[8,1,4,7,0,0,0,0,2,2,2,2,3,3,3,3,0,0,0,0,9,11,5,10],"rwsp":null,"sc":0,"sid":"0","snww":null,"sp":0,"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_jewelsprosperjson;
DELIMITER //
CREATE PROCEDURE create_and_return_jewelsprosperjson(p_id INT)
BEGIN
	INSERT INTO jewelsprosperjson (id) VALUES (p_id);
	SELECT * FROM  jewelsprosperjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `gdnicefirejson`;
CREATE TABLE `gdnicefirejson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"lwm":null,"ml":2,"mr":null,"norl":null,"np":0,"nst":1,"ocr":null,"orl":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[4,6,7,1,5,3,0,9,2,2,9,0,3,5,1,7,6,4],"rwsp":null,"sc":0,"sid":"0","slw":0,"slwm":0,"snw":null,"st":1,"stw":0,"stwm":0,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_gdnicefirejson;
DELIMITER //
CREATE PROCEDURE create_and_return_gdnicefirejson(p_id INT)
BEGIN
	INSERT INTO gdnicefirejson (id) VALUES (p_id);
	SELECT * FROM  gdnicefirejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `balivacationjson`;
CREATE TABLE `balivacationjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"acw":0,"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fa":false,"fb":null,"fbst":0,"fs":null,"fstc":null,"ge":null,"gm":0,"gwt":0,"hashr":null,"ix":false,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[7,2,4,4,1,3,3,2,8,2,5,5],"rs":null,"rwsp":null,"sc":0,"sid":"0","sp":null,"st":1,"sw":null,"symc":null,"tb":0,"tbb":0,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C","wwp":null}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_balivacationjson;
DELIMITER //
CREATE PROCEDURE create_and_return_balivacationjson(p_id INT)
BEGIN
	INSERT INTO balivacationjson (id) VALUES (p_id);
	SELECT * FROM  balivacationjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `majestictsjson`;
CREATE TABLE `majestictsjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cp":null,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gml":1,"gs":[2,5,9,12,15,19,22],"gsd":null,"gwt":0,"hashr":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"ogml":1,"ogs":[2,5,9,12,15,19,22],"orl":[0,5,3,7,2,9,1,7,2,8,3,7,2,8,4,7,2,8,1,9,2,8,3,5,0],"pcwc":0,"pf":0,"pmt":null,"psid":"0","rc":false,"rl":[0,5,3,7,2,9,1,7,2,8,3,7,2,8,4,7,2,8,1,9,2,8,3,5,0],"rngs":null,"rns":null,"rwsp":null,"sc":0,"sid":"0","ssaw":0,"st":1,"sw":null,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wsc":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_majestictsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_majestictsjson(p_id INT)
BEGIN
	INSERT INTO majestictsjson (id) VALUES (p_id);
	SELECT * FROM  majestictsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `jackfrostsjson`;
CREATE TABLE `jackfrostsjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"actw":null,"acw":0,"afw":null,"agmfb":0,"aw":0,"bl":138.06,"blab":138.06,"blb":138.46,"bmtw":null,"btw":null,"cs":0.04,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":[1,11],"gm":1,"gwt":-1,"hashr":"0:2;10;6#12;10;6#12;2;6#12;3;2#MV#0.60#MT#1#MG#0#","ix":false,"lw":null,"lwa":null,"ml":1,"mr":null,"np":-0.4,"nst":1,"ocr":null,"pcwc":0,"pf":1,"pmt":null,"psid":"0","rl":[2,12,12,12,10,10,2,3,6,6,6,2],"rs":null,"rwsp":null,"sc":0,"sid":"0","sp":[],"ssaw":null,"st":1,"stw":null,"sw":null,"symc":null,"tb":0.4,"tbb":0.4,"tw":0,"twbm":0,"wbn":null,"wec":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C","wwp":null}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_jackfrostsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_jackfrostsjson(p_id INT)
BEGIN
	INSERT INTO jackfrostsjson (id) VALUES (p_id);
	SELECT * FROM  jackfrostsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `fortuneoxjson`;
CREATE TABLE `fortuneoxjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":false,"fstc":null,"ge":null,"gwt":0,"hashr":null,"im":false,"itw":false,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rc":0,"rf":false,"rl":[2,2,2,99,0,0,0,0,3,3,3,99],"rtf":false,"rwsp":null,"sid":"0","st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wc":0,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_fortuneoxjson;
DELIMITER //
CREATE PROCEDURE create_and_return_fortuneoxjson(p_id INT)
BEGIN
	INSERT INTO fortuneoxjson (id) VALUES (p_id);
	SELECT * FROM  fortuneoxjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `candybonanzajson`;
CREATE TABLE `candybonanzajson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"bsp":[[0,1,6,7],[28,29,34,35]],"bspb":[[0,1,6,7],[28,29,34,35]],"bspl":[0,1,6,7,28,29,34,35],"bsplb":[0,1,6,7,28,29,34,35],"cls":null,"cp":null,"cs":0.3,"ctw":0,"cwc":0,"dpp":null,"fb":null,"fs":null,"fstc":null,"ge":null,"gml":1,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":[2,2,6,0,9,9,2,2,6,8,1,8,7,7,5,5,5,5,3,3,3,3,7,7,8,1,8,6,4,4,9,9,0,6,4,4],"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[2,2,6,0,9,9,2,2,6,8,1,8,7,7,5,5,5,5,3,3,3,3,7,7,8,1,8,6,4,4,9,9,0,6,4,4],"rwsp":null,"sc":0,"sid":"0","ssaw":0,"st":1,"stw":0,"sw":null,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wlp":[],"wp":null,"wpl":null,"wsc":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_candybonanzajson;
DELIMITER //
CREATE PROCEDURE create_and_return_candybonanzajson(p_id INT)
BEGIN
	INSERT INTO candybonanzajson (id) VALUES (p_id);
	SELECT * FROM  candybonanzajson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `emojirichesjson`;
CREATE TABLE `emojirichesjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"acw":0,"aw":0,"bl":100000,"blab":0,"blb":0,"cls":null,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gml":1,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":[8,8,6,6,9,9,2,0,2,2,7,7,3,1,3,4,4,4,4,4,4,3,1,3,7,7,2,2,0,2,9,9,6,6,8,8],"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[8,8,6,6,9,9,2,0,2,2,7,7,3,1,3,4,4,4,4,4,4,3,1,3,7,7,2,2,0,2,9,9,6,6,8,8],"rs":null,"rwsp":null,"sc":2,"sid":"0","st":1,"stw":0,"sw":null,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wsc":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_emojirichesjson;
DELIMITER //
CREATE PROCEDURE create_and_return_emojirichesjson(p_id INT)
BEGIN
	INSERT INTO emojirichesjson (id) VALUES (p_id);
	SELECT * FROM  emojirichesjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `alchemygoldjson`;
CREATE TABLE `alchemygoldjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cp":null,"cptw":null,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gm":0,"gsp":[1,3,5,9,12,15,19,21,23],"gwt":0,"hashr":null,"inw":false,"ml":2,"mr":null,"np":0,"nst":1,"nwp":null,"ocr":null,"orl":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","pswlp":null,"pswp":null,"rl":[6,5,3,7,2,9,1,7,0,8,3,7,2,8,4,7,0,8,1,9,2,8,3,5,6],"rns":null,"rs":null,"rwsp":null,"sc":2,"sid":"0","ssaw":0,"st":1,"sw":null,"swlp":null,"swp":null,"tb":0,"tbb":0,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wsc":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_alchemygoldjson;
DELIMITER //
CREATE PROCEDURE create_and_return_alchemygoldjson(p_id INT)
BEGIN
	INSERT INTO alchemygoldjson (id) VALUES (p_id);
	SELECT * FROM  alchemygoldjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `jungledelightjson`;
CREATE TABLE `jungledelightjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"c":null,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[3,6,7,6,3,7,4,5,4,8,9,7,9,8,7],"rwsp":null,"sid":"0","st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_jungledelightjson;
DELIMITER //
CREATE PROCEDURE create_and_return_jungledelightjson(p_id INT)
BEGIN
	INSERT INTO jungledelightjson (id) VALUES (p_id);
	SELECT * FROM  jungledelightjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;

ROP TABLE IF EXISTS `candybonanzajson`;
CREATE TABLE `candybonanzajson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"bsp":[[0,1,6,7],[28,29,34,35]],"bspb":[[0,1,6,7],[28,29,34,35]],"bspl":[0,1,6,7,28,29,34,35],"bsplb":[0,1,6,7,28,29,34,35],"cls":null,"cp":null,"cs":0.3,"ctw":0,"cwc":0,"dpp":null,"fb":null,"fs":null,"fstc":null,"ge":null,"gml":1,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":[2,2,6,0,9,9,2,2,6,8,1,8,7,7,5,5,5,5,3,3,3,3,7,7,8,1,8,6,4,4,9,9,0,6,4,4],"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[2,2,6,0,9,9,2,2,6,8,1,8,7,7,5,5,5,5,3,3,3,3,7,7,8,1,8,6,4,4,9,9,0,6,4,4],"rwsp":null,"sc":0,"sid":"0","ssaw":0,"st":1,"stw":0,"sw":null,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wlp":[],"wp":null,"wpl":null,"wsc":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_candybonanzajson;
DELIMITER //
CREATE PROCEDURE create_and_return_candybonanzajson(p_id INT)
BEGIN
	INSERT INTO candybonanzajson (id) VALUES (p_id);
	SELECT * FROM  candybonanzajson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `jewelsprosperjson`;
CREATE TABLE `jewelsprosperjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":100000,"blab":0,"blb":0,"cs":0.3,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":null,"gwt":0,"hashr":null,"lw":null,"ml":2,"mr":null,"np":0,"nst":1,"ocr":null,"orl":null,"pcwc":0,"pf":0,"pmt":null,"psid":"0","rl":[8,1,4,7,0,0,0,0,2,2,2,2,3,3,3,3,0,0,0,0,9,11,5,10],"rwsp":null,"sc":0,"sid":"0","snww":null,"sp":0,"st":1,"tb":0,"tbb":0,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_jewelsprosperjson;
DELIMITER //
CREATE PROCEDURE create_and_return_jewelsprosperjson(p_id INT)
BEGIN
	INSERT INTO jewelsprosperjson (id) VALUES (p_id);
	SELECT * FROM  jewelsprosperjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `zombieoutbrkjson`;
CREATE TABLE `zombieoutbrkjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"actw":null,"afw":null,"aw":0.08,"bl":0.7,"blab":0.7,"blb":0.7,"bmtw":null,"btw":null,"cc":1,"crtw":0,"cs":"0.02","ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":{"4":1},"ge":[1,11],"gm":1,"gwt":-1,"hashr":"1:11;1;3;1;12#12;10;2;3;5#12;4;4;6;5#5;3;3;8;5#3;2#MV#0#MT#1#MG#0#","imw":false,"lml":0,"lw":null,"lwa":null,"ml":"1","mr":null,"np":-0.4,"nst":1,"ocr":null,"orl":[11,12,12,5,1,10,4,3,3,3,2,4,3,1,3,6,8,2,12,5,5,5],"pcwc":0,"pf":1,"pmt":null,"psid":"0","ptbr":null,"rl":[11,12,12,5,1,10,4,3,3,3,2,4,3,1,3,6,8,2,12,5,5,5],"rml":0,"rns":[[11],[1],[3,2],[],[]],"rwsp":null,"sc":2,"sid":"0","snww":null,"ssaw":0.08,"st":4,"stw":null,"tb":0.4,"tbb":0.4,"tw":0,"twbm":0,"wbn":null,"wc":0,"wfg":null,"wid":0,"wk":"0_C","wm":{},"wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_zombieoutbrkjson;
DELIMITER //
CREATE PROCEDURE create_and_return_zombieoutbrkjson(p_id INT)
BEGIN
	INSERT INTO zombieoutbrkjson (id) VALUES (p_id);
	SELECT * FROM  zombieoutbrkjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `anubiswrathjson`;
CREATE TABLE `anubiswrathjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"actw":null,"afw":null,"aw":0,"bl":0.29999999999999993,"blab":0.29999999999999993,"blb":0.7,"bmtw":null,"btw":null,"crtw":0,"cs":"0.02","ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":[1,11],"gm":0,"gwt":-1,"hashr":"0:10;11;8;9;9#11;10;6;8;7#5;11;5;9;8#9;2;9;8;7#MV#1.20#MT#1#MG#0#","icc":true,"ich":[false,true,false,false,false],"ihttmrl":[false,false,false,false,false],"imw":false,"inttmh":false,"lw":null,"lwa":null,"ml":"1","mr":null,"np":-0.4,"nst":1,"ocr":null,"orl":[10,11,5,9,11,10,11,2,8,6,5,9,9,8,9,8,9,7,8,7],"pcwc":0,"pf":1,"pgm":0,"pmt":null,"psid":"0","ptbr":null,"rl":[10,11,5,9,11,10,11,2,8,6,5,9,9,8,9,8,9,7,8,7],"rns":null,"rwsp":null,"sc":0,"sid":"0","snww":null,"ssaw":0,"st":1,"stw":null,"tb":0.4,"tbb":0.4,"ttmrl":[10,5,3,3,3],"tw":0,"twbm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_anubiswrathjson;
DELIMITER //
CREATE PROCEDURE create_and_return_anubiswrathjson(p_id INT)
BEGIN
	INSERT INTO anubiswrathjson (id) VALUES (p_id);
	SELECT * FROM  anubiswrathjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS add_and_return_call;
DELIMITER //
CREATE PROCEDURE add_and_return_call(IN in_iduser INT, IN in_gamecode VARCHAR(255), IN in_step INT, IN in_json VARCHAR(255))
BEGIN
    INSERT INTO calls (iduser, gamecode, jsonname, steps, bycall) VALUES (in_iduser, in_gamecode, in_json, in_step, 'system');
    SELECT * FROM calls WHERE id = LAST_INSERT_ID() LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS update_step_and_get_call_by_id;
DELIMITER //
CREATE PROCEDURE update_step_and_get_call_by_id(IN in_call_id INT, IN in_step INT)
BEGIN
    UPDATE calls SET `steps` = in_step WHERE id = in_call_id;
    SELECT * FROM calls WHERE id = in_call_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `game_rtp_call`;
CREATE TABLE IF NOT EXISTS `game_rtp_call` (
                `id` INT NOT NULL AUTO_INCREMENT,
                `agent_code` VARCHAR(50) NOT NULL,
                `user_code` VARCHAR(50) NOT NULL,
                `provider_code` VARCHAR(50) NOT NULL,
                `game_code` VARCHAR(50) NOT NULL,
                `bet`  INT NOT NULL DEFAULT 0,
                `expect` INT NOT NULL DEFAULT 0,
                `real` INT NOT NULL DEFAULT 0,
                `rtp`  INT NOT NULL DEFAULT 0,
                `type` INT NOT NULL default 0,
                `status`  INT NOT NULL DEFAULT 0,
                `created_at` BIGINT NOT NULL DEFAULT 0, 
                `updated_at` BIGINT NOT NULL DEFAULT 0,
                PRIMARY KEY (`id`),
                UNIQUE INDEX idx_user_game (user_code, game_code)
                ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
