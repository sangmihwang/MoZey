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
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@Slf4j
public class FollowController {
    private final FollowService followService;

    // 1.4 친구 조건부 조회
    @GetMapping("/friends/{senderId}/name/{name}")
    public ResponseEntity<?> getFreindsByName(@PathVariable("senderId") Long senderId, @PathVariable("name") String name) {
        List<RecommendUserResponse> friends = followService.searchFriendsByName(name, senderId);
        return SuccessResponseEntity.toResponseEntity("조건부 친구 조회 성공", friends);
    }

    // 1.5 친구 전체 목록 조회
    @GetMapping("/friends/{senderId}")
    public ResponseEntity<?> getFreinds(@PathVariable("senderId") Long senderId) {
        List<RecommendUserResponse> friends = followService.searchAllFriends(senderId);
        return SuccessResponseEntity.toResponseEntity("친구 전체 목록 조회 성공", friends);
    }

    // 1.6.1 친구 추가
    @PostMapping("/{senderID}/follow")
    public ResponseEntity<?> addFriends(@PathVariable("senderId") Long fromUserId, Long toUserId) {
        boolean isAdd = followService.addFriend(fromUserId, toUserId);
        return SuccessResponseEntity.toResponseEntity("친구 추가 완료", isAdd);
    }

    // 1.6.2 친구 삭제
    @DeleteMapping("/{senderID}/follow")
    public ResponseEntity<?> deleteFriends(@PathVariable("senderId") Long fromUserId, Long toUserId) {
        followService.deleteFreind(fromUserId, toUserId);
        return ResponseEntity.ok("친구 삭제 완료");
    }
}
