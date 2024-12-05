# 游戏后台接口

## 启动游戏

### 请求方法

post  /api/v1/game_launch
content-type: application/x-www-form-urlencoded

### 请求参数


| 参数名称       | 参数类型 | 参数描述    |
| -------------- | -------- | ----------- |
| `agent_code`   | `string` | 代理`Token` |
| `agent_token`   | `string` | 代理`Token` |
| `agent_secret`   | `string` | 代理`Token` |
| `user_code`    | `string` | 用户账号    |
| `provider_code`    | `string` | 游戏类型 PGSOFT    |
| `game_code`    | `string` | 游戏名      |
| `user_balance` | `float`  | 用户余额    |
| `lang` | `string`  | `pt`|

### 响应结果

* 成功响应


| 参数名称       | 参数类型  | 参数描述                        |
| -------------- | --------- | ------------------------------- |
| `status`       | `number`  | 状态码，值为`1`                 |
| `msg`          | `string`  | 消息，值为`"SUCCESS"`           |
| `launch_url`   | `string`  | 启动链接                        |

* 失败响应


| 参数名称  | 参数类型 | 参数描述                 |
| --------- | -------- | ------------------------ |
| `status`  | `number` | 状态码，值为 0   |
| `message` | `string` | 错误消息，说明失败原因。 |

## 获取游戏列表

## 控制用户RTP

### 请求方法

post  /control_rtp
content-type: application/x-www-form-urlencoded

### 请求参数


| 参数名称       | 参数类型 | 参数描述    |
| -------------- | -------- | ----------- |
| `agent_code`   | `string` | 代理`Token` |
| `agent_token`   | `string` | 代理`Token` |
| `user_code`    | `string` | 用户账号    |
| `provider_code`    | `string` | 代理密钥    |
| `rtp`    | `整形` | `百分比`|

### 响应结果

* 成功响应


| 参数名称       | 参数类型  | 参数描述                        |
| -------------- | --------- | ------------------------------- |
| `status`       | `number`  | 状态码，值为`1`                 |
| `changed_rtp`  | `number`  | 更新后rtp值                     |

* 失败响应


| 参数名称  | 参数类型 | 参数描述                 |
| --------- | -------- | ------------------------ |
| `status`  | `number` | 状态码，值为 0   |
| `msg` | `string` | `Invalid Parameter` |
| `detail` | `string` | `rtp must be less than or equal to 95` |

## 批量控制用户RTP

### 请求方法

post  /control_users_rtp
content-type: application/x-www-form-urlencoded

### 请求参数


| 参数名称       | 参数类型 | 参数描述    |
| -------------- | -------- | ----------- |
| `agent_code`   | `string` 			| `代理Code` |
| `agent_token`   | `string` 			| `代理Token` |
| `user_codes`    | `Stringified JSON` | `用户账号列表`    |
| `provider_code`    | `string` | `代理密钥`    |
| `rtp`    | `整形` | `百分比`|

### 响应结果

* 成功响应


| 参数名称       | 参数类型  | 参数描述                        |
| -------------- | --------- | ------------------------------- |
| `status`       | `number`  | 状态码，值为`1`                 |
| `changed_rtp`  | `number`  | 更新后rtp值                     |

* 失败响应


| 参数名称  | 参数类型 | 参数描述                 |
| --------- | -------- | ------------------------ |
| `status`  | `number` | 状态码，值为 0   |
| `msg` | `string` | `Invalid JSON` |


## 获取通话玩家

### 请求方法

post  /call_players
content-type: application/x-www-form-urlencoded

### 请求参数


| 参数名称       | 参数类型 | 参数描述    |
| -------------- | -------- | ----------- |
| `agent_code`   | `string` 			| `代理Code` |
| `agent_token`   | `string` 			| `代理Token` |

### 响应结果

* 成功响应


| 参数名称       | 参数类型          | 参数描述                        |
| -------------- | ---------   | ------------------------------- |
| `status`       | `number`         | 状态码，值为`1`                 |
| `data`  		 | `data`数组，下表  |                      |

Data:

