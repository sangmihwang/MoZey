package com.ssafy.tenten.domain;

import com.ssafy.tenten.constant.CoinType;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
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
    private Long coinPrice;

    private Long date;

}
