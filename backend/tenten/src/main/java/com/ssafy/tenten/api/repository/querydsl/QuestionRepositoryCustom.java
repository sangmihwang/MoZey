package com.ssafy.tenten.api.repository.querydsl;

import com.ssafy.tenten.dto.QuestionDto;
import com.ssafy.tenten.vo.Response.QuestionResponse;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;

import java.util.Optional;

public interface QuestionRepositoryCustom {
    QuestionResponse updateQuestion(Long qtnId, QuestionDto questionDto);

    Optional<Slice<QuestionResponse>> getPageQuestions(Long userId,Character status ,Pageable pageable);
}