| 参数名称               | 参数类型  | 参数描述                                            |
| ---------------------- | --------- | --------------------------------------------------- |
| `user_code`            | `string`  | `玩家账号`                							|
| `provider_code`        | `string`  | `代理密钥` 									                   |
| `game_code`            | `string`  | `游戏名`                                               | 
| `bet`            		 | `float`   | `下注金额`                                          |
| `balance`              | `float`   | `玩家余额`                             |
| `total_debit`          | `float`   |  `总收益`                         |
| `total_credit`         | `float`  |   `总下注`					                |
| `target_rtp`           | `整形`  | 	`配置rtp` 								|
| `real_rtp`             | `整形`  | 	`实际rtp` 								|


* 失败响应


| 参数名称  | 参数类型 | 参数描述                 |
| --------- | -------- | ------------------------ |
| `status`  | `number` | 状态码，值为 0   |
| `msg` | `string` | `Invalid Agent` |

## 获取通话清单

### 请求方法

post  /call_list
content-type: application/x-www-form-urlencoded

### 请求参数


| 参数名称       | 参数类型 | 参数描述    |
| -------------- | -------- | ----------- |
| `agent_code`   | `string` 			| `代理Code` |
| `agent_token`   | `string` 			| `代理Token` |
| `provider_code`    | `string` | `代理密钥`    |
| `game_code`    | `string` | `游戏名`|
| `user_code`    | `string` | `玩家名`|


### 响应结果

* 成功响应


| 参数名称       | 参数类型  | 参数描述                        |
| -------------- | --------- | ------------------------------- |
| `status`       | `number`  | 状态码，值为`1`                 |
| `calls`  | `calls数组`  |  `见下表`                    |

calls
| 参数名称       | 参数类型  | 参数描述                        |
| -------------- | --------- | ------------------------------- |
| `rtp`       | `number`  | `rtp*100`                 |
| `call_type`  | `string`  |  `free`                    |

* 失败响应


| 参数名称  | 参数类型 | 参数描述                 |
| --------- | -------- | ------------------------ |
| `status`  | `number` | 状态码，值为 0   |
| `msg` | `string` | `Invalid JSON` |

## 赠送奖金发起

### 请求方法

post  /call_apply
content-type: application/x-www-form-urlencoded

### 请求参数


| 参数名称       | 参数类型 | 参数描述    |
| -------------- | -------- | ----------- |
| `agent_code`   | `string` 			| `代理Code` |
| `agent_token`   | `string` 			| `代理Token` |
| `provider_code`    | `string` | `代理密钥`    |
| `game_code`    | `string` | `游戏名`|
| `user_code`    | `string` | `用户账号列表`    |
| `call_rtp`    | `整形` | `rtp*100`|
| `call_type`    | `整形` | `1: Common Free, 2: Buy Bonus Free`|
| `call_bet`    | `浮点` | `有效下注`|

### 响应结果

* 成功响应


| 参数名称       | 参数类型  | 参数描述                        |
| -------------- | --------- | ------------------------------- |
| `status`       | `number`  | 状态码，值为`1`                 |
| `called_money`  | `float`  | `bet *(rtp/100)`                 |
| `callId`  | `number`  | `本次赠送唯一id`                 |
| `msg`  | `string`  | `SUCCESS`                 |

* 失败响应


| 参数名称  | 参数类型 | 参数描述                 |
| --------- | -------- | ------------------------ |
| `status`  | `number` | 状态码，值为 0   |
| `msg` | `string` | `Processing call is existed` |

## 获取奖励记录

### 请求方法

post  /call_history
content-type: application/x-www-form-urlencoded

### 请求参数


| 参数名称       | 参数类型 | 参数描述    |
| -------------- | -------- | ----------- |
| `agent_code`   | `string` 			| `代理Code` |
| `agent_token`  | `string` 			| `代理Token` |
| `offset`       | `number` | `偏移`    |
| `limit`    | `number` | `上限，最多500`  |


### 响应结果

* 成功响应


| 参数名称       | 参数类型  | 参数描述                        |
| -------------- | --------- | ------------------------------- |
| `status`       | `number`  | 状态码，值为`1`                 |
| `data`  | `data数组`  | 见下表|
data:
| 参数名称       | 参数类型 | 参数描述    |
| -------------- | -------- | ----------- |
| `id`   		 | `number` 			| `赠送唯一标志` |
| `agent_code`   | `string` 			| `代理Code` |
| `user_code`    | `string` | 用户账号 |
| `provider_code`    | `string` | `代理密钥`    |
| `game_code`    | `string` | `游戏名`|
| `bet`   		 | `float` 	| `生效bet` |
| `expect`    | `float` | `期待赠送金额`    |
| `real`    | `float` | `实际赠送金额`    |
| `rtp`    | `整形` | `百分比`|
| `type`    | `string` | `common`|
| `status`    | `number` | `0->Waiting, 1->Processing, 2->Finished, 3->Rejected, 4->Canceled`|
| `created_at`    | `date` | `创建时间`|
| `updated_at`    | `date` | `更新时间`|


