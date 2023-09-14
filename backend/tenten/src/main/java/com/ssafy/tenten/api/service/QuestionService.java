package com.ssafy.tenten.api.service;

import com.ssafy.tenten.dto.QuestionDto;
import com.ssafy.tenten.vo.Request.QuestionRequest;
import com.ssafy.tenten.vo.Response.QuestionResponse;
import org.springframework.cache.annotation.Cacheable;

import java.util.List;

public interface QuestionService {
    void postQuestions(QuestionDto questionDto);

    List<QuestionResponse> getAllQuestions();

    List<QuestionResponse> getQuestions(Long id);

    QuestionResponse getQuestion(Long qtnId);

    QuestionResponse updateQuestion(Long qtnId, QuestionRequest questionRequest);
}
