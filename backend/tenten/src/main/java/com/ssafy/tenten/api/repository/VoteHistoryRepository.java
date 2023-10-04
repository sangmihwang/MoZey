package com.ssafy.tenten.api.repository;

import com.ssafy.tenten.domain.VoteHistory;
import com.ssafy.tenten.vo.Response.MessageResponse;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface VoteHistoryRepository extends JpaRepository<VoteHistory,Long> {
    List<VoteHistory> findByUserId(String userId);

    @Query(value = "select v" +
            " from VoteHistory v join fetch v.questionId vq join fetch v.userId vu where v.chosen.userId = :userId")
    List<VoteHistory> getMessage(@Param("userId") Long userId);
}
//new com.ssafy.tenten.vo.Response.MessageResponse(vu.gender, vu.term, vu.campus, v.voteTime, vq.qtnContent)