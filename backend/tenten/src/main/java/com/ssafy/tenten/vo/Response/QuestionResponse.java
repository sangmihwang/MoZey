package com.ssafy.tenten.vo.Response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Getter
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL) // 널값은 전달하지 않는다
public class QuestionResponse {
    private String qtnContent;
    private Character status;
    private String image;
    private Long qtnId;
    private Long userId;
}
