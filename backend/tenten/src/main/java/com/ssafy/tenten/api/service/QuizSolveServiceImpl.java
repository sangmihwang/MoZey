package com.ssafy.tenten.api.service;

import com.ssafy.tenten.api.repository.QuizSolveRepository;
import com.ssafy.tenten.api.repository.UserRepository;
import com.ssafy.tenten.domain.Quiz;
import com.ssafy.tenten.domain.QuizSolve;
import com.ssafy.tenten.domain.User;
import com.ssafy.tenten.dto.QuizSolveDto;
import com.ssafy.tenten.vo.Response.QuizSolveResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class QuizSolveServiceImpl implements QuizSolveService {
    private final QuizSolveRepository quizSolveRepository;
    private final UserRepository userRepository;

    @Override
    public Optional<QuizSolveResponse> getSolveRecordByUser(LocalDateTime date, Long userId) {
        Optional<QuizSolve> quizSolve = quizSolveRepository.findByUserIdAndDate(date, userId);
        if (quizSolve.isPresent()) {
            QuizSolve record = quizSolve.get();
            Quiz quiz = record.getQuizId();
            User user = record.getUserId();

            return Optional.of(QuizSolveResponse.builder()
                    .quizSolveId(record.getQuizSolveId())
                    .quizId(quiz != null ? quiz.getQuizId() : null)
                    .userId(user != null ? user.getUserId() : null)
                    .build());

        } else {
            return Optional.empty();
        }
    }

    @Override
    public void createQuizSolve(QuizSolveDto quizSolveDto) {


    }
}
