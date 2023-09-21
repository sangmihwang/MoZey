package com.ssafy.tenten.api.repository;

import com.ssafy.tenten.domain.News;
import com.ssafy.tenten.vo.Response.NewsReadResponse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
public interface NewsRepository extends JpaRepository<News, Long> {

    List<News> findAllByDate(LocalDate date);
}
