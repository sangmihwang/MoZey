package com.ssafy.tenten.api.repository;

import com.ssafy.tenten.domain.User;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findAllByCampusAndTermAndGroupAndUserIdNot(String campus, String term, String group, Long userId);
    User findByEmail(String email);
    User findByUserId(Long userId);
    Optional<User> findByProviderAndProviderId(String provider, String providerId);
}
