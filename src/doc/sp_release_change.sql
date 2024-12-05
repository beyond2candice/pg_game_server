DELIMITER ;
DROP PROCEDURE IF EXISTS sp_add_and_return_call;
DELIMITER //
CREATE PROCEDURE sp_add_and_return_call(IN in_iduser INT, IN in_gamecode VARCHAR(50), IN in_step INT, IN in_json VARCHAR(1024), IN in_rtp_call_id INT)
BEGIN
    INSERT INTO calls (iduser, gamecode, jsonname, steps, bycall, rtpcallid,call_rtp_id) VALUES (in_iduser, in_gamecode, in_json, in_step, 'system', in_rtp_call_id, in_rtp_call_id);
    SELECT * FROM calls WHERE id = LAST_INSERT_ID() LIMIT 1;
END //
DELIMITER ;
