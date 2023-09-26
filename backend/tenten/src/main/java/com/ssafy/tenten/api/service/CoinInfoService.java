package com.ssafy.tenten.api.service;

import com.ssafy.tenten.constant.CoinType;
import com.ssafy.tenten.domain.CoinInfo;
import com.ssafy.tenten.vo.Response.CoinInfoResponse;

import java.util.List;

public interface CoinInfoService {
    CoinInfo createCoinInfo();

    List<CoinInfoResponse> getCoinInfo();

    List<CoinInfoResponse> getCoinInfoByCoinName(CoinType coinName);
}