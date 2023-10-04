package com.ssafy.tenten.api.repository;

import com.ssafy.tenten.api.repository.querydsl.VoteRepositoryCustom;
import com.ssafy.tenten.domain.VoteCount;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface VoteCntRepository extends JpaRepository<VoteCount,Long>, VoteRepositoryCustom {

    @Query(value = "select vc from VoteCount vc where vc.questionId.qtnId=:qtnId and vc.userId.userId=:chosen")
    VoteCount findByQutAndCho(@Param("qtnId") Long qtnId,@Param("chosen") Long chosen);

    List<VoteCount> findTop3ByUserId_UserId(Long userId, Sort voteCnt);
}
