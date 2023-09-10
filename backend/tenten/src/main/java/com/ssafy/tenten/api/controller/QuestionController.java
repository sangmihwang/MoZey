package com.ssafy.tenten.api.controller;

import com.ssafy.tenten.api.repository.QuestionRepository;
import com.ssafy.tenten.api.repository.VoteCntRepository;
import com.ssafy.tenten.api.repository.VoteHistrotyRepository;
import com.ssafy.tenten.api.service.VoteService;
import com.ssafy.tenten.domain.Question;
import com.ssafy.tenten.domain.VoteHistory;
import com.ssafy.tenten.dto.QuestionDto;
import com.ssafy.tenten.dto.VoteDto;
import com.ssafy.tenten.vo.Request.QuestionRequest;
import com.ssafy.tenten.vo.Request.VoteRequest;
import com.ssafy.tenten.vo.Response.VoteResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Slf4j
public class QuestionController {
    private final VoteService voteService;
    private final VoteHistrotyRepository voteHistrotyRepository;
    private final VoteCntRepository voteCntRepository;
    private final QuestionRepository questionRepository;
    private final ModelMapper mapper;

    /**
     * 질문 신청 내역 조회
     */
    @GetMapping("/questions/users/{userId}")
    public ResponseEntity<?> getAppQuestion(@PathVariable("userId") Long id){

        List<Question> questions = questionRepository.findByUserId("userId");
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);


        return ResponseEntity.ok().build();
    }
    /**
     * 질문 신청 등록
     */
    @PostMapping("/questions")
    public ResponseEntity<?> postQuestions(@RequestBody QuestionRequest questionRequest){
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        QuestionDto questionDto = mapper.map(questionRequest, QuestionDto.class);



        return ResponseEntity.ok().build();
    }

    /**
     * 질문 신청 삭제
     */
    @DeleteMapping("/questions/{qtnId}/{userId}")
    public ResponseEntity<?> deleteQuestion(@PathVariable("qtnId") Long qtnId, @PathVariable("userId") Long userId ){

        return ResponseEntity.ok().build();
    }

    /**
     * 등록 질문 전체 조회
     */
    @GetMapping("/questions/{userId}")
    public ResponseEntity<?> getQuestions(@PathVariable("userId") Long userId ){

        return ResponseEntity.ok().build();
    }

    /**
     * 등록 질문 단일 조회
     */
    @GetMapping("/questions/{qtnId}/{userId}")
    public ResponseEntity<?> getQuestion(@PathVariable("qtnId") Long qtnId, @PathVariable("userId") Long userId ){

        return ResponseEntity.ok().build();
    }

    /**
     * 등록 질문 수정
     */
    @PutMapping("/questions/{qtnId}/{userId}")
    public ResponseEntity<?> updateQuestion(@PathVariable("qtnId") Long qtnId, @PathVariable("userId") Long userId ){

        return ResponseEntity.ok().build();
    }


}
