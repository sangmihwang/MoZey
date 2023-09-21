package com.ssafy.tenten.vo.Response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.ssafy.tenten.domain.Question;
import com.ssafy.tenten.vo.Request.QuestionRequest;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import java.io.Serializable;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL) // 널값은 전달하지 않는다
public class QuestionResponse implements Serializable {
    @ApiModelProperty(value = "질문 내용",required = true)
    private String qtnContent;
    @ApiModelProperty(value = "질문 진행 상태")
    private Character status;
    @ApiModelProperty(value = "이미지")
    private String image;
    @ApiModelProperty(value = "질문 아이디")
    private Long qtnId;
    @ApiModelProperty(value = "유저 아이디")
    private Long userId;

}
