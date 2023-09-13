package com.ssafy.tenten.api.repository;

import com.ssafy.tenten.api.repository.querydsl.VoteRepositoryCustom;
import com.ssafy.tenten.domain.VoteCount;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VoteCntRepository extends JpaRepository<VoteCount,Long>, VoteRepositoryCustom {

    VoteCount findByQuestionId_QtnIdAndUserId_UserId(Long qtnId, Long chosen);
}
