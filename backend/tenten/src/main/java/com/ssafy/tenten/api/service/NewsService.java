package com.ssafy.tenten.api.service;

import com.ssafy.tenten.dto.NewsDto;
import com.ssafy.tenten.vo.Response.NewsResponse;
import com.ssafy.tenten.vo.Response.QuestionResponse;

import java.time.LocalDateTime;
import java.util.List;
public interface NewsService {
    // 경제 뉴스 조회
    List<NewsResponse> getNewsByDate(LocalDateTime date);

    // 경제 뉴스 등록
    void postNews(NewsDto newsDto);

    // 전체 경제 뉴스 조회
    List<NewsResponse> getAllNews();
}
