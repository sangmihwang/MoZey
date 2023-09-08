package com.ssafy.tenten.api.repository;

import com.ssafy.tenten.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
