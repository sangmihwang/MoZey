package com.ssafy.tenten.dto;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.io.Serializable;

@Data
@RequiredArgsConstructor
public class VoteDto implements Serializable {
    private Long qtnId;
    private Long userId;
    private Long chosen;
}
