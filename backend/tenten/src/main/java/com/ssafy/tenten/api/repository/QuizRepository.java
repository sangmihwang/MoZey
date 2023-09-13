package com.ssafy.tenten.api.repository;

import com.ssafy.tenten.domain.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizRepository extends JpaRepository<Quiz, Long> {

}
