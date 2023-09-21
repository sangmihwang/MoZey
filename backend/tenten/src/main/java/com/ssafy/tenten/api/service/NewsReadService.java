package com.ssafy.tenten.api.service;

import com.ssafy.tenten.dto.NewsDto;
import com.ssafy.tenten.dto.NewsReadDto;
import com.ssafy.tenten.vo.Response.NewsReadResponse;

import java.util.Optional;

public interface NewsReadService {
    // 오늘의 경제 뉴스 통과 등록
    void postNewsRead(NewsReadDto newsReadDto);

    // 오늘의 경제 뉴스 통과 여부 조회
    Optional<NewsReadResponse> getReadRecordByUserAndNews(Long userId, Long newsId);
}
