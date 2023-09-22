package com.ssafy.tenten.vo.Response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class MoneyHistoryResponse {
    private String coinName;
    private Long coinChangeDate;
    private Long coinChangeAmount;
    private String transactionType;
}