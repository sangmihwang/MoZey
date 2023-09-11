package com.ssafy.tenten.vo.Response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserResponse {
    // 초성 한 개(일반회원) or 열람하고 싶은 정보(구독자 한정)
    // 를 반환하는 Response를 따로 만들지?
    private final String gender;
    private final String image;
    private final String name;
    private final String term;
    private final String campus;
    private final String group;
}
