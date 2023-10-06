package com.ssafy.tenten.api.controller;

import com.ssafy.tenten.api.service.MoneyHistoryService;
import com.ssafy.tenten.api.service.UserService;
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
    private final UserService userService;

    /**
     * 로그인 유저의 코인 히스토리 조회
     */
    @GetMapping("/coins/users/{userId}")
    public ResponseEntity<?> getHistory(@PathVariable("userId") Long userId) {
        List<MoneyHistoryResponse> list = moneyHistoryService.getMoneyHistory(userId);

        return SuccessResponseEntity.toResponseEntity("사용자 코인 내역 조회완료", list);
    }

    /**
     * 코인 히스토리 등록
     */
    @PostMapping("/coins/exchange/{userId}")
    public ResponseEntity<?> postHistory(@PathVariable("userId") Long userId, @RequestBody MoneyHistoryRequest moneyHistoryRequest) {
        // from 쓴거 to 얻은거
        // 히스토리 등록 외에도 유저의 보유 포인트, 코인 정보 수정 필요
        // 획득만 했을 때 (포인트 획득?)
        if (!moneyHistoryRequest.getToCoinName().equals("None")) {
            MoneyHistoryDto plusMoneyHistoryDto = new MoneyHistoryDto();
            plusMoneyHistoryDto.setUserId(userId);
            plusMoneyHistoryDto.setCoinName(moneyHistoryRequest.getToCoinName());
            plusMoneyHistoryDto.setCoinChangeAmount(moneyHistoryRequest.getPlusCoinAmount());
            plusMoneyHistoryDto.setTransactionType("EARN");
            userService.updateMoney(userId, moneyHistoryRequest.getToCoinName(), moneyHistoryRequest.getPlusCoinAmount(), "EARN");
            moneyHistoryService.createMoneyHistory(plusMoneyHistoryDto);
        }
        // 소비만 했을 때 (정보 열람 시, coin 사용했을 때?)
        if (!moneyHistoryRequest.getFromCoinName().equals("None")) {
            MoneyHistoryDto minusMoneyHistoryDto = new MoneyHistoryDto();
            minusMoneyHistoryDto.setUserId(userId);
            minusMoneyHistoryDto.setCoinName(moneyHistoryRequest.getFromCoinName());
            minusMoneyHistoryDto.setCoinChangeAmount(moneyHistoryRequest.getMinusCoinAmount());
            minusMoneyHistoryDto.setTransactionType("REDEEM");
            userService.updateMoney(userId, moneyHistoryRequest.getFromCoinName(), moneyHistoryRequest.getMinusCoinAmount(), "REDEEM");
            moneyHistoryService.createMoneyHistory(minusMoneyHistoryDto);
        }

        return ResponseEntity.ok("교환 완료");
    }
}
