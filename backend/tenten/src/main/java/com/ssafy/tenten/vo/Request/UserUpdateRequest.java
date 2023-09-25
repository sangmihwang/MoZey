package com.ssafy.tenten.vo.Request;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.validation.constraints.NotBlank;

@RequiredArgsConstructor
@Getter
public class UserUpdateRequest {
    @NotBlank
    private char gender;
    private String image;
    @NotBlank
    private String name;
    @NotBlank
    private String term;
    @NotBlank
    private String campus;
    @NotBlank
    private String group;
}