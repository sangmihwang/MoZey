package com.ssafy.tenten.vo.Response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.ssafy.tenten.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserResponse {
    // 초성 한 개(일반회원) or 열람하고 싶은 정보(구독자 한정)
    // 를 반환하는 Response를 따로 만들지?
    // private final Long userId; // 이걸 넣어야 되나??
    private final Long userId;
    private final String name;
    private final String email;
    private final char gender;
    private final String image;
    private final String term;
    private final String campus;
    private final String group;
    private final Long point;
    private final Long coin1;
    private final Long coin2;
    private final int sub_yn;

    public static UserResponse createUserResponse(User user) {
        return UserResponse.builder()
                .userId(user.getUserId())
                .name(user.getName())
                .email(user.getEmail())
                .gender(user.getGender())
                .image(user.getImage())
                .term(user.getTerm())
                .campus(user.getCampus())
                .group(user.getGroup())
                .point(user.getPoint())
                .coin1(user.getCoin1())
                .coin2(user.getCoin2())
                .sub_yn(user.getSubYn())
                .build();

    }
}
