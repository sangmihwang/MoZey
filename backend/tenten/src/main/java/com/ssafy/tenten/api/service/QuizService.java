package com.ssafy.tenten.api.service;

import com.ssafy.tenten.dto.QuizDto;
import com.ssafy.tenten.vo.Response.QuizResponse;

import java.time.LocalDateTime;
import java.util.List;
public interface QuizService {
    List<QuizResponse> getQuizzesByDate(LocalDateTime date);
    void createQuiz(QuizDto quizDto);

}
