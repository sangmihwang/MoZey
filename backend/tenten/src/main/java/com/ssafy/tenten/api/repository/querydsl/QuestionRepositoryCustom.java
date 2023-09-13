package com.ssafy.tenten.api.repository.querydsl;

import com.ssafy.tenten.vo.Request.QuestionRequest;
import com.ssafy.tenten.vo.Response.QuestionResponse;

public interface QuestionRepositoryCustom {
    QuestionResponse updateQuestion(Long qtnId, QuestionRequest questionRequest);
}
