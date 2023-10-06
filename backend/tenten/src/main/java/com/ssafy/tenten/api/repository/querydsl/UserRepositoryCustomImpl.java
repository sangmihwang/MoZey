package com.ssafy.tenten.api.repository.querydsl;

import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.tenten.domain.QFollow;
import com.ssafy.tenten.domain.QUser;
import com.ssafy.tenten.domain.User;
import lombok.RequiredArgsConstructor;

import java.util.List;


@RequiredArgsConstructor
public class UserRepositoryCustomImpl implements UserRepositoryCustom {
    private final JPAQueryFactory jpaQueryFactory;

    @Override
    public List<User> getRecommendFriend(User user) {

        return jpaQueryFactory.selectFrom(QUser.user)
                .where(QUser.user.userId.notIn(
                                JPAExpressions
                                        .select(QFollow.follow.receiverId.userId)
                                        .from(QFollow.follow)
                                        .where(QFollow.follow.senderId.userId.eq(user.getUserId()))),
                        QUser.user.campus.eq(user.getCampus()),
                        QUser.user.group.eq(user.getGroup()),
                        QUser.user.term.eq(user.getTerm()),
                        QUser.user.ne(user)).fetch();
    }

    @Override
    public boolean exists(Long from, Long to) {
        Integer one = jpaQueryFactory.selectOne()
                .from(QFollow.follow)
                .where(QFollow.follow.senderId.userId.eq(from),
                        QFollow.follow.receiverId.userId.eq(to))
                .fetchFirst();
        return one != null;
    }
}
