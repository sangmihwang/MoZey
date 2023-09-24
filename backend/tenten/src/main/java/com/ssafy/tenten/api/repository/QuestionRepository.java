package com.ssafy.tenten.api.repository;

import com.ssafy.tenten.api.repository.querydsl.QuestionRepositoryCustom;
import com.ssafy.tenten.domain.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question,Long>, QuestionRepositoryCustom {
//    @Query(value = "select q from Question q where q.userId.userId=:userId")
//    Optional<List<Question>> findByUserId(@Param("userId") Long userId);

    List<Question> findByStatus(char y);

    Page<Question> findPageByStatus(Character status, PageRequest pageRequest);
}
