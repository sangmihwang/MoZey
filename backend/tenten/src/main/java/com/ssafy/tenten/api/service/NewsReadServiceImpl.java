package com.ssafy.tenten.api.service;

import com.ssafy.tenten.api.repository.NewsReadRepository;
import com.ssafy.tenten.api.repository.NewsRepository;
import com.ssafy.tenten.api.repository.UserRepository;
import com.ssafy.tenten.domain.News;
import com.ssafy.tenten.domain.NewsRead;
import com.ssafy.tenten.domain.User;
import com.ssafy.tenten.dto.NewsReadDto;
import com.ssafy.tenten.exception.CustomException;
import com.ssafy.tenten.exception.ErrorCode;
import com.ssafy.tenten.vo.Response.NewsReadResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class NewsReadServiceImpl implements NewsReadService {
    private final NewsReadRepository newsReadRepository;
    private final NewsRepository newsRepository;
    private final UserRepository userRepository;

    @Override
    public Optional<NewsReadResponse> getReadRecordByUserAndNews(Long userId, Long newsId) {
        Optional<NewsRead> newsRead = newsReadRepository.findByUserIdAndNewsId(newsId, userId);
        if (newsRead.isPresent()) {
            NewsRead record = newsRead.get();
            News news = record.getNewsId();
            User user = record.getUserId();

            return Optional.of(NewsReadResponse.builder()
                    .newsReadId(record.getNewsReadId())
                    .newsId(news != null ? news.getNewsId() : null)
                    .userId(user != null ? user.getUserId() : null)
                    .build());

        } else {
            return Optional.empty();
        }
    }

    @Override
    public void postNewsRead(NewsReadDto newsReadDto) {
        User user = userRepository.findById(newsReadDto.getUserId())
                .orElseThrow(() -> new CustomException(ErrorCode.USER_NOT_FOUND));
        News news = newsRepository.findById(newsReadDto.getNewsId())
                .orElseThrow(() -> new CustomException(ErrorCode.NEWS_NOT_FOUND));

        NewsRead newsRead = new NewsRead();
        newsRead.setUserId(user);
        newsRead.setNewsId(news);

        newsReadRepository.save(newsRead);
    }
}




