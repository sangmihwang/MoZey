package com.ssafy.tenten.api.controller;

import com.ssafy.tenten.api.repository.FollowRepository;
import com.ssafy.tenten.api.repository.UserRepository;
import com.ssafy.tenten.api.service.FollowService;
import com.ssafy.tenten.api.service.UserService;
import com.ssafy.tenten.config.auth.PrincipalDetails;
import com.ssafy.tenten.domain.User;
import com.ssafy.tenten.exception.SuccessResponseEntity;
import com.ssafy.tenten.vo.Request.UserJoinRequest;
import com.ssafy.tenten.vo.Request.UserUpdateRequest;
import com.ssafy.tenten.vo.Response.RecommendUserResponse;
import com.ssafy.tenten.vo.Response.UserResponse;
import lombok.RequiredArgsConstructor;
import lombok.Value;
import lombok.extern.slf4j.Slf4j;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin("*")
public class UserController {
    private final UserService userService;
    private final FollowService followService;
    private final UserRepository userRepository;
    private final FollowRepository followRepository;

    // 1.1 회원가입
    @PostMapping
    public ResponseEntity<?> join(@Valid @RequestBody UserJoinRequest userJoinRequest, @AuthenticationPrincipal PrincipalDetails principalDetails) {
        userService.join(userJoinRequest);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 1.1.1 회원탈퇴
//    @DeleteMapping

    // 1.2 로그아웃
    @GetMapping("/logout")
    public ResponseEntity<?> logout() {
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 1.3 사용자 정보 조회
//    @GetMapping("/info")
    public ResponseEntity<?> getUserInfo(@AuthenticationPrincipal PrincipalDetails principalDetails) {
        Long userId = principalDetails.getId();
        User user = userRepository.findById(userId).get();

        return new ResponseEntity<>(UserResponse.createUserResponse(user), HttpStatus.OK);
    }

//    @PutMapping("/{memberId}/edit")
//    public ResponseEntity<?> updateMember(@PathVariable("memberId") Long id,
//                                          @RequestBody MemberForm memberForm) {
//        memberService.updateMember(id, memberForm);
//        return new ResponseEntity<>(HttpStatus.OK);
//    }

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
