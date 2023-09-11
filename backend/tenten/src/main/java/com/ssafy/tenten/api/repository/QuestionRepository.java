package com.ssafy.tenten.api.repository;

import com.ssafy.tenten.domain.Question;
import com.ssafy.tenten.domain.VoteHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question,Long> {
    @Query(value = "select q from Question q where q.userId.userId=:userId")
    Optional<List<Question>> findByUserId(@Param("userId") Long userId);
}
