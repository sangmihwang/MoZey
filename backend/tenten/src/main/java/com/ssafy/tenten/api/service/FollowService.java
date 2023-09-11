package com.ssafy.tenten.api.service;

import com.ssafy.tenten.domain.User;

import java.util.List;

public interface FollowService {
    // 1.4 친구 조건부 조회
    List<User> searchFriends(int page, String name, Long id);

    // 1.5 친구 전체 목록 조회
    List<User> searchFriends(String fromUserId);

    // 1.6.1 친구 추가
    void addFriend(Long fromUserId, Long toUserId);

    // 1.6.2 친구 삭제
    void deleteFreind(Long fromUserId, Long toUserId);
}
