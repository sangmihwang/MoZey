package com.ssafy.tenten.api.repository;

import com.ssafy.tenten.domain.Question;
import com.ssafy.tenten.domain.VoteHistory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question,Long> {
    List<Question> findByUserId(String userId);
}
