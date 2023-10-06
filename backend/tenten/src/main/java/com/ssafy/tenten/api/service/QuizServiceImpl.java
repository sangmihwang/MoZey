package com.ssafy.tenten.api.service;

import com.ssafy.tenten.api.repository.NewsRepository;
import com.ssafy.tenten.api.repository.QuizRepository;
import com.ssafy.tenten.domain.News;
import com.ssafy.tenten.domain.Quiz;
import com.ssafy.tenten.dto.QuizDto;
import com.ssafy.tenten.exception.CustomException;
import com.ssafy.tenten.exception.ErrorCode;
import com.ssafy.tenten.vo.Response.QuizResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class QuizServiceImpl implements QuizService {
    private final QuizRepository quizRepository;
    private final NewsRepository newsRepository;

    @Override
    @Cacheable(value = "QUIZ", key = "#date.toLocalDate().toString()", cacheManager = "testCacheManager")
    public List<QuizResponse> getQuizzesByDate(LocalDateTime date) {
        List<Quiz> quizzes = quizRepository.findAllByDate(date.toLocalDate());

        return quizzes.stream()
                .map(quiz -> QuizResponse.builder()
                        .quizId(quiz.getQuizId())
                        .newsId(quiz.getNewsId().getNewsId())
                        .question(quiz.getQuestion())
                        .answer(quiz.getAnswer())
                        .date(quiz.getDate())
                        .multipleChoice(quiz.getMultipleChoice())
                        .build())
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public void createQuiz(QuizDto quizDto) {
        News news = newsRepository.findById(quizDto.getNewsId()).orElseThrow(
                () -> new CustomException(ErrorCode.NEWS_NOT_FOUND)
        );

        Quiz quiz = Quiz.builder()
                .question(quizDto.getQuestion())
                .newsId(news)
                .answer(quizDto.getAnswer())
                .build();
        quizRepository.save(quiz);

    }


}
