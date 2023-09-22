package com.ssafy.tenten.api.repository;

import com.ssafy.tenten.domain.Follow;
import com.ssafy.tenten.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface FollowRepository extends JpaRepository<Follow, Long>{


    Optional<List<Follow>> findBySenderId_UserId(Long userId);
}
