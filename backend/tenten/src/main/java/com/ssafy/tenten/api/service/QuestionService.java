package com.ssafy.tenten.api.service;

import com.ssafy.tenten.dto.QuestionDto;
import com.ssafy.tenten.vo.Response.QuestionResponse;

import java.util.List;

public interface QuestionService {
    void postQuestions(QuestionDto questionDto);

    List<QuestionResponse> getQuestions(Long userId);
}
