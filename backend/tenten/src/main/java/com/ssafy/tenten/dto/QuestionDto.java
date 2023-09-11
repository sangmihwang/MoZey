package com.ssafy.tenten.dto;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.io.Serializable;

@Data
@RequiredArgsConstructor
public class QuestionDto implements Serializable {
    private String qtnContent;
    private Long userId;
    private String image;
    private Long qtnId;
    private String status;
}
