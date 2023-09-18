package com.ssafy.tenten.api.repository;

import com.ssafy.tenten.domain.QuizSolve;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.Optional;

public interface QuizSolveRepository extends JpaRepository<QuizSolve, Long> {
    Optional<QuizSolve> findByUserIdAndDate(LocalDateTime date, Long userId);
}