* 失败响应


| 参数名称  | 参数类型 | 参数描述                 |
| --------- | -------- | ------------------------ |
| `status`  | `number` | 状态码，值为 0   |
| `msg` | `string` | `Invalid Agent` |

## 取消赠送奖励

### 请求方法

post  /call_cancel
content-type: application/x-www-form-urlencoded

### 请求参数


| 参数名称       | 参数类型 | 参数描述    |
| -------------- | -------- | ----------- |
| `agent_code`   | `string` 			| `代理Code` |
| `agent_token`   | `string` 			| `代理Token` |
| `call_id`    | `number` | `赠送唯一标志`    |


### 响应结果

* 成功响应


| 参数名称       | 参数类型  | 参数描述                        |
| -------------- | --------- | ------------------------------- |
| `status`       | `number`  | 状态码，值为`1`                 |
| `canceled_money`  | `float`  | 取消时剩下的奖励               |
| `msg` | `string` | `SUCCESS` |

* 失败响应

| 参数名称  | 参数类型 | 参数描述                 |
| --------- | -------- | ------------------------ |
| `status`  | `number` | 状态码，值为 0   |
| `msg` | `string` | `There is no waiting call` |

## 批量获取赠送信息

### 请求方法

post  /call_list_info
content-type: application/x-www-form-urlencoded

### 请求参数


| 参数名称       | 参数类型 | 参数描述    |
| -------------- | -------- | ----------- |
| `agent_code`   | `string` 			| `代理Code` |
| `agent_token`   | `string` 			| `代理Token` |
| `call_id_list`    | `number 数组` | `赠送数组`    |

### 响应结果

* 成功响应


| 参数名称       | 参数类型  | 参数描述                        |
| -------------- | --------- | ------------------------------- |
| `status`       | `number`  | 状态码，值为`1`                 |
| `data`  | `data数组`  | 见下表|

data:
| 参数名称       | 参数类型 | 参数描述    |
| -------------- | -------- | ----------- |
| `id`   		 | `number` 			| `赠送唯一标志` |
| `agent_code`   | `string` 			| `代理Code` |
| `user_code`    | `string` | 用户账号 |
| `provider_code`    | `string` | `代理密钥`    |
| `game_code`    | `string` | `游戏名`|
| `bet`   		 | `float` 	| `生效bet` |
| `expect`    | `float` | `期待赠送金额`    |
| `real`    | `float` | `实际赠送金额`    |
| `rtp`    | `整形` | `百分比`|
| `type`    | `string` | `common`|
| `status`    | `number` | `0->Waiting, 1->Processing, 2->Finished, 3->Rejected, 4->Canceled`|
| `created_at`    | `date` | `创建时间`|
| `updated_at`    | `date` | `更新时间`|

* 失败励相应

| 参数名称  | 参数类型 | 参数描述                 |
| --------- | -------- | ------------------------ |
| `status`  | `number` | 状态码，值为 0   |
| `msg` | `string` | `` |


## 批量取消用户奖励

### 请求方法

post  /call_cancel_list
content-type: application/x-www-form-urlencoded

### 请求参数

| 参数名称       | 参数类型 | 参数描述    |
| -------------- | -------- | ----------- |
| `agent_code`   | `string` 			| `代理Code` |
| `agent_token`   | `string` 			| `代理Token` |
| `call_id_list`  | `整形数组` | `赠送唯一标志`|

### 响应结果

* 成功响应


| 参数名称       | 参数类型  | 参数描述                        |
| -------------- | --------- | ------------------------------- |
| `status`       | `number`  | 状态码，值为`1`                 |
| `succ_rtp_list`  | `float[]`  |取消列表|
| `data`  | `data数组`  |`取消结果`|
| `msg`  | `sring`  | `SUCCESS`                      |

