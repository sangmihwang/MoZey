package com.ssafy.tenten.api.service;

import com.ssafy.tenten.api.repository.VoteCntRepository;
import com.ssafy.tenten.dto.VoteDto;
import com.ssafy.tenten.vo.Response.VoteResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class VoteServiceImp implements VoteService{

    private final VoteCntRepository voteCntRepository;

    @Override
    public VoteResponse createVote(VoteDto voteDto) {

        boolean exists = voteCntRepository.checkIfVoteExists(voteDto.getUserId(), voteDto.getQtnId());

        if(!exists){
            // 올려주기 ..
        }else{
            // 생성하기

        }
        // 올려주기


        return null;
    }
}
