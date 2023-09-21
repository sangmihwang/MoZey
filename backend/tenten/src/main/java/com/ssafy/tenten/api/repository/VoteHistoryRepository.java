package com.ssafy.tenten.api.repository;

import com.ssafy.tenten.domain.VoteHistory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VoteHistoryRepository extends JpaRepository<VoteHistory,Long> {
    List<VoteHistory> findByUserId(String userId);
}
