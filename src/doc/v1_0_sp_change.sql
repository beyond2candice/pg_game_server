DROP PROCEDURE IF EXISTS sp_update_user_lost;
DELIMITER //

CREATE PROCEDURE sp_update_user_lost(
    IN in_user_id INT,
    IN in_bet FLOAT,
    IN in_new_balance FLOAT,
    IN in_rtp_call_id INT,
    IN in_game_code INT,
    IN in_from_reward_pool TINYINT,
    IN real_reward_pool_score FLOAT
)
BEGIN
    UPDATE users SET saldo = in_new_balance, valordebitado = valordebitado + in_bet, valorapostado = valorapostado + in_bet WHERE id = in_user_id;
    IF in_rtp_call_id > 0 THEN
        UPDATE gamertpcall SET `real`=`real`-in_bet, status = 2 WHERE id = in_rtp_call_id;
    END IF;
    IF NOT in_from_reward_pool > 0 THEN
        UPDATE  `global_score_pool` SET `total_score` = `total_score` +  in_bet * `lost_entry_pool_rate` / 100, `game_total_bet` = `game_total_bet` + in_bet WHERE id = 1;
    ELSE
        UPDATE `global_score_pool` SET `total_score` = `total_score` + real_reward_pool_score, `game_total_bet` = `game_total_bet` + in_bet WHERE id = 1;
    END IF;
    SELECT 1 AS Result;
END //

DELIMITER ;

DROP PROCEDURE IF EXISTS sp_update_user_win;
DELIMITER //

CREATE PROCEDURE sp_update_user_win(
    IN in_user_id INT,
    IN in_bet FLOAT,
    IN in_new_balance FLOAT,
    IN in_win FLOAT,
    IN in_rtp_call_id INT,
    IN in_game_code INT,
    IN in_from_reward_pool TINYINT,
    IN real_reward_pool_score FLOAT
)
BEGIN
    IF in_rtp_call_id > 0 THEN
        UPDATE users SET saldo =in_new_balance, valordebitado = valordebitado +in_bet, valorapostado = valorapostado +in_bet, valorganho = valorganho +in_win, call_score = call_score+in_win WHERE id=in_user_id;
        UPDATE gamertpcall SET `real`=`real`+in_win, status = 2 WHERE id = in_rtp_call_id;
    ELSE
        UPDATE users SET saldo =in_new_balance, valordebitado = valordebitado +in_bet, valorapostado = valorapostado +in_bet, valorganho = valorganho +in_win WHERE id=in_user_id;
    END IF;

    IF in_from_reward_pool > 0 THEN
        IF in_win < real_reward_pool_score THEN
            UPDATE `global_score_pool` SET `total_score` = `total_score` + (real_reward_pool_score - in_win), `game_total_bet` = `game_total_bet` + in_bet, `game_total_win` =  `game_total_win` + in_win  WHERE id = 1;
        ELSE
            UPDATE `global_score_pool` SET `total_score` = GREATEST(0,`total_score` - (in_win - real_reward_pool_score)), `game_total_bet` = `game_total_bet` + in_bet, `game_total_win` =  `game_total_win` + in_win  WHERE id = 1;
        END IF;
    ELSE
        IF in_win < in_bet THEN
            UPDATE  `global_score_pool` SET `total_score` = `total_score` +  (in_bet - in_win) * `lost_entry_pool_rate` / 100, `game_total_bet` = `game_total_bet` + in_bet, `game_total_win` =  `game_total_win` + in_win WHERE id = 1;
        ELSE
            UPDATE `global_score_pool` SET `total_score` = GREATEST(0, `total_score` - (in_win - in_bet) * `win_entry_pool_rate`/100), `game_total_bet` = `game_total_bet` + in_bet, `game_total_win` =  `game_total_win` + in_win WHERE id = 1;
        END IF;
    END IF;
    SELECT 1 AS Result;
END //

DELIMITER ;

DROP PROCEDURE IF EXISTS sp_get_call_or_game_rtp_call;
DELIMITER //

