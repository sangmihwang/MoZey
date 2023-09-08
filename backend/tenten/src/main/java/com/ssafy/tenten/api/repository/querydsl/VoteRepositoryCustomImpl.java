package com.ssafy.tenten.api.repository.querydsl;

import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import static com.ssafy.tenten.domain.QVoteCount.voteCount;

@Repository
@RequiredArgsConstructor
public class VoteRepositoryCustomImpl implements VoteRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    @Override
    public boolean checkIfVoteExists(Long userId, Long qtnId) {

        Integer fetchOne = queryFactory
                .selectOne()
                .from(voteCount)
                .fetchFirst();

        return fetchOne != null;
    }
}
