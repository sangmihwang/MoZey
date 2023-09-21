package com.ssafy.tenten.api.controller;

import com.ssafy.tenten.api.service.MoneyHistoryService;
import com.ssafy.tenten.dto.MoneyHistoryDto;
import com.ssafy.tenten.exception.SuccessResponseEntity;
import com.ssafy.tenten.vo.Request.MoneyHistoryRequest;
import com.ssafy.tenten.vo.Response.MoneyHistoryResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class MoneyHistoryController {
    private final MoneyHistoryService moneyHistoryService;

    /*
    * 로그인 유저의 코인 히스토리 조회
    */
    @GetMapping("/coins/users/{userId}")
    public ResponseEntity<?> getHistory(@PathVariable("userId") Long userId) {
        List<MoneyHistoryResponse> list = moneyHistoryService.getMoneyHistory(userId);

        return SuccessResponseEntity.toResponseEntity("사용자 코인 내역 조회완료", list);
    }

    /*
    * 코인 히스토리 등록
    */
    @PostMapping("/coins/exchange/{userId}")
    public ResponseEntity<?> postHistory(@PathVariable("userId") Long userId, @RequestBody MoneyHistoryRequest moneyHistoryRequest){
        MoneyHistoryDto moneyHistoryDto1 = new MoneyHistoryDto();
        moneyHistoryDto1.setUserId(userId);
        moneyHistoryDto1.setCoinName(moneyHistoryRequest.getFromCoinName());
        moneyHistoryDto1.setCoinChangeDate(System.currentTimeMillis()/1000L);
        moneyHistoryDto1.setCoinChangeAmount(moneyHistoryRequest.getMinusCoinAmount());
        moneyHistoryDto1.setTransactionType("Redeem");
        moneyHistoryService.createMoneyHistory(moneyHistoryDto1);

        if(!moneyHistoryRequest.getToCoinName().equals("None")){
            MoneyHistoryDto moneyHistoryDto2 = new MoneyHistoryDto();
            moneyHistoryDto2.setUserId(userId);
            moneyHistoryDto2.setCoinName(moneyHistoryRequest.getToCoinName());
            moneyHistoryDto2.setCoinChangeDate(System.currentTimeMillis()/1000L);
            moneyHistoryDto2.setCoinChangeAmount(moneyHistoryRequest.getPlusCoinAmount());
            moneyHistoryDto2.setTransactionType("Earn");
            moneyHistoryService.createMoneyHistory(moneyHistoryDto2);
        }

        // 히스토리 등록 외에도 유저의 보유 포인트, 코인 정보 수정 필요

        return SuccessResponseEntity.toResponseEntity("교환 완료", moneyHistoryDto1);
    }
}
