package com.ssafy.tenten.api.controller;

import com.ssafy.tenten.api.service.NewsReadService;
import com.ssafy.tenten.dto.NewsReadDto;
import com.ssafy.tenten.exception.SuccessResponseEntity;
import com.ssafy.tenten.vo.Response.NewsReadResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Slf4j
public class NewsReadController {

    private final NewsReadService newsReadService;

    @GetMapping("/news/read")
    public ResponseEntity<?> getReadRecordByUserAndNews(
            @RequestParam Long userId,
            @RequestParam Long newsId) {

        Optional<NewsReadResponse> newsReadResponse = newsReadService.getReadRecordByUserAndNews(userId, newsId);
        return ResponseEntity.ok(newsReadResponse);
    }

    public ResponseEntity<?> postNewsRead(
            @RequestBody NewsReadDto newsReadDto) {
        newsReadService.postNewsRead(newsReadDto);
        return SuccessResponseEntity.toResponseEntity("뉴스 읽기 등록 완료", null);
    }

}
