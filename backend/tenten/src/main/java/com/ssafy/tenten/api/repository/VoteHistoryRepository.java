package com.ssafy.tenten.api.repository;

import com.ssafy.tenten.domain.VoteHistory;
import com.ssafy.tenten.vo.Response.MessageResponse;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface VoteHistoryRepository extends JpaRepository<VoteHistory,Long> {
    List<VoteHistory> findByUserId(String userId);

    @Query(value = "select new com.ssafy.tenten.vo.Response.MessageResponse(vu.campus, vu.term, vu.gender, v.voteTime, vq.qtnContent, vu.userId)" +
            " from VoteHistory v join v.questionId vq join v.userId vu where v.chosen.userId = :userId")
    Slice<MessageResponse> getMessage(@Param("userId") Long userId, PageRequest pageRequest);
}
//