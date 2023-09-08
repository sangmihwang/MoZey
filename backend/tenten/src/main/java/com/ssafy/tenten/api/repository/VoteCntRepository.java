package com.ssafy.tenten.api.repository;

import com.ssafy.tenten.api.repository.querydsl.VoteRepositoryCustom;
import com.ssafy.tenten.domain.VoteCount;
import com.ssafy.tenten.domain.VoteHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VoteCntRepository extends JpaRepository<VoteCount,Long>, VoteRepositoryCustom {
}
