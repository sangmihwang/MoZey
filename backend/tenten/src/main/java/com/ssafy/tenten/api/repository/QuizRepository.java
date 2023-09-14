package com.ssafy.tenten.api.repository;

import com.ssafy.tenten.domain.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
public interface QuizRepository extends JpaRepository<Quiz, Long> {
    List<Quiz> findAllByDate(LocalDate date);
}
