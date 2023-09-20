package com.ssafy.tenten.api.service;

import com.ssafy.tenten.dto.NewsDto;
import com.ssafy.tenten.vo.Response.NewsResponse;

import java.time.LocalDateTime;
import java.util.List;
public interface NewsService {
    List<NewsResponse> getNewsByDate(LocalDateTime date);
    void createNews(NewsDto newsDto);
}
