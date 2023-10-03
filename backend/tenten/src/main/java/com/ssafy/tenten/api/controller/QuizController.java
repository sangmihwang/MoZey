package com.ssafy.tenten.api.controller;

import com.ssafy.tenten.api.service.QuizService;
import com.ssafy.tenten.dto.QuizDto;
import com.ssafy.tenten.exception.SuccessResponseEntity;
import com.ssafy.tenten.vo.Response.QuizResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;


@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Slf4j
public class QuizController {
    private final QuizService quizService;
    private final ModelMapper mapper;

    @GetMapping("/quiz")
    public ResponseEntity<?> getQuizzesByDate(@RequestParam("date") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate date) {

        List<QuizResponse> quizDtos = quizService.getQuizzesByDate(date.atStartOfDay());
        return ResponseEntity.ok(quizDtos);
    }
    @PostMapping("/quiz")
    public ResponseEntity<?> postQuiz(@RequestBody QuizDto quizDto){
        quizService.createQuiz(quizDto);
        return SuccessResponseEntity.toResponseEntity("퀴즈 등록 완료",null);
    }

}