data
| 参数名称  | 参数类型 | 参数描述                 |
| --------- | -------- | ------------------------ |
| `canceled_money`  | `float`  |取消时候的钱                      |
| `call_id`  | `number` | 赠送唯一id   |

* 失败响应


| 参数名称  | 参数类型 | 参数描述                 |
| --------- | -------- | ------------------------ |
| `status`  | `number` | 状态码，值为 0   |
| `msg` | `string` | `known error` |

# 回调平台接口

## 获取用户余额

### 请求方法

post    {agent_platform_url}
content-type: application/json

### 请求参数


| 参数名称    | 参数类型 | 参数描述 |
| ----------- | -------- | -------- |
| `method`       | `string` | `user_balance`|
| `agent_code`   | `string` | 代理code|
| `agent_secret` | `string` | 代理密钥|
| `user_code`    | `string` | 用户账号 |

### 响应结果

* 成功


| 参数名称     | 参数类型 | 参数描述         |
| ------------ | -------- | ---------------- |
| `status`        | `number` | 1 |
| `user_balance` | `float`| 玩家余额         |

* 失败


| 参数名称  | 参数类型 | 参数描述               |
| --------- | -------- | ---------------------- |
| `status` | `number` | 0 |
| `msg` | `string` | 'INTERNAL_ERROR' |
| `user_balance` | 浮点| 0 |

## 更新下注回调

### 请求方法

post  /upBalance
Content-Type: application/json

### 请求参数


| 参数名称            | 参数类型 | 参数描述                   |
| ------------------- | -------- | -------------------------- |
| `method`            | `string` | `transaction`               |
| `agent_code`        | `string` | 代理商代码                 |
| `agent_secret`      | `string` | 代理商密钥                 |
| `agen_balance`      |  `float` | 代理商密钥                 |
| `user_code`         | `string` | 用户账号                   |
| `user_balance`      | `float`  | 用户余额                   |
| `game_type`         | `string` | 游戏类型，固定值为`"slot"` |
| `slot`              | Slot     | 见下表                     |

Slot:


| 参数名称               | 参数类型  | 参数描述                                            |
| ---------------------- | --------- | --------------------------------------------------- |
| `provider_code`        | `string`  | 游戏提供商代码，固定值为`"PGSOFT"`。                |
| `game_code`            | `string`  | 游戏代码，对应变量`gamename` 的值。                 |
| `type`                 | `string`  | 游戏类型，固定值为`"BASE"`。                        |
| `bet_money`            | `float`   | 下注金额。                                          |
| `win_money`            | `float`   | 获胜金额，初始值为`0`。                             |
| `txn_id`               | `string`  | 交易 ID，格式为`${txnid}`。                         |
| `txn_type`             | `string`  | 交易类型，固定值为`"debit_credit"`。                |

### 响应结果

* 成功


| 参数名称       | 参数类型 | 参数描述           |
| -------------- | -------- | ------------------ |
| `status`          | `number` | `1` |
| `user_balance` | `float`| 玩家余额         |

* 失败


| 参数名称  | 参数类型 | 参数描述                 |
| --------- | -------- | ------------------------ |
| `status` | `number` | 0 |
| `msg` | `string` | `INSUFFICIENT_USER_FUNDS` |
# 代理后台接口

## 代理登录

### 请求方法

post    {agent_platform_url}/login_agent
content-type: application/x-www-form-urlencoded

### 请求参数


| 参数名称    | 参数类型 | 参数描述 |
| ----------- | -------- | -------- |
| `agent_code`   | `string` | `代理code`|
| `md5_key`      | `string` | `代理MD5密码`|

### 响应结果

* 成功


| 参数名称     | 参数类型 | 参数描述         |
| ------------ | -------- | ---------------- |
| `status`        | `number` | 1 |
| `agent_token` | `string`| `代理密钥`         |
| `agent_code` | `string`| `代理账号`         |

* 失败


| 参数名称  | 参数类型 | 参数描述               |
| --------- | -------- | ---------------------- |
| `status` | `number` | `0` |
| `msg` | `string` |   `失败原因`|






## 获取代理rtp

### 请求方法

post    {agent_platform_url}/agent_rtp_get
content-type: application/x-www-form-urlencoded

### 请求参数


