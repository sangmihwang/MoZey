package com.ssafy.tenten.api.service;

import com.ssafy.tenten.vo.Response.CoinInfoResponse;

import java.util.List;

public interface CoinInfoService {
    List<CoinInfoResponse> getCoinInfo();

    List<CoinInfoResponse> getCoinInfoByCoinName(String coinName);
}