package com.ssafy.tenten.api.controller;

import com.ssafy.tenten.api.repository.QuestionRepository;
import com.ssafy.tenten.api.repository.VoteCntRepository;
import com.ssafy.tenten.api.repository.VoteHistrotyRepository;
import com.ssafy.tenten.api.service.VoteService;
import com.ssafy.tenten.domain.Question;
import com.ssafy.tenten.domain.VoteHistory;
import com.ssafy.tenten.dto.VoteDto;
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
    private final VoteHistrotyRepository voteHistrotyRepository;
    private final VoteCntRepository voteCntRepository;
    private final QuestionRepository questionRepository;
    private final ModelMapper mapper;

    /**
     * 투표 질문 8개 생성해서 보내기 3.1
     */
    @GetMapping("/votes/questions/{userId}")
    public ResponseEntity<?> getQuestion(@PathVariable("userId") String id){

        List<Question> questions = questionRepository.findByUserId("userId");
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);


        return ResponseEntity.ok().build();
    }
    /**
     * 투표 결과 등록 3.2
     * 선택 받은 사람의 받은 횟수 늘리기
     */
    @PostMapping("/votes")
    public ResponseEntity<?> postVote(@RequestBody VoteRequest voteRequest){
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        VoteDto voteDto = mapper.map(voteRequest, VoteDto.class);
        voteService.createVote(voteDto);

        return ResponseEntity.ok().build();
    }

    /**
     * 투표 후보 4명 무작위 생성 하기 3.3
     * 윤상님 유저 만들어지면 만들기.
     */
    @GetMapping("/votes/candidates/{userId}")
    public ResponseEntity<?> getCandidates(){



        return ResponseEntity.ok().build();
    }


}
