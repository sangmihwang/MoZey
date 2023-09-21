package com.ssafy.tenten.api.service;

import com.ssafy.tenten.api.repository.FollowRepository;
import com.ssafy.tenten.api.repository.UserRepository;
import com.ssafy.tenten.domain.Follow;
import com.ssafy.tenten.domain.User;
import com.ssafy.tenten.vo.Response.UserResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FollowServiceImpl implements FollowService {
    private final UserRepository userRepository;

    private final FollowRepository followRepository;

    @Override
    @Transactional(readOnly = true)
    public List<UserResponse> searchFriendsByName(String name, Long fromUserId) {
        List<Follow> friends = followRepository.findAllByReceiverName(name, fromUserId);
        List<User> user = new ArrayList<>();
        for (Follow friend : friends) {
            user.add(friend.getReceiverId());
        }
        List<UserResponse> collect = user.stream()
                .map(a -> UserResponse.builder()
                        .gender(a.getGender())
                        .image(a.getImage())
                        .name(a.getName())
                        .term(a.getTerm())
                        .campus(a.getCampus())
                        .group(a.getGroup())
                        .build())
                .collect(Collectors.toList());
        return collect;
    }

    @Override
    @Transactional(readOnly = true)
    public List<UserResponse> searchAllFriends(Long fromUserId) {
        List<Follow> friends = followRepository.findAllBySenderId(fromUserId);
        List<User> user = new ArrayList<>();
        for (Follow friend : friends) {
            user.add(friend.getReceiverId());
        }
        List<UserResponse> collect = user.stream()
                .map(a -> UserResponse.builder()
                        .gender(a.getGender())
                        .image(a.getImage())
                        .name(a.getName())
                        .term(a.getTerm())
                        .campus(a.getCampus())
                        .group(a.getGroup())
                        .build())
                .collect(Collectors.toList());
        return collect;
    }

    // 친구 추가
    @Override
    @Transactional(readOnly = false)
    public boolean addFriend(Long fromUserId, Long toUserId) {
        // 나
        User from = userRepository.findById(fromUserId).get();

        // 친구
        User to = userRepository.findById(toUserId).get();

        // 추가된 친구면 false 리턴
        if (followRepository.existsBySenderIdAndReceiverId(fromUserId, toUserId)) {
            return false;
        }

        Follow follow = new Follow(from, to);

        followRepository.save(follow);

        return true;
    }

    @Override
    @Transactional(readOnly = false)
    public void deleteFreind(Long fromUserId, Long toUserId) {
        followRepository.deleteBySenderIdAndReceiverId(fromUserId, toUserId);
    }
}
