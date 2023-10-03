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
    public List<QuizResponse> getQuizzesByDate(LocalDateTime date) {
        System.out.println(date.toLocalDate());
        List<Quiz> quizzes = quizRepository.findAllByDate(date.toLocalDate());
        System.out.println(quizzes.size());
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

//    @Override
//    public QuizDto getQuiz(Long quizId) {
//        Quiz quiz = quizRepository.findById(quizId)
//                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));
//
//        return QuizDto.builder()
//                .quizId(quiz.getQuizId())
//                .newsId(quiz.getNewsId())
//                .question(quiz.getQuestion())
//                .answer(quiz.getAnswer())
//                .date(quiz.getDate())
//                .build();
//    }
//    @Override
//    public List<QuizResponse> getQuizByNewsId(Long newsId){
//        List<Quiz> quizzes = quizRepository.findByNewsId(newsId);

    //        return quizzes.stream()
//                .map(quiz -> QuizDto.builder()
//                        .quizId(quiz.getQuizId())
//                        .newsId(quiz.)
//                        .question(quiz.getQuestion())
//                        .answer(quiz.getAnswer())
//                        .date(quiz.getDate())
//                        .build())
//                .collect(Collectors.toList());
//        return null;
//    }
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
