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
public class UserHintSelectedDataResponse {
    private final String data; // 원하는 데이터
    private final String value; // 값

    public static UserHintSelectedDataResponse createHintResponse(String data, String value) {
        return UserHintSelectedDataResponse.builder()
                .data(data)
                .value(value)
                .build();
    }
}
