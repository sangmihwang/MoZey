package com.ssafy.tenten.api.repository;

import com.ssafy.tenten.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);

    User findByUserId(Long userId);
    List<User> findAllByUserId(List<Long> list);
    Optional<User> findByProviderAndProviderId(String provider, String providerId);
}
