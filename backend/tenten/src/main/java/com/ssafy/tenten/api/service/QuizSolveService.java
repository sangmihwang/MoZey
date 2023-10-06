package com.ssafy.tenten.api.service;

import com.ssafy.tenten.dto.QuizSolveDto;
import com.ssafy.tenten.vo.Response.QuizSolveResponse;

import java.util.Optional;

public interface QuizSolveService {
//    QuizSolveDto getQuiz(Long quizSolveId);
    Optional<QuizSolveResponse> getSolveRecordByUserAndQuiz(Long userId, Long quizId);
    void createQuizSolve(QuizSolveDto quizSolveDto);
}
