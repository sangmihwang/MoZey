package com.ssafy.tenten.api.service;

import com.ssafy.tenten.dto.VoteDto;
import com.ssafy.tenten.vo.Response.VoteResponse;

public interface VoteService {
    VoteResponse createVote(VoteDto voteDto);
}
