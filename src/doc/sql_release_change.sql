ALTER TABLE `game_history_2024_45` ADD `agent_id` INT NOT NULL DEFAULT '0' AFTER `bds`;
ALTER TABLE `game_history_2024_46` ADD `agent_id` INT NOT NULL DEFAULT '0' AFTER `bds`;
ALTER TABLE `game_history_2024_47` ADD `agent_id` INT NOT NULL DEFAULT '0' AFTER `bds`;
ALTER TABLE `game_history_2024_48` ADD `agent_id` INT NOT NULL DEFAULT '0' AFTER `bds`;
ALTER TABLE `game_history_2024_49` ADD `agent_id` INT NOT NULL DEFAULT '0' AFTER `bds`;
ALTER TABLE `game_history_2024_50` ADD `agent_id` INT NOT NULL DEFAULT '0' AFTER `bds`;
ALTER TABLE `game_history_2024_51` ADD `agent_id` INT NOT NULL DEFAULT '0' AFTER `bds`;
UPDATE game_history_2024_45
INNER JOIN users ON game_history_2024_45.atk = users.atk
SET game_history_2024_45.agent_id = users.agentid;

UPDATE game_history_2024_46
INNER JOIN users ON game_history_2024_46.atk = users.atk
SET game_history_2024_46.agent_id = users.agentid;

UPDATE game_history_2024_47
INNER JOIN users ON game_history_2024_47.atk = users.atk
SET game_history_2024_47.agent_id = users.agentid;

UPDATE game_history_2024_48
INNER JOIN users ON game_history_2024_48.atk = users.atk
SET game_history_2024_48.agent_id = users.agentid;

UPDATE game_history_2024_49
INNER JOIN users ON game_history_2024_49.atk = users.atk
SET game_history_2024_49.agent_id = users.agentid;

UPDATE game_history_2024_50
INNER JOIN users ON game_history_2024_50.atk = users.atk
SET game_history_2024_50.agent_id = users.agentid;

UPDATE game_history_2024_51
INNER JOIN users ON game_history_2024_51.atk = users.atk
SET game_history_2024_51.agent_id = users.agentid;

UPDATE tb_history
INNER JOIN tb_user ON tb_history.atk = tb_user.atk
SET tb_history.agent_id = tb_user.agent_id;

ALTER TABLE `calls` ADD `call_rtp_id` INT NOT NULL DEFAULT '0' AFTER `rtpcallid`;

