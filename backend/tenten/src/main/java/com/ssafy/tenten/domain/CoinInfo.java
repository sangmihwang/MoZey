package com.ssafy.tenten.domain;

import com.ssafy.tenten.constant.CoinType;
import lombok.Getter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Table(name = "COIN_INFO")
public class CoinInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "coin_price_id")
    private Long coinPriceId;

    @Enumerated(EnumType.STRING)
    @Column(name = "coin_name", nullable = false)
    private CoinType coinName;

    @Column(name = "coin_price")
    private Float coinPrice;

    private LocalDateTime date;

}
