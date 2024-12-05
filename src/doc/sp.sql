

DROP PROCEDURE IF EXISTS create_and_return_candybonanzajson;
DELIMITER //
CREATE PROCEDURE create_and_return_candybonanzajson(p_id INT)
BEGIN
	INSERT INTO candybonanzajson (id) VALUES (p_id);
	SELECT * FROM  candybonanzajson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_candybonanzajson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_candybonanzajson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE candybonanzajson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_candybonanzajson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_candybonanzajson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE candybonanzajson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_wildbanditojson;
DELIMITER //
CREATE PROCEDURE create_and_return_wildbanditojson(p_id INT)
BEGIN
	INSERT INTO wildbanditojson (id) VALUES (p_id);
	SELECT * FROM  wildbanditojson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_wildbanditojson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_wildbanditojson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE wildbanditojson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_wildbanditojson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_wildbanditojson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE wildbanditojson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_heiststakesjson;
DELIMITER //
CREATE PROCEDURE create_and_return_heiststakesjson(p_id INT)
BEGIN
	INSERT INTO heiststakesjson (id) VALUES (p_id);
	SELECT * FROM  heiststakesjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_heiststakesjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_heiststakesjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE heiststakesjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_heiststakesjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_heiststakesjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE heiststakesjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_lgdmonkeykgjson;
DELIMITER //
CREATE PROCEDURE create_and_return_lgdmonkeykgjson(p_id INT)
BEGIN
	INSERT INTO lgdmonkeykgjson (id) VALUES (p_id);
	SELECT * FROM  lgdmonkeykgjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_lgdmonkeykgjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_lgdmonkeykgjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE lgdmonkeykgjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_lgdmonkeykgjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_lgdmonkeykgjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE lgdmonkeykgjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_buffalowinjson;
DELIMITER //
CREATE PROCEDURE create_and_return_buffalowinjson(p_id INT)
BEGIN
	INSERT INTO buffalowinjson (id) VALUES (p_id);
	SELECT * FROM  buffalowinjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_buffalowinjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_buffalowinjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE buffalowinjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_buffalowinjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_buffalowinjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE buffalowinjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_cryptfortunejson;
DELIMITER //
CREATE PROCEDURE create_and_return_cryptfortunejson(p_id INT)
BEGIN
	INSERT INTO cryptfortunejson (id) VALUES (p_id);
	SELECT * FROM  cryptfortunejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_cryptfortunejson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_cryptfortunejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE cryptfortunejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_cryptfortunejson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_cryptfortunejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE cryptfortunejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_emojirichesjson;
DELIMITER //
CREATE PROCEDURE create_and_return_emojirichesjson(p_id INT)
BEGIN
	INSERT INTO emojirichesjson (id) VALUES (p_id);
	SELECT * FROM  emojirichesjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_emojirichesjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_emojirichesjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE emojirichesjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_emojirichesjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_emojirichesjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE emojirichesjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_sprmktspreejson;
DELIMITER //
CREATE PROCEDURE create_and_return_sprmktspreejson(p_id INT)
BEGIN
	INSERT INTO sprmktspreejson (id) VALUES (p_id);
	SELECT * FROM  sprmktspreejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_sprmktspreejson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_sprmktspreejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE sprmktspreejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_sprmktspreejson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_sprmktspreejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE sprmktspreejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_spiritwonderjson;
DELIMITER //
CREATE PROCEDURE create_and_return_spiritwonderjson(p_id INT)
BEGIN
	INSERT INTO spiritwonderjson (id) VALUES (p_id);
	SELECT * FROM  spiritwonderjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_spiritwonderjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_spiritwonderjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE spiritwonderjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_spiritwonderjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_spiritwonderjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE spiritwonderjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_destsunmoonjson;
DELIMITER //
CREATE PROCEDURE create_and_return_destsunmoonjson(p_id INT)
BEGIN
	INSERT INTO destsunmoonjson (id) VALUES (p_id);
	SELECT * FROM  destsunmoonjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_destsunmoonjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_destsunmoonjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE destsunmoonjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_destsunmoonjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_destsunmoonjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE destsunmoonjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_garudagemsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_garudagemsjson(p_id INT)
BEGIN
	INSERT INTO garudagemsjson (id) VALUES (p_id);
	SELECT * FROM  garudagemsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_garudagemsjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_garudagemsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE garudagemsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_garudagemsjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_garudagemsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE garudagemsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_roosterrbljson;
DELIMITER //
CREATE PROCEDURE create_and_return_roosterrbljson(p_id INT)
BEGIN
	INSERT INTO roosterrbljson (id) VALUES (p_id);
	SELECT * FROM  roosterrbljson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_roosterrbljson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_roosterrbljson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE roosterrbljson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_roosterrbljson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_roosterrbljson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE roosterrbljson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_battlegroundjson;
DELIMITER //
CREATE PROCEDURE create_and_return_battlegroundjson(p_id INT)
BEGIN
	INSERT INTO battlegroundjson (id) VALUES (p_id);
	SELECT * FROM  battlegroundjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_battlegroundjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_battlegroundjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE battlegroundjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_battlegroundjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_battlegroundjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE battlegroundjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_btrflyblossomjson;
DELIMITER //
CREATE PROCEDURE create_and_return_btrflyblossomjson(p_id INT)
BEGIN
	INSERT INTO btrflyblossomjson (id) VALUES (p_id);
	SELECT * FROM  btrflyblossomjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_btrflyblossomjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_btrflyblossomjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE btrflyblossomjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_btrflyblossomjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_btrflyblossomjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE btrflyblossomjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_fortunetigerjson;
DELIMITER //
CREATE PROCEDURE create_and_return_fortunetigerjson(p_id INT)
BEGIN
	INSERT INTO fortunetigerjson (id) VALUES (p_id);
	SELECT * FROM  fortunetigerjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_fortunetigerjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_fortunetigerjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE fortunetigerjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_fortunetigerjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_fortunetigerjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE fortunetigerjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_prosperftreejson;
DELIMITER //
CREATE PROCEDURE create_and_return_prosperftreejson(p_id INT)
BEGIN
	INSERT INTO prosperftreejson (id) VALUES (p_id);
	SELECT * FROM  prosperftreejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_prosperftreejson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_prosperftreejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE prosperftreejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_prosperftreejson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_prosperftreejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE prosperftreejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_asgardianrsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_asgardianrsjson(p_id INT)
BEGIN
	INSERT INTO asgardianrsjson (id) VALUES (p_id);
	SELECT * FROM  asgardianrsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_asgardianrsjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_asgardianrsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE asgardianrsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_asgardianrsjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_asgardianrsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE asgardianrsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_alchemygoldjson;
DELIMITER //
CREATE PROCEDURE create_and_return_alchemygoldjson(p_id INT)
BEGIN
	INSERT INTO alchemygoldjson (id) VALUES (p_id);
	SELECT * FROM  alchemygoldjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_alchemygoldjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_alchemygoldjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE alchemygoldjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_alchemygoldjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_alchemygoldjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE alchemygoldjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_dinerdelightsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_dinerdelightsjson(p_id INT)
BEGIN
	INSERT INTO dinerdelightsjson (id) VALUES (p_id);
	SELECT * FROM  dinerdelightsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_dinerdelightsjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_dinerdelightsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE dinerdelightsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_dinerdelightsjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_dinerdelightsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE dinerdelightsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_midasfortunejson;
DELIMITER //
CREATE PROCEDURE create_and_return_midasfortunejson(p_id INT)
BEGIN
	INSERT INTO midasfortunejson (id) VALUES (p_id);
	SELECT * FROM  midasfortunejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_midasfortunejson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_midasfortunejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE midasfortunejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_midasfortunejson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_midasfortunejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE midasfortunejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_bakerybonanzajson;
DELIMITER //
CREATE PROCEDURE create_and_return_bakerybonanzajson(p_id INT)
BEGIN
	INSERT INTO bakerybonanzajson (id) VALUES (p_id);
	SELECT * FROM  bakerybonanzajson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_bakerybonanzajson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_bakerybonanzajson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE bakerybonanzajson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_bakerybonanzajson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_bakerybonanzajson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE bakerybonanzajson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_songkranspljson;
DELIMITER //
CREATE PROCEDURE create_and_return_songkranspljson(p_id INT)
BEGIN
	INSERT INTO songkranspljson (id) VALUES (p_id);
	SELECT * FROM  songkranspljson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_songkranspljson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_songkranspljson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE songkranspljson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_songkranspljson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_songkranspljson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE songkranspljson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_dragonhatch2json;
