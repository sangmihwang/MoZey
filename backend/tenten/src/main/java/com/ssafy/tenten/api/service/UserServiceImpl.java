package com.ssafy.tenten.api.service;

import com.ssafy.tenten.domain.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{
    @Override
    public void join(User user) {

    }

    @Override
    public void validateDuplicateUser(User user) {

    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public User findById(Long id) {
        return null;
    }

    @Override
    public List<User> recommendFreinds(Long userId) {
        return null;
    }

    @Override
    public void subscribe(Long userId) {

    }

    @Override
    public User checkSub(Long userId) {
        return null;
    }

    @Override
    public void unsubscribe(Long userId) {

    }
}
