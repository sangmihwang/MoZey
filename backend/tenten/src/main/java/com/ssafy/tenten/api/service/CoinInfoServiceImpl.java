package com.ssafy.tenten.api.service;

import com.ssafy.tenten.api.repository.CoinInfoRepository;
import com.ssafy.tenten.domain.CoinInfo;
import com.ssafy.tenten.exception.CustomException;
import com.ssafy.tenten.vo.Response.CoinInfoResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

import static com.ssafy.tenten.exception.ErrorCode.COININFO_NOT_FOUND;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class CoinInfoServiceImpl implements CoinInfoService{
    private final CoinInfoRepository coinInfoRepository;

    @Override
    public List<CoinInfoResponse> getCoinInfo() {
        List<CoinInfo> coinInfos = coinInfoRepository.findAll();

        if(coinInfos.size() == 0){
            throw new CustomException(COININFO_NOT_FOUND);
        }

        List<CoinInfoResponse> collect = coinInfos.stream()
                .map(a -> CoinInfoResponse.builder()
                        .coinName(String.valueOf(a.getCoinName()))
                        .coinPrice(a.getCoinPrice())
                        .date(a.getDate())
                        .build())
                .collect(Collectors.toList());
        return collect;
    }

    @Override
    public List<CoinInfoResponse> getCoinInfoByCoinName(String coinName) {
        List<CoinInfo> coinInfos = coinInfoRepository.findByCoinName(coinName);

        if(coinInfos.size() == 0){
            throw new CustomException(COININFO_NOT_FOUND);
        }

        List<CoinInfoResponse> collect = coinInfos.stream()
                .map(a -> CoinInfoResponse.builder()
                        .coinName(String.valueOf(a.getCoinName()))
                        .coinPrice(a.getCoinPrice())
                        .date(a.getDate())
                        .build())
                .collect(Collectors.toList());
        return collect;
    }
}
