package com.ssafy.tenten.api.service;

import com.ssafy.tenten.api.repository.MoneyHistoryRepository;
import com.ssafy.tenten.api.repository.UserRepository;
import com.ssafy.tenten.constant.CoinTransactionType;
import com.ssafy.tenten.constant.CoinType;
import com.ssafy.tenten.domain.CoinInfo;
import com.ssafy.tenten.domain.MoneyHistory;
import com.ssafy.tenten.domain.User;
import com.ssafy.tenten.dto.MoneyHistoryDto;
import com.ssafy.tenten.exception.CustomException;
import com.ssafy.tenten.exception.ErrorCode;
import com.ssafy.tenten.vo.Response.MoneyHistoryResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MoneyHistoryServiceImpl implements MoneyHistoryService{
    private final MoneyHistoryRepository moneyHistoryRepository;
    private final UserRepository userRepository;

    @Override
    public List<MoneyHistoryResponse> getMoneyHistory(Long userId) {
        List<MoneyHistory> histories = moneyHistoryRepository.findByUserId(userId);

        if(histories.size() == 0){
            throw new CustomException(ErrorCode.MONEYHISTORY_NOT_FOUND);
        }

        List<MoneyHistoryResponse> collect = histories.stream()
                .map(a -> MoneyHistoryResponse.builder()
                        .coinName(String.valueOf(a.getCoinName()))
                        .coinChangeAmount(a.getCoinChangeAmount())
                        .coinChangeDate(a.getCoinChangeDate())
                        .transactionType(String.valueOf(a.getTransactionType()))
                        .build())
                .collect(Collectors.toList());

        return collect;
    }

    @Override
    @Transactional
    public void createMoneyHistory(MoneyHistoryDto moneyHistoryDto){
        User userId = userRepository.findById(moneyHistoryDto.getUserId()).orElseThrow(
                () -> new CustomException(ErrorCode.USER_NOT_FOUND)
        );

        CoinType coinName = CoinType.valueOf(moneyHistoryDto.getCoinName());

        Long coinChangeAmount = moneyHistoryDto.getCoinChangeAmount();

        CoinTransactionType transactionType = CoinTransactionType.valueOf(moneyHistoryDto.getTransactionType());

        MoneyHistory moneyHistory = MoneyHistory.builder()
                .userId(userId)
                .coinName(coinName)
                .coinChangeAmount(coinChangeAmount)
                .transactionType(transactionType)
                .build();

        moneyHistoryRepository.save(moneyHistory);
    }


}