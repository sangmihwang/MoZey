package com.ssafy.tenten.api.controller;

import com.ssafy.tenten.api.service.CoinInfoService;
import com.ssafy.tenten.exception.SuccessResponseEntity;
import com.ssafy.tenten.vo.Response.CoinInfoResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class CoinInfoController {
    private final CoinInfoService coinInfoService;

    /*
    * 코인 정보 전체 조회
    */
    @GetMapping("/coins/price")
    public ResponseEntity<?> getAllCoinInfos(){
        List<CoinInfoResponse> coinInfoResponses = coinInfoService.getCoinInfo();

        return SuccessResponseEntity.toResponseEntity("코인 정보 조회 완료", coinInfoResponses);
    }

    /*
    * 코인 별 정보 조회
    */
    @GetMapping("/coins/price/{coinId}")
    public ResponseEntity<?> getCoinInfos(@PathVariable("coinId") String coinId){
        List<CoinInfoResponse> coinInfoResponses = coinInfoService.getCoinInfoByCoinName(coinId);
        return SuccessResponseEntity.toResponseEntity("코인별 상세 조회 완료", coinInfoResponses);
    }
}