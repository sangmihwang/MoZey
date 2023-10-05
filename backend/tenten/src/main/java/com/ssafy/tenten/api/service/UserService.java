package com.ssafy.tenten.api.service;

import com.ssafy.tenten.domain.User;
import com.ssafy.tenten.vo.Request.UserJoinRequest;
import com.ssafy.tenten.vo.Request.UserUpdateRequest;
import com.ssafy.tenten.vo.Response.RecommendUserResponse;
import com.ssafy.tenten.vo.Response.UserHintResponse;
import com.ssafy.tenten.vo.Response.UserHintSelectedDataResponse;
import com.ssafy.tenten.vo.Response.UserResponse;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

public interface UserService {
    void updateFirebase(String firebaseToken, Long userId);

    // 1.1 회원가입 및 로그인?
    void join(UserJoinRequest dto);

    // 회원 유무
//    void validateDuplicateUser(User user);

    User update(Long userId, UserUpdateRequest userUpdateRequest);

    // 1.1.1 회원 탈퇴 (아예 삭제하는 것이 아니라 withdraw를 바꿀 것)
    void delete(Long id);

    // 1.2 로그아웃

    // 1.3 사용자 정보 조회
    UserResponse findById(Long id);

    // 1.7 추천 친구 조회
    List<RecommendUserResponse> recommendFriends(Long userId);

    // 1.8 구독
    void subscribe(Long userId);

    // 1.8.1 구독 확인
    Long checkSub(Long userId);

    // 1.9 구독 취소
    void unsubscribe(Long userId);

    UserHintResponse extract(Long userId);

    UserHintResponse extract(Long userId, int location);

    // 원하는 데이터 추출
    UserHintSelectedDataResponse extractBySelectedData(Long userId, String data);

    // 사용자 전체 목록 조회
    List<UserResponse> searchAllUsers();

    // 사용자 조건부 조회
    List<UserResponse> searchAllUsersByName(String name);

    void updateMoney(Long userId, String coinType, Long amount, String type);
}
