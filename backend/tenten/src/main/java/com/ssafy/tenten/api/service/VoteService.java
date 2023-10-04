package com.ssafy.tenten.api.service;

import com.ssafy.tenten.domain.VoteHistory;
import com.ssafy.tenten.dto.VoteDto;
import com.ssafy.tenten.vo.Response.MessageResponse;
import com.ssafy.tenten.vo.Response.VoteResponse;

import java.util.List;

public interface VoteService {
    VoteResponse createVote(VoteDto voteDto);

    List<VoteResponse> suffleQuestion();

    List<VoteResponse> getVoteCandidates(Long userId);

    List<VoteResponse> getTop3(Long userId);

    List<MessageResponse> getMessage(Long userId);

}
