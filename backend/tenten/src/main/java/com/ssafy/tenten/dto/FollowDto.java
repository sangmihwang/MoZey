package com.ssafy.tenten.dto;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class FollowDto {
    private Long senderId;
    private Long receiverId;
}
