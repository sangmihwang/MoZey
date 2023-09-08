package com.ssafy.tenten.api.repository.querydsl;

public interface VoteRepositoryCustom {

    boolean checkIfVoteExists(Long userId, Long qtnId);
}

