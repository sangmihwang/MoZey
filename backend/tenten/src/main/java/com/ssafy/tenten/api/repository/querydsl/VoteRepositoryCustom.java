package com.ssafy.tenten.api.repository.querydsl;

public interface VoteRepositoryCustom {
    boolean exists(Long userId,Long qtnId);
}
