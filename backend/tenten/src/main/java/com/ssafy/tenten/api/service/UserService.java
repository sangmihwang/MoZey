package com.ssafy.tenten.api.service;

import com.ssafy.tenten.domain.User;
import com.ssafy.tenten.vo.Response.UserResponse;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

public interface UserService {
    // 1.1 회원가입
    void join(User user);

    // 회원 유무
    void validateDuplicateUser(User user);

    // 로그인
    //String login(loginUserRequest dto);

    // 1.1.1 회원 탈퇴 (아예 삭제하는 것이 아니라 withdraw를 바꿀 것)
    void delete(Long id);

    // 1.2 로그아웃

    // 1.3 사용자 정보 조회
    UserResponse findById(Long id);

    // 1.7 추천 친구 조회
    List<UserResponse> recommendFriends(Long userId);

    // 1.8 구독
    void subscribe(Long userId);

    // 1.8.1 구독 확인
    boolean checkSub(Long userId);

    // 1.9 구독 취소
    void unsubscribe(Long userId);
}
