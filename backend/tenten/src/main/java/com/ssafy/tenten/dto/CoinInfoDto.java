package com.ssafy.tenten.dto;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.io.Serializable;

@Data
@RequiredArgsConstructor
public class CoinInfoDto implements Serializable {
    private String coinName;
    private Long coinPrice;
    private Long date;
}
