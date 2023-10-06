package com.ssafy.tenten.api.controller;

import com.ssafy.tenten.api.service.VoteService;
import com.ssafy.tenten.exception.SuccessResponseEntity;
import com.ssafy.tenten.vo.Response.MessageResponse;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Slice;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<?> getMessage(@PathVariable("userId") Long userId,
                                        @RequestParam(defaultValue = "0", required = false) int pageIdx) {
        PageRequest pageRequest = PageRequest.of(pageIdx, 10, Sort.by(Sort.Direction.DESC, "voteTime"));
        Slice<MessageResponse> message = voteService.getMessage(userId, pageRequest);

        return SuccessResponseEntity.toResponseEntityPage("조건부 친구 조회 성공", message.getContent(), message.hasNext());
    }
}
