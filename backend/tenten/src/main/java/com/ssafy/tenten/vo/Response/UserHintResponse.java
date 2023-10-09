package com.ssafy.tenten.vo.Response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.ssafy.tenten.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Getter
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserHintResponse {
    private final int location; // 초성 위치
    private final char consonant; // 초성

    public static UserHintResponse createUserHintByLocationResponse(User user, int location) {
        String username = user.getName();
        char selectedChar = username.charAt(location - 1);
        char extract = extractConsonant(selectedChar);
        return UserHintResponse.builder()
                .location(location)
                .consonant(extract)
                .build();
    }

    public static UserHintResponse createUserHintResponse(User user) {
        String username = user.getName();
        int randomIdx = chooseRandomidx(username.length());
        char randomChar = username.charAt(randomIdx);
        char extract = extractConsonant(randomChar);
        return UserHintResponse.builder()
                .location(randomIdx + 1)
                .consonant(extract)
                .build();
    }

    public static int chooseRandomidx(int length) {
        Random rand = new Random();
        int index = rand.nextInt(length);
        return index;
    }

    public static char extractConsonant(char hangul) {
        int unicodeValue = (int) hangul - 0xAC00; // '가'의 유니코드 값 빼기
        int chosungIndex = unicodeValue / 588; // 초성의 인덱스 계산
        return (char) (0x1100 + chosungIndex); // 초성의 유니코드 값 계산
    }
}
