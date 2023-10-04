package com.ssafy.tenten.api.repository;

import com.ssafy.tenten.domain.User;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findAllByCampusAndTermAndGroupAndUserIdNot(String campus, String term, String group, Long userId);
    @Query(value = "SELECT u FROM User u WHERE u.name LIKE CONCAT('%', :name, '%')")
    List<User> findAllByName(@Param("name") String name);
    Optional<User> findByEmail(String email);
    Optional<User> findByProviderAndProviderId(String provider, String providerId);


}
