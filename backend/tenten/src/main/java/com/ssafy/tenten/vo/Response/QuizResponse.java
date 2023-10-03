package com.ssafy.tenten.vo.Response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.ssafy.tenten.domain.embedded.MultipleChoice;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDate;

@Getter
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class QuizResponse {
    private final Long quizId;
    private final Long newsId;
    private final String question;
    private final String answer;
    private final LocalDate date;
    private final MultipleChoice multipleChoice;

}
