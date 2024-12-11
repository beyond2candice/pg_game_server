DROP TABLE IF EXISTS `global_score_pool`;
CREATE TABLE IF NOT EXISTS `global_score_pool` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `total_score` DECIMAL(20,2) NOT NULL DEFAULT 0 COMMENT '水池总分数',
    `lost_entry_pool_rate` SMALLINT  NOT NULL DEFAULT 10 COMMENT '输的分数进入水池百分比',
    `win_entry_pool_rate`  SMALLINT  NOT NULL DEFAULT 10 COMMENT '赢的分数扣除水池百分比',
    `begin_reward_score`   DECIMAL(20,2) NOT NULL DEFAULT 1000 COMMENT '水池分数超过该值进行奖励',
    `game_rtp_big_reward`  SMALLINT NOT NULL DEFAULT 30 COMMENT '系统RTP小于这个值,派比较大的奖',
    `user_rtp_big_reward_rate` TINYINT  NOT NULL DEFAULT 3 COMMENT '玩家大奖派奖倍率',
    `game_rtp_lower_reward`  SMALLINT NOT NULL DEFAULT 50 COMMENT '系统RTP小于这个值,开始派奖',
    `user_rtp_lower_reward_rate` TINYINT  NOT NULL DEFAULT 2 COMMENT '玩家RTP派奖倍率',
    `game_total_bet` DECIMAL(20.2) NOT NULL DEFAULT 0 COMMENT '总下注',
    `game_total_win` DECIMAL(20.2) NOT NULL DEFAULT 0 COMMENT '总赢',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
ALTER TABLE `calls` ADD `from_reward_pool` TINYINT NOT NULL DEFAULT 0 AFTER `call_rtp_id`;
ALTER TABLE `calls` ADD `reward_pool_score` DECIMAL(20,2) NOT NULL DEFAULT 0 AFTER `from_reward_pool`;