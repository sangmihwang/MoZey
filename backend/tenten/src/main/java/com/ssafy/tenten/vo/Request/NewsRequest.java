package com.ssafy.tenten.vo.Request;

import lombok.Data;
import lombok.Getter;

@Getter
public class NewsRequest {
    private Long newsId;
    private String title;
    private String content;
    private String company;
    private String date;
}
