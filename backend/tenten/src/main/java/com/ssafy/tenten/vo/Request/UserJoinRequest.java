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
    private String email;
    private String name;
    private String term;
    private String campus;
    private String group;
}