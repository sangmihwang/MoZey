package com.ssafy.tenten.api.controller;

import com.ssafy.tenten.api.repository.FollowRepository;
import com.ssafy.tenten.api.repository.UserRepository;
import com.ssafy.tenten.api.service.FollowService;
import com.ssafy.tenten.api.service.UserService;
import com.ssafy.tenten.exception.SuccessResponseEntity;
import com.ssafy.tenten.vo.Response.RecommendUserResponse;
import com.ssafy.tenten.vo.Response.UserResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users/friends")
@RequiredArgsConstructor
@Slf4j
public class FollowController {
    private final FollowService followService;

    // 1.4 친구 조건부 조회
    @GetMapping("/{senderId}/name/{name}")
    public ResponseEntity<?> getFreindsByName(@PathVariable("senderId") Long senderId, @PathVariable("name") String name) {
        List<RecommendUserResponse> friends = followService.searchFriendsByName(name, senderId);
        return SuccessResponseEntity.toResponseEntity("조건부 친구 조회 성공", friends);
    }

    // 1.5 친구 전체 목록 조회
    @GetMapping("/{senderId}")
    public ResponseEntity<?> getFreinds(@PathVariable("senderId") Long senderId) {
        List<RecommendUserResponse> friends = followService.searchAllFriends(senderId);
        return SuccessResponseEntity.toResponseEntity("친구 전체 목록 조회 성공", friends);
    }

    // 1.6.1 친구 추가
    @PostMapping("/follow/{senderId}/{receiverId}")
    public ResponseEntity<?> addFriends(@PathVariable("senderId") Long fromUserId, @PathVariable("receiverId") Long toUserId) {
        followService.addFriend(fromUserId, toUserId);
        return ResponseEntity.ok("친구 추가 했습니다");

    }

    // 1.6.2 친구 삭제
    @DeleteMapping("/follow/{senderId}/{receiverId}")
    public ResponseEntity<?> deleteFriends(@PathVariable("senderId") Long fromUserId, @PathVariable("receiverId") Long toUserId) {
        followService.deleteFreind(fromUserId, toUserId);
        return ResponseEntity.ok("친구 삭제 완료");
    }
}
