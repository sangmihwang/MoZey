package com.ssafy.tenten.vo.Request;

import lombok.Getter;

@Getter
public class NewsReadRequest {
    private Long newsReadId;
    private Long userId;
    private Long newsId;
}
