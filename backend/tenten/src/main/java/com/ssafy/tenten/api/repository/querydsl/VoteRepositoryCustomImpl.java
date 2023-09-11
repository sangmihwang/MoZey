package com.ssafy.tenten.api.repository.querydsl;

import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import static com.ssafy.tenten.domain.QVoteCount.voteCount;

@RequiredArgsConstructor
public class VoteRepositoryCustomImpl implements VoteRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    @Override
    public boolean checkIfVoteExists(Long userId, Long qtnId) {

        Integer fetchOne = queryFactory
                .selectOne()
                .from(voteCount)
                .where(voteCount.userId.userId.eq(userId),
                        voteCount.questionId.qtnId.eq(qtnId))
                .fetchFirst();

        return fetchOne != null;
    }
}
