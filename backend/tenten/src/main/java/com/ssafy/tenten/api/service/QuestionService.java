package com.ssafy.tenten.api.service;

import com.ssafy.tenten.dto.QuestionDto;
import com.ssafy.tenten.vo.Response.QuestionResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;

public interface QuestionService {
    void postQuestions(QuestionDto questionDto);

    Page<QuestionResponse> getAllQuestions(PageRequest pageRequest );

    Slice<QuestionResponse> getQuestions(Long id,Character status ,Pageable pageable);

    QuestionResponse getQuestion(Long qtnId);

    QuestionResponse updateQuestion(Long qtnId, QuestionDto questionDto);

    Page<QuestionResponse> getQuestionPage(Character status, PageRequest pageRequest);
}
