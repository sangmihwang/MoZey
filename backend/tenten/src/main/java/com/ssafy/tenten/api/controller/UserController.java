package com.ssafy.tenten.api.controller;

import com.ssafy.tenten.api.repository.FollowRepository;
import com.ssafy.tenten.api.repository.UserRepository;
import com.ssafy.tenten.api.service.FollowService;
import com.ssafy.tenten.api.service.UserService;
import com.ssafy.tenten.exception.SuccessResponseEntity;
import com.ssafy.tenten.vo.Response.RecommendUserResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@Slf4j
public class UserController {
    private final UserService userService;
    private final FollowService followService;
    private final UserRepository userRepository;
    private final FollowRepository followRepository;

    // 1.1 회원가입
//    @PostMapping

    // 1.1.1 회원탈퇴
//    @DeleteMapping

    // 1.2 로그아웃
//    @GetMapping("/logout")

    // 1.3 사용자 정보 조회
//    @GetMapping("/info")

    // 1.7 추천 친구 조회
    @GetMapping("/friends/recommend/{userId}")
    public ResponseEntity<?> getRecommendFriends(@PathVariable("userId") Long userId) {
        List<RecommendUserResponse> list = userService.recommendFriends(userId);
        return SuccessResponseEntity.toResponseEntity("친구 조회 완료", list);
    }

    // 1.8 구독하기
    @PutMapping("/members/sub/{userId}")
    public ResponseEntity<?> subscribe(@PathVariable("userId") Long userId) {
        userService.subscribe(userId);
        return ResponseEntity.ok("구독 완료");
    }

    // 1.8.1 구독 확인
    @GetMapping("/members/{userId}")
    public ResponseEntity<?> checkSubscribe(@PathVariable("userId") Long userId) {
        Long startTime = userService.checkSub(userId);
        return SuccessResponseEntity.toResponseEntity("구독 확인 완료", startTime);
    }

    // 1.9 구독 취소
    @PutMapping("/members/unsub/{userId}")
    public ResponseEntity<?> unsubscribe(@PathVariable("userId") Long userId) {
        userService.unsubscribe(userId);
        return ResponseEntity.ok("구독 취소 완료");
    }
}
