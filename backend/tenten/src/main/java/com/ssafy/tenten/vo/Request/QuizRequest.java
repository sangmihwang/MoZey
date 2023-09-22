package com.ssafy.tenten.vo.Request;

import lombok.Data;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class QuizRequest {
    private Long quizId;
    private Long newsId;
    private String question;
    private String answer;
    private LocalDateTime date;
}
