package com.ssafy.tenten.api.service;

import com.ssafy.tenten.vo.Response.RecommendUserResponse;

import java.util.List;

public interface FollowService {
    // 1.4 친구 조건부 조회
    List<RecommendUserResponse> searchFriendsByName(String name, Long fromUserId);

    // 1.5 친구 전체 목록 조회
    List<RecommendUserResponse> searchAllFriends(Long fromUserId);

    // 1.6.1 친구 추가
    boolean addFriend(Long fromUserId, Long toUserId);

    // 1.6.2 친구 삭제
    void deleteFreind(Long fromUserId, Long toUserId);
}
