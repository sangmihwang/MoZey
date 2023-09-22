package com.ssafy.tenten.vo.Response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class QuizResponse {
    private final Long quizId;
    private final Long newsId;
    private final String question;
    private final String answer;
    private final LocalDateTime date;

}
