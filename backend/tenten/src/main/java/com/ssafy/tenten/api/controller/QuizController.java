package com.ssafy.tenten.api.controller;

import com.ssafy.tenten.api.service.QuizService;
import com.ssafy.tenten.domain.Quiz;
import com.ssafy.tenten.dto.QuizDto;
import com.ssafy.tenten.exception.SuccessResponseEntity;
import com.ssafy.tenten.vo.Response.QuizResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Slf4j
public class QuizController {
    private final QuizService quizService;
    private final ModelMapper mapper;


    public ResponseEntity<List<QuizResponse>> getQuizzesByDate() {
        List<QuizDto> quizDtos = quizService.getQuizzesByDate(LocalDateTime.now());
        List<QuizResponse> quizResponses = quizDtos.stream()
                .map(quizDto -> mapper.map(quizDto, QuizResponse.class))
                .collect(Collectors.toList());
        return ResponseEntity.ok(quizResponses);
    }

}
