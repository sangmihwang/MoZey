package com.ssafy.tenten.domain;

import com.ssafy.tenten.constant.CoinTransactionType;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class MoneyHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long coinHistoryId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User userId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "coin_price_id")
    private CoinInfo coinId;

    @Column(name = "coin_change_date")
    private Long coinChangeDate;

    @Column(name = "coin_change_amount")
    private Long coinChangeAmount;

    @Enumerated(EnumType.STRING)
    @Column(name = "transaction_type")
    private CoinTransactionType transactionType;
}
