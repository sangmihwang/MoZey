package com.ssafy.tenten.api.controller;

import com.ssafy.tenten.api.service.VoteService;
import com.ssafy.tenten.exception.SuccessResponseEntity;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class MessageController {
    private final VoteService voteService;
    @Operation(
            summary = "받은 메세지 받기",
            description = "메세지 받기."
    )
    @GetMapping("/message/{userId}")
    public ResponseEntity<?> getMessage(@PathVariable("userId") Long userId) throws IOException {
        return SuccessResponseEntity.toResponseEntity("조건부 친구 조회 성공", voteService.getMessage(userId));
    }
}
