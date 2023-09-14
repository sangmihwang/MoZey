package com.ssafy.tenten.api.service;

import com.ssafy.tenten.api.repository.QuizRepository;
import com.ssafy.tenten.dto.QuizDto;
import com.ssafy.tenten.domain.Quiz;
import com.ssafy.tenten.vo.Request.QuizRequest;
import com.ssafy.tenten.vo.Response.QuizResponse;
import com.ssafy.tenten.exception.CustomException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import static com.ssafy.tenten.exception.ErrorCode.USER_NOT_FOUND;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class QuizServiceImpl implements QuizService {
    private final QuizRepository quizRepository;

    @Override
    public List<QuizDto> getQuizzesByDate(LocalDateTime date) {
        List<Quiz> quizzes = quizRepository.findAllByDate(date.toLocalDate());
        return quizzes.stream()
                .map(quiz -> QuizDto.builder()
                        .quizId(quiz.getQuizId())
                        .newsId(quiz.getNewsId()) // 이 부분 나중에 수정해야함
                        .question(quiz.getQuestion())
                        .answer(quiz.getAnswer())
                        .date(quiz.getDate())
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
//      News news = newsRepository.findById()
        Quiz quiz = Quiz.builder()
                .quizDto(quizDto)
//                .newsId(newsId)
                .build();
        quizRepository.save(quiz);

    }


}
