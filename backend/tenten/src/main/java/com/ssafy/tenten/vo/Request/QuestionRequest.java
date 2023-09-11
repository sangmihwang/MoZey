package com.ssafy.tenten.vo.Request;

import lombok.Getter;

@Getter
public class QuestionRequest {
    private String qtnContent;
    private Long userId;
    private String image;
    private Character status;
}
