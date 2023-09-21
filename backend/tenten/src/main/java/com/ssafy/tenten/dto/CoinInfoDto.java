package com.ssafy.tenten.dto;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@RequiredArgsConstructor
public class CoinInfoDto implements Serializable {
    private String coinName;
    private Long coinPrice;
    private LocalDateTime date;
}
