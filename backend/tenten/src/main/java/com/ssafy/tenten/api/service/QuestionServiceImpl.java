package com.ssafy.tenten.api.service;

import com.ssafy.tenten.api.repository.QuestionRepository;
import com.ssafy.tenten.api.repository.UserRepository;
import com.ssafy.tenten.domain.Question;
import com.ssafy.tenten.domain.User;
import com.ssafy.tenten.dto.QuestionDto;
import com.ssafy.tenten.exception.CustomException;
import com.ssafy.tenten.vo.Response.QuestionResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

import static com.ssafy.tenten.exception.ErrorCode.QUESTION_NOT_FOUND;
import static com.ssafy.tenten.exception.ErrorCode.USER_NOT_FOUND;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class QuestionServiceImpl implements QuestionService{
    private final QuestionRepository questionRepository;
    private final UserRepository userRepository;
    private final RedisTemplate<String, Object> redisTemplate;
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
    public List<QuestionResponse> getAllQuestions() {
        List<Question> questions = questionRepository.findAll();

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

    @Override
//    @Cacheable(value = "quesitons", key = "#id",cacheManager = "testCacheManager")
    public Slice<QuestionResponse> getQuestions(Long id,Character status ,Pageable pageable) {

        Slice<QuestionResponse> questions = questionRepository.getPageQuestions(id,status,pageable)
                .orElseThrow(() ->new CustomException(USER_NOT_FOUND));

        questions.hasNext();
/**
        List<QuestionResponse> collect = questions.stream()
                .map(a -> QuestionResponse.builder()
                        .qtnId(a.getQtnId())
                        .userId(a.getUserId().getUserId())
                        .qtnContent(a.getQtnContent())
                        .status(a.getStatus())
                        .build())
                .collect(Collectors.toList());
**/
        return questions;
    }

    @Override
    public QuestionResponse getQuestion(Long qtnId) {
        ValueOperations<String, Object> stringListValueOperations = redisTemplate.opsForValue();
        if(stringListValueOperations.get("question")!=null){
            System.out.println(stringListValueOperations.get("question"));
            return null;
        }
        Question question = questionRepository.findById(qtnId).orElseThrow(
                () -> new CustomException(QUESTION_NOT_FOUND)
        );

        return QuestionResponse.builder()
                .image(question.getImg())
                .status(question.getStatus())
                .qtnId(question.getQtnId())
                .userId(question.getUserId().getUserId())
                .qtnContent(question.getQtnContent())
                .build();
    }

    @Override
    @Transactional
    public QuestionResponse updateQuestion(Long qtnId, QuestionDto questionDto) {
        return questionRepository.updateQuestion(qtnId, questionDto);
    }
}
