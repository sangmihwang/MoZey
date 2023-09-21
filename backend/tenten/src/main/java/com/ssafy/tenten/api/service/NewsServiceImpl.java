package com.ssafy.tenten.api.service;

import com.ssafy.tenten.api.repository.NewsRepository;
import com.ssafy.tenten.domain.News;
import com.ssafy.tenten.domain.Question;
import com.ssafy.tenten.dto.NewsDto;
import com.ssafy.tenten.vo.Response.NewsResponse;
import com.ssafy.tenten.vo.Response.QuestionResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class NewsServiceImpl implements NewsService {
    private final NewsRepository newsRepository;

    // 오늘의 경제 뉴스 조회
    @Override
    public List<NewsResponse> getNewsByDate(LocalDateTime date) {
        List<News> newss = newsRepository.findAllByDate(date.toLocalDate());
        return newss.stream()
                .map(news -> NewsResponse.builder()
                        .newsId(news.getNewsId())
                        .title(news.getTitle())
                        .content(news.getContent())
                        .company(news.getCompany())
                        .date(news.getDate())
                        .build())
                .collect(Collectors.toList());
    }

    // 오늘의 경제 뉴스 등록
    @Override
    @Transactional
    public void postNews(NewsDto newsDto) {
        News news = News.builder()
                .newsDto(newsDto)
                .build();
        newsRepository.save(news);
    }

    // 전체 경제 뉴스 조회
    @Override
    public List<NewsResponse> getAllNews() {
        List<News> newss = newsRepository.findAll();
        List<NewsResponse> collect = newss.stream()
                .map(a -> NewsResponse.builder()
                        .newsId(a.getNewsId())
                        .title(a.getTitle())
                        .content(a.getContent())
                        .company(a.getCompany())
                        .date(a.getDate())
                        .build())
                .collect(Collectors.toList());
        return collect;
    }
}
