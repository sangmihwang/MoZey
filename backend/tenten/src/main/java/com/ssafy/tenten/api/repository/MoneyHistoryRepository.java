package com.ssafy.tenten.api.repository;

import com.ssafy.tenten.domain.MoneyHistory;
import com.ssafy.tenten.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MoneyHistoryRepository extends JpaRepository<MoneyHistory, Long> {
    List<MoneyHistory> findByUserId(User userId);

    MoneyHistory save(Iterable<MoneyHistory> moneyHistories);
}