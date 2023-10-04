package com.ssafy.tenten.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
public class FCMNotificationRequestDto {
    private String targetUserId;      // 지한얼 토큰
    private String title;           // 이러이러한 질문 같이공통pjt 하고싶은사람
    private String body;            // 지한얼 님이 지목당했습니다. 당신이 지목당했습니다.
    // private String image;
    // private Map<String, String> data;
    public String getTargetUserId() {
        return targetUserId;
    }

    public String getTitle() {
        return title;
    }

    public String getBody() {
        return body;
    }

    @Builder
    public FCMNotificationRequestDto(String targetUserId, String title, String body) {
        this.targetUserId = targetUserId;
        this.title = title;
        this.body = body;
        // this.image = image;
        // this.data = data;
    }
}