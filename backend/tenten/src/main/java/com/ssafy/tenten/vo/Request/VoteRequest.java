package com.ssafy.tenten.vo.Request;

import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
public class VoteRequest {
    private Long qtnId;
    private Long userId;
    private Long chosen;
}
