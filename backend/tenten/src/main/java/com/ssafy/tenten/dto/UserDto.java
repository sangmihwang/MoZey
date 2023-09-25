package com.ssafy.tenten.dto;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class
UserDto {
    private String gender;
    private String image;
    private String name;
    private String term;
    private String campus;
    private String group;
}

