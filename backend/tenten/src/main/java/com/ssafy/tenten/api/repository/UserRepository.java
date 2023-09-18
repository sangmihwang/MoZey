package com.ssafy.tenten.api.repository;

import com.ssafy.tenten.domain.Follow;
import com.ssafy.tenten.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);

    Optional<User> findByProviderAndProviderId(String provider, String providerId);

}
