package com.ssafy.tenten.vo.Response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.querydsl.core.annotations.QueryProjection;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class RecommendUserResponse {
    private final Character gender;
    private final Long userId;
    private final String image;
    private final String name;
    private final String term;
    private final String campus;
    private final String group;

}
