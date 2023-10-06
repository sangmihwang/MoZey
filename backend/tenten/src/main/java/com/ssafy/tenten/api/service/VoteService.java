package com.ssafy.tenten.api.service;

import com.ssafy.tenten.dto.VoteDto;
import com.ssafy.tenten.vo.Response.MessageResponse;
import com.ssafy.tenten.vo.Response.VoteResponse;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Slice;

import java.util.List;

public interface VoteService {
    VoteResponse createVote(VoteDto voteDto);

    List<VoteResponse> suffleQuestion();

    List<VoteResponse> getVoteCandidates(Long userId);

    List<VoteResponse> getTop3(Long userId);

    Slice<MessageResponse> getMessage(Long userId, PageRequest pageRequest);

}
