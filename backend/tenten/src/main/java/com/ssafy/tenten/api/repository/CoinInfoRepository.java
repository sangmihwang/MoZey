package com.ssafy.tenten.api.repository;

import com.ssafy.tenten.domain.CoinInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CoinInfoRepository extends JpaRepository<CoinInfo, Long> {
    CoinInfo save(CoinInfo coinInfo);

    Optional<CoinInfo> findTopByOOrderByDateDesc();

    List<CoinInfo> findByCoinName(String coinName);
}