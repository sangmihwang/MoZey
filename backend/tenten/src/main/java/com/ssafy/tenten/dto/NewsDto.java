package com.ssafy.tenten.dto;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;

@Data
@RequiredArgsConstructor
public class NewsDto implements Serializable {
    private Long newsId;
    private String title;
    private String content;
    private String company;
    private LocalDate date;
}