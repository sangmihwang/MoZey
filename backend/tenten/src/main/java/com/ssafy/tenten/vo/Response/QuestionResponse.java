package com.ssafy.tenten.vo.Response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL) // 널값은 전달하지 않는다
public class QuestionResponse {
    private String qtnContent;
    private String status;
    private String image;
    private Long qtnId;
    private Long userId;
}
