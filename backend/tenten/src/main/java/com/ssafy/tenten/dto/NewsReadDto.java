package com.ssafy.tenten.dto;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.io.Serializable;

@Data
@RequiredArgsConstructor
public class NewsReadDto implements Serializable {
    private Long newsReadId;
    private Long userId;
    private Long newsId;
}
