ALTER TABLE `calls` ADD `rtpcallid` INT NOT NULL DEFAULT '0' AFTER `status`;
ALTER TABLE `users` ADD `provider_code` VARCHAR(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL;

DROP TABLE IF EXISTS `gamertpcall`;
CREATE TABLE IF NOT EXISTS `gamertpcall` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `agent_id` INT NOT NULL,
    `user_code` VARCHAR(50) NOT NULL,
    `provider_code` VARCHAR(50) NOT NULL,
    `game_code` INT NOT NULL DEFAULT 0,
    `bet` FLOAT NOT NULL DEFAULT 0,
    `expect` FLOAT NOT NULL DEFAULT 0,
    `real` FLOAT NOT NULL DEFAULT 0,
    `rtp` INT NOT NULL DEFAULT 0,
    `type` INT NOT NULL DEFAULT 0,
    `status` INT NOT NULL DEFAULT 0,
    `created_at` BIGINT DEFAULT NULL,
    `updated_at` BIGINT DEFAULT NULL,
    PRIMARY KEY (`id`),
    -- 修改索引名称，使其更具描述性
    UNIQUE INDEX idx_user_game_unique (user_code, game_code),
    INDEX idx_agent(agent_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP PROCEDURE IF EXISTS sp_game_rtp_call_insert;
DELIMITER //
CREATE PROCEDURE sp_game_rtp_call_insert(
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
    -- 为了提高索引命中效率，明确指定索引名称
    SELECT id INTO existing_id FROM gamertpcall WHERE user_code = in_user_code AND game_code = in_game_code AND  agent_id = in_agent_id AND (status = 0 or status =1) LIMIT 1;
    IF existing_id IS NOT NULL THEN
        SELECT 1 AS Result;
    ELSE
        INSERT INTO gamertpcall (agent_id, user_code, provider_code, game_code, bet, expect, rtp, type, created_at, updated_at)
        VALUES (in_agent_id, in_user_code, in_provider_code, in_game_code, in_bet, in_expect, in_rtp, in_type, in_created_at, in_updated_at)
        ON DUPLICATE KEY UPDATE bet = in_bet, expect = in_expect, rtp = in_rtp, type = in_type, created_at = in_created_at, updated_at = in_updated_at;
        SELECT LAST_INSERT_ID() AS id, 0 AS Result;
    END IF;
END //

DELIMITER ;
DROP PROCEDURE IF EXISTS sp_cancel_game_rtp_call;
DELIMITER //
CREATE PROCEDURE sp_cancel_game_rtp_call(
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
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_update_user_lost;
DELIMITER //

CREATE PROCEDURE sp_update_user_lost(
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
    IN in_game_code INT
)
BEGIN
    UPDATE users SET saldo =in_new_balance, valordebitado = valordebitado +in_bet, valorapostado = valorapostado +in_bet, valorganho = valorganho +in_win WHERE id=in_user_id;
    IF in_rtp_call_id > 0 THEN
        UPDATE gamertpcall SET `real`=`real`+in_win, status = 2 WHERE id = in_rtp_call_id;
    END IF;
    SELECT 1 AS Result;
END //

DELIMITER ;
DROP PROCEDURE IF EXISTS sp_add_and_return_call;
DELIMITER //
CREATE PROCEDURE sp_add_and_return_call(IN in_iduser INT, IN in_gamecode VARCHAR(50), IN in_step INT, IN in_json VARCHAR(1024), IN in_rtp_call_id INT)
BEGIN
    INSERT INTO calls (iduser, gamecode, jsonname, steps, bycall, rtpcallid) VALUES (in_iduser, in_gamecode, in_json, in_step, 'system', in_rtp_call_id);
    SELECT * FROM calls WHERE id = LAST_INSERT_ID() LIMIT 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_get_call_or_game_rtp_call;
DELIMITER //

CREATE PROCEDURE sp_get_call_or_game_rtp_call(
    IN in_user_id INT,  
    IN in_user_code VARCHAR(50), 
    IN in_game_code VARCHAR(50), 
    IN in_game_id INT,
    IN in_bet FLOAT
)
BEGIN
    -- 声明变量用于存储查询结果
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
END //

DELIMITER ;

ALTER TABLE `agents` ADD `create_at` BIGINT NOT NULL DEFAULT 0 AFTER `callbackurl` ;
ALTER TABLE `users` ADD `create_at` BIGINT NOT NULL DEFAULT 0  AFTER `provider_code` ;

DROP PROCEDURE IF EXISTS sp_new_agent;
DELIMITER //
CREATE PROCEDURE sp_new_agent(IN in_agent_code VARCHAR(50), IN in_token VARCHAR(50), IN in_secret_key VARCHAR(50), IN in_create_at BIGINT)
BEGIN
    INSERT INTO agents (agentCode, agentToken, secretKey, create_at) VALUES (in_agent_code, in_token, in_secret_key, in_create_at);
    SELECT * FROM agents WHERE id = LAST_INSERT_ID();
END //

DELIMITER ;

DROP PROCEDURE IF EXISTS call_new_user;
DELIMITER //
CREATE PROCEDURE call_new_user(IN in_user_code VARCHAR(50), IN in_token VARCHAR(50), IN in_atk VARCHAR(50), IN in_balance FLOAT, IN in_agent_id INT, IN in_provider_code VARCHAR(50),  IN in_create_at BIGINT)
BEGIN
    INSERT INTO users (username, token, atk, saldo, agentid, provider_code, create_at) VALUES (in_user_code, in_token, in_atk, in_balance, in_agent_id, in_provider_code, in_create_at);
    SELECT * FROM users WHERE id = LAST_INSERT_ID();
END //

DELIMITER ;

ALTER TABLE `agents` ADD `api_mode` TINYINT NOT NULL DEFAULT '0' AFTER `create_at`;
ALTER TABLE `users` ADD `call_score` decimal(20,2) NOT NULL DEFAULT (0) AFTER `create_at`;
DROP TABLE IF EXISTS `tb_users_dirty`;
CREATE TABLE IF NOT EXISTS `tb_users_dirty` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `token` varchar(255) NOT NULL DEFAULT '',
  `atk` varchar(255) NOT NULL,
  `saldo` decimal(20,2) NOT NULL DEFAULT (0),
  `valorapostado` decimal(20,2) NOT NULL DEFAULT (0),
  `valordebitado` decimal(20,2) NOT NULL DEFAULT (0),
  `valorganho` decimal(20,2) NOT NULL DEFAULT (0),
  `call_score` decimal(20,2) NOT NULL DEFAULT (0),
  `rtp` smallint NOT NULL DEFAULT (0),
  `agentid` int NOT NULL,
  `provider_code` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `create_at` bigint NOT NULL DEFAULT '0',
  `ver` bigint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `token` (`token`),
  UNIQUE KEY `atk` (`atk`),
  UNIQUE KEY `username` (`username`,`agentid`) USING BTREE,
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `tb_dirty_version`;
CREATE TABLE IF NOT EXISTS `tb_dirty_version` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_version` bigint NOT NULL DEFAULT 0,
  `rtp_call_version` bigint NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

-- 插入触发器，当向users表插入新记录时触发
DROP TRIGGER IF EXISTS insert_users_trigger;
DELIMITER //
CREATE TRIGGER insert_users_trigger
AFTER INSERT ON users
FOR EACH ROW
BEGIN
    DECLARE current_version BIGINT;

    -- 获取tb_dirty_version表中的当前版本号并递增
    UPDATE tb_dirty_version SET user_version = user_version + 1 WHERE id = 1;
    SELECT user_version INTO current_version FROM tb_dirty_version WHERE id = 1;

    -- 将新记录插入到tb_users_dirty表，并设置version值
    INSERT INTO tb_users_dirty (
        id,
        username,
        token,
        atk,
        saldo,
        valorapostado,
        valordebitado,
        valorganho,
        call_score,
        rtp,
        agentid,
        provider_code,
        create_at,
        ver 
    ) VALUES (
        NEW.id,
        NEW.username,
        NEW.token,
        NEW.atk,
        NEW.saldo,
        NEW.valorapostado,
        NEW.valordebitado,
        NEW.valorganho,
        NEW.call_score,
        NEW.rtp,
        NEW.agentid,
        NEW.provider_code,
        NEW.create_at,
        current_version
    );
END //
DELIMITER ;

DROP TRIGGER IF EXISTS update_users_trigger;
-- 更新触发器，当users表中指定字段更新时触发
DELIMITER //
CREATE TRIGGER update_users_trigger
AFTER UPDATE ON users
FOR EACH ROW
BEGIN
    DECLARE current_version BIGINT;

    -- 检查指定字段是否有更新
    IF (NEW.saldo <> OLD.saldo) OR (NEW.valorapostado <> OLD.valorapostado) OR (NEW.valordebitado <> OLD.valordebitado) OR (NEW.valorganho <> OLD.valorganho) OR(NEW.call_score <> OLD.call_score) OR (NEW.rtp <> OLD.rtp) THEN
        -- 获取tb_dirty_version表中的当前版本号并递增
        UPDATE tb_dirty_version SET user_version = user_version + 1 WHERE id = 1;
        SELECT user_version INTO current_version FROM tb_dirty_version WHERE id = 1;

        -- 使用INSERT INTO... ON DUPLICATE KEY UPDATE更新tb_users_dirty表
        INSERT INTO tb_users_dirty (
            id,
            username,
            token,
            atk,
            saldo,
            valorapostado,
            valordebitado,
            valorganho,
            call_score,
            rtp,
            agentid,
            provider_code,
            create_at,
            ver 
        ) VALUES (
            NEW.id,
            NEW.username,
            NEW.token,
            NEW.atk,
            NEW.saldo,
            NEW.valorapostado,
            NEW.valordebitado,
            NEW.valorganho,
            NEW.call_score,
            NEW.rtp,
            NEW.agentid,
            NEW.provider_code,
            NEW.create_at,
            current_version
        ) ON DUPLICATE KEY UPDATE
            saldo = VALUES(saldo),
            valorapostado = VALUES(valorapostado),
            valordebitado = VALUES(valordebitado),
            valorganho = VALUES(valorganho),
            call_score = VALUES(call_score),
            rtp = VALUES(rtp),
            ver = VALUES(ver);
    END IF;
END //
DELIMITER ;

DROP TABLE IF EXISTS `tb_rtpcall_dirty`;
CREATE TABLE IF NOT EXISTS `tb_rtpcall_dirty` (
  `id` int NOT NULL AUTO_INCREMENT,
  `agent_id` int NOT NULL,
  `user_code` varchar(50) NOT NULL,
  `provider_code` varchar(50) NOT NULL,
  `game_code` int NOT NULL DEFAULT '0',
  `bet` decimal(20,2) NOT NULL DEFAULT (0),
  `expect` decimal(20,0) NOT NULL DEFAULT (0),
  `real` decimal(20,2) NOT NULL DEFAULT (0),
  `rtp` int NOT NULL DEFAULT '0',
  `type` int NOT NULL DEFAULT '0',
  `status` int NOT NULL DEFAULT '0',
  `created_at` bigint DEFAULT NULL,
  `updated_at` bigint DEFAULT NULL,
  `ver` bigint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `idx_agent` (`agent_id`),
  KEY `idx_user_game_unique` (`user_code`,`game_code`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TRIGGER IF EXISTS insert_gamertpcall_trigger;
-- 创建插入触发器，当向gamertpcall表插入记录时触发
DELIMITER //
CREATE TRIGGER insert_gamertpcall_trigger
AFTER INSERT ON gamertpcall
FOR EACH ROW
BEGIN
    DECLARE current_version BIGINT;

    -- 更新tb_dirty_version表中的rpcall_version字段并获取当前版本号
    UPDATE tb_dirty_version SET rtp_call_version = rtp_call_version + 1 WHERE id = 1;
    SELECT rtp_call_version INTO current_version FROM tb_dirty_version WHERE id = 1;

    -- 将新记录插入到tb_rtpcall_dirty表，并设置ver值
    INSERT INTO tb_rtpcall_dirty (
        id,
        agent_id,
        user_code,
        provider_code,
        game_code,
        bet,
        expect,
        `real`,
        rtp,
        `type`,
        `status`,
        created_at,
        updated_at,
        ver
    ) VALUES (
        NEW.id,
        NEW.agent_id,
        NEW.user_code,
        NEW.provider_code,
        NEW.game_code,
        NEW.bet,
        NEW.expect,
        NEW.real,
        NEW.rtp,
        NEW.type,
        NEW.status,
        NEW.created_at,
        NEW.updated_at,
        current_version
    );
END //
DELIMITER ;

-- 创建更新触发器，当gamertpcall表中指定字段更新时触发
DROP TRIGGER IF EXISTS update_gamertpcall_trigger;
DELIMITER //
CREATE TRIGGER update_gamertpcall_trigger
AFTER UPDATE ON gamertpcall
FOR EACH ROW
BEGIN
    DECLARE current_version BIGINT;

    -- 检查指定字段是否有更新
    IF (NEW.bet <> OLD.bet) OR (NEW.expect <> OLD.expect) OR (NEW.real <> OLD.real) OR (NEW.rtp <> OLD.rtp) OR (NEW.status <> OLD.status) THEN
        -- 更新tb_dirty_version表中的rpcall_version字段并获取当前版本号
        UPDATE tb_dirty_version SET rtp_call_version = rtp_call_version+ 1 WHERE id = 1;
        SELECT rtp_call_version INTO current_version FROM tb_dirty_version WHERE id = 1;

        -- 使用INSERT INTO... ON DUPLICATE KEY UPDATE更新tb_rtpcall_dirty表
        INSERT INTO tb_rtpcall_dirty (
            id,
            agent_id,
            user_code,
            provider_code,
            game_code,
            bet,
            expect,
            `real`,
            rtp,
            `type`,
            `status`,
            created_at,
            updated_at,
            ver
        ) VALUES (
            NEW.id,
            NEW.agent_id,
            NEW.user_code,
            NEW.provider_code,
            NEW.game_code,
            NEW.bet,
            NEW.expect,
            NEW.real,
            NEW.rtp,
            NEW.type,
            NEW.status,
            NEW.created_at,
            NEW.updated_at,
            current_version
        ) ON DUPLICATE KEY UPDATE
            bet = VALUES(bet),
            expect = VALUES(expect),
            `real` = VALUES(`real`),
            rtp = VALUES(rtp),
            `status` = VALUES(`status`),
            updated_at = VALUES(updated_at),
            ver = VALUES(ver);
    END IF;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS `sp_new_agent`;
DELIMITER //
CREATE PROCEDURE `sp_new_agent`(IN in_agent_code VARCHAR(50), IN in_token VARCHAR(50), IN in_secret_key VARCHAR(50), IN in_create_at BIGINT, IN in_api_mode INT)
BEGIN
    INSERT INTO agents (agentCode, agentToken, secretKey, create_at, api_mode) VALUES (in_agent_code, in_token, in_secret_key, in_create_at, in_api_mode);
    SELECT * FROM agents WHERE id = LAST_INSERT_ID();
END//
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_update_user_win;
DELIMITER //

CREATE PROCEDURE sp_update_user_win(
    IN in_user_id INT,
    IN in_bet FLOAT,
    IN in_new_balance FLOAT,
    IN in_win FLOAT,
    IN in_rtp_call_id INT,
    IN in_game_code INT
)
BEGIN
    IF in_rtp_call_id > 0 THEN
        UPDATE users SET saldo =in_new_balance, valordebitado = valordebitado +in_bet, valorapostado = valorapostado +in_bet, valorganho = valorganho +in_win, call_score = call_score+in_win WHERE id=in_user_id;
        UPDATE gamertpcall SET `real`=`real`+in_win, status = 2 WHERE id = in_rtp_call_id;
    ELSE
        UPDATE users SET saldo =in_new_balance, valordebitado = valordebitado +in_bet, valorapostado = valorapostado +in_bet, valorganho = valorganho +in_win WHERE id=in_user_id;
    END IF;
    SELECT 1 AS Result;
END //

DELIMITER ;