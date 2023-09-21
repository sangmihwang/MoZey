package com.ssafy.tenten.vo.Request;

import lombok.Getter;

@Getter
public class MoneyHistoryRequest {
    private String fromCoinName;
    private String toCoinName;
    private Long minusCoinAmount;
    private Long plusCoinAmount;
}