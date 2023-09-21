package com.ssafy.tenten.api.repository;

import com.ssafy.tenten.domain.NewsRead;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.Optional;

public interface NewsReadRepository extends JpaRepository<NewsRead, Long> {
    Optional<NewsRead> findByUserIdAndNewsId(Long userId, Long newsId);
}
