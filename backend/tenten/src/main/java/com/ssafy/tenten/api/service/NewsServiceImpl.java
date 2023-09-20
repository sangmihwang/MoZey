package com.ssafy.tenten.api.service;

import com.ssafy.tenten.api.repository.NewsRepository;
import com.ssafy.tenten.domain.News;
import com.ssafy.tenten.dto.NewsDto;
import com.ssafy.tenten.vo.Response.NewsResponse;
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
    @Override
    @Transactional
    public void createNews(NewsDto newsDto) {
        News news = News.builder()
                .newsDto(newsDto)
                .build();
        newsRepository.save(news);
    }
}
