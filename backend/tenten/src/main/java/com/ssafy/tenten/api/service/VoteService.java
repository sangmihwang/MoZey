package com.ssafy.tenten.api.service;

import com.ssafy.tenten.dto.VoteDto;
import com.ssafy.tenten.vo.Response.VoteResponse;

import java.util.List;

public interface VoteService {
    VoteResponse createVote(VoteDto voteDto);

    List<VoteResponse> suffleQuestion();
}
