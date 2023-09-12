package com.ssafy.tenten.api.service;

import com.ssafy.tenten.api.repository.QuestionRepository;
import com.ssafy.tenten.api.repository.UserRepository;
import com.ssafy.tenten.api.repository.VoteCntRepository;
import com.ssafy.tenten.domain.Question;
import com.ssafy.tenten.domain.User;
import com.ssafy.tenten.domain.VoteCount;
import com.ssafy.tenten.dto.VoteDto;
import com.ssafy.tenten.exception.CustomException;
import com.ssafy.tenten.exception.ErrorCode;
import com.ssafy.tenten.vo.Response.VoteResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class VoteServiceImp implements VoteService{

    private final VoteCntRepository voteCntRepository;
    private final QuestionRepository questionRepository;
    private final UserRepository userRepository;
    @Override
    public VoteResponse createVote(VoteDto voteDto) {

        boolean exists = voteCntRepository.checkIfVoteExists(voteDto.getUserId(), voteDto.getQtnId());

        if(!exists){
            // 생성하기
            Optional<User> userId = userRepository.findById(voteDto.getUserId());
            Optional<Question> questionId = questionRepository.findById(voteDto.getQtnId());
//            VoteCount voteCount = VoteCount.builder()
//                    .question(questionId)
//                    .userId(userId)
//                    .build();
        }
        // 올려주기


        return null;
    }

    @Override
    public List<VoteResponse> suffleQuestion() {
        List<Question> question = questionRepository.findByStatus('Y');

        Collections.shuffle(question);

        List<Question> collect = question.stream()
                .limit(Math.min(question.size(), 8))
                .collect(Collectors.toList());
        if(collect.size()!=8) throw new CustomException(ErrorCode.QUESTION_NOT_ENOUGH);

        return collect.stream()
                .map(a -> VoteResponse.builder()
                        .image(a.getImg())
                        .qtnId(a.getQtnId())
                        .qtnContent(a.getQtnContent())
                        .build())
                .collect(Collectors.toList());
    }
}
