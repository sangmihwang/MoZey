package com.ssafy.tenten.api.repository;

import com.ssafy.tenten.constant.CoinType;
import com.ssafy.tenten.domain.CoinInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CoinInfoRepository extends JpaRepository<CoinInfo, Long> {
    CoinInfo save(CoinInfo coinInfo);

    // Optional<CoinInfo> findTopByOOrderByDateDesc();

    List<CoinInfo> findAll();

    @Query("SELECT c FROM CoinInfo c WHERE c.coinName = :coinName")
    List<CoinInfo> findByCoinName(CoinType coinName);
}