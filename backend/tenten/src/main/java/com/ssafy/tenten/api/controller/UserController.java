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
import com.ssafy.tenten.vo.Response.UserHintResponse;
import com.ssafy.tenten.vo.Response.UserHintSelectedDataResponse;
import com.ssafy.tenten.vo.Response.UserResponse;
import io.swagger.models.auth.In;
import lombok.RequiredArgsConstructor;
import lombok.Value;
import lombok.extern.slf4j.Slf4j;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import javax.validation.Valid;
import java.time.Instant;
import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@Slf4j
public class UserController {
    private final UserService userService;
    private final UserRepository userRepository;

    @PostMapping("/firebase/{userId}")
    public ResponseEntity<?> updateFirebase(@RequestBody String firebaseToken, @PathVariable("userId") Long userId) {
        String str = firebaseToken.split("firebaseToken=")[1];
        userService.updateFirebase(str, userId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 1.1 회원가입
    @PostMapping
    public ResponseEntity<?> join(@Valid @RequestBody UserJoinRequest userJoinRequest, @AuthenticationPrincipal PrincipalDetails principalDetails) {
        System.out.println(userJoinRequest);
        userService.join(userJoinRequest);
        String email = userJoinRequest.getEmail();
        User user = userRepository.findByEmail(email).get();
        return new ResponseEntity<>(UserResponse.createUserResponse(user), HttpStatus.OK);
    }

    // 1.1.1 회원탈퇴
    @DeleteMapping("/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable("userId") Long id) {
        userRepository.deleteById(id);
        return SuccessResponseEntity.toResponseEntity("회원 탈퇴 완료", null);
    }

    // 1.2 로그아웃
    @GetMapping("/logout")
    public ResponseEntity<?> logout() {
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 1.3 사용자 정보 조회
    @GetMapping("/info/{email}")
    public ResponseEntity<?> getUserInfo(@PathVariable("email") String email, @AuthenticationPrincipal PrincipalDetails principalDetails) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new EntityNotFoundException("User not found with email: " + email));
        return new ResponseEntity<>(UserResponse.createUserResponse(user), HttpStatus.OK);
    }


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
        Instant startTime = userService.checkSub(userId);
        return SuccessResponseEntity.toResponseEntity("구독 확인 완료", startTime);
    }

    // 1.9 구독 취소
    @PutMapping("/members/unsub/{userId}")
    public ResponseEntity<?> unsubscribe(@PathVariable("userId") Long userId) {
        userService.unsubscribe(userId);
        return ResponseEntity.ok("구독 취소 완료");
    }

    // 초성 추출
    @GetMapping("/extract/{userId}")
    public ResponseEntity<?> extract(@PathVariable("userId") Long userId) {
        UserHintResponse userHintResponse = userService.extract(userId);
        return SuccessResponseEntity.toResponseEntity("정보 열람 조회 완료", userHintResponse);
    }

    // 초성 index로 추출
    @GetMapping("/extract/{userId}/location/{location}")
    public ResponseEntity<?> extractByLocation(@PathVariable("userId") Long userId, @PathVariable("location") int location) {
        UserHintResponse userHintResponse = userService.extract(userId, location);
        return SuccessResponseEntity.toResponseEntity("정보 열람 조회 완료", userHintResponse);
    }

    // 원하는 데이터 추출
    @GetMapping("/extract/{userId}/select/{data}")
    public ResponseEntity<?> extractBySelectedData(@PathVariable("userId") Long userId, @PathVariable("data") String data) {
        UserHintSelectedDataResponse userHintSelectedDataResponse = userService.extractBySelectedData(userId, data);
        return SuccessResponseEntity.toResponseEntity("정보 열람 조회 완료", userHintSelectedDataResponse);
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllUsers() {
        List<UserResponse> users = userService.searchAllUsers();
        return SuccessResponseEntity.toResponseEntity("전체 사용자 조회 완료", users);
    }

    @GetMapping("/all/name/{name}")
    public ResponseEntity<?> getAllUsersByName(@PathVariable("name") String name) {
        List<UserResponse> users = userService.searchAllUsersByName(name);
        return SuccessResponseEntity.toResponseEntity("조건부 사용자 조회 완료", users);
    }
}
