package com.ssafy.tenten.api.service;

import com.ssafy.tenten.dto.NewsDto;
import com.ssafy.tenten.dto.NewsReadDto;
import com.ssafy.tenten.vo.Response.NewsReadResponse;

import java.util.Optional;

public interface NewsReadService {
    Optional<NewsReadResponse> getNews(Long newsReadId);
    Optional<NewsReadResponse> getReadRecordByUserAndNews(Long userId, Long newsId);
    void createNewsRead(NewsReadDto newsReadDto);
}
