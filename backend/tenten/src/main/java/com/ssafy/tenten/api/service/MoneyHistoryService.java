package com.ssafy.tenten.api.service;

import com.ssafy.tenten.dto.MoneyHistoryDto;
import com.ssafy.tenten.vo.Response.MoneyHistoryResponse;

import java.util.List;

public interface MoneyHistoryService {
    List<MoneyHistoryResponse> getMoneyHistory(Long userId);

    void createMoneyHistory(MoneyHistoryDto moneyHistoryDto);
}