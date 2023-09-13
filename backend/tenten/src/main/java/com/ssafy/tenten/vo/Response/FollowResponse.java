package com.ssafy.tenten.vo.Response;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class FollowResponse {
    private final Long senderId;
    private final Long receiverId;
}
