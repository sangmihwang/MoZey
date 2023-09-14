package com.ssafy.tenten.api.service;

import com.ssafy.tenten.dto.QuizDto;
import com.ssafy.tenten.dto.QuizSolveDto;

public interface QuizSolveService {
    QuizSolveDto getQuiz(Long quizSolveId);
    void createQuizSolve(QuizSolveDto quizSolveDto);
}
