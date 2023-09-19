package com.ssafy.tenten.dto;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.io.Serializable;

@Data
@RequiredArgsConstructor
public class QuizSolveDto implements Serializable {
    private Long quizSolveId;
    private Long userId;
    private Long quizId;
}
