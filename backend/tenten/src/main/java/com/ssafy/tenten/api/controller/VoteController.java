package com.ssafy.tenten.api.controller;

import com.ssafy.tenten.api.service.VoteService;
import com.ssafy.tenten.dto.VoteDto;
import com.ssafy.tenten.exception.SuccessResponseEntity;
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
public class VoteController {
    private final VoteService voteService;
    private final ModelMapper mapper;

    /**
     * 투표 질문 8개 생성해서 보내기 3.1 - 완료
     */
    @GetMapping("/votes/questions")
    public ResponseEntity<?> getQuestions() {
        List<VoteResponse> voteResponses = voteService.suffleQuestion();
        return SuccessResponseEntity.toResponseEntity("투표 질문 생성 완료", voteResponses);
    }

    /**
     * 투표 결과 등록 3.2 - 완료
     * 선택 받은 사람의 받은 횟수 늘리기 + 투표 내역 생성 하기
     */
    @PostMapping("/votes")
    public ResponseEntity<?> postVote(@RequestBody VoteRequest voteRequest) {
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        VoteDto voteDto = mapper.map(voteRequest, VoteDto.class);

        return SuccessResponseEntity.toResponseEntity("투표 결과 등록 완료", voteService.createVote(voteDto));
    }

    /**
     * 투표 후보 4명 무작위 생성 하기 3.3
     */
    @GetMapping("/votes/candidates/{userId}")
    public ResponseEntity<?> getCandidates(@PathVariable("userId") Long userId) {
        return SuccessResponseEntity.toResponseEntity("MOZEY 투표 후보 불러오기 완료", voteService.getVoteCandidates(userId));
    }

    /**
     * 투표 top3 질문 얻기
     */
    @GetMapping("/votes/top/{userId}")
    public ResponseEntity<?> getTop3(@PathVariable("userId") Long userId) {
        return SuccessResponseEntity.toResponseEntity("TOP3 불러오기 완료", voteService.getTop3(userId));
    }
}
