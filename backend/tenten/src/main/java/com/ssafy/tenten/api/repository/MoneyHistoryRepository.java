package com.ssafy.tenten.api.repository;

import com.ssafy.tenten.domain.MoneyHistory;
import com.ssafy.tenten.domain.User;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MoneyHistoryRepository extends JpaRepository<MoneyHistory, Long> {
    @Query("SELECT m FROM MoneyHistory m WHERE m.userId.userId = :userId")
    List<MoneyHistory> findByUserId(@Param("userId") Long userId);

    MoneyHistory save(MoneyHistory moneyHistories);
}