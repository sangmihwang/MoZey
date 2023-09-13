package com.ssafy.tenten.dto;

import java.io.Serializable;
import java.time.LocalDateTime;

public class QuizDto implements Serializable {
    private Long quizId;
    private Long newsId;
    private String question;
    private String answer;
    private LocalDateTime date;
}
