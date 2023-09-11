package com.ssafy.tenten.api.service;

import com.ssafy.tenten.api.repository.QuestionRepository;
import com.ssafy.tenten.api.repository.UserRepository;
import com.ssafy.tenten.domain.Question;
import com.ssafy.tenten.domain.User;
import com.ssafy.tenten.dto.QuestionDto;
import com.ssafy.tenten.exception.CustomException;
import com.ssafy.tenten.vo.Response.QuestionResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static com.ssafy.tenten.exception.ErrorCode.USER_NOT_FOUND;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class QuestionServiceImpl implements QuestionService{
    private final QuestionRepository questionRepository;
    private final UserRepository userRepository;
    @Override
    @Transactional
    public void postQuestions(QuestionDto questionDto) {
        User userId = userRepository.findById(questionDto.getUserId()).orElseThrow(
                () -> new CustomException(USER_NOT_FOUND)
        );

        Question question = Question.builder()
                .questionDto(questionDto)
                .userId(userId)
                .build();
        questionRepository.save(question);
    }

    @Override
    public List<QuestionResponse> getQuestions(Long userId) {
        List<Question> questions = questionRepository.findByUserId(userId).orElseThrow(
                () -> new CustomException(USER_NOT_FOUND)
        );

        List<QuestionResponse> collect = questions.stream()
                .map(a -> QuestionResponse.builder()
                        .qtnId(a.getQtnId())
                        .userId(a.getUserId().getUserId())
                        .qtnContent(a.getQtnContent())
                        .status(a.getStatus())
                        .build())
                .collect(Collectors.toList());
        return collect;

    }
}
