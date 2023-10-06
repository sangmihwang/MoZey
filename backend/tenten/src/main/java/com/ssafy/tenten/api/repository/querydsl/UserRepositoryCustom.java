package com.ssafy.tenten.api.repository.querydsl;

import com.ssafy.tenten.domain.User;

import java.util.List;

public interface UserRepositoryCustom {
    List<User> getRecommendFriend(User user);

    boolean exists(Long from,Long to);
}
