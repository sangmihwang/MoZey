package com.ssafy.tenten.domain;

import com.ssafy.tenten.constant.CoinTransactionType;
import com.ssafy.tenten.constant.CoinType;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;

@Entity
@Getter
@DynamicInsert
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MoneyHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long coinHistoryId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User userId;

    @Enumerated(EnumType.STRING)
    @Column(name = "coin_name")
    private CoinType coinName;

    @Column(name = "coin_change_date")
    private Long coinChangeDate;

    @Column(name = "coin_change_amount")
    private Long coinChangeAmount;

    @Enumerated(EnumType.STRING)
    @Column(name = "transaction_type")
    private CoinTransactionType transactionType;

    @Builder
    MoneyHistory(User userId, CoinType coinName, Long coinChangeAmount, CoinTransactionType transactionType){
        this.userId = userId;
        this.coinName = coinName;
        this.coinChangeDate = System.currentTimeMillis()/1000L;
        this.coinChangeAmount = coinChangeAmount;
        this.transactionType = transactionType;
    }
}
