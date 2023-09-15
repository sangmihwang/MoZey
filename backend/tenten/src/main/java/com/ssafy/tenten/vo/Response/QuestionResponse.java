package com.ssafy.tenten.vo.Response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.ssafy.tenten.domain.Question;
import com.ssafy.tenten.vo.Request.QuestionRequest;
import lombok.*;

import java.io.Serializable;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL) // 널값은 전달하지 않는다
public class QuestionResponse implements Serializable {
    private String qtnContent;
    private Character status;
    private String image;
    private Long qtnId;
    private Long userId;

}
