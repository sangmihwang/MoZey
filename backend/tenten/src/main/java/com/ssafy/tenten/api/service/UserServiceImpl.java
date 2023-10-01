package com.ssafy.tenten.api.service;

import com.ssafy.tenten.api.repository.UserRepository;
import com.ssafy.tenten.domain.User;
import com.ssafy.tenten.vo.Request.UserJoinRequest;
import com.ssafy.tenten.vo.Request.UserUpdateRequest;
import com.ssafy.tenten.vo.Response.RecommendUserResponse;
import com.ssafy.tenten.vo.Response.UserResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;

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

        return null;
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
        User user = userRepository.findById(userId).get();
        String campus = user.getCampus();
        String group = user.getGroup();
        String term = user.getTerm();
        List<User> list = userRepository.findAllByCampusAndTermAndGroupAndUserIdNot(campus, term, group, userId);
        System.out.println(list);
        List<RecommendUserResponse> userResponses = (List<RecommendUserResponse>) list.stream()
                .map(a -> RecommendUserResponse.builder()
                        .name(a.getName())
                        .image(a.getImage())
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
    public Long checkSub(Long userId) {
        User user = userRepository.findById(userId).get();
        Long startTime = user.getSubStartTime().getEpochSecond();
        return startTime;
    }

    // 구독 취소
    @Transactional
    @Override
    public void unsubscribe(Long userId) {
        User user = userRepository.findById(userId).get();
        user.unsubscribe();
    }
}