DELIMITER //
CREATE PROCEDURE create_and_return_dragonhatch2json(p_id INT)
BEGIN
	INSERT INTO dragonhatch2json (id) VALUES (p_id);
	SELECT * FROM  dragonhatch2json WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_dragonhatch2json;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_dragonhatch2json(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE dragonhatch2json SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_dragonhatch2json;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_dragonhatch2json(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE dragonhatch2json SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_wildape3258json;
DELIMITER //
CREATE PROCEDURE create_and_return_wildape3258json(p_id INT)
BEGIN
	INSERT INTO wildape3258json (id) VALUES (p_id);
	SELECT * FROM  wildape3258json WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_wildape3258json;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_wildape3258json(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE wildape3258json SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_wildape3258json;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_wildape3258json(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE wildape3258json SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_sprgolfdrivejson;
DELIMITER //
CREATE PROCEDURE create_and_return_sprgolfdrivejson(p_id INT)
BEGIN
	INSERT INTO sprgolfdrivejson (id) VALUES (p_id);
	SELECT * FROM  sprgolfdrivejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_sprgolfdrivejson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_sprgolfdrivejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE sprgolfdrivejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_sprgolfdrivejson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_sprgolfdrivejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE sprgolfdrivejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_fortunerabbitjson;
DELIMITER //
CREATE PROCEDURE create_and_return_fortunerabbitjson(p_id INT)
BEGIN
	INSERT INTO fortunerabbitjson (id) VALUES (p_id);
	SELECT * FROM  fortunerabbitjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_fortunerabbitjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_fortunerabbitjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE fortunerabbitjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_fortunerabbitjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_fortunerabbitjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE fortunerabbitjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_cruiseroyalejson;
DELIMITER //
CREATE PROCEDURE create_and_return_cruiseroyalejson(p_id INT)
BEGIN
	INSERT INTO cruiseroyalejson (id) VALUES (p_id);
	SELECT * FROM  cruiseroyalejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_cruiseroyalejson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_cruiseroyalejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE cruiseroyalejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_cruiseroyalejson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_cruiseroyalejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE cruiseroyalejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_cashmaniajson;
DELIMITER //
CREATE PROCEDURE create_and_return_cashmaniajson(p_id INT)
BEGIN
	INSERT INTO cashmaniajson (id) VALUES (p_id);
	SELECT * FROM  cashmaniajson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_cashmaniajson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_cashmaniajson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE cashmaniajson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_cashmaniajson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_cashmaniajson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE cashmaniajson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_fortunedragonjson;
DELIMITER //
CREATE PROCEDURE create_and_return_fortunedragonjson(p_id INT)
BEGIN
	INSERT INTO fortunedragonjson (id) VALUES (p_id);
	SELECT * FROM  fortunedragonjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_fortunedragonjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_fortunedragonjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE fortunedragonjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_fortunedragonjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_fortunedragonjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE fortunedragonjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_piggygoldjson;
DELIMITER //
CREATE PROCEDURE create_and_return_piggygoldjson(p_id INT)
BEGIN
	INSERT INTO piggygoldjson (id) VALUES (p_id);
	SELECT * FROM  piggygoldjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_piggygoldjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_piggygoldjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE piggygoldjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_piggygoldjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_piggygoldjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE piggygoldjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_jungledelightjson;
DELIMITER //
CREATE PROCEDURE create_and_return_jungledelightjson(p_id INT)
BEGIN
	INSERT INTO jungledelightjson (id) VALUES (p_id);
	SELECT * FROM  jungledelightjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_jungledelightjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_jungledelightjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE jungledelightjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_jungledelightjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_jungledelightjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE jungledelightjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_ganeshagoldjson;
DELIMITER //
CREATE PROCEDURE create_and_return_ganeshagoldjson(p_id INT)
BEGIN
	INSERT INTO ganeshagoldjson (id) VALUES (p_id);
	SELECT * FROM  ganeshagoldjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_ganeshagoldjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_ganeshagoldjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE ganeshagoldjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_ganeshagoldjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_ganeshagoldjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE ganeshagoldjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_doublefortunejson;
DELIMITER //
CREATE PROCEDURE create_and_return_doublefortunejson(p_id INT)
BEGIN
	INSERT INTO doublefortunejson (id) VALUES (p_id);
	SELECT * FROM  doublefortunejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_doublefortunejson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_doublefortunejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE doublefortunejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_doublefortunejson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_doublefortunejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE doublefortunejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_thegreaticescapejson;
DELIMITER //
CREATE PROCEDURE create_and_return_thegreaticescapejson(p_id INT)
BEGIN
	INSERT INTO thegreaticescapejson (id) VALUES (p_id);
	SELECT * FROM  thegreaticescapejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_thegreaticescapejson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_thegreaticescapejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE thegreaticescapejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_thegreaticescapejson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_thegreaticescapejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE thegreaticescapejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_captainsbountyjson;
DELIMITER //
CREATE PROCEDURE create_and_return_captainsbountyjson(p_id INT)
BEGIN
	INSERT INTO captainsbountyjson (id) VALUES (p_id);
	SELECT * FROM  captainsbountyjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_captainsbountyjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_captainsbountyjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE captainsbountyjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_captainsbountyjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_captainsbountyjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE captainsbountyjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_dragonhatchjson;
DELIMITER //
CREATE PROCEDURE create_and_return_dragonhatchjson(p_id INT)
BEGIN
	INSERT INTO dragonhatchjson (id) VALUES (p_id);
	SELECT * FROM  dragonhatchjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_dragonhatchjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_dragonhatchjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE dragonhatchjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_dragonhatchjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_dragonhatchjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE dragonhatchjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_vampirescharmjson;
DELIMITER //
CREATE PROCEDURE create_and_return_vampirescharmjson(p_id INT)
BEGIN
	INSERT INTO vampirescharmjson (id) VALUES (p_id);
	SELECT * FROM  vampirescharmjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_vampirescharmjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_vampirescharmjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE vampirescharmjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_vampirescharmjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_vampirescharmjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE vampirescharmjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_leprechaunrichesjson;
DELIMITER //
CREATE PROCEDURE create_and_return_leprechaunrichesjson(p_id INT)
BEGIN
	INSERT INTO leprechaunrichesjson (id) VALUES (p_id);
	SELECT * FROM  leprechaunrichesjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_leprechaunrichesjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_leprechaunrichesjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE leprechaunrichesjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_leprechaunrichesjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_leprechaunrichesjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE leprechaunrichesjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_gemsaviourconquestjson;
DELIMITER //
CREATE PROCEDURE create_and_return_gemsaviourconquestjson(p_id INT)
BEGIN
	INSERT INTO gemsaviourconquestjson (id) VALUES (p_id);
	SELECT * FROM  gemsaviourconquestjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_gemsaviourconquestjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_gemsaviourconquestjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE gemsaviourconquestjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_gemsaviourconquestjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_gemsaviourconquestjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE gemsaviourconquestjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_mahjongwaysjson;
DELIMITER //
CREATE PROCEDURE create_and_return_mahjongwaysjson(p_id INT)
BEGIN
	INSERT INTO mahjongwaysjson (id) VALUES (p_id);
	SELECT * FROM  mahjongwaysjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_mahjongwaysjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_mahjongwaysjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE mahjongwaysjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_mahjongwaysjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_mahjongwaysjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE mahjongwaysjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_fortunemousejson;
DELIMITER //
CREATE PROCEDURE create_and_return_fortunemousejson(p_id INT)
BEGIN
	INSERT INTO fortunemousejson (id) VALUES (p_id);
	SELECT * FROM  fortunemousejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_fortunemousejson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_fortunemousejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE fortunemousejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_fortunemousejson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_fortunemousejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE fortunemousejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_bikiniparadisejson;
DELIMITER //
CREATE PROCEDURE create_and_return_bikiniparadisejson(p_id INT)
BEGIN
	INSERT INTO bikiniparadisejson (id) VALUES (p_id);
	SELECT * FROM  bikiniparadisejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_bikiniparadisejson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_bikiniparadisejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE bikiniparadisejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_bikiniparadisejson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_bikiniparadisejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE bikiniparadisejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_candyburstjson;
DELIMITER //
CREATE PROCEDURE create_and_return_candyburstjson(p_id INT)
BEGIN
	INSERT INTO candyburstjson (id) VALUES (p_id);
	SELECT * FROM  candyburstjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_candyburstjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_candyburstjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE candyburstjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_candyburstjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_candyburstjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE candyburstjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_mahjongways2json;
DELIMITER //
CREATE PROCEDURE create_and_return_mahjongways2json(p_id INT)
BEGIN
	INSERT INTO mahjongways2json (id) VALUES (p_id);
	SELECT * FROM  mahjongways2json WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_mahjongways2json;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_mahjongways2json(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE mahjongways2json SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_mahjongways2json;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_mahjongways2json(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE mahjongways2json SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_ganeshafortunejson;
DELIMITER //
CREATE PROCEDURE create_and_return_ganeshafortunejson(p_id INT)
BEGIN
	INSERT INTO ganeshafortunejson (id) VALUES (p_id);
	SELECT * FROM  ganeshafortunejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_ganeshafortunejson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_ganeshafortunejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE ganeshafortunejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_ganeshafortunejson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_ganeshafortunejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE ganeshafortunejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_phoenixrisesjson;
DELIMITER //
CREATE PROCEDURE create_and_return_phoenixrisesjson(p_id INT)
BEGIN
	INSERT INTO phoenixrisesjson (id) VALUES (p_id);
	SELECT * FROM  phoenixrisesjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_phoenixrisesjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_phoenixrisesjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE phoenixrisesjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_phoenixrisesjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_phoenixrisesjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE phoenixrisesjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_wildfireworksjson;
DELIMITER //
CREATE PROCEDURE create_and_return_wildfireworksjson(p_id INT)
BEGIN
	INSERT INTO wildfireworksjson (id) VALUES (p_id);
	SELECT * FROM  wildfireworksjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_wildfireworksjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_wildfireworksjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE wildfireworksjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_wildfireworksjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_wildfireworksjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE wildfireworksjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_galacticgemsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_galacticgemsjson(p_id INT)
BEGIN
	INSERT INTO galacticgemsjson (id) VALUES (p_id);
	SELECT * FROM  galacticgemsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_galacticgemsjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_galacticgemsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE galacticgemsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_galacticgemsjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_galacticgemsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE galacticgemsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_treasuresaztecjson;
DELIMITER //
CREATE PROCEDURE create_and_return_treasuresaztecjson(p_id INT)
BEGIN
	INSERT INTO treasuresaztecjson (id) VALUES (p_id);
	SELECT * FROM  treasuresaztecjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_treasuresaztecjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_treasuresaztecjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE treasuresaztecjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_treasuresaztecjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_treasuresaztecjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE treasuresaztecjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_jewelsprosperjson;
DELIMITER //
CREATE PROCEDURE create_and_return_jewelsprosperjson(p_id INT)
BEGIN
	INSERT INTO jewelsprosperjson (id) VALUES (p_id);
	SELECT * FROM  jewelsprosperjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_jewelsprosperjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_jewelsprosperjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE jewelsprosperjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_jewelsprosperjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_jewelsprosperjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE jewelsprosperjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_gdnicefirejson;
DELIMITER //
CREATE PROCEDURE create_and_return_gdnicefirejson(p_id INT)
BEGIN
	INSERT INTO gdnicefirejson (id) VALUES (p_id);
	SELECT * FROM  gdnicefirejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_gdnicefirejson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_gdnicefirejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE gdnicefirejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_gdnicefirejson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_gdnicefirejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE gdnicefirejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_balivacationjson;
DELIMITER //
CREATE PROCEDURE create_and_return_balivacationjson(p_id INT)
BEGIN
	INSERT INTO balivacationjson (id) VALUES (p_id);
	SELECT * FROM  balivacationjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_balivacationjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_balivacationjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE balivacationjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_balivacationjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_balivacationjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE balivacationjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_majestictsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_majestictsjson(p_id INT)
BEGIN
	INSERT INTO majestictsjson (id) VALUES (p_id);
	SELECT * FROM  majestictsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_majestictsjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_majestictsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE majestictsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_majestictsjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_majestictsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE majestictsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_jackfrostsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_jackfrostsjson(p_id INT)
BEGIN
	INSERT INTO jackfrostsjson (id) VALUES (p_id);
	SELECT * FROM  jackfrostsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_jackfrostsjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_jackfrostsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE jackfrostsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_jackfrostsjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_jackfrostsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE jackfrostsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_fortuneoxjson;
DELIMITER //
CREATE PROCEDURE create_and_return_fortuneoxjson(p_id INT)
BEGIN
	INSERT INTO fortuneoxjson (id) VALUES (p_id);
	SELECT * FROM  fortuneoxjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_fortuneoxjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_fortuneoxjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE fortuneoxjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_fortuneoxjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_fortuneoxjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE fortuneoxjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_zombieoutbrkjson;
DELIMITER //
CREATE PROCEDURE create_and_return_zombieoutbrkjson(p_id INT)
BEGIN
	INSERT INTO zombieoutbrkjson (id) VALUES (p_id);
	SELECT * FROM  zombieoutbrkjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_zombieoutbrkjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_zombieoutbrkjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE zombieoutbrkjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_zombieoutbrkjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_zombieoutbrkjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE zombieoutbrkjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_anubiswrathjson;
DELIMITER //
CREATE PROCEDURE create_and_return_anubiswrathjson(p_id INT)
BEGIN
	INSERT INTO anubiswrathjson (id) VALUES (p_id);
	SELECT * FROM  anubiswrathjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_anubiswrathjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_anubiswrathjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE anubiswrathjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_anubiswrathjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_anubiswrathjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE anubiswrathjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_wildbountysdjson;
DELIMITER //
CREATE PROCEDURE create_and_return_wildbountysdjson(p_id INT)
BEGIN
	INSERT INTO wildbountysdjson (id) VALUES (p_id);
	SELECT * FROM  wildbountysdjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_wildbountysdjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_wildbountysdjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE wildbountysdjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_wildbountysdjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_wildbountysdjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE wildbountysdjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
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

DROP TABLE IF EXISTS `wildcoasterjson`;
CREATE TABLE `wildcoasterjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":733713.72,"blab":733713.72,"blb":733714.12,"btorl":[7,6,6,10],"btrl":[7,6,6,10],"btwl":null,"btwp":null,"bwp":null,"cs":0.02,"ctw":0,"cwc":0,"es":{"1":[4,5],"2":[6,7],"3":[8,9],"4":[10,11],"5":[12,13],"6":[14,15],"7":[16,17],"8":[18,19]},"esb":{"1":[4,5],"2":[6,7],"3":[8,9],"4":[10,11],"5":[12,13],"6":[14,15],"7":[16,17],"8":[18,19]},"fb":null,"fs":null,"fstc":null,"fwc":null,"ge":[1,11],"gm":1,"gwt":-1,"hashr":"0:11;7;7;11;4;1#11;7;7;11;4;12#11;5;9;5;3;10#9;5;9;5;3;12#MV#0.40#MT#1#MG#0###6323","lw":null,"ml":1,"mr":null,"now":4096,"nowpr":[4,4,4,4,4,4],"np":-0.4,"nst":1,"ocr":null,"orl":[11,11,11,9,7,7,5,5,7,7,9,9,11,11,5,5,4,4,3,3,1,12,10,12],"pcwc":0,"pf":1,"pmt":null,"psid":"1861323860345962496","rl":[11,11,11,9,7,7,5,5,7,7,9,9,11,11,5,5,4,4,3,3,1,12,10,12],"rs":null,"rwsp":null,"sc":1,"sid":"1861323860345962496","snww":null,"ssaw":0,"st":1,"tb":0.4,"tbb":0.4,"ttorl":[12,4,10,2],"ttrl":[12,4,10,2],"ttwl":null,"ttwp":null,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_wildcoasterjson;
DELIMITER //
CREATE PROCEDURE create_and_return_wildcoasterjson(p_id INT)
BEGIN
	INSERT INTO wildcoasterjson (id) VALUES (p_id);
	SELECT * FROM  wildcoasterjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP TABLE IF EXISTS `wildcoasterjson`;
CREATE TABLE `wildcoasterjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":733713.72,"blab":733713.72,"blb":733714.12,"btorl":[7,6,6,10],"btrl":[7,6,6,10],"btwl":null,"btwp":null,"bwp":null,"cs":0.02,"ctw":0,"cwc":0,"es":{"1":[4,5],"2":[6,7],"3":[8,9],"4":[10,11],"5":[12,13],"6":[14,15],"7":[16,17],"8":[18,19]},"esb":{"1":[4,5],"2":[6,7],"3":[8,9],"4":[10,11],"5":[12,13],"6":[14,15],"7":[16,17],"8":[18,19]},"fb":null,"fs":null,"fstc":null,"fwc":null,"ge":[1,11],"gm":1,"gwt":-1,"hashr":"0:11;7;7;11;4;1#11;7;7;11;4;12#11;5;9;5;3;10#9;5;9;5;3;12#MV#0.40#MT#1#MG#0###6323","lw":null,"ml":1,"mr":null,"now":4096,"nowpr":[4,4,4,4,4,4],"np":-0.4,"nst":1,"ocr":null,"orl":[11,11,11,9,7,7,5,5,7,7,9,9,11,11,5,5,4,4,3,3,1,12,10,12],"pcwc":0,"pf":1,"pmt":null,"psid":"1861323860345962496","rl":[11,11,11,9,7,7,5,5,7,7,9,9,11,11,5,5,4,4,3,3,1,12,10,12],"rs":null,"rwsp":null,"sc":1,"sid":"1861323860345962496","snww":null,"ssaw":0,"st":1,"tb":0.4,"tbb":0.4,"ttorl":[12,4,10,2],"ttrl":[12,4,10,2],"ttwl":null,"ttwp":null,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_wildcoasterjson;
DELIMITER //
CREATE PROCEDURE create_and_return_wildcoasterjson(p_id INT)
BEGIN
	INSERT INTO wildcoasterjson (id) VALUES (p_id);
	SELECT * FROM  wildcoasterjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP TABLE IF EXISTS `wildcoasterjson`;
CREATE TABLE `wildcoasterjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":733713.72,"blab":733713.72,"blb":733714.12,"btorl":[7,6,6,10],"btrl":[7,6,6,10],"btwl":null,"btwp":null,"bwp":null,"cs":0.02,"ctw":0,"cwc":0,"es":{"1":[4,5],"2":[6,7],"3":[8,9],"4":[10,11],"5":[12,13],"6":[14,15],"7":[16,17],"8":[18,19]},"esb":{"1":[4,5],"2":[6,7],"3":[8,9],"4":[10,11],"5":[12,13],"6":[14,15],"7":[16,17],"8":[18,19]},"fb":null,"fs":null,"fstc":null,"fwc":null,"ge":[1,11],"gm":1,"gwt":-1,"hashr":"0:11;7;7;11;4;1#11;7;7;11;4;12#11;5;9;5;3;10#9;5;9;5;3;12#MV#0.40#MT#1#MG#0###6323","lw":null,"ml":1,"mr":null,"now":4096,"nowpr":[4,4,4,4,4,4],"np":-0.4,"nst":1,"ocr":null,"orl":[11,11,11,9,7,7,5,5,7,7,9,9,11,11,5,5,4,4,3,3,1,12,10,12],"pcwc":0,"pf":1,"pmt":null,"psid":"1861323860345962496","rl":[11,11,11,9,7,7,5,5,7,7,9,9,11,11,5,5,4,4,3,3,1,12,10,12],"rs":null,"rwsp":null,"sc":1,"sid":"1861323860345962496","snww":null,"ssaw":0,"st":1,"tb":0.4,"tbb":0.4,"ttorl":[12,4,10,2],"ttrl":[12,4,10,2],"ttwl":null,"ttwp":null,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_wildcoasterjson;
DELIMITER //
CREATE PROCEDURE create_and_return_wildcoasterjson(p_id INT)
BEGIN
	INSERT INTO wildcoasterjson (id) VALUES (p_id);
	SELECT * FROM  wildcoasterjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP TABLE IF EXISTS `hawaiiantikijson`;
CREATE TABLE `hawaiiantikijson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":3760,"bl":1076143.73,"blab":1072383.73,"blb":1072383.73,"cs":1,"ctw":0,"cwc":0,"ewl":[3,4],"ewp":[[7,8,9],[12,13,14,15]],"ewpb":[[7,8,9],[12,13,14,15]],"fb":null,"fs":null,"fstc":{"4":3},"ge":[1,11],"gm":1,"gmi":3,"gmib":3,"gwt":-1,"hashr":"3:9;11;0;0;9;10#8;12;0;0;3;8#3;2;0;0;8;6#12;11;0;10#8;5#MV#0#MT#1#MG#0###8466","lw":null,"ml":10,"mr":null,"np":0,"nst":1,"ocr":null,"oew":[0,12],"orl":[9,8,3,11,12,2,12,0,0,0,11,8,0,0,0,0,5,9,3,8,10,10,8,6],"otw":0,"pcwc":0,"pf":1,"pmt":null,"psid":"1861377319904604160","ptbr":null,"rl":[9,8,3,11,12,2,12,0,0,0,11,8,0,0,0,0,5,9,3,8,10,10,8,6],"rs":{"rns":[[9],[11],[11],null,[9],null]},"rwsp":null,"sc":0,"sid":"1861377345309503488","snw":null,"ssaw":3760,"st":4,"tb":200,"tbb":200,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_hawaiiantikijson;
DELIMITER //
CREATE PROCEDURE create_and_return_hawaiiantikijson(p_id INT)
BEGIN
	INSERT INTO hawaiiantikijson (id) VALUES (p_id);
	SELECT * FROM  hawaiiantikijson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP TABLE IF EXISTS `legendperseusjson`;
CREATE TABLE `legendperseusjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":962733.72,"blab":962733.72,"blb":962933.72,"bwp":null,"cs":1,"ctw":0,"cwc":0,"es":{"1":[15,16,20,21]},"esb":{"1":[15,16,20,21]},"esm":{"1":4},"esmb":{"1":4},"fb":null,"fs":null,"fstc":null,"ge":[1,11],"gm":1,"gwt":-1,"hashr":"0:7;6;5;8;8;3#4;6;12;8;8;3#4;12;7;6;0;3#4;12;7;6;9;5#11;12;12;6;11;5#MV#0.40#MT#1#MG#0###9683","lw":null,"ml":10,"mr":null,"now":10000,"nowpr":[5,5,5,4,4,5],"np":-0.4,"nst":1,"ocr":null,"orl":null,"pcwc":0,"pf":1,"pmt":null,"psid":"1861350830811205632","rl":[7,4,4,4,11,6,6,12,12,12,5,12,7,7,12,8,8,6,6,6,8,8,0,9,11,3,3,3,5,5],"rs":null,"rwsp":null,"sc":0,"sid":"1861350830811205632","snww":null,"ssaw":0,"st":1,"tb":200,"tbb":200,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_legendperseusjson;
DELIMITER //
CREATE PROCEDURE create_and_return_legendperseusjson(p_id INT)
BEGIN
	INSERT INTO legendperseusjson (id) VALUES (p_id);
	SELECT * FROM  legendperseusjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP TABLE IF EXISTS `hawaiiantikijson`;
CREATE TABLE `hawaiiantikijson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":3760,"bl":1076143.73,"blab":1072383.73,"blb":1072383.73,"cs":1,"ctw":0,"cwc":0,"ewl":[3,4],"ewp":[[7,8,9],[12,13,14,15]],"ewpb":[[7,8,9],[12,13,14,15]],"fb":null,"fs":null,"fstc":{"4":3},"ge":[1,11],"gm":1,"gmi":3,"gmib":3,"gwt":-1,"hashr":"3:9;11;0;0;9;10#8;12;0;0;3;8#3;2;0;0;8;6#12;11;0;10#8;5#MV#0#MT#1#MG#0###8466","lw":null,"ml":10,"mr":null,"np":0,"nst":1,"ocr":null,"oew":[0,12],"orl":[9,8,3,11,12,2,12,0,0,0,11,8,0,0,0,0,5,9,3,8,10,10,8,6],"otw":0,"pcwc":0,"pf":1,"pmt":null,"psid":"1861377319904604160","ptbr":null,"rl":[9,8,3,11,12,2,12,0,0,0,11,8,0,0,0,0,5,9,3,8,10,10,8,6],"rs":{"rns":[[9],[11],[11],null,[9],null]},"rwsp":null,"sc":0,"sid":"1861377345309503488","snw":null,"ssaw":3760,"st":4,"tb":200,"tbb":200,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_hawaiiantikijson;
DELIMITER //
CREATE PROCEDURE create_and_return_hawaiiantikijson(p_id INT)
BEGIN
	INSERT INTO hawaiiantikijson (id) VALUES (p_id);
	SELECT * FROM  hawaiiantikijson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP TABLE IF EXISTS `mafiamayhemjson`;
CREATE TABLE `mafiamayhemjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":1700,"bl":1246393.73,"blab":1244693.73,"blb":1244693.73,"cc":true,"cgsp":null,"crtw":0,"cs":1,"ctw":1360,"cwc":3,"fb":null,"fs":null,"fstc":{"4":2},"ge":[3,11],"gm":5,"gsp":[18,21],"gswp":null,"gwt":1,"hashr":"2:10;11;8;5;0;10#8;5;10;10;4;11#12;7;13;0;12;3#2;11;3;12#MV#0#MT#1#MG#2.72###3480","imw":false,"lw":null,"ml":10,"mp":{"8":5},"mr":null,"ngsp":[18],"now":2304,"nowpr":[3,3,4,4,4,4],"np":2.72,"nst":1,"ocr":null,"orl":[10,8,12,11,5,7,8,10,0,2,5,10,0,11,0,4,12,3,10,11,3,12],"pcwc":0,"pf":1,"pgm":0,"pmt":null,"psid":"1861394990570299392","ptbr":null,"rl":[10,8,12,11,5,7,8,10,13,2,5,10,0,11,0,4,12,3,10,11,3,12],"rns":[[10],[11],[],[],[4],[10]],"rnsp":[[0],[3],[],[],[15],[18]],"rwsp":null,"sc":0,"sid":"1861395007754362880","snww":null,"ssaw":1700,"st":4,"swp":[8,12,14],"tb":200,"tbb":200,"tw":1360,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_mafiamayhemjson;
DELIMITER //
CREATE PROCEDURE create_and_return_mafiamayhemjson(p_id INT)
BEGIN
	INSERT INTO mafiamayhemjson (id) VALUES (p_id);
	SELECT * FROM  mafiamayhemjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP TABLE IF EXISTS `gladigloryjson`;
CREATE TABLE `gladigloryjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"actw":0.6,"aw":0.6,"bl":1246734.18,"blab":1246733.58,"blb":1246733.58,"crtw":0,"cs":0.02,"ctw":0,"cwc":1,"cwsp":{},"fb":null,"fs":null,"fstc":{"4":1},"ge":[1,11],"gm":5,"gwt":-1,"hashr":"1:6;4;5;10;11#5;11;5;2;2#9;8;8;3;4#2;5;8#20#MV#0#MT#1#MG#0.60###4715","imw":false,"lw":null,"ml":1,"mr":null,"np":0.6,"nst":1,"ocr":null,"orl":[6,5,9,4,11,8,2,5,5,8,5,20,10,2,3,8,11,2,4],"pcwc":0,"pf":1,"pmt":null,"psid":"1861418903496978432","ptbr":null,"rl":[6,5,9,4,11,8,2,5,5,8,5,20,10,2,3,8,11,2,4],"rns":{"0":[6,5],"1":[4,11]},"rwsp":null,"sc":0,"sid":"1861418909683576832","snww":null,"st":4,"tb":0.4,"tbb":0.4,"tw":0.6,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wm":{"11":5},"wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_gladigloryjson;
DELIMITER //
CREATE PROCEDURE create_and_return_gladigloryjson(p_id INT)
BEGIN
	INSERT INTO gladigloryjson (id) VALUES (p_id);
	SELECT * FROM  gladigloryjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `pinatawinsjson`;
CREATE TABLE `pinatawinsjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0.04,"bl":1246402.26,"blab":1246402.22,"blb":1246402.22,"cgm":0,"cgsp":[[6,7]],"crtw":0,"cs":0.02,"ctw":0,"cwc":1,"fb":null,"fs":null,"fstc":{"4":1},"ge":[1,11],"gm":1,"gsp":[7,4,8],"gwt":-1,"hashr":"1:7;5;7;8;6#8;7;6;4;3#8;6;9;1;2#7;5;5;7;4#MV#0#MT#1#MG#0.04###5582","imw":false,"ir":false,"lw":null,"mf":{"4":0,"7":0,"8":0},"ml":1,"mr":null,"ngsp":[4,8],"np":0.04,"nst":1,"ocr":null,"orl":[7,8,8,7,5,7,6,5,7,6,9,5,8,4,1,7,6,3,2,4],"pcwc":0,"pf":1,"pgm":1,"pmt":null,"psid":"1861403832750391296","ptr":null,"rl":[7,8,8,7,5,7,6,5,7,6,9,5,8,4,1,7,6,3,2,4],"rns":[[7],[5],[7],[],[]],"rwsp":null,"sc":1,"sid":"1861403841063501824","ssaw":0.04,"st":4,"tb":0.4,"tbb":0.4,"tw":0.04,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wsp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_pinatawinsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_pinatawinsjson(p_id INT)
BEGIN
	INSERT INTO pinatawinsjson (id) VALUES (p_id);
	SELECT * FROM  pinatawinsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP TABLE IF EXISTS `safariwildsjson`;
CREATE TABLE `safariwildsjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":1246981,"blab":1246981,"blb":1246981.4,"bwp":null,"cs":0.02,"ctw":0,"cwc":0,"eb":{"1":{"bt":2,"fp":8,"lp":9,"ls":1},"10":{"bt":1,"fp":15,"lp":15,"ls":1},"11":{"bt":1,"fp":21,"lp":21,"ls":1},"2":{"bt":1,"fp":11,"lp":12,"ls":1},"3":{"bt":1,"fp":16,"lp":18,"ls":1},"4":{"bt":1,"fp":19,"lp":20,"ls":1},"5":{"bt":2,"fp":22,"lp":23,"ls":1},"6":{"bt":2,"fp":25,"lp":26,"ls":1},"7":{"bt":1,"fp":10,"lp":10,"ls":1},"8":{"bt":1,"fp":13,"lp":13,"ls":1},"9":{"bt":1,"fp":14,"lp":14,"ls":1}},"ebb":{"1":{"bt":2,"fp":8,"lp":9,"ls":1},"10":{"bt":1,"fp":15,"lp":15,"ls":1},"11":{"bt":1,"fp":21,"lp":21,"ls":1},"2":{"bt":1,"fp":11,"lp":12,"ls":1},"3":{"bt":1,"fp":16,"lp":18,"ls":1},"4":{"bt":1,"fp":19,"lp":20,"ls":1},"5":{"bt":2,"fp":22,"lp":23,"ls":1},"6":{"bt":2,"fp":25,"lp":26,"ls":1},"7":{"bt":1,"fp":10,"lp":10,"ls":1},"8":{"bt":1,"fp":13,"lp":13,"ls":1},"9":{"bt":1,"fp":14,"lp":14,"ls":1}},"es":{"1":[8,9],"10":[15],"11":[21],"2":[11,12],"3":[16,17,18],"4":[19,20],"5":[22,23],"6":[25,26],"7":[10],"8":[13],"9":[14]},"esb":{"1":[8,9],"10":[15],"11":[21],"2":[11,12],"3":[16,17,18],"4":[19,20],"5":[22,23],"6":[25,26],"7":[10],"8":[13],"9":[14]},"fb":null,"fs":null,"fstc":null,"ge":[1,11],"gm":1,"gwt":-1,"hashr":"0:10;8;9;6;3;5#10;8;9;6;3;1#10;8;9;6;4;5#8;5;11;5;2;8#12;5;11;5;2;7#3;12#MV#0.40#MT#1#MG#0###6987","imw":false,"lw":null,"ml":1,"mr":null,"now":4500,"nowpr":[5,4,5,3,3,5],"np":-0.4,"nst":1,"ocr":null,"ogm":1,"orl":[10,10,10,8,12,8,8,8,5,5,9,9,9,11,11,3,6,6,6,5,5,12,3,3,4,2,2,5,1,5,8,7],"pcwc":0,"pf":1,"pmt":null,"psid":"1861438749555195904","ptbr":null,"rl":[10,10,10,8,12,8,8,8,5,5,9,9,9,11,11,3,6,6,6,5,5,12,3,3,4,2,2,5,1,5,8,7],"rs":null,"rwsp":null,"sc":1,"sid":"1861438749555195904","snww":null,"ssaw":0,"st":1,"tb":0.4,"tbb":0.4,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP PROCEDURE IF EXISTS create_and_return_safariwildsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_safariwildsjson(p_id INT)
BEGIN
	INSERT INTO safariwildsjson (id) VALUES (p_id);
	SELECT * FROM  safariwildsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP TABLE IF EXISTS `fortunegodsjson`;
CREATE TABLE `fortunegodsjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":6.6,"bl":142.64,"blab":136.04,"blb":142.64,"cs":0.03,"ctw":6.6,"cwc":1,"fb":null,"fstc":null,"gameBigRuning":false,"ge":[1,11],"gwt":2,"hashr":null,"lw":{"13":3,"28":3,"4":0.6},"ml":1,"mr":null,"np":6.15,"nst":1,"ocr":null,"pcwc":1,"pf":5,"pid":"1972626156805160962","pmt":null,"psid":"1972626156805160962","rl":[3,3,3,4,3,5,1,6,3,3,3,1,5,3,3],"rn":1,"rs":null,"rwsp":{"13":100,"28":100,"4":20},"sid":"1972626156805160962","st":1,"tb":0.45,"tbb":0.45,"tw":6.6,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":{"13":[1,4,8,10,13],"28":[13,10,8,4,1],"4":[0,4,8,10]},"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_fortunegodsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_fortunegodsjson(p_id INT)
BEGIN
	INSERT INTO fortunegodsjson (id) VALUES (p_id);
	SELECT * FROM  fortunegodsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;



DROP PROCEDURE IF EXISTS create_and_return_candybonanzajson;
DELIMITER //
CREATE PROCEDURE create_and_return_candybonanzajson(p_id INT)
BEGIN
	INSERT INTO candybonanzajson (id) VALUES (p_id);
	SELECT * FROM  candybonanzajson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_wildbanditojson;
DELIMITER //
CREATE PROCEDURE create_and_return_wildbanditojson(p_id INT)
BEGIN
	INSERT INTO wildbanditojson (id) VALUES (p_id);
	SELECT * FROM  wildbanditojson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_heiststakesjson;
DELIMITER //
CREATE PROCEDURE create_and_return_heiststakesjson(p_id INT)
BEGIN
	INSERT INTO heiststakesjson (id) VALUES (p_id);
	SELECT * FROM  heiststakesjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_lgdmonkeykgjson;
DELIMITER //
CREATE PROCEDURE create_and_return_lgdmonkeykgjson(p_id INT)
BEGIN
	INSERT INTO lgdmonkeykgjson (id) VALUES (p_id);
	SELECT * FROM  lgdmonkeykgjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_buffalowinjson;
DELIMITER //
CREATE PROCEDURE create_and_return_buffalowinjson(p_id INT)
BEGIN
	INSERT INTO buffalowinjson (id) VALUES (p_id);
	SELECT * FROM  buffalowinjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_cryptfortunejson;
DELIMITER //
CREATE PROCEDURE create_and_return_cryptfortunejson(p_id INT)
BEGIN
	INSERT INTO cryptfortunejson (id) VALUES (p_id);
	SELECT * FROM  cryptfortunejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_emojirichesjson;
DELIMITER //
CREATE PROCEDURE create_and_return_emojirichesjson(p_id INT)
BEGIN
	INSERT INTO emojirichesjson (id) VALUES (p_id);
	SELECT * FROM  emojirichesjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_sprmktspreejson;
DELIMITER //
CREATE PROCEDURE create_and_return_sprmktspreejson(p_id INT)
BEGIN
	INSERT INTO sprmktspreejson (id) VALUES (p_id);
	SELECT * FROM  sprmktspreejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_spiritwonderjson;
DELIMITER //
CREATE PROCEDURE create_and_return_spiritwonderjson(p_id INT)
BEGIN
	INSERT INTO spiritwonderjson (id) VALUES (p_id);
	SELECT * FROM  spiritwonderjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_destsunmoonjson;
DELIMITER //
CREATE PROCEDURE create_and_return_destsunmoonjson(p_id INT)
BEGIN
	INSERT INTO destsunmoonjson (id) VALUES (p_id);
	SELECT * FROM  destsunmoonjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_garudagemsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_garudagemsjson(p_id INT)
BEGIN
	INSERT INTO garudagemsjson (id) VALUES (p_id);
	SELECT * FROM  garudagemsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_roosterrbljson;
DELIMITER //
CREATE PROCEDURE create_and_return_roosterrbljson(p_id INT)
BEGIN
	INSERT INTO roosterrbljson (id) VALUES (p_id);
	SELECT * FROM  roosterrbljson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_battlegroundjson;
DELIMITER //
CREATE PROCEDURE create_and_return_battlegroundjson(p_id INT)
BEGIN
	INSERT INTO battlegroundjson (id) VALUES (p_id);
	SELECT * FROM  battlegroundjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_btrflyblossomjson;
DELIMITER //
CREATE PROCEDURE create_and_return_btrflyblossomjson(p_id INT)
BEGIN
	INSERT INTO btrflyblossomjson (id) VALUES (p_id);
	SELECT * FROM  btrflyblossomjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_fortunetigerjson;
DELIMITER //
CREATE PROCEDURE create_and_return_fortunetigerjson(p_id INT)
BEGIN
	INSERT INTO fortunetigerjson (id) VALUES (p_id);
	SELECT * FROM  fortunetigerjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_prosperftreejson;
DELIMITER //
CREATE PROCEDURE create_and_return_prosperftreejson(p_id INT)
BEGIN
	INSERT INTO prosperftreejson (id) VALUES (p_id);
	SELECT * FROM  prosperftreejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_asgardianrsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_asgardianrsjson(p_id INT)
BEGIN
	INSERT INTO asgardianrsjson (id) VALUES (p_id);
	SELECT * FROM  asgardianrsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_alchemygoldjson;
DELIMITER //
CREATE PROCEDURE create_and_return_alchemygoldjson(p_id INT)
BEGIN
	INSERT INTO alchemygoldjson (id) VALUES (p_id);
	SELECT * FROM  alchemygoldjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_dinerdelightsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_dinerdelightsjson(p_id INT)
BEGIN
	INSERT INTO dinerdelightsjson (id) VALUES (p_id);
	SELECT * FROM  dinerdelightsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_midasfortunejson;
DELIMITER //
CREATE PROCEDURE create_and_return_midasfortunejson(p_id INT)
BEGIN
	INSERT INTO midasfortunejson (id) VALUES (p_id);
	SELECT * FROM  midasfortunejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_bakerybonanzajson;
DELIMITER //
CREATE PROCEDURE create_and_return_bakerybonanzajson(p_id INT)
BEGIN
	INSERT INTO bakerybonanzajson (id) VALUES (p_id);
	SELECT * FROM  bakerybonanzajson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_songkranspljson;
DELIMITER //
CREATE PROCEDURE create_and_return_songkranspljson(p_id INT)
BEGIN
	INSERT INTO songkranspljson (id) VALUES (p_id);
	SELECT * FROM  songkranspljson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_dragonhatch2json;
DELIMITER //
CREATE PROCEDURE create_and_return_dragonhatch2json(p_id INT)
BEGIN
	INSERT INTO dragonhatch2json (id) VALUES (p_id);
	SELECT * FROM  dragonhatch2json WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_wildape3258json;
DELIMITER //
CREATE PROCEDURE create_and_return_wildape3258json(p_id INT)
BEGIN
	INSERT INTO wildape3258json (id) VALUES (p_id);
	SELECT * FROM  wildape3258json WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_sprgolfdrivejson;
DELIMITER //
CREATE PROCEDURE create_and_return_sprgolfdrivejson(p_id INT)
BEGIN
	INSERT INTO sprgolfdrivejson (id) VALUES (p_id);
	SELECT * FROM  sprgolfdrivejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_fortunerabbitjson;
DELIMITER //
CREATE PROCEDURE create_and_return_fortunerabbitjson(p_id INT)
BEGIN
	INSERT INTO fortunerabbitjson (id) VALUES (p_id);
	SELECT * FROM  fortunerabbitjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_cruiseroyalejson;
DELIMITER //
CREATE PROCEDURE create_and_return_cruiseroyalejson(p_id INT)
BEGIN
	INSERT INTO cruiseroyalejson (id) VALUES (p_id);
	SELECT * FROM  cruiseroyalejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_cashmaniajson;
DELIMITER //
CREATE PROCEDURE create_and_return_cashmaniajson(p_id INT)
BEGIN
	INSERT INTO cashmaniajson (id) VALUES (p_id);
	SELECT * FROM  cashmaniajson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_fortunedragonjson;
DELIMITER //
CREATE PROCEDURE create_and_return_fortunedragonjson(p_id INT)
BEGIN
	INSERT INTO fortunedragonjson (id) VALUES (p_id);
	SELECT * FROM  fortunedragonjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_piggygoldjson;
DELIMITER //
CREATE PROCEDURE create_and_return_piggygoldjson(p_id INT)
BEGIN
	INSERT INTO piggygoldjson (id) VALUES (p_id);
	SELECT * FROM  piggygoldjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_jungledelightjson;
DELIMITER //
CREATE PROCEDURE create_and_return_jungledelightjson(p_id INT)
BEGIN
	INSERT INTO jungledelightjson (id) VALUES (p_id);
	SELECT * FROM  jungledelightjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_ganeshagoldjson;
DELIMITER //
CREATE PROCEDURE create_and_return_ganeshagoldjson(p_id INT)
BEGIN
	INSERT INTO ganeshagoldjson (id) VALUES (p_id);
	SELECT * FROM  ganeshagoldjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_doublefortunejson;
DELIMITER //
CREATE PROCEDURE create_and_return_doublefortunejson(p_id INT)
BEGIN
	INSERT INTO doublefortunejson (id) VALUES (p_id);
	SELECT * FROM  doublefortunejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_thegreaticescapejson;
DELIMITER //
CREATE PROCEDURE create_and_return_thegreaticescapejson(p_id INT)
BEGIN
	INSERT INTO thegreaticescapejson (id) VALUES (p_id);
	SELECT * FROM  thegreaticescapejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_captainsbountyjson;
DELIMITER //
CREATE PROCEDURE create_and_return_captainsbountyjson(p_id INT)
BEGIN
	INSERT INTO captainsbountyjson (id) VALUES (p_id);
	SELECT * FROM  captainsbountyjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_dragonhatchjson;
DELIMITER //
CREATE PROCEDURE create_and_return_dragonhatchjson(p_id INT)
BEGIN
	INSERT INTO dragonhatchjson (id) VALUES (p_id);
	SELECT * FROM  dragonhatchjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_vampirescharmjson;
DELIMITER //
CREATE PROCEDURE create_and_return_vampirescharmjson(p_id INT)
BEGIN
	INSERT INTO vampirescharmjson (id) VALUES (p_id);
	SELECT * FROM  vampirescharmjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_leprechaunrichesjson;
DELIMITER //
CREATE PROCEDURE create_and_return_leprechaunrichesjson(p_id INT)
BEGIN
	INSERT INTO leprechaunrichesjson (id) VALUES (p_id);
	SELECT * FROM  leprechaunrichesjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_gemsaviourconquestjson;
DELIMITER //
CREATE PROCEDURE create_and_return_gemsaviourconquestjson(p_id INT)
BEGIN
	INSERT INTO gemsaviourconquestjson (id) VALUES (p_id);
	SELECT * FROM  gemsaviourconquestjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_mahjongwaysjson;
DELIMITER //
CREATE PROCEDURE create_and_return_mahjongwaysjson(p_id INT)
BEGIN
	INSERT INTO mahjongwaysjson (id) VALUES (p_id);
	SELECT * FROM  mahjongwaysjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_fortunemousejson;
DELIMITER //
CREATE PROCEDURE create_and_return_fortunemousejson(p_id INT)
BEGIN
	INSERT INTO fortunemousejson (id) VALUES (p_id);
	SELECT * FROM  fortunemousejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_bikiniparadisejson;
DELIMITER //
CREATE PROCEDURE create_and_return_bikiniparadisejson(p_id INT)
BEGIN
	INSERT INTO bikiniparadisejson (id) VALUES (p_id);
	SELECT * FROM  bikiniparadisejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_candyburstjson;
DELIMITER //
CREATE PROCEDURE create_and_return_candyburstjson(p_id INT)
BEGIN
	INSERT INTO candyburstjson (id) VALUES (p_id);
	SELECT * FROM  candyburstjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_mahjongways2json;
DELIMITER //
CREATE PROCEDURE create_and_return_mahjongways2json(p_id INT)
BEGIN
	INSERT INTO mahjongways2json (id) VALUES (p_id);
	SELECT * FROM  mahjongways2json WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_ganeshafortunejson;
DELIMITER //
CREATE PROCEDURE create_and_return_ganeshafortunejson(p_id INT)
BEGIN
	INSERT INTO ganeshafortunejson (id) VALUES (p_id);
	SELECT * FROM  ganeshafortunejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_phoenixrisesjson;
DELIMITER //
CREATE PROCEDURE create_and_return_phoenixrisesjson(p_id INT)
BEGIN
	INSERT INTO phoenixrisesjson (id) VALUES (p_id);
	SELECT * FROM  phoenixrisesjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_wildfireworksjson;
DELIMITER //
CREATE PROCEDURE create_and_return_wildfireworksjson(p_id INT)
BEGIN
	INSERT INTO wildfireworksjson (id) VALUES (p_id);
	SELECT * FROM  wildfireworksjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_galacticgemsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_galacticgemsjson(p_id INT)
BEGIN
	INSERT INTO galacticgemsjson (id) VALUES (p_id);
	SELECT * FROM  galacticgemsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_treasuresaztecjson;
DELIMITER //
CREATE PROCEDURE create_and_return_treasuresaztecjson(p_id INT)
BEGIN
	INSERT INTO treasuresaztecjson (id) VALUES (p_id);
	SELECT * FROM  treasuresaztecjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_jewelsprosperjson;
DELIMITER //
CREATE PROCEDURE create_and_return_jewelsprosperjson(p_id INT)
BEGIN
	INSERT INTO jewelsprosperjson (id) VALUES (p_id);
	SELECT * FROM  jewelsprosperjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_gdnicefirejson;
DELIMITER //
CREATE PROCEDURE create_and_return_gdnicefirejson(p_id INT)
BEGIN
	INSERT INTO gdnicefirejson (id) VALUES (p_id);
	SELECT * FROM  gdnicefirejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_balivacationjson;
DELIMITER //
CREATE PROCEDURE create_and_return_balivacationjson(p_id INT)
BEGIN
	INSERT INTO balivacationjson (id) VALUES (p_id);
	SELECT * FROM  balivacationjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_majestictsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_majestictsjson(p_id INT)
BEGIN
	INSERT INTO majestictsjson (id) VALUES (p_id);
	SELECT * FROM  majestictsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_jackfrostsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_jackfrostsjson(p_id INT)
BEGIN
	INSERT INTO jackfrostsjson (id) VALUES (p_id);
	SELECT * FROM  jackfrostsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_fortuneoxjson;
DELIMITER //
CREATE PROCEDURE create_and_return_fortuneoxjson(p_id INT)
BEGIN
	INSERT INTO fortuneoxjson (id) VALUES (p_id);
	SELECT * FROM  fortuneoxjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_zombieoutbrkjson;
DELIMITER //
CREATE PROCEDURE create_and_return_zombieoutbrkjson(p_id INT)
BEGIN
	INSERT INTO zombieoutbrkjson (id) VALUES (p_id);
	SELECT * FROM  zombieoutbrkjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_anubiswrathjson;
DELIMITER //
CREATE PROCEDURE create_and_return_anubiswrathjson(p_id INT)
BEGIN
	INSERT INTO anubiswrathjson (id) VALUES (p_id);
	SELECT * FROM  anubiswrathjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_wildbountysdjson;
DELIMITER //
CREATE PROCEDURE create_and_return_wildbountysdjson(p_id INT)
BEGIN
	INSERT INTO wildbountysdjson (id) VALUES (p_id);
	SELECT * FROM  wildbountysdjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `speedwinnerjson`;
CREATE TABLE `speedwinnerjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"acw":0,"aw":0,"bl":948617.93,"blab":948617.93,"blb":948817.93,"bwp":null,"cs":1,"ctw":0,"cwc":0,"eb":{"1":{"bt":2,"fp":5,"lp":7,"ls":1},"2":{"bt":2,"fp":8,"lp":9,"ls":1},"3":{"bt":2,"fp":11,"lp":13,"ls":1},"4":{"bt":2,"fp":15,"lp":16,"ls":1},"5":{"bt":2,"fp":17,"lp":18,"ls":1}},"ebb":{"1":{"bt":2,"fp":5,"lp":7,"ls":1},"2":{"bt":2,"fp":8,"lp":9,"ls":1},"3":{"bt":2,"fp":11,"lp":13,"ls":1},"4":{"bt":2,"fp":15,"lp":16,"ls":1},"5":{"bt":2,"fp":17,"lp":18,"ls":1}},"es":{"1":[5,6,7],"2":[8,9],"3":[11,12,13],"4":[15,16],"5":[17,18]},"esb":{"1":[5,6,7],"2":[8,9],"3":[11,12,13],"4":[15,16],"5":[17,18]},"fb":null,"fs":null,"fstc":null,"ge":[1,11],"gwt":-1,"hashr":"0:11;10;9;5;9;6#11;10;3;5;11;6#11;10;3;6;11;8#9;6;3;6;5;6#9;6;7;10;11;6#MV#0.40#MT#1#MG#0###74","lw":null,"md":null,"ml":10,"mr":null,"now":7200,"nowpr":[5,3,4,4,6,5],"np":-0.4,"nst":1,"ocr":null,"orl":[11,11,11,9,9,10,10,10,6,6,9,3,3,3,7,5,5,6,6,10,9,11,11,5,11,6,6,8,6,6],"pcwc":0,"pf":1,"pmt":null,"psid":"1861722799008145408","ptbr":null,"rl":[11,11,11,9,9,10,10,10,6,6,9,3,3,3,7,5,5,6,6,10,9,11,11,5,11,6,6,8,6,6],"rs":null,"rwsp":null,"sc":0,"sid":"1861722799008145408","snww":null,"st":1,"tb":200,"tbb":200,"tgm":0,"tmd":null,"torl":null,"tptbr":null,"trl":[7,7,10,9],"tw":0,"twp":null,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_speedwinnerjson;
DELIMITER //
CREATE PROCEDURE create_and_return_speedwinnerjson(p_id INT)
BEGIN
	INSERT INTO speedwinnerjson (id) VALUES (p_id);
	SELECT * FROM  speedwinnerjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_wildcoasterjson;
DELIMITER //
CREATE PROCEDURE create_and_return_wildcoasterjson(p_id INT)
BEGIN
	INSERT INTO wildcoasterjson (id) VALUES (p_id);
	SELECT * FROM  wildcoasterjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_legendperseusjson;
DELIMITER //
CREATE PROCEDURE create_and_return_legendperseusjson(p_id INT)
BEGIN
	INSERT INTO legendperseusjson (id) VALUES (p_id);
	SELECT * FROM  legendperseusjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_hawaiiantikijson;
DELIMITER //
CREATE PROCEDURE create_and_return_hawaiiantikijson(p_id INT)
BEGIN
	INSERT INTO hawaiiantikijson (id) VALUES (p_id);
	SELECT * FROM  hawaiiantikijson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_mafiamayhemjson;
DELIMITER //
CREATE PROCEDURE create_and_return_mafiamayhemjson(p_id INT)
BEGIN
	INSERT INTO mafiamayhemjson (id) VALUES (p_id);
	SELECT * FROM  mafiamayhemjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_gladigloryjson;
DELIMITER //
CREATE PROCEDURE create_and_return_gladigloryjson(p_id INT)
BEGIN
	INSERT INTO gladigloryjson (id) VALUES (p_id);
	SELECT * FROM  gladigloryjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_pinatawinsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_pinatawinsjson(p_id INT)
BEGIN
	INSERT INTO pinatawinsjson (id) VALUES (p_id);
	SELECT * FROM  pinatawinsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_fortunegodsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_fortunegodsjson(p_id INT)
BEGIN
	INSERT INTO fortunegodsjson (id) VALUES (p_id);
	SELECT * FROM  fortunegodsjson WHERE id = p_id LIMIT 1;
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


DROP TABLE IF EXISTS `legendofhouyijson`;
CREATE TABLE `legendofhouyijson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":2.08,"bl":1424.6,"blab":1424.6,"blb":1424.6,"cs":0.01,"ctw":0,"cwc":0,"fb":null,"fs":{"aw":1.78,"fsm":{"cmv":9,"nmv":10},"s":1,"ts":10,"twbm":0},"fstc":{"2":9},"gameBigRuning":true,"ge":[2,11],"gwt":-1,"hashr":null,"lw":null,"ml":1,"mr":null,"np":0,"nst":2,"ocr":null,"orl":null,"pcwc":0,"pf":5,"pid":"1972691935365955584","pmt":null,"pow":null,"psid":"1972691935365955584","rl":[8,7,5,6,10,4,3,7,10,8,10,3,2,9,7],"rwsp":null,"sc":0,"shd":{"12":false},"sid":"1972691935378538496","sp":null,"st":2,"tb":0,"tbb":0.3,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_legendofhouyijson;
DELIMITER //
CREATE PROCEDURE create_and_return_legendofhouyijson(p_id INT)
BEGIN
	INSERT INTO legendofhouyijson (id) VALUES (p_id);
	SELECT * FROM  legendofhouyijson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS create_and_return_candybonanzajson;
DELIMITER //
CREATE PROCEDURE create_and_return_candybonanzajson(p_id INT)
BEGIN
	INSERT INTO candybonanzajson (id) VALUES (p_id);
	SELECT * FROM  candybonanzajson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_candybonanzajson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_candybonanzajson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE candybonanzajson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_candybonanzajson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_candybonanzajson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE candybonanzajson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_wildbanditojson;
DELIMITER //
CREATE PROCEDURE create_and_return_wildbanditojson(p_id INT)
BEGIN
	INSERT INTO wildbanditojson (id) VALUES (p_id);
	SELECT * FROM  wildbanditojson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_wildbanditojson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_wildbanditojson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE wildbanditojson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_wildbanditojson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_wildbanditojson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE wildbanditojson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_heiststakesjson;
DELIMITER //
CREATE PROCEDURE create_and_return_heiststakesjson(p_id INT)
BEGIN
	INSERT INTO heiststakesjson (id) VALUES (p_id);
	SELECT * FROM  heiststakesjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_heiststakesjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_heiststakesjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE heiststakesjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_heiststakesjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_heiststakesjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE heiststakesjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_lgdmonkeykgjson;
DELIMITER //
CREATE PROCEDURE create_and_return_lgdmonkeykgjson(p_id INT)
BEGIN
	INSERT INTO lgdmonkeykgjson (id) VALUES (p_id);
	SELECT * FROM  lgdmonkeykgjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_lgdmonkeykgjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_lgdmonkeykgjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE lgdmonkeykgjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_lgdmonkeykgjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_lgdmonkeykgjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE lgdmonkeykgjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_buffalowinjson;
DELIMITER //
CREATE PROCEDURE create_and_return_buffalowinjson(p_id INT)
BEGIN
	INSERT INTO buffalowinjson (id) VALUES (p_id);
	SELECT * FROM  buffalowinjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_buffalowinjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_buffalowinjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE buffalowinjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_buffalowinjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_buffalowinjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE buffalowinjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_cryptfortunejson;
DELIMITER //
CREATE PROCEDURE create_and_return_cryptfortunejson(p_id INT)
BEGIN
	INSERT INTO cryptfortunejson (id) VALUES (p_id);
	SELECT * FROM  cryptfortunejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_cryptfortunejson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_cryptfortunejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE cryptfortunejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_cryptfortunejson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_cryptfortunejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE cryptfortunejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_emojirichesjson;
DELIMITER //
CREATE PROCEDURE create_and_return_emojirichesjson(p_id INT)
BEGIN
	INSERT INTO emojirichesjson (id) VALUES (p_id);
	SELECT * FROM  emojirichesjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_emojirichesjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_emojirichesjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE emojirichesjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_emojirichesjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_emojirichesjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE emojirichesjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_sprmktspreejson;
DELIMITER //
CREATE PROCEDURE create_and_return_sprmktspreejson(p_id INT)
BEGIN
	INSERT INTO sprmktspreejson (id) VALUES (p_id);
	SELECT * FROM  sprmktspreejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_sprmktspreejson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_sprmktspreejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE sprmktspreejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_sprmktspreejson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_sprmktspreejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE sprmktspreejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_spiritwonderjson;
DELIMITER //
CREATE PROCEDURE create_and_return_spiritwonderjson(p_id INT)
BEGIN
	INSERT INTO spiritwonderjson (id) VALUES (p_id);
	SELECT * FROM  spiritwonderjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_spiritwonderjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_spiritwonderjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE spiritwonderjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_spiritwonderjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_spiritwonderjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE spiritwonderjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_destsunmoonjson;
DELIMITER //
CREATE PROCEDURE create_and_return_destsunmoonjson(p_id INT)
BEGIN
	INSERT INTO destsunmoonjson (id) VALUES (p_id);
	SELECT * FROM  destsunmoonjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_destsunmoonjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_destsunmoonjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE destsunmoonjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_destsunmoonjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_destsunmoonjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE destsunmoonjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_garudagemsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_garudagemsjson(p_id INT)
BEGIN
	INSERT INTO garudagemsjson (id) VALUES (p_id);
	SELECT * FROM  garudagemsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_garudagemsjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_garudagemsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE garudagemsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_garudagemsjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_garudagemsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE garudagemsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_roosterrbljson;
DELIMITER //
CREATE PROCEDURE create_and_return_roosterrbljson(p_id INT)
BEGIN
	INSERT INTO roosterrbljson (id) VALUES (p_id);
	SELECT * FROM  roosterrbljson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_roosterrbljson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_roosterrbljson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE roosterrbljson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_roosterrbljson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_roosterrbljson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE roosterrbljson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_battlegroundjson;
DELIMITER //
CREATE PROCEDURE create_and_return_battlegroundjson(p_id INT)
BEGIN
	INSERT INTO battlegroundjson (id) VALUES (p_id);
	SELECT * FROM  battlegroundjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_battlegroundjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_battlegroundjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE battlegroundjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_battlegroundjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_battlegroundjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE battlegroundjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_btrflyblossomjson;
DELIMITER //
CREATE PROCEDURE create_and_return_btrflyblossomjson(p_id INT)
BEGIN
	INSERT INTO btrflyblossomjson (id) VALUES (p_id);
	SELECT * FROM  btrflyblossomjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_btrflyblossomjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_btrflyblossomjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE btrflyblossomjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_btrflyblossomjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_btrflyblossomjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE btrflyblossomjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_fortunetigerjson;
DELIMITER //
CREATE PROCEDURE create_and_return_fortunetigerjson(p_id INT)
BEGIN
	INSERT INTO fortunetigerjson (id) VALUES (p_id);
	SELECT * FROM  fortunetigerjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_fortunetigerjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_fortunetigerjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE fortunetigerjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_fortunetigerjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_fortunetigerjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE fortunetigerjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_prosperftreejson;
DELIMITER //
CREATE PROCEDURE create_and_return_prosperftreejson(p_id INT)
BEGIN
	INSERT INTO prosperftreejson (id) VALUES (p_id);
	SELECT * FROM  prosperftreejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_prosperftreejson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_prosperftreejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE prosperftreejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_prosperftreejson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_prosperftreejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE prosperftreejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_asgardianrsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_asgardianrsjson(p_id INT)
BEGIN
	INSERT INTO asgardianrsjson (id) VALUES (p_id);
	SELECT * FROM  asgardianrsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_asgardianrsjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_asgardianrsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE asgardianrsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_asgardianrsjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_asgardianrsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE asgardianrsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_alchemygoldjson;
DELIMITER //
CREATE PROCEDURE create_and_return_alchemygoldjson(p_id INT)
BEGIN
	INSERT INTO alchemygoldjson (id) VALUES (p_id);
	SELECT * FROM  alchemygoldjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_alchemygoldjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_alchemygoldjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE alchemygoldjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_alchemygoldjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_alchemygoldjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE alchemygoldjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_dinerdelightsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_dinerdelightsjson(p_id INT)
BEGIN
	INSERT INTO dinerdelightsjson (id) VALUES (p_id);
	SELECT * FROM  dinerdelightsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_dinerdelightsjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_dinerdelightsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE dinerdelightsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_dinerdelightsjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_dinerdelightsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE dinerdelightsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_midasfortunejson;
DELIMITER //
CREATE PROCEDURE create_and_return_midasfortunejson(p_id INT)
BEGIN
	INSERT INTO midasfortunejson (id) VALUES (p_id);
	SELECT * FROM  midasfortunejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_midasfortunejson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_midasfortunejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE midasfortunejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_midasfortunejson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_midasfortunejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE midasfortunejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_bakerybonanzajson;
DELIMITER //
CREATE PROCEDURE create_and_return_bakerybonanzajson(p_id INT)
BEGIN
	INSERT INTO bakerybonanzajson (id) VALUES (p_id);
	SELECT * FROM  bakerybonanzajson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_bakerybonanzajson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_bakerybonanzajson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE bakerybonanzajson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_bakerybonanzajson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_bakerybonanzajson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE bakerybonanzajson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_songkranspljson;
DELIMITER //
CREATE PROCEDURE create_and_return_songkranspljson(p_id INT)
BEGIN
	INSERT INTO songkranspljson (id) VALUES (p_id);
	SELECT * FROM  songkranspljson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_songkranspljson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_songkranspljson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE songkranspljson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_songkranspljson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_songkranspljson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE songkranspljson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_dragonhatch2json;
DELIMITER //
CREATE PROCEDURE create_and_return_dragonhatch2json(p_id INT)
BEGIN
	INSERT INTO dragonhatch2json (id) VALUES (p_id);
	SELECT * FROM  dragonhatch2json WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_dragonhatch2json;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_dragonhatch2json(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE dragonhatch2json SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_dragonhatch2json;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_dragonhatch2json(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE dragonhatch2json SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_wildape3258json;
DELIMITER //
CREATE PROCEDURE create_and_return_wildape3258json(p_id INT)
BEGIN
	INSERT INTO wildape3258json (id) VALUES (p_id);
	SELECT * FROM  wildape3258json WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_wildape3258json;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_wildape3258json(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE wildape3258json SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_wildape3258json;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_wildape3258json(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE wildape3258json SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_sprgolfdrivejson;
DELIMITER //
CREATE PROCEDURE create_and_return_sprgolfdrivejson(p_id INT)
BEGIN
	INSERT INTO sprgolfdrivejson (id) VALUES (p_id);
	SELECT * FROM  sprgolfdrivejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_sprgolfdrivejson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_sprgolfdrivejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE sprgolfdrivejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_sprgolfdrivejson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_sprgolfdrivejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE sprgolfdrivejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_fortunerabbitjson;
DELIMITER //
CREATE PROCEDURE create_and_return_fortunerabbitjson(p_id INT)
BEGIN
	INSERT INTO fortunerabbitjson (id) VALUES (p_id);
	SELECT * FROM  fortunerabbitjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_fortunerabbitjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_fortunerabbitjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE fortunerabbitjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_fortunerabbitjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_fortunerabbitjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE fortunerabbitjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_cruiseroyalejson;
DELIMITER //
CREATE PROCEDURE create_and_return_cruiseroyalejson(p_id INT)
BEGIN
	INSERT INTO cruiseroyalejson (id) VALUES (p_id);
	SELECT * FROM  cruiseroyalejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_cruiseroyalejson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_cruiseroyalejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE cruiseroyalejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_cruiseroyalejson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_cruiseroyalejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE cruiseroyalejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_cashmaniajson;
DELIMITER //
CREATE PROCEDURE create_and_return_cashmaniajson(p_id INT)
BEGIN
	INSERT INTO cashmaniajson (id) VALUES (p_id);
	SELECT * FROM  cashmaniajson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_cashmaniajson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_cashmaniajson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE cashmaniajson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_cashmaniajson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_cashmaniajson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE cashmaniajson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_fortunedragonjson;
DELIMITER //
CREATE PROCEDURE create_and_return_fortunedragonjson(p_id INT)
BEGIN
	INSERT INTO fortunedragonjson (id) VALUES (p_id);
	SELECT * FROM  fortunedragonjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_fortunedragonjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_fortunedragonjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE fortunedragonjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_fortunedragonjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_fortunedragonjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE fortunedragonjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_piggygoldjson;
DELIMITER //
CREATE PROCEDURE create_and_return_piggygoldjson(p_id INT)
BEGIN
	INSERT INTO piggygoldjson (id) VALUES (p_id);
	SELECT * FROM  piggygoldjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_piggygoldjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_piggygoldjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE piggygoldjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_piggygoldjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_piggygoldjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE piggygoldjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_jungledelightjson;
DELIMITER //
CREATE PROCEDURE create_and_return_jungledelightjson(p_id INT)
BEGIN
	INSERT INTO jungledelightjson (id) VALUES (p_id);
	SELECT * FROM  jungledelightjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_jungledelightjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_jungledelightjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE jungledelightjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_jungledelightjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_jungledelightjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE jungledelightjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_ganeshagoldjson;
DELIMITER //
CREATE PROCEDURE create_and_return_ganeshagoldjson(p_id INT)
BEGIN
	INSERT INTO ganeshagoldjson (id) VALUES (p_id);
	SELECT * FROM  ganeshagoldjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_ganeshagoldjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_ganeshagoldjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE ganeshagoldjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_ganeshagoldjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_ganeshagoldjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE ganeshagoldjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_doublefortunejson;
DELIMITER //
CREATE PROCEDURE create_and_return_doublefortunejson(p_id INT)
BEGIN
	INSERT INTO doublefortunejson (id) VALUES (p_id);
	SELECT * FROM  doublefortunejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_doublefortunejson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_doublefortunejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE doublefortunejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_doublefortunejson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_doublefortunejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE doublefortunejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_thegreaticescapejson;
DELIMITER //
CREATE PROCEDURE create_and_return_thegreaticescapejson(p_id INT)
BEGIN
	INSERT INTO thegreaticescapejson (id) VALUES (p_id);
	SELECT * FROM  thegreaticescapejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_thegreaticescapejson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_thegreaticescapejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE thegreaticescapejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_thegreaticescapejson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_thegreaticescapejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE thegreaticescapejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_captainsbountyjson;
DELIMITER //
CREATE PROCEDURE create_and_return_captainsbountyjson(p_id INT)
BEGIN
	INSERT INTO captainsbountyjson (id) VALUES (p_id);
	SELECT * FROM  captainsbountyjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_captainsbountyjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_captainsbountyjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE captainsbountyjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_captainsbountyjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_captainsbountyjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE captainsbountyjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_dragonhatchjson;
DELIMITER //
CREATE PROCEDURE create_and_return_dragonhatchjson(p_id INT)
BEGIN
	INSERT INTO dragonhatchjson (id) VALUES (p_id);
	SELECT * FROM  dragonhatchjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_dragonhatchjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_dragonhatchjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE dragonhatchjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_dragonhatchjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_dragonhatchjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE dragonhatchjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_vampirescharmjson;
DELIMITER //
CREATE PROCEDURE create_and_return_vampirescharmjson(p_id INT)
BEGIN
	INSERT INTO vampirescharmjson (id) VALUES (p_id);
	SELECT * FROM  vampirescharmjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_vampirescharmjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_vampirescharmjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE vampirescharmjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_vampirescharmjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_vampirescharmjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE vampirescharmjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_leprechaunrichesjson;
DELIMITER //
CREATE PROCEDURE create_and_return_leprechaunrichesjson(p_id INT)
BEGIN
	INSERT INTO leprechaunrichesjson (id) VALUES (p_id);
	SELECT * FROM  leprechaunrichesjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_leprechaunrichesjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_leprechaunrichesjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE leprechaunrichesjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_leprechaunrichesjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_leprechaunrichesjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE leprechaunrichesjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_gemsaviourconquestjson;
DELIMITER //
CREATE PROCEDURE create_and_return_gemsaviourconquestjson(p_id INT)
BEGIN
	INSERT INTO gemsaviourconquestjson (id) VALUES (p_id);
	SELECT * FROM  gemsaviourconquestjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_gemsaviourconquestjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_gemsaviourconquestjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE gemsaviourconquestjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_gemsaviourconquestjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_gemsaviourconquestjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE gemsaviourconquestjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_mahjongwaysjson;
DELIMITER //
CREATE PROCEDURE create_and_return_mahjongwaysjson(p_id INT)
BEGIN
	INSERT INTO mahjongwaysjson (id) VALUES (p_id);
	SELECT * FROM  mahjongwaysjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_mahjongwaysjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_mahjongwaysjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE mahjongwaysjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_mahjongwaysjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_mahjongwaysjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE mahjongwaysjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_fortunemousejson;
DELIMITER //
CREATE PROCEDURE create_and_return_fortunemousejson(p_id INT)
BEGIN
	INSERT INTO fortunemousejson (id) VALUES (p_id);
	SELECT * FROM  fortunemousejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_fortunemousejson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_fortunemousejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE fortunemousejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_fortunemousejson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_fortunemousejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE fortunemousejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_bikiniparadisejson;
DELIMITER //
CREATE PROCEDURE create_and_return_bikiniparadisejson(p_id INT)
BEGIN
	INSERT INTO bikiniparadisejson (id) VALUES (p_id);
	SELECT * FROM  bikiniparadisejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_bikiniparadisejson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_bikiniparadisejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE bikiniparadisejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_bikiniparadisejson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_bikiniparadisejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE bikiniparadisejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_candyburstjson;
DELIMITER //
CREATE PROCEDURE create_and_return_candyburstjson(p_id INT)
BEGIN
	INSERT INTO candyburstjson (id) VALUES (p_id);
	SELECT * FROM  candyburstjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_candyburstjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_candyburstjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE candyburstjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_candyburstjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_candyburstjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE candyburstjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_mahjongways2json;
DELIMITER //
CREATE PROCEDURE create_and_return_mahjongways2json(p_id INT)
BEGIN
	INSERT INTO mahjongways2json (id) VALUES (p_id);
	SELECT * FROM  mahjongways2json WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_mahjongways2json;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_mahjongways2json(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE mahjongways2json SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_mahjongways2json;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_mahjongways2json(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE mahjongways2json SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_ganeshafortunejson;
DELIMITER //
CREATE PROCEDURE create_and_return_ganeshafortunejson(p_id INT)
BEGIN
	INSERT INTO ganeshafortunejson (id) VALUES (p_id);
	SELECT * FROM  ganeshafortunejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_ganeshafortunejson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_ganeshafortunejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE ganeshafortunejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_ganeshafortunejson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_ganeshafortunejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE ganeshafortunejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_phoenixrisesjson;
DELIMITER //
CREATE PROCEDURE create_and_return_phoenixrisesjson(p_id INT)
BEGIN
	INSERT INTO phoenixrisesjson (id) VALUES (p_id);
	SELECT * FROM  phoenixrisesjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_phoenixrisesjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_phoenixrisesjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE phoenixrisesjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_phoenixrisesjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_phoenixrisesjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE phoenixrisesjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_wildfireworksjson;
DELIMITER //
CREATE PROCEDURE create_and_return_wildfireworksjson(p_id INT)
BEGIN
	INSERT INTO wildfireworksjson (id) VALUES (p_id);
	SELECT * FROM  wildfireworksjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_wildfireworksjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_wildfireworksjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE wildfireworksjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_wildfireworksjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_wildfireworksjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE wildfireworksjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_galacticgemsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_galacticgemsjson(p_id INT)
BEGIN
	INSERT INTO galacticgemsjson (id) VALUES (p_id);
	SELECT * FROM  galacticgemsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_galacticgemsjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_galacticgemsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE galacticgemsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_galacticgemsjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_galacticgemsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE galacticgemsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_treasuresaztecjson;
DELIMITER //
CREATE PROCEDURE create_and_return_treasuresaztecjson(p_id INT)
BEGIN
	INSERT INTO treasuresaztecjson (id) VALUES (p_id);
	SELECT * FROM  treasuresaztecjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_treasuresaztecjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_treasuresaztecjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE treasuresaztecjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_treasuresaztecjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_treasuresaztecjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE treasuresaztecjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_jewelsprosperjson;
DELIMITER //
CREATE PROCEDURE create_and_return_jewelsprosperjson(p_id INT)
BEGIN
	INSERT INTO jewelsprosperjson (id) VALUES (p_id);
	SELECT * FROM  jewelsprosperjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_jewelsprosperjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_jewelsprosperjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE jewelsprosperjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_jewelsprosperjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_jewelsprosperjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE jewelsprosperjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_gdnicefirejson;
DELIMITER //
CREATE PROCEDURE create_and_return_gdnicefirejson(p_id INT)
BEGIN
	INSERT INTO gdnicefirejson (id) VALUES (p_id);
	SELECT * FROM  gdnicefirejson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_gdnicefirejson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_gdnicefirejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE gdnicefirejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_gdnicefirejson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_gdnicefirejson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE gdnicefirejson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_balivacationjson;
DELIMITER //
CREATE PROCEDURE create_and_return_balivacationjson(p_id INT)
BEGIN
	INSERT INTO balivacationjson (id) VALUES (p_id);
	SELECT * FROM  balivacationjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_balivacationjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_balivacationjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE balivacationjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_balivacationjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_balivacationjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE balivacationjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_majestictsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_majestictsjson(p_id INT)
BEGIN
	INSERT INTO majestictsjson (id) VALUES (p_id);
	SELECT * FROM  majestictsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_majestictsjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_majestictsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE majestictsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_majestictsjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_majestictsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE majestictsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_jackfrostsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_jackfrostsjson(p_id INT)
BEGIN
	INSERT INTO jackfrostsjson (id) VALUES (p_id);
	SELECT * FROM  jackfrostsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_jackfrostsjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_jackfrostsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE jackfrostsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_jackfrostsjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_jackfrostsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE jackfrostsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_fortuneoxjson;
DELIMITER //
CREATE PROCEDURE create_and_return_fortuneoxjson(p_id INT)
BEGIN
	INSERT INTO fortuneoxjson (id) VALUES (p_id);
	SELECT * FROM  fortuneoxjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_fortuneoxjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_fortuneoxjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE fortuneoxjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_fortuneoxjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_fortuneoxjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE fortuneoxjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_zombieoutbrkjson;
DELIMITER //
CREATE PROCEDURE create_and_return_zombieoutbrkjson(p_id INT)
BEGIN
	INSERT INTO zombieoutbrkjson (id) VALUES (p_id);
	SELECT * FROM  zombieoutbrkjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_zombieoutbrkjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_zombieoutbrkjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE zombieoutbrkjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_zombieoutbrkjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_zombieoutbrkjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE zombieoutbrkjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_anubiswrathjson;
DELIMITER //
CREATE PROCEDURE create_and_return_anubiswrathjson(p_id INT)
BEGIN
	INSERT INTO anubiswrathjson (id) VALUES (p_id);
	SELECT * FROM  anubiswrathjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_anubiswrathjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_anubiswrathjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE anubiswrathjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_anubiswrathjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_anubiswrathjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE anubiswrathjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_wildbountysdjson;
DELIMITER //
CREATE PROCEDURE create_and_return_wildbountysdjson(p_id INT)
BEGIN
	INSERT INTO wildbountysdjson (id) VALUES (p_id);
	SELECT * FROM  wildbountysdjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_wildbountysdjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_wildbountysdjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE wildbountysdjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_wildbountysdjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_wildbountysdjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE wildbountysdjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_speedwinnerjson;
DELIMITER //
CREATE PROCEDURE create_and_return_speedwinnerjson(p_id INT)
BEGIN
	INSERT INTO speedwinnerjson (id) VALUES (p_id);
	SELECT * FROM  speedwinnerjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_speedwinnerjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_speedwinnerjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE speedwinnerjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_speedwinnerjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_speedwinnerjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE speedwinnerjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_wildcoasterjson;
DELIMITER //
CREATE PROCEDURE create_and_return_wildcoasterjson(p_id INT)
BEGIN
	INSERT INTO wildcoasterjson (id) VALUES (p_id);
	SELECT * FROM  wildcoasterjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_wildcoasterjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_wildcoasterjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE wildcoasterjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_wildcoasterjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_wildcoasterjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE wildcoasterjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_legendperseusjson;
DELIMITER //
CREATE PROCEDURE create_and_return_legendperseusjson(p_id INT)
BEGIN
	INSERT INTO legendperseusjson (id) VALUES (p_id);
	SELECT * FROM  legendperseusjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_legendperseusjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_legendperseusjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE legendperseusjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_legendperseusjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_legendperseusjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE legendperseusjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_hawaiiantikijson;
DELIMITER //
CREATE PROCEDURE create_and_return_hawaiiantikijson(p_id INT)
BEGIN
	INSERT INTO hawaiiantikijson (id) VALUES (p_id);
	SELECT * FROM  hawaiiantikijson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_hawaiiantikijson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_hawaiiantikijson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE hawaiiantikijson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_hawaiiantikijson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_hawaiiantikijson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE hawaiiantikijson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_mafiamayhemjson;
DELIMITER //
CREATE PROCEDURE create_and_return_mafiamayhemjson(p_id INT)
BEGIN
	INSERT INTO mafiamayhemjson (id) VALUES (p_id);
	SELECT * FROM  mafiamayhemjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_mafiamayhemjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_mafiamayhemjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE mafiamayhemjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_mafiamayhemjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_mafiamayhemjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE mafiamayhemjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_gladigloryjson;
DELIMITER //
CREATE PROCEDURE create_and_return_gladigloryjson(p_id INT)
BEGIN
	INSERT INTO gladigloryjson (id) VALUES (p_id);
	SELECT * FROM  gladigloryjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_gladigloryjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_gladigloryjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE gladigloryjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_gladigloryjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_gladigloryjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE gladigloryjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_pinatawinsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_pinatawinsjson(p_id INT)
BEGIN
	INSERT INTO pinatawinsjson (id) VALUES (p_id);
	SELECT * FROM  pinatawinsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_pinatawinsjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_pinatawinsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE pinatawinsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_pinatawinsjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_pinatawinsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE pinatawinsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_legendofhouyijson;
DELIMITER //
CREATE PROCEDURE create_and_return_legendofhouyijson(p_id INT)
BEGIN
	INSERT INTO legendofhouyijson (id) VALUES (p_id);
	SELECT * FROM  legendofhouyijson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_legendofhouyijson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_legendofhouyijson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE legendofhouyijson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_legendofhouyijson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_legendofhouyijson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE legendofhouyijson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_fortunegodsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_fortunegodsjson(p_id INT)
BEGIN
	INSERT INTO fortunegodsjson (id) VALUES (p_id);
	SELECT * FROM  fortunegodsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_fortunegodsjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_fortunegodsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE fortunegodsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_fortunegodsjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_fortunegodsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE fortunegodsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_safariwildsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_safariwildsjson(p_id INT)
BEGIN
	INSERT INTO safariwildsjson (id) VALUES (p_id);
	SELECT * FROM  safariwildsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_safariwildsjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_safariwildsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE safariwildsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_safariwildsjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_safariwildsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE safariwildsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_tsartreasuresjson;
DELIMITER //
CREATE PROCEDURE create_and_return_tsartreasuresjson(p_id INT)
BEGIN
	INSERT INTO tsartreasuresjson (id) VALUES (p_id);
	SELECT * FROM  tsartreasuresjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_tsartreasuresjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_tsartreasuresjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE tsartreasuresjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_tsartreasuresjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_tsartreasuresjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE tsartreasuresjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_ultstrikerjson;
DELIMITER //
CREATE PROCEDURE create_and_return_ultstrikerjson(p_id INT)
BEGIN
	INSERT INTO ultstrikerjson (id) VALUES (p_id);
	SELECT * FROM  ultstrikerjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_ultstrikerjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_ultstrikerjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE ultstrikerjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_ultstrikerjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_ultstrikerjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE ultstrikerjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_werewolfhuntjson;
DELIMITER //
CREATE PROCEDURE create_and_return_werewolfhuntjson(p_id INT)
BEGIN
	INSERT INTO werewolfhuntjson (id) VALUES (p_id);
	SELECT * FROM  werewolfhuntjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_werewolfhuntjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_werewolfhuntjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE werewolfhuntjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_werewolfhuntjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_werewolfhuntjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE werewolfhuntjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_totemwondersjson;
DELIMITER //
CREATE PROCEDURE create_and_return_totemwondersjson(p_id INT)
BEGIN
	INSERT INTO totemwondersjson (id) VALUES (p_id);
	SELECT * FROM  totemwondersjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_totemwondersjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_totemwondersjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE totemwondersjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_totemwondersjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_totemwondersjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE totemwondersjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_forgewealthjson;
DELIMITER //
CREATE PROCEDURE create_and_return_forgewealthjson(p_id INT)
BEGIN
	INSERT INTO forgewealthjson (id) VALUES (p_id);
	SELECT * FROM  forgewealthjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_forgewealthjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_forgewealthjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE forgewealthjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_forgewealthjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_forgewealthjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE forgewealthjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_luckycloverjson;
DELIMITER //
CREATE PROCEDURE create_and_return_luckycloverjson(p_id INT)
BEGIN
	INSERT INTO luckycloverjson (id) VALUES (p_id);
	SELECT * FROM  luckycloverjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_luckycloverjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_luckycloverjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE luckycloverjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_luckycloverjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_luckycloverjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE luckycloverjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_mystspiritsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_mystspiritsjson(p_id INT)
BEGIN
	INSERT INTO mystspiritsjson (id) VALUES (p_id);
	SELECT * FROM  mystspiritsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_mystspiritsjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_mystspiritsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE mystspiritsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_mystspiritsjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_mystspiritsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE mystspiritsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_ninjaraccoonjson;
DELIMITER //
CREATE PROCEDURE create_and_return_ninjaraccoonjson(p_id INT)
BEGIN
	INSERT INTO ninjaraccoonjson (id) VALUES (p_id);
	SELECT * FROM  ninjaraccoonjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_ninjaraccoonjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_ninjaraccoonjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE ninjaraccoonjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_ninjaraccoonjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_ninjaraccoonjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE ninjaraccoonjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP TABLE IF EXISTS `wildbountysdjson`;
CREATE TABLE `wildbountysdjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":948045.18,"blab":948045.18,"blb":948049.18,"crtw":0,"cs":0.02,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":[1,11],"gm":1,"gs":[7,8,16],"gsb":[7,8,16],"gwt":-1,"hashr":"0:5;7;3;2;2;6#7;2;5;4;7;5#8;7;5;6;6;9#6;9;4;2#3;4#MV#0.40#MT#1#MG#0###1224","imw":false,"lw":null,"ml":10,"mr":null,"ngm":1,"ngs":null,"np":-0.4,"nst":1,"ocr":null,"orl":[5,7,8,7,2,7,6,3,5,5,9,3,2,4,6,4,4,2,7,6,2,6,5,9],"pcwc":0,"pf":1,"pmt":null,"prbr":null,"psid":"1861723374873477120","rl":[5,7,8,7,2,7,6,3,5,5,9,3,2,4,6,4,4,2,7,6,2,6,5,9],"rns":null,"rwsp":null,"sc":0,"sid":"1861723374873477120","snww":null,"ssaw":0,"st":1,"tb":4,"tbb":4,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wgs":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_wildbountysdjson;
DELIMITER //
CREATE PROCEDURE create_and_return_wildbountysdjson(p_id INT)
BEGIN
	INSERT INTO wildbountysdjson (id) VALUES (p_id);
	SELECT * FROM  wildbountysdjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_wildbountysdjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_wildbountysdjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE wildbountysdjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_wildbountysdjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_wildbountysdjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE wildbountysdjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `speedwinnerjson`;
CREATE TABLE `speedwinnerjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"acw":40,"aw":0,"bl":952895.86,"blab":952895.86,"blb":953095.86,"bwp":{"9":[[3],[7,8,9],[11]]},"cs":1,"ctw":40,"cwc":0,"eb":{"1":{"bt":2,"fp":5,"lp":6,"ls":1},"3":{"bt":2,"fp":12,"lp":13,"ls":1},"4":{"bt":2,"fp":16,"lp":17,"ls":1},"5":{"bt":2,"fp":18,"lp":19,"ls":1},"6":{"bt":2,"fp":23,"lp":24,"ls":1}},"ebb":{"1":{"bt":2,"fp":5,"lp":6,"ls":1},"2":{"bt":2,"fp":7,"lp":9,"ls":1},"3":{"bt":2,"fp":12,"lp":13,"ls":1},"4":{"bt":2,"fp":16,"lp":17,"ls":1},"5":{"bt":2,"fp":18,"lp":19,"ls":1},"6":{"bt":2,"fp":23,"lp":24,"ls":1}},"es":{"1":[5,6],"3":[12,13],"4":[16,17],"5":[18,19],"6":[23,24]},"esb":{"1":[5,6],"2":[7,8,9],"3":[12,13],"4":[16,17],"5":[18,19],"6":[23,24]},"fb":null,"fs":null,"fstc":null,"ge":[1,11],"gwt":-1,"hashr":"0:10;10;7;6;11;8#10;10;9;1;12;10#11;9;1;1;11;8#9;9;1;4;5;6#6;9;11;4;5;10#R#9#0312131421#MV#0.40#MT#1#MG#0###9511","lw":{"9":40},"md":null,"ml":10,"mr":null,"now":7500,"nowpr":[5,3,5,4,5,5],"np":-0.4,"nst":4,"ocr":null,"orl":[10,10,11,9,6,10,10,9,9,9,7,9,1,1,11,6,1,1,4,4,11,12,11,5,5,8,10,8,6,10],"pcwc":0,"pf":1,"pmt":null,"psid":"1861805073280032768","ptbr":[3,7,8,9,11],"rl":[10,10,11,9,6,10,10,9,9,9,7,9,1,1,11,6,1,1,4,4,11,12,11,5,5,8,10,8,6,10],"rs":null,"rwsp":{"9":4},"sc":2,"sid":"1861805073280032768","snww":{"9":1},"st":1,"tb":200,"tbb":200,"tgm":0,"tmd":null,"torl":null,"tptbr":null,"trl":[7,7,6,6],"tw":40,"twp":null,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":{"9":[3,7,8,9,11]},"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_speedwinnerjson;
DELIMITER //
CREATE PROCEDURE create_and_return_speedwinnerjson(p_id INT)
BEGIN
	INSERT INTO speedwinnerjson (id) VALUES (p_id);
	SELECT * FROM  speedwinnerjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_speedwinnerjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_speedwinnerjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE speedwinnerjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_speedwinnerjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_speedwinnerjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE speedwinnerjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `wildcoasterjson`;
CREATE TABLE `wildcoasterjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":952691.86,"blab":952691.86,"blb":952695.86,"btorl":[6,12,11,10],"btrl":[6,12,11,10],"btwl":null,"btwp":null,"bwp":null,"cs":0.02,"ctw":0,"cwc":0,"es":{"1":[4,5],"2":[6,7],"3":[8,9,10],"4":[16,17],"5":[18,19]},"esb":{"1":[4,5],"2":[6,7],"3":[8,9,10],"4":[16,17],"5":[18,19]},"fb":null,"fs":null,"fstc":null,"fwc":null,"ge":[1,11],"gm":1,"gwt":-1,"hashr":"0:7;7;9;3;8;2#7;7;9;3;8;9#5;11;9;6;9;9#5;11;6;10;9;9#MV#0.40#MT#1#MG#0###8763","lw":null,"ml":10,"mr":null,"now":6144,"nowpr":[4,4,4,6,4,4],"np":-0.4,"nst":1,"ocr":null,"orl":[7,7,5,5,7,7,11,11,9,9,9,6,3,3,6,10,8,8,9,9,2,9,9,9],"pcwc":0,"pf":1,"pmt":null,"psid":"1861805079970004992","rl":[7,7,5,5,7,7,11,11,9,9,9,6,3,3,6,10,8,8,9,9,2,9,9,9],"rs":null,"rwsp":null,"sc":0,"sid":"1861805079970004992","snww":null,"ssaw":0,"st":1,"tb":4,"tbb":4,"ttorl":[8,2,9,4],"ttrl":[8,2,9,4],"ttwl":null,"ttwp":null,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_wildcoasterjson;
DELIMITER //
CREATE PROCEDURE create_and_return_wildcoasterjson(p_id INT)
BEGIN
	INSERT INTO wildcoasterjson (id) VALUES (p_id);
	SELECT * FROM  wildcoasterjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_wildcoasterjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_wildcoasterjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE wildcoasterjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_wildcoasterjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_wildcoasterjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE wildcoasterjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `legendperseusjson`;
CREATE TABLE `legendperseusjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":40,"bl":947309.48,"blab":947269.48,"blb":947269.48,"bwp":null,"cs":1,"ctw":0,"cwc":0,"es":{"2":[21,22,26,27],"3":[18,19]},"esb":{"2":[21,22,26,27],"3":[18,19]},"esm":{"2":4},"esmb":{"2":4},"fb":null,"fs":null,"fstc":{"4":1},"ge":[1,11],"gm":4,"gwt":-1,"hashr":"1:6;10;11;12;9;11#6;11;9;12;10;10#6;8;5;12;10;10#6;8;5;1;11;10#12;12;5;1;7;7#MV#0#MT#4#MG#0###7743","lw":null,"ml":10,"mr":null,"now":8000,"nowpr":[5,5,5,4,4,4],"np":0,"nst":1,"ocr":null,"orl":null,"pcwc":0,"pf":1,"pmt":null,"psid":"1861723393970229248","rl":[6,6,6,6,12,10,11,8,8,12,11,9,5,5,5,12,12,12,1,1,9,10,10,11,7,11,10,10,10,7],"rs":{"nes":{},"nesm":{},"rns":[[6,6,6,6],[10,11,8],[11,9],[],[],[]]},"rwsp":null,"sc":1,"sid":"1861723403935895552","snww":null,"ssaw":40,"st":4,"tb":200,"tbb":200,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_legendperseusjson;
DELIMITER //
CREATE PROCEDURE create_and_return_legendperseusjson(p_id INT)
BEGIN
	INSERT INTO legendperseusjson (id) VALUES (p_id);
	SELECT * FROM  legendperseusjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_legendperseusjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_legendperseusjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE legendperseusjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_legendperseusjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_legendperseusjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE legendperseusjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `hawaiiantikijson`;
CREATE TABLE `hawaiiantikijson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":952895.86,"blab":952895.86,"blb":953095.86,"cs":1,"ctw":0,"cwc":0,"ewl":[0,0],"ewp":[null,null],"ewpb":[null,null],"fb":null,"fs":null,"fstc":null,"ge":[1,11],"gm":1,"gmi":0,"gmib":0,"gwt":-1,"hashr":"0:4;12;12;7;11;9#11;7;2;2;10;3#8;10;11;3;8;6#5;7;7;11#9;7#MV#0.40#MT#1#MG#0###1306","lw":null,"ml":10,"mr":null,"np":-0.4,"nst":1,"ocr":null,"oew":[0,0],"orl":[4,11,8,12,7,10,5,12,2,11,7,9,7,2,3,7,7,11,10,8,11,9,3,6],"otw":0,"pcwc":0,"pf":1,"pmt":null,"psid":"1861805073334661120","ptbr":null,"rl":[4,11,8,12,7,10,5,12,2,11,7,9,7,2,3,7,7,11,10,8,11,9,3,6],"rs":null,"rwsp":null,"sc":0,"sid":"1861805073334661120","snw":null,"ssaw":0,"st":1,"tb":200,"tbb":200,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_hawaiiantikijson;
DELIMITER //
CREATE PROCEDURE create_and_return_hawaiiantikijson(p_id INT)
BEGIN
	INSERT INTO hawaiiantikijson (id) VALUES (p_id);
	SELECT * FROM  hawaiiantikijson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_hawaiiantikijson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_hawaiiantikijson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE hawaiiantikijson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_hawaiiantikijson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_hawaiiantikijson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE hawaiiantikijson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `mafiamayhemjson`;
CREATE TABLE `mafiamayhemjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":948817.93,"blab":948817.93,"blb":949017.93,"cc":true,"cgsp":null,"crtw":0,"cs":1,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":[1,11],"gm":0,"gsp":[13,14,18,19],"gswp":null,"gwt":-1,"hashr":"0:4;6;6;2;1;8#5;1;2;9;4;4#8;5;10;11;12;10#10;5;4;3#MV#0.40#MT#1#MG#0###3891","imw":false,"lw":null,"ml":10,"mp":null,"mr":null,"ngsp":null,"now":2304,"nowpr":[3,3,4,4,4,4],"np":-0.4,"nst":1,"ocr":null,"orl":[4,5,8,6,1,5,6,2,10,10,2,9,11,5,1,4,12,4,8,4,10,3],"pcwc":0,"pf":1,"pgm":0,"pmt":null,"psid":"1861722798605623296","ptbr":null,"rl":[4,5,8,6,1,5,6,2,10,10,2,9,11,5,1,4,12,4,8,4,10,3],"rns":null,"rnsp":null,"rwsp":null,"sc":2,"sid":"1861722798605623296","snww":null,"ssaw":0,"st":1,"swp":null,"tb":200,"tbb":200,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_mafiamayhemjson;
DELIMITER //
CREATE PROCEDURE create_and_return_mafiamayhemjson(p_id INT)
BEGIN
	INSERT INTO mafiamayhemjson (id) VALUES (p_id);
	SELECT * FROM  mafiamayhemjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_mafiamayhemjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_mafiamayhemjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE mafiamayhemjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_mafiamayhemjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_mafiamayhemjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE mafiamayhemjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `gladigloryjson`;
CREATE TABLE `gladigloryjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"actw":0.56,"aw":0,"bl":953472.34,"blab":953472.34,"blb":953472.34,"crtw":0,"cs":0.02,"ctw":0.2,"cwc":0,"cwsp":{},"fb":null,"fs":null,"fstc":{"4":1},"ge":[1,11],"gm":2,"gwt":-1,"hashr":"1:4;9;7;4;9#2;9;2;9;3#3;20;3;3;8#2;9;3#7#R#2#011321#MV#0#MT#1#MG#0###7558","imw":false,"lw":{"2":0.2},"ml":1,"mr":null,"np":0,"nst":4,"ocr":null,"orl":[4,2,3,9,9,20,2,7,2,3,9,7,4,9,3,3,9,3,8],"pcwc":0,"pf":1,"pmt":null,"psid":"1861805050115026944","ptbr":[1,6,8],"rl":[4,2,3,9,9,20,2,7,2,3,9,7,4,9,3,3,9,3,8],"rns":{"0":[4,2],"2":[7,2,3],"3":[4]},"rwsp":{"2":10},"sc":0,"sid":"1861805060063916032","snww":{"2":1},"st":4,"tb":0.4,"tbb":0.4,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wm":{"5":2},"wp":{"2":[1,6,8]},"wpl":[1,6,8],"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_gladigloryjson;
DELIMITER //
CREATE PROCEDURE create_and_return_gladigloryjson(p_id INT)
BEGIN
	INSERT INTO gladigloryjson (id) VALUES (p_id);
	SELECT * FROM  gladigloryjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_gladigloryjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_gladigloryjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE gladigloryjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_gladigloryjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_gladigloryjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE gladigloryjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `pinatawinsjson`;
CREATE TABLE `pinatawinsjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0.18,"bl":947308.76,"blab":947308.58,"blb":947308.58,"cgm":0,"cgsp":[],"crtw":0,"cs":0.02,"ctw":0,"cwc":1,"fb":null,"fs":null,"fstc":{"4":2},"ge":[1,11],"gm":1,"gsp":[],"gwt":-1,"hashr":"2:5;8;6;3;2#5;7;8;6;2#7;4;8;3;10#7;3;6;3;2#MV#0#MT#1#MG#0.18###9282","imw":false,"ir":false,"lw":null,"mf":{},"ml":1,"mr":null,"ngsp":[],"np":0.18,"nst":1,"ocr":null,"orl":[5,5,7,7,8,7,4,3,6,8,8,6,3,6,3,3,2,2,10,2],"pcwc":0,"pf":1,"pgm":1,"pmt":null,"psid":"1861723389193043968","ptr":null,"rl":[5,5,7,7,8,7,4,3,6,8,8,6,3,6,3,3,2,2,10,2],"rns":[[5,5],[8],[6],[],[]],"rwsp":null,"sc":0,"sid":"1861723408885301248","ssaw":0.18,"st":4,"tb":0.4,"tbb":0.4,"tw":0.18,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wsp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_pinatawinsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_pinatawinsjson(p_id INT)
BEGIN
	INSERT INTO pinatawinsjson (id) VALUES (p_id);
	SELECT * FROM  pinatawinsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_pinatawinsjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_pinatawinsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE pinatawinsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_pinatawinsjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_pinatawinsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE pinatawinsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_legendofhouyijson;
DELIMITER //
CREATE PROCEDURE create_and_return_legendofhouyijson(p_id INT)
BEGIN
	INSERT INTO legendofhouyijson (id) VALUES (p_id);
	SELECT * FROM  legendofhouyijson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_legendofhouyijson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_legendofhouyijson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE legendofhouyijson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_legendofhouyijson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_legendofhouyijson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE legendofhouyijson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_fortunegodsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_fortunegodsjson(p_id INT)
BEGIN
	INSERT INTO fortunegodsjson (id) VALUES (p_id);
	SELECT * FROM  fortunegodsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_fortunegodsjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_fortunegodsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE fortunegodsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_fortunegodsjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_fortunegodsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE fortunegodsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `safariwildsjson`;
CREATE TABLE `safariwildsjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":1.98,"bl":952699.47,"blab":952697.49,"blb":952697.49,"bwp":null,"cs":0.02,"ctw":0,"cwc":0,"eb":{"10":{"bt":1,"fp":20,"lp":20,"ls":1},"11":{"bt":1,"fp":21,"lp":21,"ls":1},"12":{"bt":1,"fp":11,"lp":11,"ls":1},"13":{"bt":1,"fp":10,"lp":10,"ls":1},"3":{"bt":1,"fp":12,"lp":13,"ls":1},"4":{"bt":1,"fp":14,"lp":15,"ls":1},"5":{"bt":1,"fp":16,"lp":17,"ls":1},"6":{"bt":2,"fp":18,"lp":19,"ls":1},"7":{"bt":2,"fp":22,"lp":23,"ls":1}},"ebb":{"10":{"bt":1,"fp":20,"lp":20,"ls":1},"11":{"bt":1,"fp":21,"lp":21,"ls":1},"12":{"bt":1,"fp":11,"lp":11,"ls":1},"13":{"bt":1,"fp":10,"lp":10,"ls":1},"3":{"bt":1,"fp":12,"lp":13,"ls":1},"4":{"bt":1,"fp":14,"lp":15,"ls":1},"5":{"bt":1,"fp":16,"lp":17,"ls":1},"6":{"bt":2,"fp":18,"lp":19,"ls":1},"7":{"bt":2,"fp":22,"lp":23,"ls":1}},"es":{"10":[20],"11":[21],"12":[11],"13":[10],"3":[12,13],"4":[14,15],"5":[16,17],"6":[18,19],"7":[22,23]},"esb":{"10":[20],"11":[21],"12":[11],"13":[10],"3":[12,13],"4":[14,15],"5":[16,17],"6":[18,19],"7":[22,23]},"fb":null,"fs":null,"fstc":{"4":4},"ge":[1,11],"gm":5,"gwt":-1,"hashr":"4:7;3;12;10;11;8#7;3;12;10;11;8#12;9;5;0;4;6#5;9;5;0;4;6#6;1;4;5;4;6#4;5#MV#0#MT#1#MG#0###2957","imw":false,"lw":null,"ml":1,"mr":null,"now":8000,"nowpr":[5,5,4,4,4,5],"np":0,"nst":1,"ocr":null,"ogm":5,"orl":[7,7,12,5,6,3,3,9,9,1,12,12,5,5,4,4,10,10,0,0,5,5,11,11,4,4,4,8,8,6,6,6],"pcwc":0,"pf":1,"pmt":null,"psid":"1861805082226622464","ptbr":null,"rl":[7,7,12,5,6,3,3,9,9,1,12,12,5,5,4,4,10,10,0,0,5,5,11,11,4,4,4,8,8,6,6,6],"rs":{"eb":{},"es":{},"espt":{"12":{"np":[11],"op":[10]},"3":{"np":[12,13],"op":[11,12]}},"esst":{},"rc":4,"rns":[[7,7,12],[3],[12],[],[],[]]},"rwsp":null,"sc":1,"sid":"1861805126593970176","snww":null,"ssaw":1.98,"st":4,"tb":0.4,"tbb":0.4,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_safariwildsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_safariwildsjson(p_id INT)
BEGIN
	INSERT INTO safariwildsjson (id) VALUES (p_id);
	SELECT * FROM  safariwildsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_safariwildsjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_safariwildsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE safariwildsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_safariwildsjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_safariwildsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE safariwildsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `tsartreasuresjson`;
CREATE TABLE `tsartreasuresjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":953029.57,"blab":953029.57,"blb":953029.97,"cs":0.02,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":[1,11],"gm":1,"gwt":-1,"hashr":"0:8;9;8;5;6#9;6;7;9;9#3;5;4;6;8#7;6;7#MV#0.40#MT#1#MG#0###2447","imw":false,"lw":null,"ml":1,"mr":null,"np":-0.4,"nst":1,"ocr":null,"orl":[8,9,3,9,6,5,7,8,7,4,6,5,9,6,7,6,9,8],"pcwc":0,"pf":1,"pmt":null,"psid":"1861768179678875648","rl":[8,9,3,9,6,5,7,8,7,4,6,5,9,6,7,6,9,8],"rns":null,"rwsp":null,"sc":0,"sid":"1861768179678875648","snww":null,"ssaw":0,"st":1,"tb":0.4,"tbb":0.4,"tsp":null,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_tsartreasuresjson;
DELIMITER //
CREATE PROCEDURE create_and_return_tsartreasuresjson(p_id INT)
BEGIN
	INSERT INTO tsartreasuresjson (id) VALUES (p_id);
	SELECT * FROM  tsartreasuresjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_tsartreasuresjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_tsartreasuresjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE tsartreasuresjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_tsartreasuresjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_tsartreasuresjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE tsartreasuresjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `ultstrikerjson`;
CREATE TABLE `ultstrikerjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0.08,"bl":953072.26,"blab":953072.18,"blb":953072.18,"bwp":null,"crtw":0,"cs":0.02,"ctw":0,"cwc":0,"eb":{"1":{"bt":1,"fp":8,"lp":9,"ls":2},"10":{"bt":2,"fp":28,"lp":29,"ls":1},"2":{"bt":2,"fp":10,"lp":11,"ls":1},"4":{"bt":2,"fp":13,"lp":14,"ls":1},"5":{"bt":2,"fp":15,"lp":16,"ls":1},"6":{"bt":2,"fp":18,"lp":19,"ls":1},"7":{"bt":2,"fp":20,"lp":22,"ls":1},"8":{"bt":1,"fp":24,"lp":25,"ls":2},"9":{"bt":2,"fp":26,"lp":27,"ls":1}},"ebb":{"1":{"bt":1,"fp":8,"lp":9,"ls":2},"10":{"bt":2,"fp":28,"lp":29,"ls":1},"2":{"bt":2,"fp":10,"lp":11,"ls":1},"4":{"bt":2,"fp":13,"lp":14,"ls":1},"5":{"bt":2,"fp":15,"lp":16,"ls":1},"6":{"bt":2,"fp":18,"lp":19,"ls":1},"7":{"bt":2,"fp":20,"lp":22,"ls":1},"8":{"bt":1,"fp":24,"lp":25,"ls":2},"9":{"bt":2,"fp":26,"lp":27,"ls":1}},"es":{"1":[8,9],"10":[28,29],"2":[10,11],"4":[13,14],"5":[15,16],"6":[18,19],"7":[20,21,22],"8":[24,25],"9":[26,27]},"esb":{"1":[8,9],"10":[28,29],"2":[10,11],"4":[13,14],"5":[15,16],"6":[18,19],"7":[20,21,22],"8":[24,25],"9":[26,27]},"fb":null,"fs":null,"fstc":{"4":1},"ge":[1,11],"gm":1,"gwt":-1,"hashr":"1:11;10;11;12;8;6#1;8;10;12;8;10#11;2;10;10;7;8#12;2;11;10;7;6#12;6;11;10;3;4#7;6;5;8;3;4#MV#0#MT#1#MG#0###7953","imw":false,"lw":null,"mf":[1,2,3,5],"mi":1,"ml":1,"mr":null,"now":5184,"nowpr":[6,4,4,3,3,6],"np":0,"nst":1,"ocr":null,"omf":[1,2,3,5],"orl":[11,1,11,12,12,7,10,8,2,2,6,6,11,10,10,11,11,5,12,12,10,10,10,8,8,8,7,7,3,3,6,10,8,6,4,4],"pcwc":0,"pf":1,"pmt":null,"psid":"1861805057178247168","ptbr":null,"rl":[11,1,11,12,12,7,10,8,2,2,6,6,11,10,10,11,11,5,12,12,10,10,10,8,8,8,7,7,3,3,6,10,8,6,4,4],"rs":{"bweb":{},"eb":{},"es":{},"espt":{"1":{"np":[8,9],"op":[6,7]},"2":{"np":[10,11],"op":[8,9]}},"esst":{},"rns":[[11,1],[10,8],[11],[],[],[]]},"rwsp":null,"sc":1,"sid":"1861805067760476160","snww":null,"ssaw":0.08,"st":4,"tb":0.4,"tbb":0.4,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_ultstrikerjson;
DELIMITER //
CREATE PROCEDURE create_and_return_ultstrikerjson(p_id INT)
BEGIN
	INSERT INTO ultstrikerjson (id) VALUES (p_id);
	SELECT * FROM  ultstrikerjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_ultstrikerjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_ultstrikerjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE ultstrikerjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_ultstrikerjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_ultstrikerjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE ultstrikerjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `werewolfhuntjson`;
CREATE TABLE `werewolfhuntjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":953874.46,"blab":953874.46,"blb":953874.86,"cs":0.02,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":[1,11],"gm":0,"gwt":-1,"hashr":"0:9;1;11;3;7;11#1;3;11;5;6;10#9;10;7;4;8;2#8;10;7;3;7;11#5;7;5;6#MV#0.40#MT#0#MG#0###3849","imw":false,"lw":null,"ml":1,"mp":{"26":2},"mr":null,"np":-0.4,"nst":1,"ocr":null,"orl":[9,1,9,8,1,3,10,10,5,11,11,7,7,7,3,5,4,3,5,7,6,8,7,6,11,10,2,11],"pcwc":0,"pf":1,"pmt":null,"psid":"1861805050328952832","rl":[9,1,9,8,1,3,10,10,5,11,11,7,7,7,3,5,4,3,5,7,6,8,7,6,11,10,2,11],"rns":null,"rwsp":null,"sc":2,"sid":"1861805050328952832","snww":null,"ssaw":0,"st":1,"tb":0.4,"tbb":0.4,"tw":0,"wbn":null,"wdp":[],"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":[],"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_werewolfhuntjson;
DELIMITER //
CREATE PROCEDURE create_and_return_werewolfhuntjson(p_id INT)
BEGIN
	INSERT INTO werewolfhuntjson (id) VALUES (p_id);
	SELECT * FROM  werewolfhuntjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_werewolfhuntjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_werewolfhuntjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE werewolfhuntjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_werewolfhuntjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_werewolfhuntjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE werewolfhuntjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `totemwondersjson`;
CREATE TABLE `totemwondersjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":953063.48,"blab":953063.48,"blb":953063.98,"clm":[3,5,3],"cm":15,"crm":[3,3,3],"cs":0.05,"ctw":0,"cwc":0,"fb":null,"fstc":null,"ge":[1,11],"gwt":-1,"hashr":"0:7;7;2#7;7;3#7;7;5#99;7;99#MV#0.50#MT#15#MG#0###2735","hdswf":false,"lw":null,"ml":1,"mr":null,"np":-0.5,"nst":1,"ocr":null,"orl":[7,7,7,99,7,7,7,7,2,3,5,99],"pcwc":0,"pf":1,"pmt":null,"psid":"1861767905258291200","rl":[7,7,7,99,7,7,7,7,2,3,5,99],"rwsp":null,"sid":"1861767905258291200","st":1,"tb":0.5,"tbb":0.5,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_totemwondersjson;
DELIMITER //
CREATE PROCEDURE create_and_return_totemwondersjson(p_id INT)
BEGIN
	INSERT INTO totemwondersjson (id) VALUES (p_id);
	SELECT * FROM  totemwondersjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_totemwondersjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_totemwondersjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE totemwondersjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_totemwondersjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_totemwondersjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE totemwondersjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `forgewealthjson`;
CREATE TABLE `forgewealthjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"acmp":[8],"atw":1.5,"aw":3,"bl":952694.14,"blab":952691.14,"blb":952691.14,"cmp":null,"cs":0.02,"ctw":0,"cwc":1,"fb":null,"fs":null,"fstc":{"4":3},"ge":[1,11],"gm":2,"gwt":1,"hashr":"3:4;1;10;10;10;11#6;9;10;9;10;11#8;5;5;3;2;11#2;7;4;5;2;8#4;9;10;7;4;1#MV#0#MT#2#MG#3.0###4533","ima":true,"imw":false,"ml":1,"mr":null,"np":3,"nst":1,"ocr":null,"orl":[4,6,8,2,4,1,9,5,7,9,10,10,5,4,10,10,9,3,5,7,10,10,2,2,4,11,11,11,8,1],"pcwc":0,"pf":1,"pmt":null,"psid":"1861805061293023232","rl":[4,6,8,2,4,1,9,5,7,9,10,10,5,4,10,10,9,3,5,7,10,10,2,2,4,11,11,11,8,1],"rm":{"21":[1,0],"23":[0,0],"6":[0,0],"8":[1,2]},"rns":[[4,6,8],[],[10,10],[],[10,10],[11,11,11,8]],"rwsp":null,"sc":2,"sid":"1861805094562242560","st":4,"sw":null,"tb":0.4,"tbb":0.4,"tw":3,"twbm":1.5,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wsc":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_forgewealthjson;
DELIMITER //
CREATE PROCEDURE create_and_return_forgewealthjson(p_id INT)
BEGIN
	INSERT INTO forgewealthjson (id) VALUES (p_id);
	SELECT * FROM  forgewealthjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_forgewealthjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_forgewealthjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE forgewealthjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_forgewealthjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_forgewealthjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE forgewealthjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `luckycloverjson`;
CREATE TABLE `luckycloverjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":952699.07,"blab":952699.07,"blb":952699.47,"crtw":0,"cs":0.02,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":[1,11],"gm":1,"gwt":-1,"hashr":"0:10;9;8;4;9;5#10;11;10;6;10;11#6;11;10;6;10;11#6;6;7;11;8;9#8;6;7;11;8;9#MV#0.40#MT#1#MG#0###6097","ifa":false,"imw":false,"inwsf":false,"mf":null,"ml":1,"mr":null,"np":-0.4,"nst":1,"nus":-1,"nwpl":null,"ocr":null,"orl":[10,10,6,6,8,9,11,11,6,6,8,10,10,7,7,4,6,6,11,11,9,10,10,8,8,5,11,11,9,9],"pcwc":0,"pf":1,"pmt":null,"psid":"1861805132768174080","ptbr":null,"ptu":null,"rl":[10,10,6,6,8,9,11,11,6,6,8,10,10,7,7,4,6,6,11,11,9,10,10,8,8,5,11,11,9,9],"rns":null,"rwsp":{},"sc":0,"sid":"1861805132768174080","ssaw":0,"st":1,"sw":null,"tb":0.4,"tbb":0.4,"tw":0,"twbm":0,"usf":null,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wsc":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_luckycloverjson;
DELIMITER //
CREATE PROCEDURE create_and_return_luckycloverjson(p_id INT)
BEGIN
	INSERT INTO luckycloverjson (id) VALUES (p_id);
	SELECT * FROM  luckycloverjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_luckycloverjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_luckycloverjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE luckycloverjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_luckycloverjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_luckycloverjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE luckycloverjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `mystspiritsjson`;
CREATE TABLE `mystspiritsjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0.64,"bl":953272.18,"blab":953271.54,"blb":953271.54,"bwp":null,"cs":0.02,"ctw":0,"cwc":0,"eb":{"1":{"bt":2,"fp":8,"lp":9,"ls":1},"10":{"bt":2,"fp":10,"lp":11,"ls":1},"6":{"bt":2,"fp":23,"lp":24,"ls":1},"7":{"bt":2,"fp":13,"lp":14,"ls":1},"8":{"bt":2,"fp":15,"lp":16,"ls":1},"9":{"bt":2,"fp":6,"lp":7,"ls":1}},"ebb":{"1":{"bt":2,"fp":8,"lp":9,"ls":1},"10":{"bt":2,"fp":10,"lp":11,"ls":1},"6":{"bt":2,"fp":23,"lp":24,"ls":1},"7":{"bt":2,"fp":13,"lp":14,"ls":1},"8":{"bt":2,"fp":15,"lp":16,"ls":1},"9":{"bt":2,"fp":6,"lp":7,"ls":1}},"em":{"2":1,"3":2,"4":3},"emb":{"2":1,"3":2,"4":3},"eo":{"2":4,"3":0,"4":0},"eob":{"2":4,"3":0,"4":0},"es":{"1":[8,9],"10":[10,11],"6":[23,24],"7":[13,14],"8":[15,16],"9":[6,7]},"esb":{"1":[8,9],"10":[10,11],"6":[23,24],"7":[13,14],"8":[15,16],"9":[6,7]},"fb":null,"fs":null,"fstc":{"4":2},"ge":[1,11],"gm":6,"gwt":-1,"hashr":"2:10;5;5;7;8;9#8;5;5;7;6;10#9;5;3;4;4;8#10;3;2;3;2;9#1;3;2;3;2;10#MV#0#MT#1#MG#0###9450","imw":false,"lw":null,"ml":1,"mr":null,"now":3600,"nowpr":[5,3,3,4,4,5],"np":0,"nst":1,"ocr":null,"orl":[10,8,9,10,1,5,5,5,3,3,5,5,3,2,2,7,7,4,3,3,8,6,4,2,2,9,10,8,9,10],"pcwc":0,"pf":1,"pmt":null,"psid":"1861796986221850624","rl":[10,8,9,10,1,5,5,5,3,3,5,5,3,2,2,7,7,4,3,3,8,6,4,2,2,9,10,8,9,10],"rs":{"espt":{"1":{"np":[8,9],"op":[6,7]},"7":{"np":[13,14],"op":[11,12]}},"neb":{"1":{"bt":2,"fp":6,"lp":7,"ls":1},"2":{"bt":2,"fp":10,"lp":11,"ls":1}},"nes":{"1":[6,7],"2":[10,11]},"rns":[[10,8,9,10],[5,5,5],[5,5,3],[],[],[]]},"rwsp":null,"sc":1,"sid":"1861805062081572864","snww":null,"ssaw":0.64,"st":4,"tb":0.4,"tbb":0.4,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_mystspiritsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_mystspiritsjson(p_id INT)
BEGIN
	INSERT INTO mystspiritsjson (id) VALUES (p_id);
	SELECT * FROM  mystspiritsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_mystspiritsjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_mystspiritsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE mystspiritsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_mystspiritsjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_mystspiritsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE mystspiritsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `ninjaraccoonjson`;
CREATE TABLE `ninjaraccoonjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0.54,"awip":[[6,1],[8,2]],"bl":953097.2,"blab":953096.66,"blb":953096.66,"cs":0.02,"ctw":0.44,"cwc":2,"fb":null,"fs":null,"fstc":{"4":1},"ge":[3,11],"gm":2,"gwt":-1,"hashr":"1:13;9;0;7;2;2#8;6;3;6;10;3#12;2;5;11;6;10#MV#0#MT#1#MG#0.44###7550","imw":false,"lw":null,"ml":1,"mlw":{"10":0.1,"11":0.02,"5":0.1},"mr":null,"mrl":[10,5,11,12,0,9,13,3,0,10,7,12,9,8,7,5,3,2],"mrns":null,"mrtw":0.22,"msnww":{"10":1,"11":1,"5":1},"mwip":[[8,2]],"mwp":{"10":[0,4,8,9],"11":[2,4,8],"5":[1,4,8]},"mwpl":[0,1,2,4,8,9],"np":0.44,"nst":4,"ocr":null,"omrl":[10,5,11,12,0,9,13,3,9,10,7,12,9,8,7,5,3,2],"orl":[13,8,12,9,6,2,0,3,5,7,6,11,2,10,6,2,3,10],"pcwc":0,"pf":1,"pmt":null,"psid":"1861805059409805312","rl":[13,8,12,9,6,2,0,3,5,7,6,11,2,10,6,2,3,10],"rns":[[13],[9],[0],[7],[],[]],"rtw":0,"rwsp":{"2":{"10":5,"11":1,"5":5}},"sc":0,"sid":"1861805069836845056","snww":null,"ssaw":0.54,"st":4,"tb":0.4,"tbb":0.4,"tw":0.44,"twbm":0.22,"wbn":null,"wfg":null,"wid":0,"wip":[[6,1]],"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_ninjaraccoonjson;
DELIMITER //
CREATE PROCEDURE create_and_return_ninjaraccoonjson(p_id INT)
BEGIN
	INSERT INTO ninjaraccoonjson (id) VALUES (p_id);
	SELECT * FROM  ninjaraccoonjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_ninjaraccoonjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_ninjaraccoonjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE ninjaraccoonjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_ninjaraccoonjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_ninjaraccoonjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE ninjaraccoonjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS create_and_return_wildheistcojson;
DELIMITER //
CREATE PROCEDURE create_and_return_wildheistcojson(p_id INT)
BEGIN
	INSERT INTO wildheistcojson (id) VALUES (p_id);
	SELECT * FROM  wildheistcojson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_wildheistcojson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_wildheistcojson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE wildheistcojson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_wildheistcojson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_wildheistcojson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE wildheistcojson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;



DROP TABLE IF EXISTS `wildbountysdjson`;
CREATE TABLE `wildbountysdjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":5.2,"bl":952691.17,"blab":952685.97,"blb":952689.97,"crtw":0,"cs":0.02,"ctw":5.2,"cwc":1,"fb":null,"fs":null,"fstc":null,"ge":[1,11],"gm":1,"gs":[14,16],"gsb":[14,16],"gwt":-1,"hashr":"0:7;2;7;8;5;6#2;2;2;9;9;4#6;7;4;5;3;7#6;7;5;9#6;8#R#2#01101121#MV#0.40#MT#1#R#6#021324#MV#0.40#MT#1#R#7#00122023#MV#0.40#MT#1#MG#0.52###9573","imw":false,"lw":{"2":4,"6":0.4,"7":0.8},"lwa":5.2,"ml":10,"mr":null,"ngm":2,"ngs":null,"np":0.12,"nst":4,"ocr":null,"orl":[7,2,6,2,2,7,6,7,2,4,7,6,8,9,5,5,8,5,9,3,9,6,4,7],"pcwc":1,"pf":1,"pmt":null,"prbr":[1,3,4,8,2,6,11,0,5,7,10],"psid":"1861805269489549312","rl":[7,2,6,2,2,7,6,7,2,4,7,6,8,9,5,5,8,5,9,3,9,6,4,7],"rns":null,"rwsp":{"2":10,"6":2,"7":2},"sc":0,"sid":"1861805269489549312","snww":{"2":2,"6":1,"7":2},"ssaw":5.2,"st":1,"tb":4,"tbb":4,"tw":5.2,"twbm":5.2,"wbn":null,"wfg":null,"wgs":[],"wid":0,"wk":"0_C","wp":{"2":[1,3,4,8],"6":[2,6,11],"7":[0,5,7,10]},"wpl":[1,3,4,8,2,6,11,0,5,7,10],"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_wildbountysdjson;
DELIMITER //
CREATE PROCEDURE create_and_return_wildbountysdjson(p_id INT)
BEGIN
	INSERT INTO wildbountysdjson (id) VALUES (p_id);
	SELECT * FROM  wildbountysdjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_wildbountysdjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_wildbountysdjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE wildbountysdjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_wildbountysdjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_wildbountysdjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE wildbountysdjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `speedwinnerjson`;
CREATE TABLE `speedwinnerjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"acw":50,"aw":50,"bl":952329.39,"blab":952279.39,"blb":952279.39,"bwp":null,"cs":1,"ctw":50,"cwc":1,"eb":{"1":{"bt":2,"fp":8,"lp":9,"ls":1},"3":{"bt":2,"fp":13,"lp":14,"ls":1},"4":{"bt":2,"fp":16,"lp":17,"ls":1},"5":{"bt":2,"fp":18,"lp":19,"ls":1},"6":{"bt":2,"fp":23,"lp":24,"ls":1}},"ebb":{"1":{"bt":2,"fp":8,"lp":9,"ls":1},"3":{"bt":2,"fp":13,"lp":14,"ls":1},"4":{"bt":2,"fp":16,"lp":17,"ls":1},"5":{"bt":2,"fp":18,"lp":19,"ls":1},"6":{"bt":2,"fp":23,"lp":24,"ls":1}},"es":{"1":[8,9],"3":[13,14],"4":[16,17],"5":[18,19],"6":[23,24]},"esb":{"1":[8,9],"3":[13,14],"4":[16,17],"5":[18,19],"6":[23,24]},"fb":null,"fs":null,"fstc":{"4":2},"ge":[1,11],"gwt":-1,"hashr":"2:10;1;9;6;11;8#5;6;7;1;12;10#10;6;7;1;11;8#10;10;1;4;5;6#6;10;1;4;5;10#MV#0#MT#1#MG#0.10###5912","lw":null,"md":null,"ml":10,"mr":null,"now":12500,"nowpr":[5,5,5,4,5,5],"np":0.1,"nst":1,"ocr":null,"orl":[10,5,10,10,6,1,6,6,10,10,9,7,7,1,1,6,1,1,4,4,11,12,11,5,5,8,10,8,6,10],"pcwc":0,"pf":1,"pmt":null,"psid":"1861805073280032768","ptbr":null,"rl":[10,5,10,10,6,1,6,6,10,10,9,7,7,1,1,6,1,1,4,4,11,12,11,5,5,8,10,8,6,10],"rs":{"espt":{"3":{"np":[13,14],"op":[12,13]}},"rnebk":null,"rns":[[10],[1],[9],[],[],[]],"trns":[]},"rwsp":null,"sc":3,"sid":"1861805282244452352","snww":null,"st":4,"tb":200,"tbb":200,"tgm":0,"tmd":null,"torl":null,"tptbr":null,"trl":[7,7,6,6],"tw":50,"twp":null,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_speedwinnerjson;
DELIMITER //
CREATE PROCEDURE create_and_return_speedwinnerjson(p_id INT)
BEGIN
	INSERT INTO speedwinnerjson (id) VALUES (p_id);
	SELECT * FROM  speedwinnerjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_speedwinnerjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_speedwinnerjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE speedwinnerjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_speedwinnerjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_speedwinnerjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE speedwinnerjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `legendperseusjson`;
CREATE TABLE `legendperseusjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":40,"bl":947309.48,"blab":947269.48,"blb":947269.48,"bwp":null,"cs":1,"ctw":0,"cwc":0,"es":{"2":[21,22,26,27],"3":[18,19]},"esb":{"2":[21,22,26,27],"3":[18,19]},"esm":{"2":4},"esmb":{"2":4},"fb":null,"fs":null,"fstc":{"4":1},"ge":[1,11],"gm":4,"gwt":-1,"hashr":"1:6;10;11;12;9;11#6;11;9;12;10;10#6;8;5;12;10;10#6;8;5;1;11;10#12;12;5;1;7;7#MV#0#MT#4#MG#0###7743","lw":null,"ml":10,"mr":null,"now":8000,"nowpr":[5,5,5,4,4,4],"np":0,"nst":1,"ocr":null,"orl":null,"pcwc":0,"pf":1,"pmt":null,"psid":"1861723393970229248","rl":[6,6,6,6,12,10,11,8,8,12,11,9,5,5,5,12,12,12,1,1,9,10,10,11,7,11,10,10,10,7],"rs":{"nes":{},"nesm":{},"rns":[[6,6,6,6],[10,11,8],[11,9],[],[],[]]},"rwsp":null,"sc":1,"sid":"1861723403935895552","snww":null,"ssaw":40,"st":4,"tb":200,"tbb":200,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_legendperseusjson;
DELIMITER //
CREATE PROCEDURE create_and_return_legendperseusjson(p_id INT)
BEGIN
	INSERT INTO legendperseusjson (id) VALUES (p_id);
	SELECT * FROM  legendperseusjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_legendperseusjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_legendperseusjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE legendperseusjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_legendperseusjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_legendperseusjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE legendperseusjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `hawaiiantikijson`;
CREATE TABLE `hawaiiantikijson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":10,"bl":952495.57,"blab":952485.57,"blb":952685.57,"cs":1,"ctw":10,"cwc":1,"ewl":[2,0],"ewp":[[8,9],null],"ewpb":[[8],null],"fb":null,"fs":null,"fstc":null,"ge":[3,11],"gm":1,"gmi":1,"gmib":0,"gwt":-1,"hashr":"0:12;10;10;11;7;10#7;12;0;6;12;11#9;4;0;11;9;6#11;8;8;9#9;2#R#12#001121#MV#0.40#MT#1#MG#0.02###3140","lw":{"12":10},"ml":10,"mr":null,"np":-0.38,"nst":4,"ocr":null,"oew":[8,0],"orl":[12,7,9,10,12,4,11,10,10,11,8,9,11,6,11,8,2,7,12,9,9,10,11,6],"otw":0.02,"pcwc":1,"pf":1,"pmt":null,"psid":"1861805270114627584","ptbr":[0,4],"rl":[12,7,9,10,12,4,11,10,0,0,8,9,11,6,11,8,2,7,12,9,9,10,11,6],"rs":null,"rwsp":{"12":1},"sc":0,"sid":"1861805270114627584","snw":{"12":1},"ssaw":10,"st":1,"tb":200,"tbb":200,"tw":10,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":{"12":[0,4,8]},"wpl":[0,4,8],"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_hawaiiantikijson;
DELIMITER //
CREATE PROCEDURE create_and_return_hawaiiantikijson(p_id INT)
BEGIN
	INSERT INTO hawaiiantikijson (id) VALUES (p_id);
	SELECT * FROM  hawaiiantikijson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_hawaiiantikijson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_hawaiiantikijson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE hawaiiantikijson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_hawaiiantikijson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_hawaiiantikijson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE hawaiiantikijson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `gladigloryjson`;
CREATE TABLE `gladigloryjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"actw":0,"aw":0,"bl":952280.19,"blab":952280.19,"blb":952280.59,"crtw":0,"cs":0.02,"ctw":0,"cwc":0,"cwsp":null,"fb":null,"fs":null,"fstc":null,"ge":[1,11],"gm":0,"gwt":-1,"hashr":"0:9;2;5;10;4#4;3;8;7;5#12;5;10;3;11#11;8;7#7#MV#0.40#MT#1#MG#0###8902","imw":false,"lw":null,"ml":1,"mr":null,"np":-0.4,"nst":1,"ocr":null,"orl":[9,4,12,2,3,5,11,5,8,10,8,7,10,7,3,7,4,5,11],"pcwc":0,"pf":1,"pmt":null,"psid":"1861805280218738688","ptbr":null,"rl":[9,4,12,2,3,5,11,5,8,10,8,7,10,7,3,7,4,5,11],"rns":null,"rwsp":null,"sc":0,"sid":"1861805280218738688","snww":null,"st":1,"tb":0.4,"tbb":0.4,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wm":null,"wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_gladigloryjson;
DELIMITER //
CREATE PROCEDURE create_and_return_gladigloryjson(p_id INT)
BEGIN
	INSERT INTO gladigloryjson (id) VALUES (p_id);
	SELECT * FROM  gladigloryjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_gladigloryjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_gladigloryjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE gladigloryjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_gladigloryjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_gladigloryjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE gladigloryjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `pinatawinsjson`;
CREATE TABLE `pinatawinsjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":952285.09,"blab":952285.09,"blb":952285.49,"cgm":0,"cgsp":null,"crtw":0,"cs":0.02,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":[1,11],"gm":1,"gsp":[5,7,8],"gwt":-1,"hashr":"0:8;4;8;9;2#5;4;5;4;7#8;6;5;1;7#5;9;5;6;5#MV#0.40#MT#1#MG#0###4661","imw":false,"ir":false,"lw":null,"mf":{"5":0,"7":0,"8":0},"ml":1,"mr":null,"ngsp":null,"np":-0.4,"nst":1,"ocr":null,"orl":[8,5,8,5,4,4,6,9,8,5,5,5,9,4,1,6,2,7,7,5],"pcwc":0,"pf":1,"pgm":1,"pmt":null,"psid":"1861805274116079616","ptr":null,"rl":[8,5,8,5,4,4,6,9,8,5,5,5,9,4,1,6,2,7,7,5],"rns":null,"rwsp":null,"sc":1,"sid":"1861805274116079616","ssaw":0,"st":1,"tb":0.4,"tbb":0.4,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wsp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_pinatawinsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_pinatawinsjson(p_id INT)
BEGIN
	INSERT INTO pinatawinsjson (id) VALUES (p_id);
	SELECT * FROM  pinatawinsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_pinatawinsjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_pinatawinsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE pinatawinsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_pinatawinsjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_pinatawinsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE pinatawinsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `legendofhouyijson`;
CREATE TABLE `legendofhouyijson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":1108446.36,"blab":1108446.36,"blb":1108446.66,"cs":0.01,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":[1,11],"gwt":-1,"hashr":"0:3;4;1;0;9#9;1;7;9;6#10;9;5;4;7#MV#0.30#MT#1#MG#0###5221","lw":null,"ml":1,"mr":null,"np":-0.3,"nst":1,"ocr":null,"orl":null,"pcwc":0,"pf":1,"pmt":null,"pow":null,"psid":"1861124130756329472","rl":[3,9,10,4,1,9,1,7,5,0,9,4,9,6,7],"rwsp":null,"sc":2,"shd":null,"sid":"1861124130756329472","sp":[4,6],"st":1,"tb":0.3,"tbb":0.3,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_legendofhouyijson;
DELIMITER //
CREATE PROCEDURE create_and_return_legendofhouyijson(p_id INT)
BEGIN
	INSERT INTO legendofhouyijson (id) VALUES (p_id);
	SELECT * FROM  legendofhouyijson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_legendofhouyijson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_legendofhouyijson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE legendofhouyijson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_legendofhouyijson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_legendofhouyijson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE legendofhouyijson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `fortunegodsjson`;
CREATE TABLE `fortunegodsjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":952885.7,"blab":952885.7,"blb":952886.15,"cs":0.03,"ctw":0,"cwc":0,"fb":null,"fstc":null,"ge":[1,11],"gwt":-1,"hashr":"0:5;4;3;5;5#4;5;3;5;3#2;3;3;5;6#MV#0.45#MT#1#MG#0###2169","lw":null,"ml":1,"mr":null,"np":-0.45,"nst":1,"ocr":null,"pcwc":0,"pf":1,"pmt":null,"psid":"1861816279017705472","rl":[5,4,2,4,5,3,3,3,3,5,5,5,5,3,6],"rn":1,"rs":null,"rwsp":null,"sid":"1861816279017705472","st":1,"tb":0.45,"tbb":0.45,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_fortunegodsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_fortunegodsjson(p_id INT)
BEGIN
	INSERT INTO fortunegodsjson (id) VALUES (p_id);
	SELECT * FROM  fortunegodsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_fortunegodsjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_fortunegodsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE fortunegodsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_fortunegodsjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_fortunegodsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE fortunegodsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `tsartreasuresjson`;
CREATE TABLE `tsartreasuresjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":4.08,"bl":952947.62,"blab":952943.54,"blb":952943.54,"cs":0.02,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":{"4":4},"ge":[1,11],"gm":8,"gwt":-1,"hashr":"4:9;9;7;5;8#9;5;4;5;6#5;9;6;1;6#6;7;4#MV#0#MT#8#MG#0###7184","imw":false,"lw":null,"ml":1,"mr":null,"np":0,"nst":1,"ocr":null,"orl":[9,9,5,9,5,9,6,7,4,6,7,5,5,1,4,8,6,6],"pcwc":0,"pf":1,"pmt":null,"psid":"1861816513403719680","rl":[9,9,5,9,5,9,6,7,4,6,7,5,5,1,4,8,6,6],"rns":[[9],[9],[7],[5],[8]],"rwsp":null,"sc":1,"sid":"1861816569410260992","snww":null,"ssaw":4.08,"st":4,"tb":0.4,"tbb":0.4,"tsp":null,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_tsartreasuresjson;
DELIMITER //
CREATE PROCEDURE create_and_return_tsartreasuresjson(p_id INT)
BEGIN
	INSERT INTO tsartreasuresjson (id) VALUES (p_id);
	SELECT * FROM  tsartreasuresjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_tsartreasuresjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_tsartreasuresjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE tsartreasuresjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_tsartreasuresjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_tsartreasuresjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE tsartreasuresjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `totemwondersjson`;
CREATE TABLE `totemwondersjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":952940.01,"blab":952940.01,"blb":952940.51,"clm":[3,2,1],"cm":2,"crm":[3,1,2],"cs":0.05,"ctw":0,"cwc":0,"fb":null,"fstc":null,"ge":[1,11],"gwt":-1,"hashr":"0:2;6;3#2;7;5#2;7;5#99;5;99#MV#0.50#MT#2#MG#0###4211","hdswf":false,"lw":null,"ml":1,"mr":null,"np":-0.5,"nst":1,"ocr":null,"orl":[2,2,2,99,6,7,7,5,3,5,5,99],"pcwc":0,"pf":1,"pmt":null,"psid":"1861816421565382656","rl":[2,2,2,99,6,7,7,5,3,5,5,99],"rwsp":null,"sid":"1861816421565382656","st":1,"tb":0.5,"tbb":0.5,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_totemwondersjson;
DELIMITER //
CREATE PROCEDURE create_and_return_totemwondersjson(p_id INT)
BEGIN
	INSERT INTO totemwondersjson (id) VALUES (p_id);
	SELECT * FROM  totemwondersjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_totemwondersjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_totemwondersjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE totemwondersjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_totemwondersjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_totemwondersjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE totemwondersjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `forgewealthjson`;
CREATE TABLE `forgewealthjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"acmp":null,"atw":0.04,"aw":0.04,"bl":952828.18,"blab":952828.14,"blb":952828.14,"cmp":null,"cs":0.02,"ctw":0,"cwc":1,"fb":null,"fs":null,"fstc":{"4":1},"ge":[1,11],"gm":1,"gwt":-1,"hashr":"1:4;9;8;11;9;3#8;7;8;11;11;5#6;9;9;3;8;11#6;3;9;3;2;11#2;5;7;8;4;7#MV#0#MT#1#MG#0.04###6050","ima":false,"imw":false,"ml":1,"mr":null,"np":0.04,"nst":1,"ocr":null,"orl":[4,8,6,6,2,9,7,9,3,5,8,8,9,9,7,11,11,3,3,8,9,11,8,2,4,3,5,11,11,7],"pcwc":0,"pf":1,"pmt":null,"psid":"1861816154765729792","rl":[4,8,6,6,2,9,7,9,3,5,8,8,9,9,7,11,11,3,3,8,9,11,8,2,4,3,5,11,11,7],"rm":{"21":[1,0],"23":[0,0],"6":[0,0],"8":[0,0]},"rns":[[4],[9],[8,8],[11,11],[9,11],[]],"rwsp":null,"sc":0,"sid":"1861816167755489280","st":4,"sw":null,"tb":0.4,"tbb":0.4,"tw":0.04,"twbm":0.04,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wsc":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_forgewealthjson;
DELIMITER //
CREATE PROCEDURE create_and_return_forgewealthjson(p_id INT)
BEGIN
	INSERT INTO forgewealthjson (id) VALUES (p_id);
	SELECT * FROM  forgewealthjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_forgewealthjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_forgewealthjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE forgewealthjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_forgewealthjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_forgewealthjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE forgewealthjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `luckycloverjson`;
CREATE TABLE `luckycloverjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":952640.4,"blab":952640.4,"blb":952640.8,"crtw":0,"cs":0.02,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":[1,11],"gm":1,"gwt":-1,"hashr":"0:11;11;11;10;10;9#2;2;8;10;10;11#2;2;8;9;2;11#9;4;10;9;2;8#9;4;10;11;11;8#MV#0.40#MT#1#MG#0###3067","ifa":false,"imw":false,"inwsf":false,"mf":null,"ml":1,"mr":null,"np":-0.4,"nst":1,"nus":-1,"nwpl":null,"ocr":null,"orl":[11,2,2,9,9,11,2,2,4,4,11,8,8,10,10,10,10,9,9,11,10,10,2,2,11,9,11,11,8,8],"pcwc":0,"pf":1,"pmt":null,"psid":"1861813297618444288","ptbr":null,"ptu":null,"rl":[11,2,2,9,9,11,2,2,4,4,11,8,8,10,10,10,10,9,9,11,10,10,2,2,11,9,11,11,8,8],"rns":null,"rwsp":{},"sc":0,"sid":"1861813297618444288","ssaw":0,"st":1,"sw":null,"tb":0.4,"tbb":0.4,"tw":0,"twbm":0,"usf":null,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wsc":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_luckycloverjson;
DELIMITER //
CREATE PROCEDURE create_and_return_luckycloverjson(p_id INT)
BEGIN
	INSERT INTO luckycloverjson (id) VALUES (p_id);
	SELECT * FROM  luckycloverjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_luckycloverjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_luckycloverjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE luckycloverjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_luckycloverjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_luckycloverjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE luckycloverjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `mystspiritsjson`;
CREATE TABLE `mystspiritsjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0.68,"bl":952881.14,"blab":952880.46,"blb":952880.46,"bwp":null,"cs":0.02,"ctw":0,"cwc":0,"eb":{"2":{"bt":2,"fp":8,"lp":9,"ls":1},"5":{"bt":2,"fp":16,"lp":17,"ls":1},"6":{"bt":2,"fp":18,"lp":19,"ls":1},"7":{"bt":2,"fp":21,"lp":22,"ls":1},"8":{"bt":2,"fp":23,"lp":24,"ls":1},"9":{"bt":2,"fp":12,"lp":14,"ls":1}},"ebb":{"2":{"bt":2,"fp":8,"lp":9,"ls":1},"5":{"bt":2,"fp":16,"lp":17,"ls":1},"6":{"bt":2,"fp":18,"lp":19,"ls":1},"7":{"bt":2,"fp":21,"lp":22,"ls":1},"8":{"bt":2,"fp":23,"lp":24,"ls":1},"9":{"bt":2,"fp":12,"lp":14,"ls":1}},"em":{"2":1,"3":1,"4":3},"emb":{"2":1,"3":1,"4":3},"eo":{"2":4,"3":2,"4":0},"eob":{"2":4,"3":2,"4":0},"es":{"2":[8,9],"5":[16,17],"6":[18,19],"7":[21,22],"8":[23,24],"9":[12,13,14]},"esb":{"2":[8,9],"5":[16,17],"6":[18,19],"7":[21,22],"8":[23,24],"9":[12,13,14]},"fb":null,"fs":null,"fstc":{"4":3},"ge":[1,11],"gm":3,"gwt":-1,"hashr":"3:9;6;7;4;7;9#10;4;4;4;4;10#9;6;4;4;4;6#8;3;4;3;8;2#10;3;4;3;8;8#MV#0#MT#1#MG#0###1045","imw":false,"lw":null,"ml":1,"mr":null,"now":2700,"nowpr":[5,4,3,3,3,5],"np":0,"nst":1,"ocr":null,"orl":[9,10,9,8,10,6,4,6,3,3,7,4,4,4,4,4,4,4,3,3,7,4,4,8,8,9,10,6,2,8],"pcwc":0,"pf":1,"pmt":null,"psid":"1861816209644023808","rl":[9,10,9,8,10,6,4,6,3,3,7,4,4,4,4,4,4,4,3,3,7,4,4,8,8,9,10,6,2,8],"rs":{"espt":{},"neb":null,"nes":null,"rns":[[9],[6],[7],[],[],[]]},"rwsp":null,"sc":0,"sid":"1861816250756591616","snww":null,"ssaw":0.68,"st":4,"tb":0.4,"tbb":0.4,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_mystspiritsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_mystspiritsjson(p_id INT)
BEGIN
	INSERT INTO mystspiritsjson (id) VALUES (p_id);
	SELECT * FROM  mystspiritsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_mystspiritsjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_mystspiritsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE mystspiritsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_mystspiritsjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_mystspiritsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE mystspiritsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
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


DROP TABLE IF EXISTS `legendperseusjson`;
CREATE TABLE `legendperseusjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":40,"bl":947309.48,"blab":947269.48,"blb":947269.48,"bwp":null,"cs":1,"ctw":0,"cwc":0,"es":{"2":[21,22,26,27],"3":[18,19]},"esb":{"2":[21,22,26,27],"3":[18,19]},"esm":{"2":4},"esmb":{"2":4},"fb":null,"fs":null,"fstc":{"4":1},"ge":[1,11],"gm":4,"gwt":-1,"hashr":"1:6;10;11;12;9;11#6;11;9;12;10;10#6;8;5;12;10;10#6;8;5;1;11;10#12;12;5;1;7;7#MV#0#MT#4#MG#0###7743","lw":null,"ml":10,"mr":null,"now":8000,"nowpr":[5,5,5,4,4,4],"np":0,"nst":1,"ocr":null,"orl":null,"pcwc":0,"pf":1,"pmt":null,"psid":"1861723393970229248","rl":[6,6,6,6,12,10,11,8,8,12,11,9,5,5,5,12,12,12,1,1,9,10,10,11,7,11,10,10,10,7],"rs":{"nes":{},"nesm":{},"rns":[[6,6,6,6],[10,11,8],[11,9],[],[],[]]},"rwsp":null,"sc":1,"sid":"1861723403935895552","snww":null,"ssaw":40,"st":4,"tb":200,"tbb":200,"tw":0,"twbm":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_legendperseusjson;
DELIMITER //
CREATE PROCEDURE create_and_return_legendperseusjson(p_id INT)
BEGIN
	INSERT INTO legendperseusjson (id) VALUES (p_id);
	SELECT * FROM  legendperseusjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_legendperseusjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_legendperseusjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE legendperseusjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_legendperseusjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_legendperseusjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE legendperseusjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `hawaiiantikijson`;
CREATE TABLE `hawaiiantikijson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":10,"bl":952495.57,"blab":952485.57,"blb":952685.57,"cs":1,"ctw":10,"cwc":1,"ewl":[2,0],"ewp":[[8,9],null],"ewpb":[[8],null],"fb":null,"fs":null,"fstc":null,"ge":[3,11],"gm":1,"gmi":1,"gmib":0,"gwt":-1,"hashr":"0:12;10;10;11;7;10#7;12;0;6;12;11#9;4;0;11;9;6#11;8;8;9#9;2#R#12#001121#MV#0.40#MT#1#MG#0.02###3140","lw":{"12":10},"ml":10,"mr":null,"np":-0.38,"nst":4,"ocr":null,"oew":[8,0],"orl":[12,7,9,10,12,4,11,10,10,11,8,9,11,6,11,8,2,7,12,9,9,10,11,6],"otw":0.02,"pcwc":1,"pf":1,"pmt":null,"psid":"1861805270114627584","ptbr":[0,4],"rl":[12,7,9,10,12,4,11,10,0,0,8,9,11,6,11,8,2,7,12,9,9,10,11,6],"rs":null,"rwsp":{"12":1},"sc":0,"sid":"1861805270114627584","snw":{"12":1},"ssaw":10,"st":1,"tb":200,"tbb":200,"tw":10,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":{"12":[0,4,8]},"wpl":[0,4,8],"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_hawaiiantikijson;
DELIMITER //
CREATE PROCEDURE create_and_return_hawaiiantikijson(p_id INT)
BEGIN
	INSERT INTO hawaiiantikijson (id) VALUES (p_id);
	SELECT * FROM  hawaiiantikijson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_hawaiiantikijson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_hawaiiantikijson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE hawaiiantikijson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_hawaiiantikijson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_hawaiiantikijson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE hawaiiantikijson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `gladigloryjson`;
CREATE TABLE `gladigloryjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"actw":0.02,"aw":0,"bl":953053.87,"blab":953053.87,"blb":953054.27,"crtw":0,"cs":0.02,"ctw":0.02,"cwc":0,"cwsp":null,"fb":null,"fs":null,"fstc":null,"ge":[1,11],"gm":0,"gwt":-1,"hashr":"0:12;9;5;4;11#6;8;3;10;7#9;12;11;7;3#2;3;3#12#R#12#001224#MV#0.40#MT#1#MG#0###9345","imw":false,"lw":{"12":0.02},"ml":1,"mr":null,"np":-0.4,"nst":4,"ocr":null,"orl":[12,6,9,9,8,12,2,5,3,11,3,12,4,10,7,3,11,7,3],"pcwc":0,"pf":1,"pmt":null,"psid":"1861818797730721792","ptbr":[0,5,11],"rl":[12,6,9,9,8,12,2,5,3,11,3,12,4,10,7,3,11,7,3],"rns":null,"rwsp":{"12":1},"sc":0,"sid":"1861818797730721792","snww":{"12":1},"st":1,"tb":0.4,"tbb":0.4,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wm":{},"wp":{"12":[0,5,11]},"wpl":[0,5,11],"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_gladigloryjson;
DELIMITER //
CREATE PROCEDURE create_and_return_gladigloryjson(p_id INT)
BEGIN
	INSERT INTO gladigloryjson (id) VALUES (p_id);
	SELECT * FROM  gladigloryjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_gladigloryjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_gladigloryjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE gladigloryjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_gladigloryjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_gladigloryjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE gladigloryjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `pinatawinsjson`;
CREATE TABLE `pinatawinsjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":952851.72,"blab":952851.72,"blb":952852.12,"cgm":0,"cgsp":null,"crtw":0,"cs":0.02,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":[1,11],"gm":1,"gsp":[7],"gwt":-1,"hashr":"0:6;5;6;10;9#6;3;7;2;3#8;9;5;10;3#8;8;6;3;1#MV#0.40#MT#1#MG#0###2686","imw":false,"ir":false,"lw":null,"mf":{"7":0},"ml":1,"mr":null,"ngsp":null,"np":-0.4,"nst":1,"ocr":null,"orl":[6,6,8,8,5,3,9,8,6,7,5,6,10,2,10,3,9,3,3,1],"pcwc":0,"pf":1,"pgm":1,"pmt":null,"psid":"1861818806207463424","ptr":null,"rl":[6,6,8,8,5,3,9,8,6,7,5,6,10,2,10,3,9,3,3,1],"rns":null,"rwsp":null,"sc":1,"sid":"1861818806207463424","ssaw":0,"st":1,"tb":0.4,"tbb":0.4,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wsp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_pinatawinsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_pinatawinsjson(p_id INT)
BEGIN
	INSERT INTO pinatawinsjson (id) VALUES (p_id);
	SELECT * FROM  pinatawinsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_pinatawinsjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_pinatawinsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE pinatawinsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_pinatawinsjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_pinatawinsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE pinatawinsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `totemwondersjson`;
CREATE TABLE `totemwondersjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":1.35,"bl":952896.65,"blab":952895.3,"blb":952895.8,"clm":[2,3,2],"cm":3,"crm":[2,0,1],"cs":0.05,"ctw":0.45,"cwc":1,"fb":null,"fstc":null,"ge":[3,11],"gwt":-1,"hashr":"0:7;7;0#4;7;0#6;2;0#99;6;99#R#7#001020#MV#0.50#MT#3#R#7#001120#MV#0.50#MT#3#R#7#001121#MV#0.50#MT#3#R#6#021322#MV#0.50#MT#3#MG#1.35###1589","hdswf":false,"lw":{"1":0.1,"10":0.15,"2":0.1,"3":0.1},"ml":1,"mr":null,"np":0.85,"nst":1,"ocr":null,"orl":[7,4,6,99,7,7,2,6,3,5,6,99],"pcwc":1,"pf":1,"pmt":null,"psid":"1861818817620262912","rl":[7,4,6,99,7,7,2,6,0,0,0,99],"rwsp":{"1":2,"10":3,"2":2,"3":2},"sid":"1861818817620262912","st":1,"tb":0.5,"tbb":0.5,"tw":1.35,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":{"1":[0,4,8],"10":[2,7,10],"2":[0,5,8],"3":[0,5,9]},"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_totemwondersjson;
DELIMITER //
CREATE PROCEDURE create_and_return_totemwondersjson(p_id INT)
BEGIN
	INSERT INTO totemwondersjson (id) VALUES (p_id);
	SELECT * FROM  totemwondersjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_totemwondersjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_totemwondersjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE totemwondersjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_totemwondersjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_totemwondersjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE totemwondersjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `forgewealthjson`;
CREATE TABLE `forgewealthjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"acmp":null,"atw":0.04,"aw":0.04,"bl":952828.18,"blab":952828.14,"blb":952828.14,"cmp":null,"cs":0.02,"ctw":0,"cwc":1,"fb":null,"fs":null,"fstc":{"4":1},"ge":[1,11],"gm":1,"gwt":-1,"hashr":"1:4;9;8;11;9;3#8;7;8;11;11;5#6;9;9;3;8;11#6;3;9;3;2;11#2;5;7;8;4;7#MV#0#MT#1#MG#0.04###6050","ima":false,"imw":false,"ml":1,"mr":null,"np":0.04,"nst":1,"ocr":null,"orl":[4,8,6,6,2,9,7,9,3,5,8,8,9,9,7,11,11,3,3,8,9,11,8,2,4,3,5,11,11,7],"pcwc":0,"pf":1,"pmt":null,"psid":"1861816154765729792","rl":[4,8,6,6,2,9,7,9,3,5,8,8,9,9,7,11,11,3,3,8,9,11,8,2,4,3,5,11,11,7],"rm":{"21":[1,0],"23":[0,0],"6":[0,0],"8":[0,0]},"rns":[[4],[9],[8,8],[11,11],[9,11],[]],"rwsp":null,"sc":0,"sid":"1861816167755489280","st":4,"sw":null,"tb":0.4,"tbb":0.4,"tw":0.04,"twbm":0.04,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wsc":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_forgewealthjson;
DELIMITER //
CREATE PROCEDURE create_and_return_forgewealthjson(p_id INT)
BEGIN
	INSERT INTO forgewealthjson (id) VALUES (p_id);
	SELECT * FROM  forgewealthjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_forgewealthjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_forgewealthjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE forgewealthjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_forgewealthjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_forgewealthjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE forgewealthjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;


DROP TABLE IF EXISTS `hawaiiantikijson`;
CREATE TABLE `hawaiiantikijson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":10,"bl":955434.81,"blab":955424.81,"blb":955424.81,"cs":1,"ctw":0,"cwc":0,"ewl":[2,0],"ewp":[[8,9],null],"ewpb":[[8,9],null],"fb":null,"fs":null,"fstc":{"4":1},"ge":[1,11],"gm":1,"gmi":1,"gmib":1,"gwt":-1,"hashr":"1:8;10;10;11;7;10#7;10;0;6;12;11#9;4;0;11;9;6#11;8;8;9#9;2#MV#0#MT#1#MG#0###5945","lw":null,"ml":10,"mr":null,"np":0,"nst":1,"ocr":null,"oew":[8,0],"orl":[8,7,9,10,10,4,11,10,0,0,8,9,11,6,11,8,2,7,12,9,9,10,11,6],"otw":0,"pcwc":0,"pf":1,"pmt":null,"psid":"1861805270114627584","ptbr":null,"rl":[8,7,9,10,10,4,11,10,0,0,8,9,11,6,11,8,2,7,12,9,9,10,11,6],"rs":{"rns":[[8],[10],null,null,null,null]},"rwsp":null,"sc":0,"sid":"1861819806133645312","snw":null,"ssaw":10,"st":4,"tb":200,"tbb":200,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wpl":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_hawaiiantikijson;
DELIMITER //
CREATE PROCEDURE create_and_return_hawaiiantikijson(p_id INT)
BEGIN
	INSERT INTO hawaiiantikijson (id) VALUES (p_id);
	SELECT * FROM  hawaiiantikijson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_hawaiiantikijson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_hawaiiantikijson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE hawaiiantikijson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_hawaiiantikijson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_hawaiiantikijson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE hawaiiantikijson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP TABLE IF EXISTS `pinatawinsjson`;
CREATE TABLE `pinatawinsjson` (
  `id` int NOT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT (_utf8mb4'{"dt":{"si":{"aw":0,"bl":952851.72,"blab":952851.72,"blb":952852.12,"cgm":0,"cgsp":null,"crtw":0,"cs":0.02,"ctw":0,"cwc":0,"fb":null,"fs":null,"fstc":null,"ge":[1,11],"gm":1,"gsp":[7],"gwt":-1,"hashr":"0:6;5;6;10;9#6;3;7;2;3#8;9;5;10;3#8;8;6;3;1#MV#0.40#MT#1#MG#0###2686","imw":false,"ir":false,"lw":null,"mf":{"7":0},"ml":1,"mr":null,"ngsp":null,"np":-0.4,"nst":1,"ocr":null,"orl":[6,6,8,8,5,3,9,8,6,7,5,6,10,2,10,3,9,3,3,1],"pcwc":0,"pf":1,"pgm":1,"pmt":null,"psid":"1861818806207463424","ptr":null,"rl":[6,6,8,8,5,3,9,8,6,7,5,6,10,2,10,3,9,3,3,1],"rns":null,"rwsp":null,"sc":1,"sid":"1861818806207463424","ssaw":0,"st":1,"tb":0.4,"tbb":0.4,"tw":0,"wbn":null,"wfg":null,"wid":0,"wk":"0_C","wp":null,"wsp":null,"wt":"C"}} }')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP PROCEDURE IF EXISTS create_and_return_pinatawinsjson;
DELIMITER //
CREATE PROCEDURE create_and_return_pinatawinsjson(p_id INT)
BEGIN
	INSERT INTO pinatawinsjson (id) VALUES (p_id);
	SELECT * FROM  pinatawinsjson WHERE id = p_id LIMIT 1;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_completecall_savejson_pinatawinsjson;
DELIMITER //
CREATE PROCEDURE sp_completecall_savejson_pinatawinsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET status = "completed" WHERE id = in_call_id;
	  UPDATE pinatawinsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_subtrirstepscall_savejson_pinatawinsjson;
DELIMITER //
CREATE PROCEDURE sp_subtrirstepscall_savejson_pinatawinsjson(IN in_call_id INT, IN in_user_id INT, IN in_json longtext)
BEGIN
    UPDATE calls SET steps = steps - 1 WHERE id = in_call_id;
	  UPDATE pinatawinsjson SET JSON = in_json WHERE id = in_user_id LIMIT 1;
END //
DELIMITER ;