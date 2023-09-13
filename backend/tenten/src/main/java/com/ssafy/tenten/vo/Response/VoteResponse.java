package com.ssafy.tenten.vo.Response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

@Getter
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL) // 널값은 전달하지 않는다
public class VoteResponse {
    private final String qtnContent;
    private final String image;
    private final Long qtnId;
    private final Long userId;
    private final Long chosen;
    private final Long time;
    private final String name;

}
