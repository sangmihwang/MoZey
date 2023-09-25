package com.ssafy.tenten.vo.Request;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.List;

@RequiredArgsConstructor
@Getter
public class UserJoinRequest {
    @NotBlank
    private String email;
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