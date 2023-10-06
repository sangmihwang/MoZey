package com.ssafy.tenten.api.service;

import com.ssafy.tenten.api.repository.UserRepository;
import com.ssafy.tenten.domain.User;
import com.ssafy.tenten.exception.CustomException;
import com.ssafy.tenten.exception.ErrorCode;
import com.ssafy.tenten.vo.Request.UserJoinRequest;
import com.ssafy.tenten.vo.Request.UserUpdateRequest;
import com.ssafy.tenten.vo.Response.RecommendUserResponse;
import com.ssafy.tenten.vo.Response.UserHintResponse;
import com.ssafy.tenten.vo.Response.UserHintSelectedDataResponse;
import com.ssafy.tenten.vo.Response.UserResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static com.ssafy.tenten.exception.ErrorCode.USER_NOT_FOUND;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;

    @Transactional
    @Override
    public void updateFirebase(String firebaseToken, Long userId) {
        User user = userRepository.findById(userId).get();
        user.updateFirebaseToken(firebaseToken);
    }

    @Transactional
    @Override
    public void join(UserJoinRequest dto) {
        User user = userRepository.findByEmail(dto.getEmail()).get();
        user.join(dto);
    }

    @Transactional
    @Override
    public User update(Long userId, UserUpdateRequest userUpdateRequest) {
        User user = userRepository.findById(userId).get();
        user.update(userUpdateRequest);
        return user;
    }

//    @Override
//    public void validateDuplicateUser(User user) {
//
//    }



    // 회원 탈퇴 (withdraw를 N으로 바꾸자!)
    @Override
    public void delete(Long id) {

    }

    @Override // 이게 맞나
    public UserResponse findById(Long userId) {
        Optional<User> user = userRepository.findById(userId);
        UserResponse userResponse = (UserResponse) user.stream()
                .map(a -> UserResponse.builder()
                        .gender(a.getGender())
                        .image(a.getImage())
                        .name(a.getName())
                        .term(a.getTerm())
                        .campus(a.getCampus())
                        .group(a.getGroup())
                        .build());
        return userResponse;
    }

    // 추천 친구 조회
    @Override
    public List<RecommendUserResponse> recommendFriends(Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() ->new CustomException(USER_NOT_FOUND));

        List<User> list = userRepository.getRecommendFriend(user);

        List<RecommendUserResponse> userResponses = list.stream()
                .map(a -> RecommendUserResponse.builder()
                        .userId(a.getUserId())
                        .name(a.getName())
                        .image(a.getImage())
                        .term(a.getTerm())
                        .campus(a.getCampus())
                        .group(a.getGroup())
                        .build())
                .collect(Collectors.toList());
        return userResponses;
    }

    // 구독
    @Transactional
    @Override
    public void subscribe(Long userId) {
        User user = userRepository.findById(userId).get();
        user.subscribe();
    }
    // 구독 여부
    @Override
    public Instant checkSub(Long userId) {
        User user = userRepository.findById(userId).get();
        int sub = user.getSubYn();
        Instant time;
        if (sub == 1) {
            time = user.getSubStartTime();
        } else {
            return null;
        }
        return time;
    }

    // 구독 취소
    @Transactional
    @Override
    public void unsubscribe(Long userId) {
        User user = userRepository.findById(userId).get();
        user.unsubscribe();
    }

    @Override
    public UserHintResponse extract(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + userId));
        UserHintResponse userHintResponse = UserHintResponse.createUserHintResponse(user);
        return userHintResponse;
    }

    @Override
    public UserHintResponse extract(Long userId, int location) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + userId));
        UserHintResponse userHintResponse = UserHintResponse.createUserHintByLocationResponse(user, location);
        return userHintResponse;
    }

    @Override
    public UserHintSelectedDataResponse extractBySelectedData(Long userId, String data) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + userId));
        String value = "";
        if (data.equals("class")) value = user.getGroup();
        // 다른 거 추가하면 else if 넣기
        UserHintSelectedDataResponse userHintSelectedDataResponse = UserHintSelectedDataResponse.createHintResponse(data, value);
        return userHintSelectedDataResponse;
    }

    @Override
    public List<UserResponse> searchAllUsers() {
        List<User> users = userRepository.findAll();
        if (users.isEmpty()) {
            throw new EntityNotFoundException("No users found in the database.");
        }
        List<UserResponse> userResponses = users.stream()
                .map(a -> UserResponse.builder()
                        .userId(a.getUserId())
                        .name(a.getName())
                        .email(a.getEmail())
                        .gender(a.getGender())
                        .image(a.getImage())
                        .term(a.getTerm())
                        .campus(a.getCampus())
                        .group(a.getGroup())
                        .build())
                .collect(Collectors.toList());
        return userResponses;
    }

    @Override
    public List<UserResponse> searchAllUsersByName(String name) {
        List<User> users = userRepository.findAllByName(name);
        if (users.isEmpty()) {
            throw new EntityNotFoundException("No users found in the database.");
        }
        List<UserResponse> userResponses = users.stream()
                .map(a -> UserResponse.builder()
                        .userId(a.getUserId())
                        .name(a.getName())
                        .email(a.getEmail())
                        .gender(a.getGender())
                        .image(a.getImage())
                        .term(a.getTerm())
                        .campus(a.getCampus())
                        .group(a.getGroup())
                        .build())
                .collect(Collectors.toList());
        return userResponses;
    }

    @Transactional(readOnly = false)
    @Override
    public void updateMoney(Long userId, String coinType, Long amount, String type) {
        User user = userRepository.findById(userId).orElseThrow(() -> new EntityNotFoundException("User not found with id: " + userId));
        user.updateMoney(coinType, amount, type);
    }
}