| 参数名称    | 参数类型 | 参数描述 |
| ----------- | -------- | -------- |
| `agent_code`   | `string` | `代理code`|
| `agent_Token`  | `string` | `代理token`|

### 响应结果

* 成功


| 参数名称     | 参数类型 | 参数描述         |
| ------------ | -------- | ---------------- |
| `status`        | `number` |` 1` |
| `agent_code` | `string`|   `代理账号`    |
| `rtp` || `number` | `百分比`|    |

* 失败


| 参数名称  | 参数类型 | 参数描述               |
| --------- | -------- | ---------------------- |
| `status` | `number` | 0 |
| `msg` | `string` |   `失败原因`|





## 设置代理rtp

### 请求方法

post    {agent_platform_url}/agent_rtp_set
content-type: application/x-www-form-urlencoded

### 请求参数


| 参数名称    | 参数类型 | 参数描述 |
| ----------- | -------- | -------- |
| `agent_code`   | `string` | `代理code`|
| `agent_Token`  | `string` | `代理token`|
| `rtp` | `number` | `百分比`|

### 响应结果

* 成功


| 参数名称     | 参数类型 | 参数描述         |
| ------------ | -------- | ---------------- |
| `status`        | `number` | `1` |
| `agent_code` | `string`|  ` 代理账号 `   |
| `rtp` || `整形` | `百分比`|    |

* 失败


| 参数名称  | 参数类型 | 参数描述               |
| --------- | -------- | ---------------------- |
| `status` | `number` | `0` |
| `msg` | `string` |   `失败原因`|




## 获取回调地址

### 请求方法

post    {agent_platform_url}/agent_url_get
content-type: application/x-www-form-urlencoded

### 请求参数


| 参数名称    | 参数类型 | 参数描述 |
| ----------- | -------- | -------- |
| `agent_code`   | `string` | `代理code`|
| `agent_Token`  | `string` | `代理token`|


### 响应结果

* 成功


| 参数名称     | 参数类型 | 参数描述         |
| ------------ | -------- | ---------------- |
| `status`        | `number` | `1 `|
| `agent_code` | `string`|  ` 代理账号`    |
| `callbackurl` | `string` |` 回调地址 `   |

* 失败


| 参数名称  | 参数类型 | 参数描述               |
| --------- | -------- | ---------------------- |
| `status` | `number` | `0 `|
| `msg` | `string` |   `失败原因`|



## 设置地址

### 请求方法

post    {agent_platform_url}/agent_url_set
content-type: application/x-www-form-urlencoded

### 请求参数


| 参数名称    | 参数类型 | 参数描述 |
| ----------- | -------- | -------- |
| `agent_code`   | `string` | `代理code`|
| `agent_Token`  | `string` | `代理token`|
| `callbackurl` | `string` | `回调地址`    |


### 响应结果

* 成功


| 参数名称     | 参数类型 | 参数描述         |
| ------------ | -------- | ---------------- |
| `status`        | `number` | `1` |
| `agent_code` | `string`|  ` 代理账号   ` |
| `callbackurl` || `string` | `回调地址`    |

* 失败


| 参数名称  | 参数类型 | 参数描述               |
| --------- | -------- | ---------------------- |
| `status` | `number` | `0` |
| `msg` | `string` |   `失败原因`|




## 创建新代理

### 请求方法

post    {agent_platform_url}/new_agent
content-type: application/x-www-form-urlencoded

### 请求参数


| 参数名称    | 参数类型 | 参数描述 |
| ----------- | -------- | -------- |
| `agent_code`   | `string` |` 代理code`|
| `md5_key`  | `string` |`代理MD5密码` |
| `callbackurl`  | `string` | `回调地址`|
| `secretKey`   | `string` | `密钥` |
| `agent_Token`  | `string` | `代理token`|


### 响应结果

* 成功


| 参数名称     | 参数类型 | 参数描述         |
| ------------ | -------- | ---------------- |
| `status`        | `number` |` 1` |
| `agent_code` | `string`|  ` 代理账号 `   |
| `agent_Token`  | `string` | `代理token`|
| `callbackurl` || `string` |` 回调地址`    |

* 失败


| 参数名称  | 参数类型 | 参数描述               |
| --------- | -------- | ---------------------- |
| `status` | `number` | 0 |
| `msg` | `string` |   `失败原因`|