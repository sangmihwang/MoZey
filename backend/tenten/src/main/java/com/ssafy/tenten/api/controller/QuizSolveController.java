package com.ssafy.tenten.api.controller;

import com.ssafy.tenten.api.service.QuizSolveService;
import com.ssafy.tenten.dto.QuizSolveDto;
import com.ssafy.tenten.exception.SuccessResponseEntity;
import com.ssafy.tenten.vo.Response.QuizSolveResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Slf4j
public class QuizSolveController {
    private final QuizSolveService quizSolveService;
    private final ModelMapper mapper;

    @GetMapping("/quiz/success")
    public ResponseEntity<?> getSolveRecordByUserAndQuiz(
            @RequestParam Long userId,
            @RequestParam Long quizId) {

        Optional<QuizSolveResponse> quizSolveResponse = quizSolveService.getSolveRecordByUserAndQuiz(userId, quizId);
        return ResponseEntity.ok(quizSolveResponse);
    }

    public ResponseEntity<?> createQuizSolve(
            @RequestBody QuizSolveDto quizSolveDto) {
        quizSolveService.createQuizSolve(quizSolveDto);
        return SuccessResponseEntity.toResponseEntity("퀴즈풀이내용 등록완료", null);
    }

}
