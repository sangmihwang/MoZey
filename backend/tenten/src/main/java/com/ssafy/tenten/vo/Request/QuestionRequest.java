package com.ssafy.tenten.vo.Request;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

@Getter
public class QuestionRequest {
    @ApiModelProperty(value = "질문 내용",required = true)
    private String qtnContent;
    @ApiModelProperty(value = "사용자 아이디",required = true)
    private Long userId;
    @ApiModelProperty(value = "이미지",required = true)
    private String image;
    @ApiModelProperty(value = "질문 등록 상태",required = true)
    private Character status;
}
