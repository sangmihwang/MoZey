package com.ssafy.tenten.dto;

import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@RequiredArgsConstructor
@Builder
public class QuizDto implements Serializable {
    private Long quizId;
    private Long newsId;
    private String question;
    private String answer;
    private LocalDateTime date;
}
