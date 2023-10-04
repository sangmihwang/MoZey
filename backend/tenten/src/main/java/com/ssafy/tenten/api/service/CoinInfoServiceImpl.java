package com.ssafy.tenten.api.service;

import com.ssafy.tenten.api.repository.CoinInfoRepository;
import com.ssafy.tenten.constant.CoinType;
import com.ssafy.tenten.domain.CoinInfo;
import com.ssafy.tenten.dto.CoinInfoDto;
import com.ssafy.tenten.exception.CustomException;
import com.ssafy.tenten.vo.Response.CoinInfoResponse;
import lombok.RequiredArgsConstructor;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

import static com.ssafy.tenten.exception.ErrorCode.COININFO_NOT_FOUND;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class CoinInfoServiceImpl implements CoinInfoService{
    private final CoinInfoRepository coinInfoRepository;
    LocalDate currentDate = LocalDate.now();
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");
    String formattedDate = currentDate.format(formatter);
    Long longDate = Long.parseLong(formattedDate);

    @Override
    @Transactional
    @Scheduled(cron = "0 28 15 * * *")
    public CoinInfo createCoinInfo() {
        CoinInfoDto kospiDto = getKospi();
        if (kospiDto != null) {
            CoinInfo coinInfo = new CoinInfo();
            coinInfo.setCoinName(CoinType.valueOf(kospiDto.getCoinName()));
            coinInfo.setCoinPrice(kospiDto.getCoinPrice());
            coinInfo.setDate(kospiDto.getDate());
            coinInfoRepository.save(coinInfo);
        }

        CoinInfoDto snpDto = getSnP();
        if(snpDto != null) {
            CoinInfo coinInfo = new CoinInfo();
            coinInfo.setCoinName(CoinType.valueOf(snpDto.getCoinName()));
            coinInfo.setCoinPrice(snpDto.getCoinPrice());
            coinInfo.setDate(snpDto.getDate());
            coinInfoRepository.save(coinInfo);
            return coinInfo;
        }
        return null;
    }

    public CoinInfoDto getKospi() {
        final String kospiUrl = "https://finance.naver.com/sise/sise_index.naver?code=KOSPI";
        Connection conn = Jsoup.connect(kospiUrl);
        try {
            Document document = conn.get();
            return getKospi(document);
        }catch (IOException ignored){
        }
        return null;
    }

    public CoinInfoDto getKospi(Document document){
        Elements kospiInfo = document.select("div.quotient em");
        CoinInfoDto kospi = new CoinInfoDto();
        kospi.setCoinName("Coin1");
        Long price = (long) (Float.parseFloat(kospiInfo.get(0).text().replace(",", "")) * 100);
        kospi.setCoinPrice(price);
        kospi.setDate(longDate);
        return kospi;
    }

    public CoinInfoDto getSnP() {
        final String kospiUrl = "https://finance.naver.com/world/sise.naver?symbol=SPI@SPX";
        Connection conn = Jsoup.connect(kospiUrl);
        try {
            Document document = conn.get();
            return getSnP(document);
        }catch (IOException ignored){
        }
        return null;
    }

    public CoinInfoDto getSnP(Document document){
        Elements snpInfo = document.select("div.today p em span");
        StringBuilder stringPrice = new StringBuilder();
        for(int i = 0; i < 8; i++){
            if(!snpInfo.get(i).text().equals(","))
                stringPrice.append(snpInfo.get(i).text());
        }
        CoinInfoDto snp = new CoinInfoDto();
        snp.setCoinName("Coin2");
        Long price = (long) (Float.parseFloat(stringPrice.toString()) * 100);
        snp.setCoinPrice(price);
        snp.setDate(longDate);
        return snp;
    }

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
    public List<CoinInfoResponse> getCoinInfoByCoinName(CoinType coinName) {
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
