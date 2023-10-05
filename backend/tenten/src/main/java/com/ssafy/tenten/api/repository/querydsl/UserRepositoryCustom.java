package com.ssafy.tenten.api.repository.querydsl;

import com.ssafy.tenten.domain.User;
import com.ssafy.tenten.vo.Response.RecommendUserResponse;

import java.util.List;

public interface UserRepositoryCustom {
    List<User> getRecommendFriend(User user);
}
