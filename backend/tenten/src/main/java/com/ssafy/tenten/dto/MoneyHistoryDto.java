package com.ssafy.tenten.dto;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.io.Serializable;

@Data
@RequiredArgsConstructor
public class MoneyHistoryDto implements Serializable {
    private Long userId;
    private String coinName;
//    private Long coinChangeDate;
    private Long coinChangeAmount;
    private String transactionType;
}
