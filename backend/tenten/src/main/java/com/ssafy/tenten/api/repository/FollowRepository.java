package com.ssafy.tenten.api.repository;

import com.ssafy.tenten.domain.Follow;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FollowRepository extends JpaRepository<Follow, Long>{
    @Query(value = "select f from Follow f join fetch f.senderId fs join fetch f.receiverId fr where fs.userId = :senderId")
    List<Follow> findAllBySenderId(@Param("senderId") Long senderId);
    @Query(value = "select f from Follow f join fetch f.receiverId fr join fetch f.senderId fs where fs.userId = :senderId and fr.name like CONCAT('%', :name, '%')")
    List<Follow> findAllByReceiverName(@Param("name") String name, @Param("senderId") Long senderId);
    boolean existsBySenderIdAndReceiverId(Long senderId, Long receiverId);
    void deleteBySenderId_userIdAndReceiverId_userId(Long senderId, Long receiverId);
    List<Follow> findBySenderId_UserId(Long userId);
}
