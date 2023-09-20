package com.ssafy.tenten.vo.Request;

import lombok.Getter;

@Getter
public class UserRequest {
    private String gender; // 성별
    private String image; // 프로필 사진
    private String name; // 이름
    private String term; // ex) 9기
    private String campus; // ex) 서울캠퍼스
    private String group; // ex) 5반
}