CREATE PROCEDURE sp_get_call_or_game_rtp_call(
    IN in_user_id INT,  
    IN in_user_code VARCHAR(50), 
    IN in_game_code VARCHAR(50), 
    IN in_game_id INT,
    IN in_bet FLOAT,
    IN in_user_rtp SMALLINT,
    IN in_user_real_rtp SMALLINT
)
BEGIN
    -- 声明变量用于存储查询结果
    DECLARE call_id INT;
    DECLARE rtp_call_id INT;
    DECLARE found_bet FLOAT;
    DECLARE pool_total_score FLOAT;
    DECLARE pool_reward_score_start FLOAT;
    DECLARE game_big_reward_rtp SMALLINT;
    DECLARE user_big_reward_rate_rtp SMALLINT;
    DECLARE game_lower_reward_rtp SMALLINT;
    DECLARE user_lower_reward_rate_rtp SMALLINT;
    DECLARE reward_rtp SMALLINT;
    DECLARE pool_reward_sore FLOAT;
    DECLARE game_rtp SMALLINT;

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
            SELECT `total_score`, `begin_reward_score`, `game_rtp_big_reward`, `user_rtp_big_reward_rate`, `game_rtp_lower_reward`, `user_rtp_lower_reward_rate`, FLOOR(`game_total_win`*100/`game_total_bet`)  INTO pool_total_score, pool_reward_score_start, game_big_reward_rtp, user_big_reward_rate_rtp, game_lower_reward_rtp, user_lower_reward_rate_rtp, game_rtp FROM global_score_pool WHERE id = 1;
            -- 池积分大于1000受控
            IF pool_total_score >= pool_reward_score_start THEN
                -- 玩家rtp小于30给大
                IF game_rtp <= game_big_reward_rtp THEN
                    SELECT in_user_rtp * user_big_reward_rate_rtp INTO  reward_rtp; 
                    IF reward_rtp > 100 THEN 
                        SELECT pool_total_score INTO  pool_reward_sore;
                        IF pool_reward_sore <= pool_total_score THEN
                            UPDATE global_score_pool SET `total_score` = `total_score` - pool_reward_sore WHERE id = 1; 
                            SELECT reward_rtp, pool_reward_sore;
                        ELSE
                            SELECT pool_total_score,game_rtp,game_big_reward_rtp, game_lower_reward_rtp, 1, NULL;
                        END IF;
                    ELSE
                        SELECT NULL;
                    END IF;
                ELSEIF game_rtp <= game_lower_reward_rtp THEN 
                    SELECT in_user_rtp * user_lower_reward_rate_rtp INTO  reward_rtp;  
                    IF reward_rtp > 100 THEN 
                        SELECT pool_total_score INTO  pool_reward_sore;
                        IF pool_reward_sore <= pool_total_score THEN
                            UPDATE global_score_pool SET `total_score` = `total_score` - pool_reward_sore WHERE id = 1; 
                            SELECT reward_rtp, pool_reward_sore;
                        ELSE
                            SELECT pool_total_score,game_rtp,game_big_reward_rtp, game_lower_reward_rtp, 2, NULL;
                        END IF;
                    ELSE
                        SELECT pool_total_score,game_rtp,game_big_reward_rtp, game_lower_reward_rtp, 3, NULL;
                    END IF;
                ELSE
                    SELECT pool_total_score,game_rtp,game_big_reward_rtp, game_lower_reward_rtp, 4, NULL;
                END IF;
            ELSE
                SELECT pool_total_score,game_rtp,game_big_reward_rtp, game_lower_reward_rtp, 5, NULL;
            END IF;
        END IF;
    END IF;
END //

DELIMITER ;
DROP PROCEDURE IF EXISTS sp_add_and_return_call;
DELIMITER //
CREATE PROCEDURE sp_add_and_return_call(IN in_iduser INT, IN in_gamecode VARCHAR(50), IN in_step INT, IN in_json VARCHAR(1024), IN in_rtp_call_id INT , IN in_from_reward_pool TINYINT, IN in_reward_pool_score FLOAT, IN in_real_score FLOAT) BEGIN
    IF in_real_score < in_reward_pool_score THEN
        UPDATE `global_score_pool` SET `total_score` = `total_score` + (in_reward_pool_score - in_real_score)  WHERE id = 1;
    END IF;
    INSERT INTO calls (iduser, gamecode, jsonname, steps, bycall, rtpcallid,call_rtp_id, from_reward_pool, reward_pool_score) VALUES (in_iduser, in_gamecode, in_json, in_step, 'system', in_rtp_call_id, in_rtp_call_id, in_from_reward_pool, in_real_score);
    SELECT * FROM calls WHERE id = LAST_INSERT_ID() LIMIT 1;
END //
DELIMITER ;