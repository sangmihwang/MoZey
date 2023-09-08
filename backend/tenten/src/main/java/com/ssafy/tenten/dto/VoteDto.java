package com.ssafy.tenten.dto;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class VoteDto {
    private Long qtnId;
    private Long userId;
    private Long chosen;
}
