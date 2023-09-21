package com.ssafy.tenten.api.controller;

import com.ssafy.tenten.api.service.NewsService;
import com.ssafy.tenten.domain.News;
import com.ssafy.tenten.dto.NewsDto;
import com.ssafy.tenten.exception.SuccessResponseEntity;
import com.ssafy.tenten.vo.Response.NewsResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Slf4j
public class NewsController {
    private final NewsService newsService;
    private final ModelMapper mapper;

    @GetMapping("/news")
    public ResponseEntity<?> getNewsByDate(@RequestParam("date") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate date) {
        List<NewsResponse> newsDtos = newsService.getNewsByDate(date.atStartOfDay());
        return ResponseEntity.ok(newsDtos);
    }
    @PostMapping("/news")
    public ResponseEntity<?> postNews(@RequestBody NewsDto newsDto){
        newsService.postNews(newsDto);
        return SuccessResponseEntity.toResponseEntity("뉴스 등록 완료",null);
    }

}
