package com.ssafy.tenten.vo.Response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class RecommendUserResponse {
    private final char gender;
    private final Long userId;
    private final String image;
    private final String name;
    private final String term;
    private final String campus;
    private final String group;
}
