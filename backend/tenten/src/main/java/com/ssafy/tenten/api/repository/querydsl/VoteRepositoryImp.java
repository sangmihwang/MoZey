package com.ssafy.tenten.api.repository.querydsl;

import com.querydsl.jpa.impl.JPAQueryFactory;

import javax.persistence.EntityManager;

import static com.ssafy.tenten.domain.QVoteCount.voteCount;

public class VoteRepositoryImp implements VoteRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    public VoteRepositoryImp(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }


    @Override
    public boolean exists(Long userId, Long qtnId) {

        Integer fetchOne = queryFactory
                .selectOne()
                .from(voteCount)
                .where(voteCount.userId.userId.eq(userId)
                        , voteCount.questionId.qtnId.eq(qtnId))
                .fetchFirst();

        return fetchOne != null;
    }
}
