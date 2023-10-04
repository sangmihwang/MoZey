package com.ssafy.tenten.vo.Request;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.validation.constraints.NotBlank;

@RequiredArgsConstructor
@Getter
public class UserUpdateRequest {
    private char gender;
    private String image;
    private String name;
    private String term;
    private String campus;
    private String group;
}